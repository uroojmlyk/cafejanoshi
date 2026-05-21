// import './globals.css';
// import { CartProvider } from './context/CartContext';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// export const metadata = {
//   title: "Cafe Janoshi | Okara's Premier Dining",
//   description: 'A refined dining experience in the heart of Okara. Artisan coffee, handcrafted desserts, premium steaks & more. RC7X+CW4, Tehsil Rd, Waris Colony, Okara.',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body>
//         <CartProvider>
//           <Navbar />
//           <main>{children}</main>
//           <Footer />
//         </CartProvider>
//       </body>
//     </html>
//   );
// }








import './globals.css';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: "Cafe Janoshi | Okara's Premier Dining",
  description: 'A refined dining experience in the heart of Okara. Artisan coffee, handcrafted desserts, premium steaks & more. RC7X+CW4, Tehsil Rd, Waris Colony, Okara.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        {/* ✅ Preload critical hero image - FIXES WHITE PAGE */}
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=90" />
      </head>
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}