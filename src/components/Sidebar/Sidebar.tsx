'use client';

import Link from 'next/link';
import { FC } from 'react';

import IconWithText from '../IconWithText/IconWithText';
import { usePathname } from 'next/navigation';

interface ISidebarProps {
  links: { href: string; label: string; icon: React.ReactElement }[];
  className?: string;
}

const Sidebar: FC<ISidebarProps> = ({ links, className }) => {
  const pathname = usePathname();

  return (
    <div className={className}>
      {links.map(({ href, label, icon }, index) => (
        <Link href={href} key={index}>
          <IconWithText IconComponent={icon} text={label} active={pathname === href} />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
