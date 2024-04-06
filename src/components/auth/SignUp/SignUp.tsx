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
import { ZodError } from 'zod';
import { createUserSchema } from '../../../utils/validation';

const SignUp = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    try {
      const validUserData = createUserSchema.parse(userData);

      const response = await fetch('http://localhost:8001/api/v1/auth/sign-up', {
        method: 'POST',
        body: JSON.stringify(validUserData),
        headers: { 'Content-Type': 'application/json' },
      });

      const authData = await response.json();

      if (authData.status === 'failed') {
        alert(authData.message);
        return;
      }

      alert('User created successful');
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.forEach((error) => {
          alert(error.message);
        });
      } else alert('An error occurred');
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
        <form className={style['login-form']} onSubmit={handleSubmit}>
          <Input type="text" placeholder="create an unique username!" icon={email} name="username" />
          <Input type="email" placeholder="example@gmail.com" icon={email} name="email" />
          <Input type="password" placeholder="password" icon={lock} name="password" />
          <Input type="password" placeholder="confirm your password" icon={confirmLock} name="confirmPassword" />
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
