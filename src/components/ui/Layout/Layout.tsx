import React, { FC } from 'react';
import style from './layout.module.scss';

interface IChildren {
  children: React.ReactNode;
}

interface ILayoutProps {
  children: Array<
    React.ReactElement<typeof Main> | React.ReactElement<typeof Header> | React.ReactElement<typeof Aside>
  >;
}

const Header: FC<IChildren> = ({ children }) => {
  return <header className={style['header']}>{children}</header>;
};

const Aside: FC<IChildren> = ({ children }) => {
  return <aside className={style['aside']}>{children}</aside>;
};

const Main: FC<IChildren> = ({ children }) => {
  return <main className={style['main']}>{children}</main>;
};

const Layout: FC<ILayoutProps> = ({ children }) => {
  return <section className={style['layout']}>{children}</section>;
};

export { Header, Aside, Main };

export default Layout;
