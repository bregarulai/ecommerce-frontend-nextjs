import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

import { useAppContext } from '../context/appContext';
import styles from '../styles/success.module.scss';

const Success = () => {
  const { successWrapper, success, icon } = styles;
  const { setCartItems, setTotalPrice, setTotalQuantities } = useAppContext();
  const [order, setOrder] = useState(null);
  return (
    <div className={successWrapper}>
      <div className={success}>
        <p className={icon}>
          <BsBagCheckFill />
        </p>
      </div>
    </div>
  );
};

export default Success;
