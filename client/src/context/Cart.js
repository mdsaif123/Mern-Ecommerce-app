// import { useState, useContext, createContext, useEffect } from "react";

// const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     let existingcartitem = localStorage.getItem("cart");
//     if (existingcartitem) setCart(JSON.parse(existingcartitem));
//   }, []);

//   return (
//     <CartContext.Provider value={[cart, setCart]}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// const useCart = () => useContext(CartContext);

// export { useCart, CartProvider };


import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Retrieve cart items from localStorage on initial render
  useEffect(() => {
    let existingCartItems = localStorage.getItem("cart");
    if (existingCartItems) setCart(JSON.parse(existingCartItems));
  }, []);

  // Update localStorage whenever the cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
