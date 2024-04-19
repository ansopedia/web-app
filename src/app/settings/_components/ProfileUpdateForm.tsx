'use client';

import { enableReactComponents } from '@legendapp/state/config/enableReactComponents';

enableReactComponents();

import { useObservable, useObserve } from '@legendapp/state/react';

import { Button, Form, Typography, InputGroup } from '../../../components/ui';

import userIcon from '../../../assets/icons/user-octagon.svg';
import { editPublicProfileSchema } from '../../../types/user';

import style from './form.module.scss';
import { toast } from 'sonner';

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
    socialAccounts: [
      {
        socialName: 'facebook',
        socialUrl: '',
      },
      {
        socialName: 'github',
        socialUrl: '',
      },
    ],
    socialAccountsError: [
      {
        socialName: 'facebook',
        socialUrl: '',
      },
      {
        socialName: 'github',
        socialUrl: '',
      },
    ],
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
      // profileState$.socialAccountsError.set(
      //   !validData.success ? validData.error.formErrors.fieldErrors.socialAccounts?.[0] : '',
      // );
      profileState$.socialAccountsError[0].socialUrl.set(
        !validData.success ? validData.error.formErrors.fieldErrors.socialAccounts?.[0] : '',
      );
      profileState$.socialAccountsError[1].socialUrl.set(
        !validData.success ? validData.error.formErrors.fieldErrors.socialAccounts?.[1] : '',
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
      toast.error('Something went wrong! Please try again.');
    }
  };

  return (
    <Form className={style['form']}>
      <InputGroup
        placeholder="Full Name"
        $value={profileState$.fullName}
        $error={profileState$.fullNameError}
        icon={userIcon}
        type="text"
        onChange={(e) => profileState$.fullName.set(e.target.value)}
        label="Full Name"
      />
      <InputGroup
        $error={profileState$.bio}
        $value={profileState$.bioError}
        autoComplete="bio"
        placeholder="Help the world know you better"
        type="textarea"
        onChange={(e) => profileState$.bio.set(e.target.value)}
        label="Bio"
      />
      <InputGroup
        placeholder="Phone Number"
        $value={profileState$.phoneNumber}
        $error={profileState$.phoneNumberError}
        onChange={(e) => profileState$.phoneNumber.set(e.target.value)}
        type="tel"
        label="Phone Number"
      />
      <InputGroup
        placeholder="Pronouns"
        label="Pronoun"
        $value={profileState$.pronouns}
        $error={profileState$.pronounsError}
        onChange={(e) => profileState$.pronouns.set(e.target.value)}
        type="text"
      />
      <InputGroup
        placeholder="Website"
        label="URL"
        $value={profileState$.url}
        onChange={(e) => profileState$.url.set(e.target.value)}
        $error={profileState$.urlError}
        type="url"
      />
      <Typography variant="h4">Social Accounts</Typography>
      <InputGroup
        placeholder="Facebook"
        $value={profileState$.socialAccounts[0].socialUrl}
        $error={profileState$.socialAccountsError[0].socialUrl}
        onChange={(e) => profileState$.socialAccounts[0].socialUrl.set(e.target.value)}
        type="text"
        label="Facebook"
      />
      <InputGroup
        placeholder="Github"
        $value={profileState$.socialAccounts[1].socialUrl}
        $error={profileState$.socialAccountsError[1].socialUrl}
        onChange={(e) => profileState$.socialAccounts[1].socialUrl.set(e.target.value)}
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
