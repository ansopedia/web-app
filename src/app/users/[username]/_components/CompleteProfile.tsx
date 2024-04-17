import React from 'react';
import Card from '../../../../components/ui/Card/Card';
import Progress from '../../../../components/ui/Progress/Progress';

const CompleteProfile = () => {
  return (
    <Card>
      <Progress max={80} value={20} />
    </Card>
  );
};

export default CompleteProfile;
