import React from 'react';
import Profile from './_components/Profile';

import style from './user.module.scss';

interface IParams {
  username: string;
}

const Username = ({ params }: { params: IParams }) => {
  return (
    <section className={style['user']}>
      <div className={style['sticky-parent']}>
        <Profile username={params.username} className={style['sticky-container']} />
      </div>
      <div className={style['user__action']}>user action</div>
    </section>
  );
};

export default Username;
