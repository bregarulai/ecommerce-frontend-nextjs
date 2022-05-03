import React, { useRef } from 'react';
import Link from 'next/link';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { toast } from 'react-hot-toast';

import { useAppContext } from '../../context/appContext';
import { urlFor } from '../../lib/client';
import styles from './cart.module.scss';

const Cart = () => {
  const { wrapper, container, cartHeading, heading, numItems } = styles;
  const cartRef = useRef();
  const { totalPrice, totalQuatities, cartItems, setShowCart } =
    useAppContext();
  return (
    <div className={wrapper} ref={cartRef}>
      <div className={container}>
        <button
          type='button'
          className={cartHeading}
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className={heading}>Your Cart</span>
          <span className={numItems}>({totalQuatities} items)</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
