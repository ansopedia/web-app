'use client';

import { enableReactComponents } from '@legendapp/state/config/enableReactComponents';

enableReactComponents();

import { useObservable, useObserve } from '@legendapp/state/react';

import { Button, Form, Typography, InputGroup } from '../../ui';

import userIcon from '../../../assets/icons/user-octagon.svg';
import { editPublicProfileSchema } from '../../../types/user';

import style from '../auth.module.scss';

const ProfileUpdateForm = () => {
  const profileState$ = useObservable({
    fullName: '',
    fullNameError: '',
    phoneNumber: '',
    phoneNumberError: '',
    bio: '',
    bioError: '',
    dob: '',
    dobError: '',
    pronouns: '',
    pronounsError: '',
    url: '',
    urlError: '',
    socialAccounts: [],
    socialAccountsError: '',
    didSave: false,
  });

  useObserve(() => {
    if (profileState$.didSave.get()) {
      const { fullName, phoneNumber, bio, pronouns, url, socialAccounts, dob } = profileState$.get();

      const validData = editPublicProfileSchema.safeParse({
        fullName,
        phoneNumber,
        bio,
        dob,
        pronouns,
        url,
        socialAccounts,
      });

      profileState$.fullNameError.set(!validData.success ? validData.error.formErrors.fieldErrors.fullName?.[0] : '');
      profileState$.bioError.set(!validData.success ? validData.error.formErrors.fieldErrors.bio?.[0] : '');
      profileState$.dobError.set(!validData.success ? validData.error.formErrors.fieldErrors.dob?.[0] : '');
      profileState$.pronounsError.set(!validData.success ? validData.error.formErrors.fieldErrors.pronouns?.[0] : '');
      profileState$.urlError.set(!validData.success ? validData.error.formErrors.fieldErrors.url?.[0] : '');
      profileState$.phoneNumberError.set(
        !validData.success ? validData.error.formErrors.fieldErrors.phoneNumber?.[0] : '',
      );
      profileState$.socialAccountsError.set(
        !validData.success ? validData.error.formErrors.fieldErrors.socialAccounts?.[0] : '',
      );
    }
  });

  const handleFormSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    profileState$.didSave.set(true);

    const {
      // fullName,
      fullNameError,
      // bio,
      bioError,
      dob,
      // dobError,
      // pronouns,
      pronounsError,
      // url,
      urlError,
      // socialAccounts,
      socialAccountsError,
      // phoneNumber,
      phoneNumberError,
    } = profileState$.get();

    if (fullNameError || bioError || phoneNumberError || dob || pronounsError || urlError || socialAccountsError) {
      return;
    }

    try {
      throw new Error('Not implemented');
    } catch (error) {
      alert('Something went wrong! Please try again.');
    }
  };

  return (
    <Form className={style['profile-update-form']}>
      <InputGroup
        placeholder="Full Name"
        $value={profileState$.fullName}
        $error={profileState$.fullNameError}
        icon={userIcon}
        type="text"
        label="Full Name"
      />
      <InputGroup
        $error={profileState$.bio}
        $value={profileState$.bioError}
        autoComplete="bio"
        placeholder="Help the world know you better"
        type="textarea"
        label="Bio"
      />
      <InputGroup
        placeholder="Phone Number"
        $value={profileState$.phoneNumber}
        $error={profileState$.phoneNumberError}
        type="tel"
        label="Phone Number"
      />
      <InputGroup
        placeholder="Pronouns"
        label="Pronoun"
        $value={profileState$.pronouns}
        $error={profileState$.pronounsError}
        type="text"
      />
      <InputGroup
        placeholder="Website"
        label="URL"
        $value={profileState$.url}
        $error={profileState$.urlError}
        type="url"
      />
      <Typography variant="h4">Social Accounts</Typography>
      <InputGroup
        placeholder="Facebook"
        $value={profileState$.socialAccounts[0]}
        $error={profileState$.socialAccountsError}
        type="text"
        label="Facebook"
      />
      <InputGroup
        placeholder="Github"
        $value={profileState$.socialAccounts[1]}
        $error={profileState$.socialAccountsError}
        type="text"
        label="Github"
      />
      <InputGroup label="Date of Birth" $value={profileState$.dob} $error={profileState$.dobError} type="date" />
      <Button type="submit" onClick={handleFormSubmit}>
        Log in
      </Button>
    </Form>
  );
};

export default ProfileUpdateForm;
