'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Typography, Button } from '../../../components/ui';
import Link from 'next/link';

import logo from '../../../assets/Ansopedia_logo.svg';
import hamburger from '../../../assets/icons/hamburger.svg';
import style from './navbar.module.scss';
import { useRouter } from 'next/navigation';

const navItems: { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={style['sticky-nav']}>
      <nav className={style.nav}>
        <div className={style.logo}>
          <Image src={logo} alt="ansopedia" className={style.logo} width={60} height={60} priority />
          <Typography variant="h3">Ansopedia</Typography>
        </div>
        <div className={`${style['menubar']} ${style['menu-tablet']} ${isMobileMenuOpen ? style['menu-mobile'] : ''}`}>
          <div className={style['menu']}>
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${style['menu__item']} ${pathname === href ? style['menu__item--active'] : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>
          <Button onClick={() => router.push('login')}>Sign in</Button>
        </div>
        <div className={style['menu-cta']}>
          <Button onClick={toggleMobileMenu} variant="icon">
            <Image src={hamburger} alt="menu" width={24} height={24} />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
