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

const Login = () => {
  const state$ = useObservable({ checked: false });

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
        <form className={style['login-form']}>
          <Input type="email" placeholder="example@gmail.com" icon={email} />
          <Input type="password" placeholder="password" icon={lock} />
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
