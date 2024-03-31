'use client';

import Image from 'next/image';
import Link from 'next/link';

import Typography from '../../../components/ui/Typography/Typography';
import Button from '../../../components/ui/Button/Button';

import style from './hero.module.scss';
import logo from '../../../assets/Ansopedia_logo.svg';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

const Hero = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className={style.hero}>
      <div className={style['hero-background']}></div>
      <div className={style['sticky-nav']}>
        <nav className={style.nav}>
          <div className={style.logo}>
            <Image src={logo} alt="ansopedia" className={style.logo} width={100} height={100} />
            <Typography variant="h3">Ansopedia</Typography>
          </div>
          <div className={`${style['menu-tablet']} ${isMobileMenuOpen ? style['menu-mobile'] : ''}`}>
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
            <Button>Sign in</Button>
          </div>
          <div className={style['menu-cta']}>
            <Button onClick={toggleMobileMenu}>X</Button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
