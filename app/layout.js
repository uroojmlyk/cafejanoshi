// import { Inter } from 'next/font/google'
// import './globals.css'
// import Navbar from './components/Navbar'
// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Cafe Janoshi | Okara\'s Premium Restaurant',
//   description: 'Experience the finest dining in Okara at Cafe Janoshi. Authentic flavors, cozy ambiance, and unforgettable moments.',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} bg-[#0F0F0F] text-[#F8F5F0]`}>
//         <Navbar />
//         <main className="min-h-screen">
//           {children}
//         </main>
//         {/* Footer will be added later */}
//       </body>
//     </html>
//   )
// }




import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from './context/CartContext'; // ✅ Direct path
import Navbar from './components/Navbar'; // ✅ Direct path

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cafe Janoshi | Okara\'s Premium Restaurant',
  description: 'Experience the finest dining in Okara at Cafe Janoshi.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0F0F0F] text-[#F8F5F0]`}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}