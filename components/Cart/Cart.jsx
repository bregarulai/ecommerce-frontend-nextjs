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
  const {
    wrapper,
    container,
    cartHeading,
    heading,
    numItems,
    cartEmpty,
    btn,
    productContainer,
    product,
    productImg,
    itemDesc,
    flex,
    top,
    bottom,
    quantityDesc,
    minus,
    num,
    plus,
    removeItem,
    cartBottom,
    total,
    btnContainer,
  } = styles;
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuatities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useAppContext();
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
        {cartItems.length < 1 && (
          <div className={cartEmpty}>
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href='/'>
              <button
                type='button'
                onClick={() => setShowCart(false)}
                className={btn}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className={productContainer}>
          {cartItems.length >= 1 &&
            cartItems.map((item, index) => (
              <div key={item._id} className={product}>
                <img
                  src={urlFor(item?.image[0])}
                  alt={item.name}
                  className={productImg}
                />
                <div className={itemDesc}>
                  <div className={`${flex} ${top}`}>
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className={`${flex} ${bottom}`}>
                    <div>
                      <p className={quantityDesc}>
                        <span
                          className={minus}
                          onClick={() =>
                            toggleCartItemQuantity(item._id, 'dec')
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className={num}>{item.quantity}</span>
                        <span
                          className={plus}
                          onClick={() =>
                            toggleCartItemQuantity(item._id, 'inc')
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type='button'
                      className={removeItem}
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className={cartBottom}>
            <div className={total}>
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className={btnContainer}>
              <button type='button' className={btn} onClick={''}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
