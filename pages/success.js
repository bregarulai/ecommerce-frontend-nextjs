import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useAppContext } from '../context/appContext';
import styles from '../styles/success.module.scss';

const Success = () => {
  const { successWrapper, success, icon, emailMsg, description, email } =
    styles;
  const { setCartItems, setTotalPrice, setTotalQuantities } = useAppContext();

  return (
    <div className={successWrapper}>
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
      </div>
    </div>
  );
};

export default Success;
