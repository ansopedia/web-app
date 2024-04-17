import React, { FC } from 'react';
import Layout, { Aside, Header, Main } from '../../components/ui/Layout/Layout';
import Link from 'next/link';

interface ISettingLayoutProps {
  children: React.ReactNode;
}

const links: { href: string; label: string }[] = [
  { href: '/settings', label: 'Settings' },
  { href: '/settings/profile', label: 'Profile' },
];

const SettingLayout: FC<ISettingLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Header>
        <div>header</div>
      </Header>
      <Aside>
        {links.map((link, index) => (
          <div key={index}>
            <Link href={link.href}>{link.label}</Link>
          </div>
        ))}
      </Aside>
      <Main>{children}</Main>
    </Layout>
  );
};

export default SettingLayout;
