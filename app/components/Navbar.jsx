




// 'use client';

// import { useState, useEffect } from 'react';
// import { ShoppingCart, X, Phone, MapPin, Menu, Clock } from 'lucide-react';
// import Link from 'next/link';
// import { useCart } from '../context/CartContext';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);
//   const { cartCount, getCartTotal, getCartItems, clearCart, removeFromCart } = useCart();

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close cart when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (cartOpen && !e.target.closest('.cart-container') && !e.target.closest('.cart-button')) {
//         setCartOpen(false);
//       }
//       if (mobileMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
//         setMobileMenuOpen(false);
//       }
//     };
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [cartOpen, mobileMenuOpen]);

//   const navLinks = [
//     { name: 'Home', href: '#', section: 'home' },
//     { name: 'Menu', href: '#menu', section: 'menu' },
//     { name: 'About', href: '#about', section: 'about' },
//     { name: 'Gallery', href: '#gallery', section: 'gallery' },
//     { name: 'Reservations', href: '#booking', section: 'booking' },
//     { name: 'Contact', href: '#contact', section: 'contact' },
//   ];

//   const handleWhatsAppOrder = () => {
//     const items = getCartItems();
//     const total = getCartTotal();
    
//     let message = `*CAFE JANOSHI ORDER*\n\n`;
//     message += `*Order Summary:*\n\n`;
    
//     items.forEach((item, index) => {
//       message += `• ${item.name}\n  Quantity: ${item.quantity} x Rs ${item.price}\n  Subtotal: Rs ${item.price * item.quantity}\n\n`;
//     });
    
//     message += `*Total Amount: Rs ${total}*\n\n`;
//     message += `*Customer Details:*\n`;
//     message += `Name: _________\n`;
//     message += `Phone: _________\n`;
//     message += `Address: _________\n\n`;
//     message += `Delivery: □ Pickup □ Delivery`;
    
//     const encodedMessage = encodeURIComponent(message);
//     window.open(`https://wa.me/923210001112?text=${encodedMessage}`, '_blank');
//     setCartOpen(false);
//   };

//   return (
//     <>
//       {/* Top Info Bar */}
//       <div className="hidden md:block bg-black/95 text-gray-300 text-sm py-2">
//         <div className="container mx-auto px-6">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-6">
//               <div className="flex items-center space-x-2">
//                 <Phone size={14} />
//                 <a href="tel:03210001112" className="hover:text-amber-400 transition-colors">
//                   0321 0001112
//                 </a>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <MapPin size={14} />
//                 <span>Main Boulevard, Okara</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Clock size={14} />
//                 <span>10:00 AM - 12:00 AM</span>
//               </div>
//             </div>
//             <button 
//               onClick={handleWhatsAppOrder}
//               className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-1 rounded text-sm font-medium transition-colors"
//             >
//               Order via WhatsApp
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-black/95 backdrop-blur-md border-b border-white/10' 
//           : 'bg-black/90 backdrop-blur-sm'
//       }`}>
//         <div className="container mx-auto px-4 md:px-6 py-4">
//           <div className="flex items-center justify-between">
            
//             {/* Logo */}
//             <Link href="#" className="flex items-center space-x-3">
//               <div className="flex items-center">
//                 <div className="text-3xl font-bold text-white">CAFE</div>
//                 <div className="text-3xl font-bold text-amber-400 ml-1">JANOSHI</div>
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className="text-gray-300 hover:text-amber-400 transition-colors font-medium text-sm tracking-wide relative group"
//                 >
//                   {link.name}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               ))}
//             </div>

//             {/* Right Section - Cart & Mobile Menu */}
//             <div className="flex items-center space-x-4">
              
//               {/* Cart */}
//               <div className="relative">
//                 <button 
//                   onClick={() => setCartOpen(!cartOpen)}
//                   className="cart-button relative flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors"
//                 >
//                   <ShoppingCart className="text-amber-400" size={20} />
//                   {cartCount > 0 && (
//                     <span className="bg-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                       {cartCount}
//                     </span>
//                   )}
//                 </button>
                
//                 {/* Cart Dropdown */}
//                 {cartOpen && cartCount > 0 && (
//                   <div className="cart-container absolute right-0 top-12 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 animate-fadeIn">
//                     <div className="p-6">
//                       {/* Header */}
//                       <div className="flex items-center justify-between mb-6">
//                         <h3 className="text-lg font-bold text-gray-900">Your Order ({cartCount} items)</h3>
//                         <button 
//                           onClick={() => setCartOpen(false)}
//                           className="text-gray-400 hover:text-gray-600 p-1"
//                         >
//                           <X size={18} />
//                         </button>
//                       </div>
                      
//                       {/* Items List */}
//                       <div className="space-y-4 max-h-72 overflow-y-auto mb-6">
//                         {getCartItems().map((item) => (
//                           <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                             <div className="flex-1">
//                               <h4 className="font-medium text-gray-900">{item.name}</h4>
//                               <div className="flex items-center space-x-4 mt-1">
//                                 <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
//                                 <span className="text-sm text-gray-500">•</span>
//                                 <span className="text-sm text-gray-500">Rs {item.price} each</span>
//                               </div>
//                             </div>
//                             <div className="flex items-center space-x-4">
//                               <span className="font-bold text-gray-900">Rs {item.price * item.quantity}</span>
//                               <button 
//                                 onClick={() => removeFromCart(item.id)}
//                                 className="text-gray-400 hover:text-red-500 p-1"
//                               >
//                                 <X size={14} />
//                               </button>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
                      
//                       {/* Total & Actions */}
//                       <div className="border-t pt-6">
//                         <div className="flex justify-between items-center mb-6">
//                           <span className="text-gray-700 font-medium">Total Amount:</span>
//                           <span className="text-2xl font-bold text-gray-900">Rs {getCartTotal()}</span>
//                         </div>
                        
//                         <div className="grid grid-cols-2 gap-3">
//                           <button
//                             onClick={clearCart}
//                             className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
//                           >
//                             Clear All
//                           </button>
//                           <button
//                             onClick={handleWhatsAppOrder}
//                             className="px-4 py-3 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-colors"
//                           >
//                             Confirm Order
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="menu-button md:hidden bg-white/10 hover:bg-white/20 p-2 rounded-lg"
//               >
//                 {mobileMenuOpen ? (
//                   <X className="text-amber-400" size={24} />
//                 ) : (
//                   <Menu className="text-amber-400" size={24} />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="mobile-menu md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
//             <div className="container mx-auto px-4 py-6">
//               <div className="space-y-1">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     className="block py-3 px-4 text-gray-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors font-medium"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
                
//                 {/* Mobile Contact Info */}
//                 <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
//                   <a 
//                     href="tel:03210001112" 
//                     className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors"
//                   >
//                     <Phone size={18} />
//                     <span>0321 0001112</span>
//                   </a>
                  
//                   <div className="flex items-center space-x-3 text-gray-300">
//                     <MapPin size={18} />
//                     <span>Main Boulevard, Okara</span>
//                   </div>
                  
//                   <div className="flex items-center space-x-3 text-gray-300">
//                     <Clock size={18} />
//                     <span>Open: 10:00 AM - 12:00 AM</span>
//                   </div>
//                 </div>
                
//                 {/* Cart Summary in Mobile */}
//                 {cartCount > 0 && (
//                   <div className="pt-6 mt-6 border-t border-white/10">
//                     <div className="flex justify-between items-center mb-4">
//                       <span className="text-gray-400">Items in cart:</span>
//                       <span className="text-amber-400 font-bold">{cartCount}</span>
//                     </div>
//                     <div className="flex justify-between items-center mb-6">
//                       <span className="text-gray-400">Total:</span>
//                       <span className="text-xl font-bold text-white">Rs {getCartTotal()}</span>
//                     </div>
//                     <div className="grid grid-cols-2 gap-3">
//                       <button
//                         onClick={clearCart}
//                         className="px-4 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
//                       >
//                         Clear Cart
//                       </button>
//                       <button
//                         onClick={handleWhatsAppOrder}
//                         className="px-4 py-3 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-colors"
//                       >
//                         Order Now
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Empty Cart Notification */}
//       {cartOpen && cartCount === 0 && (
//         <div className="cart-container absolute right-4 top-20 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 animate-fadeIn">
//           <div className="p-6 text-center">
//             <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
//             <h3 className="text-lg font-bold text-gray-900 mb-2">Your cart is empty</h3>
//             <p className="text-gray-500 mb-6">Add items from our menu to get started</p>
//             <button
//               onClick={() => {
//                 setCartOpen(false);
//                 document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
//               }}
//               className="w-full px-4 py-3 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-colors"
//             >
//               Browse Menu
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;








'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, X, Phone, MapPin, Menu, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartCount, getCartTotal, getCartItems, clearCart, removeFromCart } = useCart();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartOpen && !e.target.closest('.cart-container') && !e.target.closest('.cart-button')) {
        setCartOpen(false);
      }
      if (mobileMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [cartOpen, mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#', section: 'home' },
    { name: 'Menu', href: '#menu', section: 'menu' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Gallery', href: '#gallery', section: 'gallery' },
    { name: 'Reservations', href: '#booking', section: 'booking' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ];

  const handleWhatsAppOrder = () => {
    const items = getCartItems();
    const total = getCartTotal();
    
    let message = `*CAFE JANOSHI ORDER*\n\n`;
    message += `*Order Summary:*\n\n`;
    
    items.forEach((item, index) => {
      message += `• ${item.name}\n  Quantity: ${item.quantity} x Rs ${item.price}\n  Subtotal: Rs ${item.price * item.quantity}\n\n`;
    });
    
    message += `*Total Amount: Rs ${total}*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: _________\n`;
    message += `Phone: _________\n`;
    message += `Address: _________\n\n`;
    message += `Delivery: □ Pickup □ Delivery`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923210001112?text=${encodedMessage}`, '_blank');
    setCartOpen(false);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:block bg-black/95 text-gray-300 text-sm py-2">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <a href="tel:03210001112" className="hover:text-amber-400 transition-colors">
                  0321 0001112
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span className="max-w-xs truncate">RC7X+CW4, Tehsil Rd, Waris Colony, Okara</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={14} />
                <span>10:00 AM - 12:00 AM</span>
              </div>
            </div>
            <button 
              onClick={handleWhatsAppOrder}
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-1 rounded text-sm font-medium transition-colors"
            >
              Order via WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10' 
          : 'bg-black/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo with Animation */}
            <Link href="#" className="flex items-center space-x-3 group">
              <div className="relative overflow-hidden">
                {/* Logo Animation Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                
                {/* Logo Text */}
                <div className="relative px-6 py-2">
                  <h1 className="text-2xl font-bold text-white tracking-wide">
                    <span className="relative z-10">JANOSHI</span>
                  </h1>
                  <div className="absolute -bottom-1 left-6 right-6 h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-amber-400 transition-colors font-medium text-sm tracking-wide relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Right Section - Cart & Mobile Menu */}
            <div className="flex items-center space-x-4">
              
              {/* Cart */}
              <div className="relative">
                <button 
                  onClick={() => setCartOpen(!cartOpen)}
                  className="cart-button relative flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors group"
                >
                  <ShoppingCart className="text-amber-400 group-hover:scale-110 transition-transform" size={20} />
                  {cartCount > 0 && (
                    <span className="bg-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      {cartCount}
                    </span>
                  )}
                </button>
                
                {/* Cart Dropdown */}
                {cartOpen && cartCount > 0 && (
                  <div className="cart-container absolute right-0 top-12 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 animate-fadeIn">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900">Your Order ({cartCount} items)</h3>
                        <button 
                          onClick={() => setCartOpen(false)}
                          className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                        >
                          <X size={18} />
                        </button>
                      </div>
                      
                      {/* Items List */}
                      <div className="space-y-4 max-h-72 overflow-y-auto mb-6">
                        {getCartItems().map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{item.name}</h4>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
                                <span className="text-sm text-gray-500">•</span>
                                <span className="text-sm text-gray-500">Rs {item.price} each</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <span className="font-bold text-gray-900">Rs {item.price * item.quantity}</span>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-gray-400 hover:text-red-500 p-1 rounded-full hover:bg-gray-200"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Total & Actions */}
                      <div className="border-t pt-6">
                        <div className="flex justify-between items-center mb-6">
                          <span className="text-gray-700 font-medium">Total Amount:</span>
                          <span className="text-2xl font-bold text-gray-900">Rs {getCartTotal()}</span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            onClick={clearCart}
                            className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                          >
                            Clear All
                          </button>
                          <button
                            onClick={handleWhatsAppOrder}
                            className="px-4 py-3 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-colors flex items-center justify-center space-x-2"
                          >
                            <span>Confirm Order</span>
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="menu-button md:hidden bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="text-amber-400" size={24} />
                ) : (
                  <Menu className="text-amber-400" size={24} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 animate-slideDown">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center justify-between py-3 px-4 text-gray-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors font-medium group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
                  <a 
                    href="tel:03210001112" 
                    className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors py-2"
                  >
                    <Phone size={18} />
                    <span>0321 0001112</span>
                  </a>
                  
                  <div className="flex items-start space-x-3 text-gray-300 py-2">
                    <MapPin size={18} className="mt-1" />
                    <div className="text-sm">
                      <div className="font-medium mb-1">Location:</div>
                      <div>RC7X+CW4, Tehsil Rd, Waris Colony, Okara</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-300 py-2">
                    <Clock size={18} />
                    <span>Open: 10:00 AM - 12:00 AM</span>
                  </div>
                </div>
                
                {/* Cart Summary in Mobile */}
                {cartCount > 0 && (
                  <div className="pt-6 mt-6 border-t border-white/10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-400">Items in cart:</span>
                      <span className="text-amber-400 font-bold">{cartCount}</span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-gray-400">Total:</span>
                      <span className="text-xl font-bold text-white">Rs {getCartTotal()}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={clearCart}
                        className="px-4 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        Clear Cart
                      </button>
                      <button
                        onClick={handleWhatsAppOrder}
                        className="px-4 py-3 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>Order Now</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Empty Cart Notification */}
      {cartOpen && cartCount === 0 && (
        <div className="cart-container absolute right-4 top-20 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 animate-fadeIn">
          <div className="p-6 text-center">
            <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Add items from our menu to get started</p>
            <button
              onClick={() => {
                setCartOpen(false);
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full px-4 py-3 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-colors"
            >
              Browse Menu
            </button>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;