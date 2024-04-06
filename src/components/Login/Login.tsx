'use client';

import Image from 'next/image';
import Typography from '../ui/Typography/Typography';
import style from './login.module.scss';
import Input from '../ui/Input/Input';
import Link from 'next/link';
import Checkbox from '../ui/Checkbox/Checkbox';
import { useObservable } from '@legendapp/state/react';
import email from '../../assets/icons/sms.svg';
import lock from '../../assets/icons/lock.svg';
import loginIllustrator from '../../assets/Mobile login-illustrator.png';
import Button from '../ui/Button/Button';

const Login = () => {
  const state$ = useObservable({ checked: false });

  return (
    <section className={style['auth-section']}>
      <div className={style['auth']}>
        <div className={style.header}>
          <div>
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
          <Input type="email" placeholder="Email" icon={email} />
          <Input type="password" placeholder="Password" icon={lock} />
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
        <Image src={loginIllustrator} alt="login-illustrator" />
      </div>
    </section>
  );
};

export default Login;
