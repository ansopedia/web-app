'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import Typography from '../../../components/ui/Typography/Typography';
import Link from 'next/link';
import Button from '../../../components/ui/Button/Button';

import logo from '../../../assets/Ansopedia_logo.svg';
import style from './navbar.module.scss';
import Modal from '../../../components/ui/Modal/Modal';
import { useModal } from '../../../components/ui/Modal/useModal';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

const NavBar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { closeModal, isOpen, openModal } = useModal();

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
          <Button onClick={openModal}>Sign in</Button>
        </div>
        <div className={style['menu-cta']}>
          <Button onClick={toggleMobileMenu}>X</Button>
        </div>
        <Modal isOpen={isOpen} onClose={closeModal}>
          sdf
        </Modal>
      </nav>
    </div>
  );
};

export default NavBar;
