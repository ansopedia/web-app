'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Typography, Input, Button, Form } from '../../ui';

import emailIcon from '../../../assets/icons/sms.svg';
import forgetPasswordIllustrator from '../../../assets/forget-password.svg';
import logo from '../../../assets/Ansopedia_logo.svg';

import style from '../auth.module.scss';
import { forgotPasswordSchema } from '../../../utils/validation';
import { useObservable, useObserve } from '@legendapp/state/react';
import { toast } from 'sonner';

const ForgetPasswordForm = () => {
  const email$ = useObservable({
    email: '',
    emailError: '',
    didSave: false,
  });

  useObserve(() => {
    if (email$.didSave.get()) {
      const { email } = email$.get();

      const validUserData = forgotPasswordSchema.safeParse({ email });

      email$.emailError.set(!validUserData.success ? validUserData.error.formErrors.fieldErrors.email?.[0] : '');
    }
  });

  const handleFormSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    email$.didSave.set(true);

    if (email$.emailError.get()) return;

    try {
      throw new Error('Not implemented');
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
              Forget Password
            </Typography>
            <Typography variant="h1" color="primary">
              Ansopedian!
            </Typography>
          </div>
          <Typography className={style.subtitle}>No worries, we will send you reset instructions.</Typography>
        </div>
        <Form className={style['login-form']}>
          <Input
            $error={email$.emailError}
            $value={email$.email}
            autoComplete="email"
            icon={emailIcon}
            name="email"
            placeholder="example@gmail.com"
            type="email"
            onChange={(event) => email$.email.set(event.target.value)}
          />
          <Button type="submit" onClick={handleFormSubmit}>
            Reset Password
          </Button>
        </Form>
        <Typography>
          Remember your password? <Link href="/login">Login</Link>
        </Typography>
      </div>
      <div className={style['illustrator']}>
        <Image src={forgetPasswordIllustrator} alt="Sign Up Illustrator" />
      </div>
    </section>
  );
};

export default ForgetPasswordForm;
