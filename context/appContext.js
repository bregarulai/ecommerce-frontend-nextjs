import React, { CreateContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = CreateContext();

export const AppContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuatities, setTotalQuatities] = useState(0);
  const [qty, setQty] = useState(1);

  const increaseQuantity = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decreaseQuantity = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuatities,
        qty,
        setShowCart,
        setCartItems,
        setTotalPrice,
        setTotalQuatities,
        setQty,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
