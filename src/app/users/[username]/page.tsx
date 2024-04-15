import React from 'react';
import Profile from './_components/Profile';

interface IParams {
  username: string;
}

const Username = ({ params }: { params: IParams }) => {
  return <Profile username={params.username} />;
};

export default Username;
