'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useObservable } from '@legendapp/state/react';

import Typography from '../../ui/Typography/Typography';
import Input from '../../ui/Input/Input';
import Checkbox from '../../ui/Checkbox/Checkbox';
import Button from '../../ui/Button/Button';

import email from '../../../assets/icons/sms.svg';
import lock from '../../../assets/icons/lock.svg';
import loginIllustrator from '../../../assets/login-illustrator.svg';
import logo from '../../../assets/Ansopedia_logo.svg';

import style from '../auth.module.scss';
import { ZodError } from 'zod';
import { loginSchema } from '../../../utils/validation';

const Login = () => {
  const state$ = useObservable({ checked: false });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    try {
      const validUserData = loginSchema.parse(userData);

      const response = await fetch('http://localhost:8001/api/v1/auth/login', {
        method: 'POST',
        body: JSON.stringify(validUserData),
        headers: { 'Content-Type': 'application/json' },
      });

      const authData = await response.json();

      if (authData.status === 'failed') {
        alert(authData.message);
        return;
      }

      alert('Login successful');
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.forEach((error) => {
          alert(error.message);
        });
      }
      alert('An error occurred');
    }
  };

  return (
    <section className={style['auth-section']}>
      <div className={style['auth']}>
        <div className={style.header}>
          <div>
            <Image src={logo} alt="Login Illustrator" className={style.logo} width={70} height={70} />
            <Typography variant="h2" className={style.title}>
              Welcome Back
            </Typography>
            <Typography variant="h1" color="primary">
              Ansopedian!
            </Typography>
          </div>
          <Typography className={style.subtitle}>Login to continue</Typography>
        </div>
        <form className={style['login-form']} onSubmit={handleSubmit}>
          <Input type="email" placeholder="example@gmail.com" icon={email} name="email" autoComplete="email" />
          <Input type="password" placeholder="password" icon={lock} name="password" autoComplete="current-password" />
          <div className={style['form-action']}>
            <Checkbox label="Remember me" state$={state$} />
            <Link href="/forget-password">Forgot password?</Link>
          </div>
          <Button>Log in</Button>
        </form>
        <Typography>
          Don’t have an account yet? <Link href="/sign-up">Sign up</Link>
        </Typography>
      </div>
      <div className={style['illustrator']}>
        <Image src={loginIllustrator} alt="Login Illustrator" />
      </div>
    </section>
  );
};

export default Login;
