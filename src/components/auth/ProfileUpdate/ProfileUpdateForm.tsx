'use client';

import { enableReactComponents } from '@legendapp/state/config/enableReactComponents';

enableReactComponents();

import { useObservable, useObserve } from '@legendapp/state/react';

import { Input, Button, Form } from '../../ui';

import emailIcon from '../../../assets/icons/sms.svg';
import userIcon from '../../../assets/icons/user-octagon.svg';
import { profileSchema } from '../../../types/user';

import style from '../auth.module.scss';

const ProfileUpdateForm = () => {
  const profileState$ = useObservable({
    fullName: '',
    fullNameError: '',
    email: '',
    emailError: '',
    phoneNumber: '',
    phoneNumberError: '',
    dob: '',
    dobError: '',
    didSave: false,
  });

  useObserve(() => {
    if (profileState$.didSave.get()) {
      const { email, fullName, phoneNumber, dob } = profileState$.get();

      const validData = profileSchema.safeParse({
        email,
        fullName,
        phoneNumber,
        dob: new Date(dob),
      });

      profileState$.emailError.set(!validData.success ? validData.error.formErrors.fieldErrors.email?.[0] : '');
      profileState$.phoneNumberError.set(
        !validData.success ? validData.error.formErrors.fieldErrors.phoneNumber?.[0] : '',
      );
      profileState$.dobError.set(!validData.success ? validData.error.formErrors.fieldErrors.dob?.[0] : '');
      profileState$.fullNameError.set(!validData.success ? validData.error.formErrors.fieldErrors.fullName?.[0] : '');
    }
  });

  const handleFormSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    profileState$.didSave.set(true);

    const {
      // fullName,
      fullNameError,
      // email,
      emailError,
      // phoneNumber,
      phoneNumberError,
      dob,
      // dobError
    } = profileState$.get();

    if (fullNameError || emailError || phoneNumberError || dob) return;

    try {
      throw new Error('Not implemented');
    } catch (error) {
      alert('Something went wrong! Please try again.');
    }
  };

  return (
    <Form className={style['profile-update-form']}>
      <Input
        placeholder="Full Name"
        $value={profileState$.fullName}
        $error={profileState$.fullNameError}
        icon={userIcon}
      />
      <Input
        $error={profileState$.emailError}
        $value={profileState$.email}
        autoComplete="email"
        placeholder="example@gmail.com"
        type="email"
        icon={emailIcon}
      />
      <Input
        placeholder="Phone Number"
        $value={profileState$.phoneNumber}
        $error={profileState$.phoneNumberError}
        type="tel"
      />
      <Input placeholder="Date of Birth" $value={profileState$.dob} $error={profileState$.dobError} type="date" />
      <Button type="submit" onClick={handleFormSubmit}>
        Log in
      </Button>
    </Form>
  );
};

export default ProfileUpdateForm;
