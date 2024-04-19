'use client';

import { Card, Typography } from '../../../components/ui';
import AccountUpdateForm from '../_components/AccountUpdateForm';

const AccountSetting = () => {
  return (
    <Card>
      <Typography variant="h3">Account Information</Typography>
      <Typography>Update your account information below to keep your profile current and accurate.</Typography>
      <AccountUpdateForm />
    </Card>
  );
};

export default AccountSetting;
