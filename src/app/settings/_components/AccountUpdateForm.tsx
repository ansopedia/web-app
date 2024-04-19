'use client';

import { enableReactComponents } from '@legendapp/state/config/enableReactComponents';

enableReactComponents();

import { useObservable, useObserve } from '@legendapp/state/react';

import { Button, Form, InputGroup } from '../../../components/ui';

import userIcon from '../../../assets/icons/user-octagon.svg';

import style from './form.module.scss';
import { toast } from 'sonner';
import { userAuthSchema } from '../../../types/user';
import emailIcon from '../../../assets/icons/sms.svg';
import lockIcon from '../../../assets/icons/lock.svg';

const AccountUpdateForm = () => {
  const signUpState$ = useObservable({
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    username: '',
    usernameError: '',
    didSave: false,
  });

  useObserve(() => {
    if (signUpState$.didSave.get()) {
      const { email, password, username } = signUpState$.get();

      const validUserData = userAuthSchema.safeParse({ email, password, username });

      signUpState$.emailError.set(!validUserData.success ? validUserData.error.formErrors.fieldErrors.email?.[0] : '');
      signUpState$.passwordError.set(
        !validUserData.success ? validUserData.error.formErrors.fieldErrors.password?.[0] : '',
      );
      signUpState$.usernameError.set(
        !validUserData.success ? validUserData.error.formErrors.fieldErrors.username?.[0] : '',
      );
    }
  });

  const handleFormSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    signUpState$.didSave.set(true);

    const {
      //   email,
      emailError,
      //   password,
      passwordError,
      //   username,
      usernameError,
    } = signUpState$.get();

    if (emailError || passwordError || usernameError) return;

    try {
      throw new Error('Not implemented');
    } catch (error) {
      toast.error('Something went wrong! Please try again.');
    }
  };

  return (
    <Form className={style['form']}>
      <InputGroup
        $value={signUpState$.username}
        $error={signUpState$.usernameError}
        type="text"
        placeholder="create an unique username!"
        icon={userIcon}
        name="username"
        label="Username"
      />
      <InputGroup
        $value={signUpState$.email}
        $error={signUpState$.emailError}
        type="email"
        placeholder="example@gmail.com"
        icon={emailIcon}
        label="Email Address"
        name="email"
      />
      <InputGroup
        $value={signUpState$.password}
        $error={signUpState$.passwordError}
        type="password"
        placeholder="password"
        icon={lockIcon}
        label="Password"
        name="password"
      />
      <Button type="submit" onClick={handleFormSubmit}>
        Sign up
      </Button>
    </Form>
  );
};

export default AccountUpdateForm;
