'use client';

import { enableReactComponents } from '@legendapp/state/config/enableReactComponents';

enableReactComponents();

import { useRouter } from 'next/navigation';

import { Input, Button, Form } from '../../ui';
import RememberMe from './RememberMe';
import Link from 'next/link';

import { loginSchema } from '../../../utils/validation';
import { handleLogin } from '../actions';

import emailIcon from '../../../assets/icons/sms.svg';
import lockIcon from '../../../assets/icons/lock.svg';
import style from '../auth.module.scss';
import { useObservable, useObserve } from '@legendapp/state/react';
import { IApiResponse } from '../../../utils/auth.util';

const LoginForm = () => {
  const router = useRouter();

  const loginState$ = useObservable({
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    didSave: false,
  });

  useObserve(() => {
    if (loginState$.didSave.get()) {
      const { email, password } = loginState$.get();

      const validUserData = loginSchema.safeParse({
        email,
        password,
      });

      loginState$.emailError.set(!validUserData.success ? validUserData.error.formErrors.fieldErrors.email?.[0] : '');
      loginState$.passwordError.set(
        !validUserData.success ? validUserData.error.formErrors.fieldErrors.password?.[0] : '',
      );
    }
  });

  const handleFormSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    loginState$.didSave.set(true);

    const { email, emailError, password, passwordError } = loginState$.get();

    if (emailError || passwordError) return;

    try {
      const res: IApiResponse = await handleLogin({ email, password });

      if (res.status === 'failed') {
        alert(res.message);
        return;
      }

      router.back();
    } catch (error) {
      alert('Something went wrong! Please try again.');
    }
  };

  return (
    <Form className={style['login-form']}>
      <Input
        $error={loginState$.emailError}
        $value={loginState$.email}
        autoComplete="email"
        icon={emailIcon}
        name="email"
        placeholder="example@gmail.com"
        type="email"
      />
      <Input
        $error={loginState$.passwordError}
        $value={loginState$.password}
        autoComplete="current-password"
        icon={lockIcon}
        name="password"
        placeholder="password"
        type="password"
      />
      <div className={style['form-action']}>
        <RememberMe />
        <Link href="/forget-password">Forgot password?</Link>
      </div>
      <Button type="submit" onClick={handleFormSubmit}>
        Log in
      </Button>
    </Form>
  );
};

export default LoginForm;
