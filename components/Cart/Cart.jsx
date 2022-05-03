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
  const {} = styles;
  const cartRef = useRef();
  const { totalPrice, totoalQuantities, cartItems, setShowCart } =
    useAppContext();
  return <div>Cart</div>;
};

export default Cart;
