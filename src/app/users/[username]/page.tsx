import React from 'react';
import Profile from './_components/Profile';

import style from './user.module.scss';
import CompleteProfile from './_components/CompleteProfile';

interface IParams {
  username: string;
}

const Username = ({ params }: { params: IParams }) => {
  return (
    <section className={style['user']}>
      <header className={style['header']}>
        <h1>Hello</h1>
      </header>
      <aside className={style['user__profile']}>
        <Profile username={params.username} className={style['sticky-container']} />
        <CompleteProfile />
      </aside>
      <div className={style['user__action']}>user action</div>
    </section>
  );
};

export default Username;
