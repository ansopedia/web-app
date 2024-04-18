'use client';

import { Card, Typography } from '../../../components/ui';
import ProfileUpdateForm from '../../../components/auth/ProfileUpdate/ProfileUpdateForm';

const ProfileSetting = () => {
  return (
    <Card>
      <Typography variant="h3">Personal Information</Typography>
      <Typography>Update your personal information below to keep your profile current and accurate.</Typography>

      <ProfileUpdateForm />
    </Card>
  );
};

export default ProfileSetting;
