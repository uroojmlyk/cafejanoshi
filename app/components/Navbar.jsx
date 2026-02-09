


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

