import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import styles from './navbar.module.scss';

const Navbar = () => {
  const { container, logo, cartIcon, cartItemQty } = styles;
  return (
    <div className={container}>
      <p className={logo}>
        <Link href='/'>Bregacode Headphones</Link>
      </p>
      <button type='button' className={cartIcon}>
        <AiOutlineShopping />
        <span className={cartItemQty}>1</span>
      </button>
    </div>
  );
};

export default Navbar;
