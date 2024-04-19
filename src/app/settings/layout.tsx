import React, { FC } from 'react';
import Layout, { Aside, Header, Main } from '../../components/ui/Layout/Layout';
import Link from 'next/link';
import style from './settings.module.scss';
import Card from '../../components/ui/Card/Card';
import LeftArrowIcon from '../../icons/LeftArrow';
import Separator from '../../components/ui/Separator/Separator';
import SettingIcon from '../../icons/SettingIcon';
import Typography from '../../components/ui/Typography/Typography';
import UserIcon from '../../icons/UserIcon';
import Sidebar from '../../components/Sidebar/Sidebar';

interface ISettingLayoutProps {
  children: React.ReactNode;
}

const links: { href: string; label: string; icon: React.ReactElement }[] = [
  { href: '/settings/profile', label: 'Public Profile', icon: <UserIcon /> },
  { href: '/settings/account', label: 'Account', icon: <SettingIcon /> },
];

const SettingLayout: FC<ISettingLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Header>
        <div>header</div>
      </Header>
      <Aside>
        <Card className={style['setting-aside']}>
          <Link href="/users/sanjay" className={style['go-back']}>
            <LeftArrowIcon /> <Typography variant="span">Go back to profile</Typography>
          </Link>
          <Separator />
          <Sidebar links={links} className={style.links} />
        </Card>
      </Aside>
      <Main>{children}</Main>
    </Layout>
  );
};

export default SettingLayout;
