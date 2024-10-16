import React, { createContext, useState} from 'react';

// Create CartContext
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Retrieve cart items from localStorage when the app initializes
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // adding items to e cart
  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);

    // Save the updated cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  // Function to remove items from the cart (optional)
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    

    // Update localStorage after removing an item
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  // Return the context provider with the cart values
  return (
    <CartContext.Provider value={{ cartItems, setCartItems,addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};