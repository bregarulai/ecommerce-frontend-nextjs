import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import Head from 'next/head';

import { runFireWorks } from '../lib/utils';
import { useAppContext } from '../context/appContext';
import styles from '../styles/success.module.scss';

const Success = () => {
  const { successWrapper, success, icon, emailMsg, description, email, btn } =
    styles;
  const { setCartItems, setTotalPrice, setTotalQuantities } = useAppContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireWorks();
  }, []);

  return (
    <div className={successWrapper}>
      <Head>
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
      </Head>
      <div className={success}>
        <p className={icon}>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className={emailMsg}>Check your email inbox for your receipt</p>
        <p className={description}>
          If you have any question please email{' '}
          <a className={email} href='mailto:order@example.com'>
            order@example.com
          </a>
        </p>
        <Link href='/'>
          <button type='button' className={btn} width='300px'>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
