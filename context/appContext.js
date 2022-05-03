import React, { CreateContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = CreateContext();

export const AppContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuatities, setTotalQuatities] = useState(0);
  const [qty, setQty] = useState(1);

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
      }}
    >
      {children}
    </Context.Provider>
  );
};
