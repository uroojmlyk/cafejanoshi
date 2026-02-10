// 'use client';

// import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Twitter, Send } from 'lucide-react';
// import Link from 'next/link';
// import { useState } from 'react';

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [subscribed, setSubscribed] = useState(false);

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (email) {
//       setSubscribed(true);
//       setEmail('');
//       setTimeout(() => setSubscribed(false), 3000);
//     }
//   };

//   return (
//     <footer className="bg-transparent text-white pt-16 pb-8 relative overflow-hidden">
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent -z-10"></div>
      
//       {/* Subtle Pattern */}
//       <div className="absolute inset-0 opacity-5 -z-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
//       </div>

//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
//           {/* Brand Column */}
//           <div className="space-y-6">
//             <div className="space-y-4">
//               <h2 className="text-3xl font-bold text-white tracking-wider">
//                 JANOSHI
//               </h2>
//               <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
//                 Okara's premier dining destination where exceptional cuisine meets elegant ambiance. 
//                 Experience culinary perfection.
//               </p>
//             </div>
            
//             {/* Social Media */}
//             <div className="space-y-4">
//               <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Follow Us</h3>
//               <div className="flex space-x-4">
//                 <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors group">
//                   <Facebook size={18} className="text-gray-300 group-hover:text-white" />
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors group">
//                   <Instagram size={18} className="text-gray-300 group-hover:text-white" />
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors group">
//                   <Twitter size={18} className="text-gray-300 group-hover:text-white" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-6">
//             <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
//             <ul className="space-y-3">
//               {['Home', 'Menu', 'About', 'Gallery', 'Reservations', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <Link 
//                     href={`#${item.toLowerCase()}`}
//                     className="text-gray-400 hover:text-amber-400 transition-colors text-sm flex items-center group"
//                   >
//                     <span className="w-1 h-1 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-6">
//             <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-3">
//                 <MapPin className="text-amber-400 mt-1 flex-shrink-0" size={18} />
//                 <div>
//                   <p className="text-gray-300 font-medium mb-1">Address</p>
//                   <p className="text-gray-400 text-sm leading-relaxed">
//                     RC7X+CW4, Tehsil Rd<br />
//                     Waris Colony, Okara
//                   </p>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <Phone className="text-amber-400 flex-shrink-0" size={18} />
//                 <div>
//                   <p className="text-gray-300 font-medium mb-1">Phone</p>
//                   <a href="tel:03210001112" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
//                     0321 0001112
//                   </a>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <Mail className="text-amber-400 flex-shrink-0" size={18} />
//                 <div>
//                   <p className="text-gray-300 font-medium mb-1">Email</p>
//                   <a href="mailto:info@cafejanoshi.com" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
//                     info@cafejanoshi.com
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Opening Hours & Newsletter */}
//           <div className="space-y-8">
//             {/* Opening Hours */}
//             <div className="space-y-4">
//               <h3 className="text-white font-semibold text-lg">Opening Hours</h3>
//               <div className="flex items-start space-x-3">
//                 <Clock className="text-amber-400 mt-1 flex-shrink-0" size={18} />
//                 <div className="space-y-2">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-300">Monday - Sunday</span>
//                     <span className="text-amber-400 font-medium">10 AM - 12 AM</span>
//                   </div>
//                   <p className="text-gray-400 text-xs">
//                     Last orders at 11:30 PM
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Newsletter */}
//             <div className="space-y-4">
//               <h3 className="text-white font-semibold text-lg">Stay Updated</h3>
//               <form onSubmit={handleSubscribe} className="space-y-3">
//                 <div className="relative">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-colors text-sm"
//                     required
//                   />
//                   <button
//                     type="submit"
//                     className="absolute right-2 top-2 p-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
//                   >
//                     <Send size={16} />
//                   </button>
//                 </div>
//                 {subscribed && (
//                   <p className="text-green-400 text-sm animate-fadeIn">
//                     Thank you for subscribing!
//                   </p>
//                 )}
//                 <p className="text-gray-400 text-xs">
//                   Subscribe for exclusive offers and updates
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-white/10 my-8"></div>

//         {/* Bottom Bar */}
//         <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           <div className="text-center md:text-left">
//             <p className="text-gray-400 text-sm">
//               © {new Date().getFullYear()} Cafe Janoshi. All rights reserved.
//             </p>
//             <p className="text-gray-500 text-xs mt-1">
//               Designed with ❤️ for Okara's finest dining experience
//             </p>
//           </div>
          
//           <div className="flex space-x-6">
//             <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
//               Privacy Policy
//             </Link>
//             <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
//               Terms of Service
//             </Link>
//             <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
//               Sitemap
//             </Link>
//           </div>
//         </div>

//         {/* Back to Top */}
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="fixed bottom-6 right-6 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors shadow-lg hover:shadow-amber-500/30 z-40"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//           </svg>
//         </button>
//       </div>

//       {/* CSS Animation */}
//       <style jsx global>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;  




  



'use client';

import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Twitter, Send } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-transparent text-white pt-12 pb-6 md:pt-16 md:pb-8 relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent -z-10"></div>
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wider">
                JANOSHI
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs">
                Okara's premier dining destination where exceptional cuisine meets elegant ambiance. 
                Experience culinary perfection.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider">Follow Us</h3>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors group">
                  <Facebook size={14} className="sm:size-[18px] text-gray-300 group-hover:text-white" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors group">
                  <Instagram size={14} className="sm:size-[18px] text-gray-300 group-hover:text-white" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors group">
                  <Twitter size={14} className="sm:size-[18px] text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Home', 'Menu', 'About', 'Gallery', 'Reservations', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-xs sm:text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-amber-500 rounded-full mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="text-amber-400 mt-0.5 sm:mt-1 flex-shrink-0" size={16} className="sm:size-[18px]" />
                <div>
                  <p className="text-gray-300 font-medium text-xs sm:text-sm mb-0.5 sm:mb-1">Address</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    RC7X+CW4, Tehsil Rd<br />
                    Waris Colony, Okara
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="text-amber-400 flex-shrink-0" size={16} className="sm:size-[18px]" />
                <div>
                  <p className="text-gray-300 font-medium text-xs sm:text-sm mb-0.5 sm:mb-1">Phone</p>
                  <a href="tel:03210001112" className="text-gray-400 hover:text-amber-400 transition-colors text-xs sm:text-sm">
                    0321 0001112
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="text-amber-400 flex-shrink-0" size={16} className="sm:size-[18px]" />
                <div>
                  <p className="text-gray-300 font-medium text-xs sm:text-sm mb-0.5 sm:mb-1">Email</p>
                  <a href="mailto:info@cafejanoshi.com" className="text-gray-400 hover:text-amber-400 transition-colors text-xs sm:text-sm">
                    info@cafejanoshi.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours & Newsletter */}
          <div className="space-y-6 sm:space-y-8">
            {/* Opening Hours */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-white font-semibold text-base sm:text-lg">Opening Hours</h3>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Clock className="text-amber-400 mt-0.5 sm:mt-1 flex-shrink-0" size={16} className="sm:size-[18px]" />
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-300">Monday - Sunday</span>
                    <span className="text-amber-400 font-medium">10 AM - 12 AM</span>
                  </div>
                  <p className="text-gray-400 text-xs">
                    Last orders at 11:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-white font-semibold text-base sm:text-lg">Stay Updated</h3>
              <form onSubmit={handleSubscribe} className="space-y-2 sm:space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-colors text-xs sm:text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 sm:right-2 top-1.5 sm:top-2 p-1.5 sm:p-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                  >
                    <Send size={12} className="sm:size-[16px]" />
                  </button>
                </div>
                {subscribed && (
                  <p className="text-green-400 text-xs sm:text-sm animate-fadeIn">
                    Thank you for subscribing!
                  </p>
                )}
                <p className="text-gray-400 text-xs">
                  Subscribe for exclusive offers and updates
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6 sm:my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} Cafe Janoshi. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Designed with ❤️ for Okara's finest dining experience
            </p>
          </div>
          
          <div className="flex space-x-4 sm:space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 text-white rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors shadow-lg hover:shadow-amber-500/30 z-40"
          aria-label="Back to top"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      {/* CSS Animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        /* Responsive grid adjustments */
        @media (max-width: 640px) {
          .footer-grid {
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;