


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
//         {/* ✅ Preload critical hero image - FIXES WHITE PAGE */}
//         <link rel="preload" as="image" href="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=90" />
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
        {/*
          CRITICAL: Inline style prevents the silver/white flash before CSS loads.
          This sets background color synchronously before any JS/CSS file is parsed.
        */}
        <style dangerouslySetInnerHTML={{ __html: `
          html, body {
            background-color: #f3ede2 !important;
            margin: 0;
            padding: 0;
          }
          /* Prevent FOUC on dark sections */
          #__next, main { background-color: #f3ede2; }
        `}} />
      </head>
      <body style={{ backgroundColor: '#f3ede2' }}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}