import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import styles from './navbar.module.scss';
import { Cart } from '../../components';
import { useAppContext } from '../../context/appContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuatities } = useAppContext();
  const { container, logo, cartIcon, cartItemQty } = styles;
  return (
    <div className={container}>
      <p className={logo}>
        <Link href='/'>Bregacode Headphones</Link>
      </p>
      <button
        type='button'
        className={cartIcon}
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className={cartItemQty}>{totalQuatities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
