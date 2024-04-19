'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Typography, Input, Button } from '../../ui';

import userIcon from '../../../assets/icons/user-octagon.svg';
import emailIcon from '../../../assets/icons/sms.svg';
import lockIcon from '../../../assets/icons/lock.svg';
import confirmLockIcon from '../../../assets/icons/confirm-lock.svg';
import signUpIllustrator from '../../../assets/Sign-up-illustrator.svg';
import logo from '../../../assets/Ansopedia_logo.svg';

import style from '../auth.module.scss';
import { createUserSchema } from '../../../utils/validation';
import { useObservable, useObserve } from '@legendapp/state/react';
import { IApiResponse } from '../../../utils/auth.util';
import { handleSignUp } from '../actions';
import { toast } from 'sonner';

const SignUp = () => {
  const router = useRouter();

  const signUpState$ = useObservable({
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    username: '',
    usernameError: '',
    confirmPassword: '',
    confirmPasswordError: '',
    didSave: false,
  });

  useObserve(() => {
    if (signUpState$.didSave.get()) {
      const { email, password, confirmPassword, username } = signUpState$.get();

      const validUserData = createUserSchema.safeParse({
        email,
        password,
        username,
        confirmPassword,
      });

      signUpState$.emailError.set(!validUserData.success ? validUserData.error.formErrors.fieldErrors.email?.[0] : '');
      signUpState$.passwordError.set(
        !validUserData.success ? validUserData.error.formErrors.fieldErrors.password?.[0] : '',
      );
      signUpState$.usernameError.set(
        !validUserData.success ? validUserData.error.formErrors.fieldErrors.username?.[0] : '',
      );
      signUpState$.confirmPasswordError.set(
        !validUserData.success ? validUserData.error.formErrors.fieldErrors.confirmPassword?.[0] : '',
      );
    }
  });

  const handleFormSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    signUpState$.didSave.set(true);

    const {
      email,
      emailError,
      password,
      passwordError,
      confirmPassword,
      confirmPasswordError,
      username,
      usernameError,
    } = signUpState$.get();

    if (emailError || passwordError || confirmPasswordError || usernameError) return;

    try {
      const res: IApiResponse = await handleSignUp({ email, password, confirmPassword, username });

      if (res.status === 'failed') {
        toast.error(res.message);
        return;
      }

      toast.success(`User created successful! ${res.message}`);
      router.replace('/login');
    } catch (error) {
      toast.error('Something went wrong! Please try again.');
    }
  };

  return (
    <section className={style['auth-section']}>
      <div className={style['auth']}>
        <div className={style.header}>
          <div>
            <Image src={logo} alt="Login Illustrator" className={style.logo} width={70} height={70} />
            <Typography variant="h2" className={style.title}>
              Want to be an
            </Typography>
            <Typography variant="h1" color="primary">
              Ansopedian!
            </Typography>
          </div>
          <Typography className={style.subtitle}>Create an account!</Typography>
        </div>
        <form className={style['login-form']}>
          <Input
            $value={signUpState$.username}
            $error={signUpState$.usernameError}
            type="text"
            placeholder="create an unique username!"
            icon={userIcon}
            name="username"
          />
          <Input
            $value={signUpState$.email}
            $error={signUpState$.emailError}
            type="email"
            placeholder="example@gmail.com"
            icon={emailIcon}
            name="email"
          />
          <Input
            $value={signUpState$.password}
            $error={signUpState$.passwordError}
            type="password"
            placeholder="password"
            icon={lockIcon}
            name="password"
          />
          <Input
            $value={signUpState$.confirmPassword}
            $error={signUpState$.confirmPasswordError}
            type="password"
            placeholder="confirm your password"
            icon={confirmLockIcon}
            name="confirmPassword"
          />
          <Button type="submit" onClick={handleFormSubmit}>
            Sign up
          </Button>
        </form>
        <Typography>
          Already have an account? <Link href="/login">Login</Link>
        </Typography>
      </div>
      <div className={style['illustrator']}>
        <Image src={signUpIllustrator} alt="Sign Up Illustrator" />
      </div>
    </section>
  );
};

export default SignUp;
