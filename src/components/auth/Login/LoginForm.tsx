'use client';

import { useRouter } from 'next/navigation';

import Input from '../../ui/Input/Input';
import RememberMe from './RememberMe';
import Link from 'next/link';
import Button from '../../ui/Button/Button';
import Form from '../../ui/Form/Form';

import { loginSchema } from '../../../utils/validation';
import { handleLogin } from './actions';

import email from '../../../assets/icons/sms.svg';
import lock from '../../../assets/icons/lock.svg';
import style from '../auth.module.scss';

export interface IApiResponse<T = undefined> {
  response: Response;
  statusCode: number;
  status: 'success' | 'failed';
  message: string;
  data: T;
}

const LoginForm = () => {
  const router = useRouter();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const validUserData = loginSchema.safeParse(userData);

    if (!validUserData.success) {
      alert('Invalid data');
      return;
    }

    try {
      const res: IApiResponse = await handleLogin(validUserData.data);

      if (res.status === 'failed') {
        alert(res.message);
        return;
      }

      router.replace('/profile');
    } catch (error) {
      alert(`Something went wrong ${error}`);
    }
  };

  return (
    <Form className={style['login-form']} onSubmit={handleFormSubmit}>
      <Input type="email" placeholder="example@gmail.com" icon={email} name="email" autoComplete="email" />
      <Input type="password" placeholder="password" icon={lock} name="password" autoComplete="current-password" />
      <div className={style['form-action']}>
        <RememberMe />
        <Link href="/forget-password">Forgot password?</Link>
      </div>
      <Button type="submit">Log in</Button>
    </Form>
  );
};

export default LoginForm;
