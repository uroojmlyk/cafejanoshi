






// // 'use client';

// // import { createContext, useContext, useState, useEffect } from 'react';

// // // Store all menu items globally
// // const ALL_MENU_ITEMS = {};

// // // Create context
// // const CartContext = createContext();

// // // Custom hook
// // export const useCart = () => {
// //   const context = useContext(CartContext);
// //   if (!context) {
// //     throw new Error('useCart must be used within CartProvider');
// //   }
// //   return context;
// // };

// // // Register menu item for cart calculations
// // export const registerMenuItem = (id, name, price) => {
// //   ALL_MENU_ITEMS[id] = { id, name, price };
// // };

// // // Provider component
// // export const CartProvider = ({ children }) => {
// //   const [cart, setCart] = useState({});

// //   // Load cart from localStorage on mount
// //   useEffect(() => {
// //     const savedCart = localStorage.getItem('cafe-janoshi-cart');
// //     if (savedCart) {
// //       try {
// //         setCart(JSON.parse(savedCart));
// //       } catch (error) {
// //         console.error('Error loading cart:', error);
// //       }
// //     }
// //   }, []);

// //   // Save cart to localStorage
// //   useEffect(() => {
// //     try {
// //       localStorage.setItem('cafe-janoshi-cart', JSON.stringify(cart));
// //     } catch (error) {
// //       console.error('Error saving cart:', error);
// //     }
// //   }, [cart]);

// //   // Calculate total items in cart
// //   const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

// //   // Add item to cart
// //   const addToCart = (itemId, itemName, price, quantity = 1) => {
// //     setCart(prev => ({
// //       ...prev,
// //       [itemId]: (prev[itemId] || 0) + quantity
// //     }));
// //     registerMenuItem(itemId, itemName, price);
// //   };

// //   // Remove item from cart
// //   const removeFromCart = (itemId) => {
// //     setCart(prev => {
// //       const newCart = { ...prev };
// //       delete newCart[itemId];
// //       return newCart;
// //     });
// //   };

// //   // Update item quantity
// //   const updateQuantity = (itemId, quantity) => {
// //     if (quantity <= 0) {
// //       removeFromCart(itemId);
// //     } else {
// //       setCart(prev => ({
// //         ...prev,
// //         [itemId]: quantity
// //       }));
// //     }
// //   };

// //   // Clear entire cart
// //   const clearCart = () => {
// //     setCart({});
// //   };

// //   // Get cart total amount - NOW WORKING!
// //   const getCartTotal = () => {
// //     return Object.entries(cart).reduce((total, [itemId, qty]) => {
// //       const item = ALL_MENU_ITEMS[itemId];
// //       return total + (item ? item.price * qty : 0);
// //     }, 0);
// //   };

// //   // Get cart items list - NOW WORKING!
// //   const getCartItems = () => {
// //     return Object.entries(cart).map(([itemId, qty]) => {
// //       const item = ALL_MENU_ITEMS[itemId];
// //       return item ? { ...item, quantity: qty } : null;
// //     }).filter(Boolean);
// //   };

// //   // Generate WhatsApp message - NOW WORKING!
// //   const generateWhatsAppMessage = () => {
// //     const items = getCartItems();
// //     const total = getCartTotal();
    
// //     let message = `*Cafe Janoshi - Order*\n\n`;
// //     message += `*Order Details:*\n`;
// //     message += `--------------------------------\n`;
    
// //     items.forEach((item, index) => {
// //       message += `${index + 1}. ${item.name}\n`;
// //       message += `   ${item.quantity} x Rs ${item.price} = Rs ${item.price * item.quantity}\n`;
// //     });
    
// //     message += `\n*Total Amount: Rs ${total}*\n`;
// //     message += `--------------------------------\n`;
// //     message += `\n*Customer Information:*\n`;
// //     message += `Name: _________\n`;
// //     message += `Phone: _________\n`;
// //     message += `Address: _________\n`;
// //     message += `\n*Order Time:* ${new Date().toLocaleString('en-PK')}\n`;
// //     message += `\nThank you for ordering from Cafe Janoshi!`;
    
// //     return encodeURIComponent(message);
// //   };

// //   // Context value
// //   const value = {
// //     cart,
// //     cartCount,
// //     addToCart,
// //     removeFromCart,
// //     updateQuantity,
// //     clearCart,
// //     getCartTotal,
// //     getCartItems,
// //     generateWhatsAppMessage
// //   };

// //   return (
// //     <CartContext.Provider value={value}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };






// 'use client';

// import { createContext, useContext, useState, useEffect } from 'react';

// // Store all menu items globally
// const ALL_MENU_ITEMS = {};

// // Create context
// const CartContext = createContext();

// // Custom hook
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within CartProvider');
//   }
//   return context;
// };

// // Register menu item for cart calculations
// export const registerMenuItem = (id, name, price) => {
//   ALL_MENU_ITEMS[id] = { id, name, price };
// };

// // Provider component
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState({});

//   // Load cart from localStorage on mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem('cafe-janoshi-cart');
//     if (savedCart) {
//       try {
//         setCart(JSON.parse(savedCart));
//       } catch (error) {
//         console.error('Error loading cart:', error);
//       }
//     }
//   }, []);

//   // Save cart to localStorage
//   useEffect(() => {
//     try {
//       localStorage.setItem('cafe-janoshi-cart', JSON.stringify(cart));
//     } catch (error) {
//       console.error('Error saving cart:', error);
//     }
//   }, [cart]);

//   // Calculate total items in cart
//   const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

//   // Add item to cart
//   const addToCart = (itemId, itemName, price, quantity = 1) => {
//     setCart(prev => ({
//       ...prev,
//       [itemId]: (prev[itemId] || 0) + quantity
//     }));
//     registerMenuItem(itemId, itemName, price);
//   };

//   // Remove item from cart
//   const removeFromCart = (itemId) => {
//     setCart(prev => {
//       const newCart = { ...prev };
//       delete newCart[itemId];
//       return newCart;
//     });
//   };

//   // Update item quantity
//   const updateQuantity = (itemId, quantity) => {
//     if (quantity <= 0) {
//       removeFromCart(itemId);
//     } else {
//       setCart(prev => ({
//         ...prev,
//         [itemId]: quantity
//       }));
//     }
//   };

//   // Clear entire cart
//   const clearCart = () => {
//     setCart({});
//   };

//   // Get cart total amount - NOW WORKING!
//   const getCartTotal = () => {
//     return Object.entries(cart).reduce((total, [itemId, qty]) => {
//       const item = ALL_MENU_ITEMS[itemId];
//       return total + (item ? item.price * qty : 0);
//     }, 0);
//   };

//   // Get cart items list - NOW WORKING!
//   const getCartItems = () => {
//     return Object.entries(cart).map(([itemId, qty]) => {
//       const item = ALL_MENU_ITEMS[itemId];
//       return item ? { ...item, quantity: qty } : null;
//     }).filter(Boolean);
//   };

//   // Generate WhatsApp message - NOW WORKING!
//   const generateWhatsAppMessage = () => {
//     const items = getCartItems();
//     const total = getCartTotal();
    
//     let message = `*Cafe Janoshi - Order*\n\n`;
//     message += `*Order Details:*\n`;
//     message += `--------------------------------\n`;
    
//     items.forEach((item, index) => {
//       message += `${index + 1}. ${item.name}\n`;
//       message += `   ${item.quantity} x Rs ${item.price} = Rs ${item.price * item.quantity}\n`;
//     });
    
//     message += `\n*Total Amount: Rs ${total}*\n`;
//     message += `--------------------------------\n`;
//     message += `\n*Customer Information:*\n`;
//     message += `Name: _________\n`;
//     message += `Phone: _________\n`;
//     message += `Address: _________\n`;
//     message += `\n*Order Time:* ${new Date().toLocaleString('en-PK')}\n`;
//     message += `\nThank you for ordering from Cafe Janoshi!`;
    
//     return encodeURIComponent(message);
//   };

//   // Context value
//   const value = {
//     cart,
//     cartCount,
//     addToCart,
//     removeFromCart,
//     updateQuantity,
//     clearCart,
//     getCartTotal,
//     getCartItems,
//     generateWhatsAppMessage
//   };

//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// };  

 

'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Store all menu items globally
let ALL_MENU_ITEMS = {};

// Create context
const CartContext = createContext();

// Custom hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

// Register menu item for cart calculations (ONLY ONCE)
export const registerMenuItem = (id, name, price) => {
  if (!ALL_MENU_ITEMS[id]) {
    ALL_MENU_ITEMS[id] = { id, name, price };
  }
};

// Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount - FIXED
  useEffect(() => {
    const savedCart = localStorage.getItem('cafe-janoshi-cart');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        // Only set if there are actual items
        if (parsed && typeof parsed === 'object' && Object.keys(parsed).length > 0) {
          setCart(parsed);
        } else {
          setCart({}); // Empty cart
        }
      } catch (error) {
        console.error('Error loading cart:', error);
        setCart({}); // Empty on error
      }
    } else {
      setCart({}); // Empty if no saved cart
    }
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage - ONLY WHEN CART CHANGES
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem('cafe-janoshi-cart', JSON.stringify(cart));
      } catch (error) {
        console.error('Error saving cart:', error);
      }
    }
  }, [cart, isInitialized]);

  // Calculate total items in cart
  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  // Add item to cart - FIXED
  const addToCart = (itemId, itemName, price, quantity = 1) => {
    setCart(prev => {
      const newQuantity = (prev[itemId] || 0) + quantity;
      return {
        ...prev,
        [itemId]: newQuantity
      };
    });
    
    // Register item only once
    if (!ALL_MENU_ITEMS[itemId]) {
      ALL_MENU_ITEMS[itemId] = { id: itemId, name: itemName, price };
    }
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCart(prev => {
      const newCart = { ...prev };
      delete newCart[itemId];
      return newCart;
    });
  };

  // Update item quantity - FIXED
  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart(prev => ({
        ...prev,
        [itemId]: quantity
      }));
    }
  };

  // Clear entire cart
  const clearCart = () => {
    setCart({});
    ALL_MENU_ITEMS = {};
  };

  // Check if item is in cart
  const isInCart = (itemId) => {
    return cart[itemId] > 0;
  };

  // Get cart total amount
  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [itemId, qty]) => {
      const item = ALL_MENU_ITEMS[itemId];
      return total + (item ? item.price * qty : 0);
    }, 0);
  };

  // Get cart items list
  const getCartItems = () => {
    return Object.entries(cart)
      .map(([itemId, qty]) => {
        const item = ALL_MENU_ITEMS[itemId];
        return item ? { ...item, quantity: qty } : null;
      })
      .filter(Boolean)
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  // Generate WhatsApp message
  const generateWhatsAppMessage = () => {
    const items = getCartItems();
    const total = getCartTotal();
    
    if (items.length === 0) {
      return encodeURIComponent('*Cafe Janoshi*\n\nYour cart is empty!');
    }
    
    let message = `*Cafe Janoshi - Order*\n\n`;
    message += `*Order Details:*\n`;
    message += `────────────────────────\n`;
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   ${item.quantity} x Rs ${item.price} = Rs ${item.price * item.quantity}\n`;
    });
    
    message += `\n*Total Amount: Rs ${total}*\n`;
    message += `────────────────────────\n`;
    message += `\n*Customer Information:*\n`;
    message += `Name: _________\n`;
    message += `Phone: _________\n`;
    message += `Address: _________\n`;
    message += `\n*Order Time:* ${new Date().toLocaleString('en-PK')}`;
    
    return encodeURIComponent(message);
  };

  // Context value
  const value = {
    cart,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
    getCartTotal,
    getCartItems,
    generateWhatsAppMessage
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Default export
export default CartContext;