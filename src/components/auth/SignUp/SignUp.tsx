'use client';

import Image from 'next/image';
import Link from 'next/link';

import Typography from '../../ui/Typography/Typography';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

import email from '../../../assets/icons/sms.svg';
import lock from '../../../assets/icons/lock.svg';
import confirmLock from '../../../assets/icons/confirm-lock.svg';
import signUpIllustrator from '../../../assets/Sign-up-illustrator.svg';
import logo from '../../../assets/Ansopedia_logo.svg';

import style from '../auth.module.scss';

const SignUp = () => {
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
          <Input type="email" placeholder="example@gmail.com" icon={email} />
          <Input type="password" placeholder="password" icon={lock} />
          <Input type="password" placeholder="confirm your password" icon={confirmLock} />
          <Button>Sign up</Button>
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
