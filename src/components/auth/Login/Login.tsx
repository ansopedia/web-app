import Image from 'next/image';
import Link from 'next/link';

import Typography from '../../ui/Typography/Typography';

import loginIllustrator from '../../../assets/login-illustrator.svg';
import logo from '../../../assets/Ansopedia_logo.svg';

import style from '../auth.module.scss';

import LoginForm from './LoginForm';

const Login = () => {
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
        <LoginForm />
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
