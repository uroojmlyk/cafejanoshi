



// 'use client';

// import { useState, useEffect } from 'react';
// import { Menu, X, Phone, MapPin, ShoppingCart, Coffee, ChefHat } from 'lucide-react';
// import Link from 'next/link';
// import { useCart } from '../context/CartContext';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [showCart, setShowCart] = useState(false);
//   const { cartCount, getCartTotal, getCartItems } = useCart();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (isOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [isOpen]);

//   const navLinks = [
//     { name: 'Home', href: '#' },
//     { name: 'Menu', href: '#menu' },
//     { name: 'About', href: '#about' },
//     { name: 'Gallery', href: '#gallery' },
//     { name: 'Book Table', href: '#booking' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   const whatsappNumber = '923210001112';

//   const handleWhatsAppOrder = () => {
//     const items = getCartItems();
//     const total = getCartTotal();
    
//     let message = `*Cafe Janoshi Order*\n\n`;
//     message += `*Order Details:*\n`;
    
//     items.forEach((item, index) => {
//       message += `${index + 1}. ${item.name} - ${item.quantity} x Rs ${item.price} = Rs ${item.price * item.quantity}\n`;
//     });
    
//     message += `\n*Total: Rs ${total}*\n`;
//     message += `\nPlease provide your details:\n`;
//     message += `Name: \nPhone: \nAddress: \n`;
    
//     const encodedMessage = encodeURIComponent(message);
//     window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
//   };

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-500 ${
//       scrolled 
//         ? 'bg-gradient-to-b from-black/95 to-zinc-950/95 backdrop-blur-xl py-3 border-b border-orange-500/20 shadow-2xl' 
//         : 'bg-gradient-to-b from-black/90 to-transparent backdrop-blur-lg py-5'
//     }`}>
//       <div className="container mx-auto px-4 md:px-8">
//         <div className="flex justify-between items-center">
          
//           {/* Logo - Animated */}
//           <Link href="#" className="flex items-center space-x-3 group">
//             <div className="relative">
//               {/* Animated background circle */}
//               <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
              
//               {/* Logo container */}
//               <div className="relative h-12 w-12 bg-gradient-to-br from-orange-500 via-yellow-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 border-2 border-orange-400/30 shadow-lg shadow-orange-500/20">
//                 {/* Animated coffee steam */}
//                 <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
//                   <div className="flex space-x-1">
//                     <div className="w-1 h-2 bg-gradient-to-t from-orange-200/80 to-transparent rounded-full animate-pulse"></div>
//                     <div className="w-1 h-3 bg-gradient-to-t from-orange-200/80 to-transparent rounded-full animate-pulse delay-75"></div>
//                     <div className="w-1 h-2 bg-gradient-to-t from-orange-200/80 to-transparent rounded-full animate-pulse delay-150"></div>
//                   </div>
//                 </div>
                
//                 {/* Logo icon */}
//                 <Coffee className="w-6 h-6 text-black animate-pulse" />
                
//                 {/* Pulsing ring */}
//                 <div className="absolute inset-0 border-2 border-orange-400/20 rounded-full animate-ping"></div>
//               </div>
//             </div>
            
//             {/* Text */}
//             <div className="transform transition-all duration-300 group-hover:translate-x-1">
//               <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
//                 Cafe Janoshi
//               </h1>
//               <p className="text-xs text-gray-300 flex items-center gap-1">
//                 <ChefHat size={10} />
//                 <span className="text-orange-300">Okara's Premium Cafe</span>
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navLinks.map((link, index) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="relative px-5 py-2 text-gray-300 hover:text-orange-400 transition-all duration-300 group"
//               >
//                 <span className="relative z-10 font-medium">{link.name}</span>
                
//                 {/* Hover effect */}
//                 <span className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
//                 {/* Active indicator */}
//                 <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-8 transition-all duration-300"></span>
//               </Link>
//             ))}
            
//             {/* Contact Info & Cart */}
//             <div className="flex items-center space-x-6 ml-8 pl-8 border-l border-gray-800">
//               {/* Phone */}
//               <div className="flex items-center space-x-2 group cursor-pointer">
//                 <div className="p-2 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-all">
//                   <Phone size={18} className="text-orange-400" />
//                 </div>
//                 <div>
//                   <span className="text-sm text-white font-medium block">Call Us</span>
//                   <a href="tel:03210001112" className="text-gray-300 hover:text-orange-400 transition-colors text-xs">
//                     0321 0001112
//                   </a>
//                 </div>
//               </div>
              
//               {/* Cart with Count */}
//               <div className="relative">
//                 <button 
//                   onClick={() => setShowCart(!showCart)}
//                   className="relative p-2 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg hover:from-orange-500/20 hover:to-red-500/20 transition-all group"
//                 >
//                   <ShoppingCart className="text-orange-400 w-6 h-6 group-hover:scale-110 transition-transform" />
                  
//                   {/* Cart Count Badge */}
//                   {cartCount > 0 && (
//                     <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-bounce shadow-lg shadow-orange-500/30">
//                       {cartCount}
//                     </span>
//                   )}
//                 </button>
                
//                 {/* Cart Dropdown */}
//                 {showCart && cartCount > 0 && (
//                   <div className="absolute right-0 top-12 w-96 bg-gradient-to-br from-zinc-900 to-black backdrop-blur-xl rounded-2xl p-6 border border-orange-500/30 shadow-2xl shadow-orange-500/20">
//                     <div className="space-y-4">
//                       {/* Header */}
//                       <div className="flex justify-between items-center border-b border-gray-800 pb-3">
//                         <div>
//                           <h3 className="text-xl font-bold text-white">Your Cart</h3>
//                           <p className="text-gray-400 text-sm">{cartCount} items</p>
//                         </div>
//                         <button 
//                           onClick={() => setShowCart(false)}
//                           className="text-gray-400 hover:text-white"
//                         >
//                           <X size={20} />
//                         </button>
//                       </div>
                      
//                       {/* Cart Items */}
//                       <div className="max-h-64 overflow-y-auto space-y-3">
//                         {getCartItems().map((item) => (
//                           <div key={item.id} className="flex justify-between items-center p-3 bg-zinc-900/50 rounded-xl">
//                             <div>
//                               <span className="text-white font-medium">{item.name}</span>
//                               <p className="text-gray-400 text-sm">x{item.quantity}</p>
//                             </div>
//                             <div className="text-right">
//                               <span className="text-orange-400 font-bold">Rs {item.price * item.quantity}</span>
//                               <p className="text-gray-400 text-sm">Rs {item.price} each</p>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
                      
//                       {/* Total */}
//                       <div className="border-t border-gray-800 pt-4">
//                         <div className="flex justify-between items-center mb-4">
//                           <span className="text-gray-300">Subtotal</span>
//                           <span className="text-white font-bold text-lg">Rs {getCartTotal()}</span>
//                         </div>
                        
//                         {/* Buttons */}
//                         <div className="grid grid-cols-2 gap-3">
//                           <button
//                             onClick={() => {
//                               // Clear cart logic here
//                               setShowCart(false);
//                             }}
//                             className="px-4 py-3 bg-zinc-800 text-gray-300 rounded-xl font-medium hover:bg-zinc-700 transition-all"
//                           >
//                             Clear Cart
//                           </button>
//                           <button
//                             onClick={() => {
//                               handleWhatsAppOrder();
//                               setShowCart(false);
//                             }}
//                             className="px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-orange-500/30 transition-all"
//                           >
//                             Checkout
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
              
//               {/* Order Now Button */}
//               <button 
//                 onClick={handleWhatsAppOrder}
//                 className="relative px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold group overflow-hidden shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
//               >
//                 <span className="relative z-10">Order Now</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
//               </button>
//             </div>
//           </div>

//           {/* MOBILE MENU BUTTON - Fixed */}
//           <button
//             className="md:hidden menu-button z-60 p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20"
//             onClick={(e) => {
//               e.stopPropagation();
//               setIsOpen(!isOpen);
//             }}
//           >
//             {isOpen ? (
//               <X className="w-6 h-6 text-orange-400 animate-spin-in" />
//             ) : (
//               <Menu className="w-6 h-6 text-orange-400 animate-pulse" />
//             )}
            
//             {/* Cart badge on mobile */}
//             {cartCount > 0 && !isOpen && (
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
//                 {cartCount}
//               </span>
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu - Fixed */}
//         {isOpen && (
//           <div className="md:hidden mobile-menu fixed inset-0 top-20 z-50 bg-black/95 backdrop-blur-xl">
//             <div className="container mx-auto px-6 py-8">
//               {/* Mobile Menu Links */}
//               <div className="flex flex-col space-y-1">
//                 {navLinks.map((link, index) => (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     className="group py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10 transition-all duration-300"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     <div className="flex items-center space-x-3">
//                       <div className="w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                       <span className="text-lg text-gray-300 group-hover:text-orange-400 transition-colors">
//                         {link.name}
//                       </span>
//                     </div>
//                   </Link>
//                 ))}
//               </div>

//               {/* Contact Info Mobile */}
//               <div className="mt-8 pt-8 border-t border-gray-800 space-y-6">
//                 {/* Phone */}
//                 <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl">
//                   <div className="p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg">
//                     <Phone className="w-5 h-5 text-orange-400" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-400">Call Us</p>
//                     <a 
//                       href="tel:03210001112" 
//                       className="text-white font-bold text-lg hover:text-orange-400 transition-colors"
//                     >
//                       0321 0001112
//                     </a>
//                   </div>
//                 </div>

//                 {/* Location */}
//                 <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl">
//                   <div className="p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg">
//                     <MapPin className="w-5 h-5 text-orange-400" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-400">Visit Us</p>
//                     <p className="text-white text-sm">
//                       Main Boulevard, Okara
//                     </p>
//                   </div>
//                 </div>

//                 {/* Cart Summary */}
//                 {cartCount > 0 && (
//                   <div className="p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20">
//                     <div className="flex justify-between items-center mb-4">
//                       <div>
//                         <p className="text-gray-400">Your Cart</p>
//                         <p className="text-white font-bold">{cartCount} items</p>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-gray-400">Total</p>
//                         <p className="text-orange-400 font-bold text-xl">Rs {getCartTotal()}</p>
//                       </div>
//                     </div>
                    
//                     <button
//                       onClick={() => {
//                         handleWhatsAppOrder();
//                         setIsOpen(false);
//                       }}
//                       className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold shadow-lg shadow-orange-500/30"
//                     >
//                       Checkout Now
//                     </button>
//                   </div>
//                 )}

//                 {/* Order Now Button */}
//                 <button
//                   onClick={() => {
//                     handleWhatsAppOrder();
//                     setIsOpen(false);
//                   }}
//                   className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold text-lg shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all"
//                 >
//                   Order Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Add CSS for animations */}
//       <style jsx>{`
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
        
//         @keyframes spin-in {
//           0% { transform: rotate(-180deg); opacity: 0; }
//           100% { transform: rotate(0deg); opacity: 1; }
//         }
//         .animate-spin-in {
//           animation: spin-in 0.3s ease-out;
//         }
        
//         .hover-lift:hover {
//           transform: translateY(-2px);
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;  








'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, ShoppingCart, Coffee, ChefHat, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartCount, getCartTotal, getCartItems, clearCart, removeFromCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
        setIsOpen(false);
      }
      if (showCart && !e.target.closest('.cart-dropdown') && !e.target.closest('.cart-button')) {
        setShowCart(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, showCart]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Book Table', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleWhatsAppOrder = () => {
    const items = getCartItems();
    const total = getCartTotal();
    
    let message = `*Cafe Janoshi Order*\n\n`;
    message += `*Order Details:*\n`;
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ${item.quantity} x Rs ${item.price} = Rs ${item.price * item.quantity}\n`;
    });
    
    message += `\n*Total: Rs ${total}*\n`;
    message += `\nPlease provide your details:\n`;
    message += `Name: \nPhone: \nAddress: \n`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923210001112?text=${encodedMessage}`, '_blank');
  };

  const handleClearCart = () => {
    clearCart();
    setShowCart(false);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md py-3 border-b border-orange-500/20' 
        : 'bg-black/90 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo - Clean Design */}
          <Link href="#" className="flex items-center space-x-3">
            <div className="relative">
              <div className="h-10 w-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <Coffee className="w-5 h-5 text-black" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Cafe Janoshi</h1>
              <p className="text-xs text-gray-300">Okara&apos;s Premium Cafe</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Phone & Cart */}
            <div className="flex items-center space-x-4">
              {/* Phone */}
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-orange-400" />
                <a href="tel:03210001112" className="text-white text-sm hover:text-orange-400 transition-colors">
                  0321 0001112
                </a>
              </div>
              
              {/* Cart with Count */}
              <div className="relative">
                <button 
                  onClick={() => setShowCart(!showCart)}
                  className="cart-button relative p-2"
                >
                  <ShoppingCart className="text-orange-400 w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </button>
                
                {/* Cart Dropdown */}
                {showCart && cartCount > 0 && (
                  <div className="cart-dropdown absolute right-0 top-10 w-80 bg-white rounded-lg shadow-xl border border-gray-200">
                    <div className="p-4">
                      {/* Header */}
                      <div className="flex justify-between items-center mb-4 pb-3 border-b">
                        <h3 className="font-bold text-gray-900">Your Cart ({cartCount})</h3>
                        <button 
                          onClick={() => setShowCart(false)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X size={18} />
                        </button>
                      </div>
                      
                      {/* Cart Items */}
                      <div className="max-h-64 overflow-y-auto space-y-3 mb-4">
                        {getCartItems().map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <div className="flex-1">
                              <span className="text-sm font-medium text-gray-900">{item.name}</span>
                              <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <span>Qty: {item.quantity}</span>
                                <span>•</span>
                                <span>Rs {item.price}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="font-bold text-orange-600">Rs {item.price * item.quantity}</span>
                              <button 
                                onClick={() => handleRemoveItem(item.id)}
                                className="text-gray-400 hover:text-red-500"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Total */}
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-gray-700">Total:</span>
                          <span className="text-xl font-bold text-gray-900">Rs {getCartTotal()}</span>
                        </div>
                        
                        {/* Buttons */}
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={handleClearCart}
                            className="px-3 py-2 bg-gray-200 text-gray-700 rounded text-sm font-medium hover:bg-gray-300 transition-colors"
                          >
                            Clear Cart
                          </button>
                          <button
                            onClick={() => {
                              handleWhatsAppOrder();
                              setShowCart(false);
                            }}
                            className="px-3 py-2 bg-orange-500 text-white rounded text-sm font-bold hover:bg-orange-600 transition-colors"
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Order Now Button */}
              <button 
                onClick={handleWhatsAppOrder}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-bold text-sm hover:shadow-lg transition-shadow"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-orange-400" />
            ) : (
              <Menu className="w-6 h-6 text-orange-400" />
            )}
            {cartCount > 0 && !isOpen && (
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mobile-menu mt-4 bg-black/95 backdrop-blur-lg rounded-lg border border-gray-800 p-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-orange-400 py-2 px-3 rounded hover:bg-gray-800/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-800 space-y-3">
                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-orange-400" />
                  <a href="tel:03210001112" className="text-white hover:text-orange-400">
                    0321 0001112
                  </a>
                </div>
                
                {/* Location */}
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <MapPin size={16} className="text-orange-400" />
                  <span>Main Boulevard, Okara</span>
                </div>
                
                {/* Cart Summary */}
                {cartCount > 0 && (
                  <div className="pt-3 border-t border-gray-800">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-400">Cart: {cartCount} items</span>
                      <span className="text-orange-400 font-bold">Rs {getCartTotal()}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          clearCart();
                          setIsOpen(false);
                        }}
                        className="px-3 py-2 bg-gray-800 text-gray-300 rounded text-sm"
                      >
                        Clear Cart
                      </button>
                      <button
                        onClick={() => {
                          handleWhatsAppOrder();
                          setIsOpen(false);
                        }}
                        className="px-3 py-2 bg-orange-500 text-white rounded text-sm font-bold"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Order Button */}
                <button
                  onClick={() => {
                    handleWhatsAppOrder();
                    setIsOpen(false);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-bold mt-2"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

