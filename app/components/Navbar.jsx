// 'use client'

// import { useState, useEffect } from 'react'
// import { Menu, X, Phone, MapPin, ShoppingCart } from 'lucide-react'
// import Link from 'next/link'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navLinks = [
//     { name: 'Home', href: '#' },
//     { name: 'Menu', href: '#menu' },
//     { name: 'About', href: '#about' },
//     { name: 'Gallery', href: '#gallery' },
//     { name: 'Book Table', href: '#booking' },
//     { name: 'Contact', href: '#contact' },
//   ]

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       scrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
//     }`}>
//       <div className="container mx-auto px-4 md:px-8">
//         <div className="flex justify-between items-center">
          
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
//               <span className="text-black font-bold text-xl">CJ</span>
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
//                 Cafe Janoshi
//               </h1>
//               <p className="text-xs text-gray-300">Okara&apos;s Flavor Hub</p>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-300 hover:text-orange-400 transition-colors font-medium hover-lift"
//               >
//                 {link.name}
//               </Link>
//             ))}
            
//             {/* Contact Info */}
//             <div className="flex items-center space-x-6 ml-8">
//               <div className="flex items-center space-x-2">
//                 <Phone size={18} className="text-orange-400" />
//                 <span className="text-sm">+92 300 1234567</span>
//               </div>
//               <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all hover-lift">
//                 Order Now
//               </button>
//               <div className="relative">
//                 <ShoppingCart className="text-orange-400 cursor-pointer" />
//                 <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   0
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-orange-400"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden mt-4 bg-black/95 backdrop-blur-lg rounded-xl p-6 border border-gray-800">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className="text-gray-300 hover:text-orange-400 py-2 border-b border-gray-800"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//               <div className="pt-4 space-y-3">
//                 <div className="flex items-center space-x-2">
//                   <Phone size={18} className="text-orange-400" />
//                   <span>+92 300 1234567</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <MapPin size={18} className="text-orange-400" />
//                   <span className="text-sm">Main Boulevard, Okara</span>
//                 </div>
//                 <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold mt-2">
//                   Call to Order
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar    







'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, getCartTotal, getCartItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Book Table', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ];

  const whatsappNumber = '923210001112'; // Your WhatsApp number

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
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md py-3' : 'bg-black/80 backdrop-blur-sm py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">CJ</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Cafe Janoshi
              </h1>
              <p className="text-xs text-gray-300">Okara&apos;s Flavor Hub</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-orange-400 transition-colors font-medium hover-lift"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Contact Info & Cart */}
            <div className="flex items-center space-x-6 ml-8">
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-orange-400" />
                <span className="text-sm">0321 0001112</span>
              </div>
              
              {/* Cart with Count */}
              <div className="relative group">
                <ShoppingCart className="text-orange-400 cursor-pointer w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
                
                {/* Cart Dropdown */}
                {cartCount > 0 && (
                  <div className="absolute right-0 top-10 w-80 bg-black/95 backdrop-blur-lg rounded-xl p-4 border border-orange-500/30 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                        <span className="text-orange-400 font-bold">Cart ({cartCount})</span>
                        <span className="text-white font-bold">Rs {getCartTotal()}</span>
                      </div>
                      
                      <div className="max-h-60 overflow-y-auto space-y-2">
                        {getCartItems().slice(0, 3).map((item) => (
                          <div key={item.id} className="flex justify-between items-center text-sm">
                            <span className="text-gray-300 truncate">{item.name} x{item.quantity}</span>
                            <span className="text-orange-400 font-bold">Rs {item.price * item.quantity}</span>
                          </div>
                        ))}
                        {getCartItems().length > 3 && (
                          <div className="text-gray-400 text-xs text-center">+{getCartItems().length - 3} more items</div>
                        )}
                      </div>
                      
                      <button
                        onClick={handleWhatsAppOrder}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all"
                      >
                        Checkout on WhatsApp
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <button 
                onClick={handleWhatsAppOrder}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all hover-lift"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-orange-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-black/95 backdrop-blur-lg rounded-xl p-6 border border-gray-800">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-orange-400 py-2 border-b border-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone size={18} className="text-orange-400" />
                  <span>0321 0001112</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={18} className="text-orange-400" />
                  <span className="text-sm">Main Boulevard, Okara</span>
                </div>
                
                {/* Cart Info Mobile */}
                {cartCount > 0 && (
                  <div className="py-3 border-t border-gray-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-400 font-bold">Cart: {cartCount} items</span>
                      <span className="text-white font-bold">Rs {getCartTotal()}</span>
                    </div>
                    <button 
                      onClick={() => {
                        handleWhatsAppOrder();
                        setIsOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold"
                    >
                      Checkout on WhatsApp
                    </button>
                  </div>
                )}
                
                <button 
                  onClick={() => {
                    handleWhatsAppOrder();
                    setIsOpen(false);
                  }}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold mt-2"
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