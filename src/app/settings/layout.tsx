import React, { FC } from 'react';
import Layout, { Aside, Header, Main } from '../../components/ui/Layout/Layout';
import Link from 'next/link';
import style from './settings.module.scss';
import Card from '../../components/ui/Card/Card';
import LeftArrowIcon from '../../icons/LeftArrow';
import Separator from '../../components/ui/Separator/Separator';
import SettingIcon from '../../icons/SettingIcon';
import IconWithText from '../../components/ui/IconWithText/IconWithText';

interface ISettingLayoutProps {
  children: React.ReactNode;
}

const links: { href: string; label: string; icon: React.ReactNode }[] = [
  { href: '/settings', label: 'Settings', icon: <SettingIcon /> },
  { href: '/settings/profile', label: 'Profile', icon: <SettingIcon /> },
];

const SettingLayout: FC<ISettingLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Header>
        <div>header</div>
      </Header>
      <Aside>
        <Card className={style['setting-aside']}>
          <Link href="/settings" className={style['go-back']}>
            <LeftArrowIcon /> go back
          </Link>
          <Separator />
          <div className={style.links}>
            {links.map((link, index) => (
              <Link href={link.href} key={index}>
                <IconWithText IconComponent={SettingIcon} text={link.label} />
              </Link>
            ))}
          </div>
        </Card>
      </Aside>
      <Main>{children}</Main>
    </Layout>
  );
};

export default SettingLayout;
