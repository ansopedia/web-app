import React from 'react';
import Card from '../../../../components/ui/Card/Card';
import Progress from '../../../../components/ui/Progress/Progress';
import Link from 'next/link';
import style from './complete-profile.module.scss';

const CompleteProfile = () => {
  return (
    <Card className={style['complete-profile']}>
      <Progress max={80} value={20} />
      <Link href="/settings/profile" className={style.link}>
        Complete your profile
      </Link>
    </Card>
  );
};

export default CompleteProfile;
