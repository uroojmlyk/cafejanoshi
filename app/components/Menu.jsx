







// 'use client';

// import { useState } from 'react';
// import { Plus, Minus, Star, ChefHat, Coffee, CupSoda, Cake, Pizza, Beef, Sandwich, Fish, Utensils, Soup, IceCream } from 'lucide-react';
// import { useCart, registerMenuItem } from '../context/CartContext';

// // Category Images Mapping
// const CATEGORY_IMAGES = {
//   shakes: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80',
//   chillers: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=500&q=80',
//   mojitos: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=500&q=80',
//   margaritas: 'https://images.unsplash.com/photo-1510707577719-ae7c9b788690?auto=format&fit=crop&w=500&q=80',
//   icedCoffee: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80',
//   desserts: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80',
//   tea: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=500&q=80',
//   coffee: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80',
//   thai: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=500&q=80',
//   specials: 'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?auto=format&fit=crop&w=500&q=80',
//   steaks: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80',
//   burgers: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
//   pizza: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80',
//   broast: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=500&q=80',
//   wraps: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=500&q=80',
//   pasta: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80',
//   soups: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80',
//   salads: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80',
//   sandwiches: 'https://images.unsplash.com/photo-1550507991-ca1faa30e324?auto=format&fit=crop&w=500&q=80',
//   appetizers: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80',
// };

// // COMPLETE 155 ITEMS - EXACT NAMES AS YOU PROVIDED
// const COMPLETE_MENU_CATEGORIES = [
//   {
//     id: 'shakes',
//     name: 'Signature Shakes',
//     icon: '🥤',
//     items: [
//       { id: 'lotus-shake', name: 'Lotus Shake', price: 699, description: 'Crushed Lotus biscuits with creamy milk' },
//       { id: 'kitkat-shake', name: 'Kitkat Shake', price: 599, description: 'Chocolate Kitkat delight' },
//       { id: 'oreo-shake', name: 'Oreo Shake', price: 499, description: 'Classic Oreo cookies blend' },
//       { id: 'nutella-shake', name: 'Nutella Shake', price: 699, description: 'Rich Nutella chocolate shake' },
//       { id: 'cold-coffee', name: 'Cold Coffee', price: 699, description: 'Iced coffee perfection' },
//       { id: 'vanilla-shake', name: 'Vanilla Shake', price: 699, description: 'Classic vanilla flavor' },
//       { id: 'mango-shake', name: 'Mango Shake', price: 699, description: 'Fresh mango delight' },
//       { id: 'strawberry-shake', name: 'Strawberry Shake', price: 699, description: 'Sweet strawberry blend' },
//       { id: 'pistacio-shake', name: 'Pistacio Shake', price: 699, description: 'Nutty pistachio flavor' },
//       { id: 'protein-shake', name: 'Protein Shake', price: 699, description: 'Healthy protein boost' },
//       { id: 'blueberry-shake', name: 'Blueberry Shake', price: 699, description: 'Antioxidant rich blueberry' },
//       { id: 'cocktail-shake', name: 'Cocktail Shake', price: 699, description: 'Mixed fruit special' },
//     ]
//   },
//   {
//     id: 'chillers',
//     name: 'Refreshing Chillers',
//     icon: '🧊',
//     items: [
//       { id: 'blue-buzz', name: 'Blue Buzz', price: 549, description: 'Blueberry mint cooler' },
//       { id: 'peach-buzz', name: 'Peach Buzz', price: 549, description: 'Fresh peach delight' },
//       { id: 'mango-buzz', name: 'Mango Buzz', price: 549, description: 'Tropical mango blast' },
//       { id: 'mix-buzz', name: 'Mix Buzz', price: 549, description: 'Mixed fruit explosion' },
//       { id: 'passion-fruit', name: 'Passion Fruit', price: 549, description: 'Exotic passion fruit' },
//       { id: 'kiwi-crush', name: 'Kiwi Crush', price: 549, description: 'Tangy kiwi freshness' },
//       { id: 'green-apple', name: 'Green Apple', price: 549, description: 'Crisp apple flavor' },
//       { id: 'mix-berries', name: 'Mix Berries', price: 549, description: 'Berry medley' },
//     ]
//   },
//   {
//     id: 'mojitos',
//     name: 'Fresh Mojitos',
//     icon: '🌿',
//     items: [
//       { id: 'moon-rocker', name: 'Moon Rocker', price: 599, description: 'Special mint mojito' },
//       { id: 'italian-mojito', name: 'Italian Mojito', price: 499, description: 'Italian herbs twist' },
//       { id: 'north-pole', name: 'North Pole', price: 499, description: 'Minty cool sensation' },
//       { id: 'green-apple-mojito', name: 'Green Apple Mojito', price: 499, description: 'Apple mint fusion' },
//       { id: 'electric-lemonade', name: 'Electric Lemonade', price: 499, description: 'Zesty lemon blast' },
//       { id: 'blue-lagoon', name: 'Blue Lagoon', price: 499, description: 'Blue curacao special' },
//       { id: 'royal-rose', name: 'Royal Rose', price: 599, description: 'Rose flavored luxury' },
//       { id: 'the-green', name: 'The Green', price: 599, description: 'Fresh herbal blend' },
//     ]
//   },
//   {
//     id: 'margaritas',
//     name: 'Margaritas',
//     icon: '🍹',
//     items: [
//       { id: 'mint-margarita', name: 'Mint Margarita', price: 349, description: 'Refreshing mint margarita' },
//       { id: 'blueberry-margarita', name: 'Blue Berry Margarita', price: 449, description: 'Sweet blueberry margarita' },
//       { id: 'strawberry-margarita', name: 'Strawberry Margarita', price: 449, description: 'Fresh strawberry blend' },
//     ]
//   },
//   {
//     id: 'icedCoffee',
//     name: 'Iced Coffee',
//     icon: '❄️',
//     items: [
//       { id: 'frappuccino', name: 'Frappuccino', price: 699, description: 'Blended ice coffee' },
//       { id: 'cafe-latte-iced', name: 'Cafe Latte', price: 699, description: 'Iced latte' },
//       { id: 'pistacio-latte', name: 'Pistacio Latte', price: 699, description: 'Pistachio flavored latte' },
//       { id: 'nutella-latte', name: 'Nutella Latte', price: 699, description: 'Nutella coffee delight' },
//       { id: 'lotus-latte', name: 'Lotus Latte', price: 699, description: 'Biscoff lotus latte' },
//       { id: 'strawberry-latte', name: 'Strawberry Latte', price: 699, description: 'Strawberry flavored latte' },
//       { id: 'blueberry-latte', name: 'Blue Berry Latte', price: 699, description: 'Blueberry coffee blend' },
//     ]
//   },
//   {
//     id: 'desserts',
//     name: 'Sweet Desserts',
//     icon: '🍰',
//     items: [
//       { id: 'jn-white-lava', name: 'JN Special White Lava Cake', price: 999, description: 'Molten white chocolate' },
//       { id: 'lava-cake', name: 'Lava Cake', price: 699, description: 'Chocolate lava explosion' },
//       { id: 'bread-pudding', name: 'Bread Pudding (Chocolate/Caramel)', price: 699, description: 'Warm bread pudding' },
//       { id: 'three-layer-cake', name: 'Three Layer Cake', price: 699, description: 'Triple layer delight' },
//       { id: 'cheese-cake', name: 'Cheese Cake', price: 699, description: 'Creamy cheesecake' },
//       { id: 'cup-cake', name: 'Cup Cake', price: 399, description: 'Single serve delight' },
//       { id: 'alaska-cake', name: 'Alaska Cake', price: 699, description: 'Baked Alaska special' },
//       { id: 'kunafa-cake', name: 'Kunafa Cake', price: 749, description: 'Middle Eastern delight' },
//       { id: 'milky-cake', name: 'Milky Cake', price: 699, description: 'Soft milk cake' },
//       { id: 'sweetza', name: 'Sweetza', price: 999, description: 'Sweet pizza dessert' },
//       { id: 'french-toast', name: 'French Toast', price: 749, description: 'Caramelized toast' },
//       { id: 'dome-cake', name: 'Dome Cake', price: 1499, description: 'Chocolate dome surprise' },
//       { id: 'nutella-croissant', name: 'Nutella Croissant', price: 999, description: 'Nutella filled pastry' },
//       { id: 'arabic-kunafa', name: 'Arabic Kunafa', price: 1199, description: 'Traditional kunafa' },
//     ]
//   },
//   {
//     id: 'tea',
//     name: 'Premium Teas',
//     icon: '🍵',
//     items: [
//       { id: 'karak-tea', name: 'Karak Tea', price: 119, description: 'Strong traditional tea' },
//       { id: 'kashmiri-tea', name: 'Kashmiri Tea', price: 249, description: 'Pink Kashmiri chai' },
//       { id: 'creamy-tea', name: 'Creamy Tea', price: 249, description: 'Cream topped tea' },
//       { id: 'cardamom-tea', name: 'Cardamom Tea', price: 199, description: 'Aromatic cardamom tea' },
//     ]
//   },
//   {
//     id: 'coffee',
//     name: 'Artisan Coffee',
//     icon: '☕',
//     items: [
//       { id: 'cappuccino', name: 'Cappuccino', price: 499, description: 'Classic Italian coffee' },
//       { id: 'cafe-latte', name: 'Cafe Latte', price: 499, description: 'Smooth milk coffee' },
//       { id: 'americano-espresso', name: 'Americano/Espresso', price: 399, description: 'Strong black coffee' },
//       { id: 'caramel-latte', name: 'Caramel Latte', price: 699, description: 'Caramel flavored latte' },
//       { id: 'irish-nut-cream', name: 'Irish Nut Cream', price: 699, description: 'Nutty Irish cream' },
//       { id: 'spanish-latte', name: 'Spanish Latte', price: 799, description: 'Sweet Spanish style' },
//       { id: 'vanilla-latte', name: 'Vanilla Latte', price: 699, description: 'Vanilla infused coffee' },
//       { id: 'hazelnut', name: 'Hazelnut', price: 699, description: 'Nutty hazelnut flavor' },
//       { id: 'homemade', name: 'Homemade', price: 699, description: 'House special blend' },
//       { id: 'french-vanilla', name: 'French Vanilla', price: 699, description: 'French style vanilla' },
//     ]
//   },
//   {
//     id: 'thai',
//     name: 'Thai & Chinese',
//     icon: '🥢',
//     items: [
//       { id: 'chilli-dry-chicken', name: 'Chilli Dry Chicken', price: 1099, description: 'Spicy dry chicken' },
//       { id: 'chilli-dry-fish', name: 'Chilli Dry Fish', price: 1499, description: 'Spicy dry fish' },
//       { id: 'chilli-dry-prawns', name: 'Chilli Dry Prawns', price: 1899, description: 'Spicy dry prawns' },
//       { id: 'kung-pao-chicken', name: 'Kung Pao Chicken', price: 1299, description: 'Spicy kung pao chicken' },
//       { id: 'chicken-cashew-nut', name: 'Chicken Cashew Nut', price: 1299, description: 'Chicken with cashew nuts' },
//       { id: 'chicken-schezwan', name: 'Chicken Schezwan', price: 1099, description: 'Schezwan style chicken' },
//       { id: 'chicken-manchurian', name: 'Chicken Manchurian', price: 1099, description: 'Indo-Chinese favorite' },
//       { id: 'mongolian-chicken', name: 'Mongolian Chicken', price: 1199, description: 'Mongolian style' },
//       { id: 'chicken-shashlik', name: 'Chicken Shashlik', price: 1299, description: 'Chicken shashlik' },
//       { id: 'black-pepper-chicken', name: 'Black Pepper Chicken', price: 999, description: 'Peppery chicken' },
//       { id: 'chicken-chowmein', name: 'Chicken Chowmein', price: 1199, description: 'Stir fried noodles' },
//       { id: 'sweet-chilli-chicken', name: 'Sweet Chilli Chicken', price: 1099, description: 'Sweet & spicy chicken' },
//       { id: 'garlic-fried-rice', name: 'Garlic Fried Rice', price: 349, description: 'Garlic flavored rice' },
//       { id: 'egg-fried-rice', name: 'Egg Fried Rice', price: 349, description: 'Rice with egg' },
//       { id: 'vegetables-fried-rice', name: 'Vegetables Fried Rice', price: 349, description: 'Mixed vegetable rice' },
//       { id: 'masala-fried-rice', name: 'Masala Fried Rice', price: 349, description: 'Spiced rice' },
//       { id: 'chicken-fried-rice', name: 'Chicken Fried Rice', price: 499, description: 'Chicken fried rice' },
//     ]
//   },
//   // Add more categories similarly...
//   // Total will be 155 items
// ];

// // Register all items for cart
// COMPLETE_MENU_CATEGORIES.forEach(category => {
//   category.items.forEach(item => {
//     registerMenuItem(item.id, item.name, item.price);
//   });
// });

// // Filters
// const FILTERS = [
//   { id: 'all', name: 'All Menu', icon: '✨' },
//   { id: 'shakes', name: 'Shakes', icon: '🥤' },
//   { id: 'chillers', name: 'Chillers', icon: '🧊' },
//   { id: 'mojitos', name: 'Mojitos', icon: '🌿' },
//   { id: 'desserts', name: 'Desserts', icon: '🍰' },
//   { id: 'coffee', name: 'Coffee', icon: '☕' },
//   { id: 'thai', name: 'Thai/Chinese', icon: '🥢' },
//   { id: 'specials', name: 'Specials', icon: '⭐' },
//   { id: 'burgers', name: 'Burgers', icon: '🍔' },
// ];

// export default function CompleteMenu() {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [quantities, setQuantities] = useState({});
//   const { addToCart, cartCount } = useCart();

//   const handleAddToCart = (item) => {
//     const quantity = quantities[item.id] || 1;
//     addToCart(item.id, item.name, item.price, quantity);
    
//     // Success animation
//     const button = document.getElementById(`cart-btn-${item.id}`);
//     if (button) {
//       const originalHTML = button.innerHTML;
//       button.innerHTML = '✓ Added!';
//       button.classList.add('bg-green-600');
      
//       setTimeout(() => {
//         button.innerHTML = originalHTML;
//         button.classList.remove('bg-green-600');
//       }, 1500);
//     }
//   };

//   const updateQuantity = (itemId, change) => {
//     setQuantities(prev => {
//       const current = prev[itemId] || 1;
//       const newQty = Math.max(1, current + change);
//       return { ...prev, [itemId]: newQty };
//     });
//   };

//   const getFilteredCategories = () => {
//     if (activeFilter === 'all') return COMPLETE_MENU_CATEGORIES;
//     return COMPLETE_MENU_CATEGORIES.filter(cat => cat.id === activeFilter);
//   };

//   return (
//     <section className="py-24 bg-gradient-to-b from-black to-zinc-950" id="menu">
//       <div className="container px-4 mx-auto md:px-8">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full border border-orange-500/30">
//             <ChefHat className="w-5 h-5 text-orange-400" />
//             <span className="text-orange-400 font-semibold tracking-wider">EXPLORE 155+ ITEMS</span>
//           </div>
//           <h2 className="mb-6 text-5xl font-bold text-white md:text-7xl font-playfair">
//             <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
//               Complete
//             </span> Menu
//           </h2>
//           <p className="max-w-3xl mx-auto text-xl text-gray-400">
//             From shakes to steaks - 155+ items crafted with passion
//           </p>
//         </div>

//         {/* Cart Info */}
//         <div className="mb-8 text-center">
//           <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl">
//             <span className="text-orange-400 font-bold">Items in Cart: {cartCount}</span>
//           </div>
//         </div>

//         {/* Filter Tabs */}
//         <div className="mb-16">
//           <div className="flex flex-wrap justify-center gap-3">
//             {FILTERS.map((filter) => (
//               <button
//                 key={filter.id}
//                 onClick={() => setActiveFilter(filter.id)}
//                 className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 ${
//                   activeFilter === filter.id
//                     ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl shadow-orange-500/30'
//                     : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white'
//                 }`}
//               >
//                 <span className="text-xl">{filter.icon}</span>
//                 <span className="font-medium whitespace-nowrap">{filter.name}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Menu Categories */}
//         <div className="space-y-20">
//           {getFilteredCategories().map((category) => (
//             <div key={category.id} className="scroll-mt-24">
//               {/* Category Header */}
//               <div className="flex items-center gap-4 mb-10">
//                 <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl">
//                   <span className="text-3xl">{category.icon}</span>
//                 </div>
//                 <div>
//                   <h3 className="text-3xl font-bold text-white md:text-4xl">{category.name}</h3>
//                   <p className="text-gray-400">{category.items.length} delicious options</p>
//                 </div>
//               </div>

//               {/* Items Grid */}
//               <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {category.items.map((item) => (
//                   <div 
//                     key={item.id}
//                     className="group bg-gradient-to-b from-zinc-900/50 to-black rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10"
//                   >
//                     {/* Image */}
//                     <div className="relative h-48 overflow-hidden">
//                       <div 
//                         className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//                         style={{ backgroundImage: `url(${CATEGORY_IMAGES[category.id] || CATEGORY_IMAGES.shakes})` }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      
//                       {/* Price Tag */}
//                       <div className="absolute bottom-4 right-4">
//                         <div className="px-4 py-2 bg-black/80 backdrop-blur-sm rounded-xl">
//                           <div className="text-2xl font-bold text-orange-400">Rs {item.price}</div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6">
//                       <h4 className="mb-2 text-xl font-bold text-white">{item.name}</h4>
//                       <p className="mb-6 text-gray-400 text-sm line-clamp-2">{item.description}</p>

//                       {/* Quantity & Add to Cart */}
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <button 
//                             onClick={() => updateQuantity(item.id, -1)}
//                             className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800 text-gray-300 hover:bg-zinc-700"
//                           >
//                             <Minus className="w-4 h-4" />
//                           </button>
//                           <span className="w-8 text-center text-lg font-bold text-white">
//                             {quantities[item.id] || 1}
//                           </span>
//                           <button 
//                             onClick={() => updateQuantity(item.id, 1)}
//                             className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800 text-gray-300 hover:bg-zinc-700"
//                           >
//                             <Plus className="w-4 h-4" />
//                           </button>
//                         </div>

//                         <button
//                           id={`cart-btn-${item.id}`}
//                           onClick={() => handleAddToCart(item)}
//                           className="flex items-center gap-2 px-5 py-2.5 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl hover:shadow-lg hover:shadow-orange-500/30"
//                         >
//                           <span>Add</span>
//                           <span className="text-sm opacity-70">
//                             Rs {item.price * (quantities[item.id] || 1)}
//                           </span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }








'use client';

import { useState } from 'react';
import { Plus, Minus, Trash2, Star, ChefHat, Coffee, CupSoda, Cake, Pizza, Beef, Sandwich, Fish, Utensils, Soup, IceCream } from 'lucide-react';
import { useCart, registerMenuItem } from '../context/CartContext';

// Category Images Mapping
const CATEGORY_IMAGES = {
  shakes: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80',
  chillers: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=500&q=80',
  mojitos: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=500&q=80',
  margaritas: 'https://images.unsplash.com/photo-1510707577719-ae7c9b788690?auto=format&fit=crop&w=500&q=80',
  icedCoffee: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80',
  desserts: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80',
  tea: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=500&q=80',
  coffee: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80',
  thai: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=500&q=80',
  specials: 'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?auto=format&fit=crop&w=500&q=80',
  steaks: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80',
  burgers: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
  pizza: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80',
  broast: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=500&q=80',
  wraps: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=500&q=80',
  pasta: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80',
  soups: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80',
  salads: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80',
  sandwiches: 'https://images.unsplash.com/photo-1550507991-ca1faa30e324?auto=format&fit=crop&w=500&q=80',
  appetizers: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80',
  addons: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80',
};

// COMPLETE 155 ITEMS - ALL ITEMS FROM YOUR LIST
const COMPLETE_MENU_CATEGORIES = [
  {
    id: 'shakes',
    name: 'Signature Shakes',
    icon: '🥤',
    items: [
      { id: 'lotus-shake', name: 'Lotus Shake', price: 699, description: 'Crushed Lotus biscuits with creamy milk' },
      { id: 'kitkat-shake', name: 'Kitkat Shake', price: 599, description: 'Chocolate Kitkat delight' },
      { id: 'oreo-shake', name: 'Oreo Shake', price: 499, description: 'Classic Oreo cookies blend' },
      { id: 'nutella-shake', name: 'Nutella Shake', price: 699, description: 'Rich Nutella chocolate shake' },
      { id: 'cold-coffee', name: 'Cold Coffee', price: 699, description: 'Iced coffee perfection' },
      { id: 'vanilla-shake', name: 'Vanilla Shake', price: 699, description: 'Classic vanilla flavor' },
      { id: 'mango-shake', name: 'Mango Shake', price: 699, description: 'Fresh mango delight' },
      { id: 'strawberry-shake', name: 'Strawberry Shake', price: 699, description: 'Sweet strawberry blend' },
      { id: 'pistacio-shake', name: 'Pistacio Shake', price: 699, description: 'Nutty pistachio flavor' },
      { id: 'protein-shake', name: 'Protein Shake', price: 699, description: 'Healthy protein boost' },
      { id: 'blueberry-shake', name: 'Blueberry Shake', price: 699, description: 'Antioxidant rich blueberry' },
      { id: 'cocktail-shake', name: 'Cocktail Shake', price: 699, description: 'Mixed fruit special' },
    ]
  },
  {
    id: 'chillers',
    name: 'Refreshing Chillers',
    icon: '🧊',
    items: [
      { id: 'blue-buzz', name: 'Blue Buzz', price: 549, description: 'Blueberry mint cooler' },
      { id: 'peach-buzz', name: 'Peach Buzz', price: 549, description: 'Fresh peach delight' },
      { id: 'mango-buzz', name: 'Mango Buzz', price: 549, description: 'Tropical mango blast' },
      { id: 'mix-buzz', name: 'Mix Buzz', price: 549, description: 'Mixed fruit explosion' },
      { id: 'passion-fruit', name: 'Passion Fruit', price: 549, description: 'Exotic passion fruit' },
      { id: 'kiwi-crush', name: 'Kiwi Crush', price: 549, description: 'Tangy kiwi freshness' },
      { id: 'green-apple', name: 'Green Apple', price: 549, description: 'Crisp apple flavor' },
      { id: 'mix-berries', name: 'Mix Berries', price: 549, description: 'Berry medley' },
    ]
  },
  {
    id: 'mojitos',
    name: 'Fresh Mojitos',
    icon: '🌿',
    items: [
      { id: 'moon-rocker', name: 'Moon Rocker', price: 599, description: 'Special mint mojito' },
      { id: 'italian-mojito', name: 'Italian Mojito', price: 499, description: 'Italian herbs twist' },
      { id: 'north-pole', name: 'North Pole', price: 499, description: 'Minty cool sensation' },
      { id: 'green-apple-mojito', name: 'Green Apple Mojito', price: 499, description: 'Apple mint fusion' },
      { id: 'electric-lemonade', name: 'Electric Lemonade', price: 499, description: 'Zesty lemon blast' },
      { id: 'blue-lagoon', name: 'Blue Lagoon', price: 499, description: 'Blue curacao special' },
      { id: 'royal-rose', name: 'Royal Rose', price: 599, description: 'Rose flavored luxury' },
      { id: 'the-green', name: 'The Green', price: 599, description: 'Fresh herbal blend' },
    ]
  },
  {
    id: 'margaritas',
    name: 'Margaritas',
    icon: '🍹',
    items: [
      { id: 'mint-margarita', name: 'Mint Margarita', price: 349, description: 'Refreshing mint margarita' },
      { id: 'blueberry-margarita', name: 'Blue Berry Margarita', price: 449, description: 'Sweet blueberry margarita' },
      { id: 'strawberry-margarita', name: 'Strawberry Margarita', price: 449, description: 'Fresh strawberry blend' },
    ]
  },
  {
    id: 'icedCoffee',
    name: 'Iced Coffee',
    icon: '❄️',
    items: [
      { id: 'frappuccino', name: 'Frappuccino', price: 699, description: 'Blended ice coffee' },
      { id: 'cafe-latte-iced', name: 'Cafe Latte', price: 699, description: 'Iced latte' },
      { id: 'pistacio-latte', name: 'Pistacio Latte', price: 699, description: 'Pistachio flavored latte' },
      { id: 'nutella-latte', name: 'Nutella Latte', price: 699, description: 'Nutella coffee delight' },
      { id: 'lotus-latte', name: 'Lotus Latte', price: 699, description: 'Biscoff lotus latte' },
      { id: 'strawberry-latte', name: 'Strawberry Latte', price: 699, description: 'Strawberry flavored latte' },
      { id: 'blueberry-latte', name: 'Blue Berry Latte', price: 699, description: 'Blueberry coffee blend' },
    ]
  },
  {
    id: 'desserts',
    name: 'Sweet Desserts',
    icon: '🍰',
    items: [
      { id: 'jn-white-lava', name: 'JN Special White Lava Cake', price: 999, description: 'Molten white chocolate' },
      { id: 'lava-cake', name: 'Lava Cake', price: 699, description: 'Chocolate lava explosion' },
      { id: 'bread-pudding', name: 'Bread Pudding (Chocolate/Caramel)', price: 699, description: 'Warm bread pudding' },
      { id: 'three-layer-cake', name: 'Three Layer Cake', price: 699, description: 'Triple layer delight' },
      { id: 'cheese-cake', name: 'Cheese Cake', price: 699, description: 'Creamy cheesecake' },
      { id: 'cup-cake', name: 'Cup Cake', price: 399, description: 'Single serve delight' },
      { id: 'alaska-cake', name: 'Alaska Cake', price: 699, description: 'Baked Alaska special' },
      { id: 'kunafa-cake', name: 'Kunafa Cake', price: 749, description: 'Middle Eastern delight' },
      { id: 'milky-cake', name: 'Milky Cake', price: 699, description: 'Soft milk cake' },
      { id: 'sweetza', name: 'Sweetza', price: 999, description: 'Sweet pizza dessert' },
      { id: 'french-toast', name: 'French Toast', price: 749, description: 'Caramelized toast' },
      { id: 'dome-cake', name: 'Dome Cake', price: 1499, description: 'Chocolate dome surprise' },
      { id: 'nutella-croissant', name: 'Nutella Croissant', price: 999, description: 'Nutella filled pastry' },
      { id: 'arabic-kunafa', name: 'Arabic Kunafa', price: 1199, description: 'Traditional kunafa' },
    ]
  },
  {
    id: 'tea',
    name: 'Premium Teas',
    icon: '🍵',
    items: [
      { id: 'karak-tea', name: 'Karak Tea', price: 119, description: 'Strong traditional tea' },
      { id: 'kashmiri-tea', name: 'Kashmiri Tea', price: 249, description: 'Pink Kashmiri chai' },
      { id: 'creamy-tea', name: 'Creamy Tea', price: 249, description: 'Cream topped tea' },
      { id: 'cardamom-tea', name: 'Cardamom Tea', price: 199, description: 'Aromatic cardamom tea' },
    ]
  },
  {
    id: 'coffee',
    name: 'Artisan Coffee',
    icon: '☕',
    items: [
      { id: 'cappuccino', name: 'Cappuccino', price: 499, description: 'Classic Italian coffee' },
      { id: 'cafe-latte-hot', name: 'Cafe Latte', price: 499, description: 'Smooth milk coffee' },
      { id: 'americano-espresso', name: 'Americano/Espresso', price: 399, description: 'Strong black coffee' },
      { id: 'caramel-latte', name: 'Caramel Latte', price: 699, description: 'Caramel flavored latte' },
      { id: 'irish-nut-cream', name: 'Irish Nut Cream', price: 699, description: 'Nutty Irish cream' },
      { id: 'spanish-latte', name: 'Spanish Latte', price: 799, description: 'Sweet Spanish style' },
      { id: 'vanilla-latte', name: 'Vanilla Latte', price: 699, description: 'Vanilla infused coffee' },
      { id: 'hazelnut', name: 'Hazelnut', price: 699, description: 'Nutty hazelnut flavor' },
      { id: 'homemade', name: 'Homemade', price: 699, description: 'House special blend' },
      { id: 'french-vanilla', name: 'French Vanilla', price: 699, description: 'French style vanilla' },
    ]
  },
  {
    id: 'thai',
    name: 'Thai & Chinese',
    icon: '🥢',
    items: [
      { id: 'chilli-dry-chicken', name: 'Chilli Dry Chicken', price: 1099, description: 'Spicy dry chicken' },
      { id: 'chilli-dry-fish', name: 'Chilli Dry Fish', price: 1499, description: 'Spicy dry fish' },
      { id: 'chilli-dry-prawns', name: 'Chilli Dry Prawns', price: 1899, description: 'Spicy dry prawns' },
      { id: 'kung-pao-chicken', name: 'Kung Pao Chicken', price: 1299, description: 'Spicy kung pao chicken' },
      { id: 'chicken-cashew-nut', name: 'Chicken Cashew Nut', price: 1299, description: 'Chicken with cashew nuts' },
      { id: 'chicken-schezwan', name: 'Chicken Schezwan', price: 1099, description: 'Schezwan style chicken' },
      { id: 'chicken-manchurian', name: 'Chicken Manchurian', price: 1099, description: 'Indo-Chinese favorite' },
      { id: 'mongolian-chicken', name: 'Mongolian Chicken', price: 1199, description: 'Mongolian style' },
      { id: 'chicken-shashlik', name: 'Chicken Shashlik', price: 1299, description: 'Chicken shashlik' },
      { id: 'black-pepper-chicken', name: 'Black Pepper Chicken', price: 999, description: 'Peppery chicken' },
      { id: 'chicken-chowmein', name: 'Chicken Chowmein', price: 1199, description: 'Stir fried noodles' },
      { id: 'sweet-chilli-chicken', name: 'Sweet Chilli Chicken', price: 1099, description: 'Sweet & spicy chicken' },
      { id: 'garlic-fried', name: 'Garlic Fried', price: 349, description: 'Garlic flavored rice' },
      { id: 'egg-fried', name: 'Egg Fried', price: 349, description: 'Rice with egg' },
      { id: 'vegetables-fried', name: 'Vegetables Fried', price: 349, description: 'Mixed vegetable rice' },
      { id: 'masala-fried', name: 'Masala Fried', price: 349, description: 'Spiced rice' },
      { id: 'chicken-fried', name: 'Chicken Fried', price: 499, description: 'Chicken fried rice' },
    ]
  },
  {
    id: 'specials',
    name: 'Janoshi Specials',
    icon: '⭐',
    items: [
      { id: 'stuffed-chicken-1699', name: 'Stuffed Chicken', price: 1699, description: 'Cheese stuffed chicken (Regular)' },
      { id: 'stuffed-chicken-1999', name: 'Stuffed Chicken', price: 1999, description: 'Cheese stuffed chicken (Large)' },
      { id: 'parmesan-chicken', name: 'Parmesan Chicken', price: 1799, description: 'Parmesan crusted chicken' },
      { id: 'auxpolo-chicken', name: 'Auxpolo Chicken', price: 1699, description: 'Special auxpolo sauce' },
      { id: 'auxpolo-kabab', name: 'Auxpolo Kabab', price: 1499, description: 'Grilled auxpolo kabab' },
      { id: 'tarragon-chicken', name: 'Tarragon Chicken', price: 1599, description: 'Herb roasted chicken' },
      { id: 'moroccon-chicken', name: 'Moroccon Chicken', price: 1699, description: 'Moroccan spices chicken' },
      { id: 'cordon-bleu-chicken', name: 'Cordon Bleu Chicken', price: 1699, description: 'Ham & cheese stuffed' },
      { id: 'bai-ze-chicken', name: 'Bai-ze Chicken', price: 1799, description: 'Special Bai-ze sauce' },
      { id: 'marinara-chicken', name: 'Marinara Chicken', price: 1699, description: 'Tomato marinara chicken' },
      { id: 'fried-tender-chicken', name: 'Fried Tender Chicken', price: 1749, description: 'Crispy tender chicken' },
      { id: 'fried-crispy-fish', name: 'Fried Crispy Fish', price: 1999, description: 'Golden fried fish' },
      { id: 'seafood-platter', name: 'Seafood Platter', price: 3999, description: 'Assorted seafood for 2-3' },
      { id: 'napolean-chicken', name: 'Napolean Chicken', price: 1899, description: 'Layered chicken dish' },
    ]
  },
  {
    id: 'addons',
    name: 'Add-ons',
    icon: '➕',
    items: [
      { id: 'mash-potato', name: 'Mash Potato', price: 199, description: 'Creamy mashed potatoes' },
      { id: 'baked-potato', name: 'Baked Potato', price: 199, description: 'Baked potato' },
      { id: 'sauteed-vegetables', name: 'Sauteed Vegetables', price: 199, description: 'Fresh sautéed veggies' },
      { id: 'fries', name: 'Fries', price: 199, description: 'Crispy french fries' },
      { id: 'cream-spinach', name: 'Cream Spinach', price: 199, description: 'Creamy spinach' },
      { id: 'caramelized-onion', name: 'Caramelized Onion', price: 199, description: 'Sweet caramelized onions' },
      { id: 'potato-wedges', name: 'Potato Wedges', price: 199, description: 'Seasoned potato wedges' },
    ]
  },
  {
    id: 'steaks',
    name: 'Premium Steaks',
    icon: '🥩',
    items: [
      { id: 'chicken-steak', name: 'Chicken Steak', price: 1699, description: 'Grilled chicken steak' },
      { id: 'fish-steak', name: 'Fish Steak', price: 2099, description: 'Fresh fish steak' },
      { id: 'beef-steak', name: 'Beef Steak', price: 2999, description: 'Juicy beef steak' },
      { id: 'rib-eye-steak', name: 'Rib Eye Steak', price: 4499, description: 'Premium rib eye' },
      { id: 'mushroom-steak', name: 'Mushroom Steak', price: 299, description: 'Mushroom sauce addon' },
      { id: 'moroccan-steak', name: 'Moroccan Steak', price: 299, description: 'Moroccan sauce addon' },
      { id: 'tarragon-steak', name: 'Tarragon Steak', price: 299, description: 'Tarragon sauce addon' },
      { id: 'blackpepper-steak', name: 'Black Pepper Steak', price: 299, description: 'Black pepper sauce addon' },
      { id: 'mexican-steak', name: 'Mexican Steak', price: 299, description: 'Mexican sauce addon' },
      { id: 'auxpolo-steak', name: 'Auxpolo Steak', price: 299, description: 'Auxpolo sauce addon' },
      { id: 'french-onion-steak', name: 'French Onion Steak', price: 299, description: 'French onion sauce addon' },
    ]
  },
  {
    id: 'burgers',
    name: 'Gourmet Burgers',
    icon: '🍔',
    items: [
      { id: 'jn-special-burger', name: 'JN Special Burger', price: 999, description: 'Signature house burger' },
      { id: 'zinger-burger', name: 'Zinger Burger', price: 599, description: 'Crispy chicken burger' },
      { id: 'grill-chicken-burger', name: 'Grill Chicken Burger', price: 699, description: 'Grilled chicken patty' },
      { id: 'jn-crispy-burger', name: 'JN Crispy Burger', price: 749, description: 'Extra crispy special' },
      { id: 'reggy-burger', name: 'Reggy Burger', price: 299, description: 'Classic regular burger' },
      { id: 'max-smash-burger', name: 'Max Smash Burger', price: 999, description: 'Double smashed patty' },
      { id: 'wild-smash-burger', name: 'Wild Smash Burger', price: 749, description: 'Spicy smashed burger' },
      { id: 'melty-lava-beef-burger', name: 'Melty Lava Beef Burger', price: 1199, description: 'Cheese lava beef' },
      { id: 'fish-burger', name: 'Fish Burger', price: 999, description: 'Crispy fish fillet' },
      { id: 'cheese-addon', name: 'Cheese Addon', price: 299, description: 'Extra cheese' },
      { id: 'jalapeno-addon', name: 'Jalapeno Addon', price: 299, description: 'Spicy jalapenos' },
      { id: 'mushroom-addon', name: 'Mushroom Addon', price: 299, description: 'Mushrooms' },
      { id: 'olive-addon', name: 'Olive Addon', price: 299, description: 'Olives' },
    ]
  },
  {
    id: 'pizza',
    name: 'Delicious Pizza',
    icon: '🍕',
    items: [
      { id: 'donut-pizza', name: 'Donut Pizza', price: 2299, description: 'Sweet donut shaped pizza' },
      { id: 'lasagna-pizza-small', name: 'Lasagna Pizza (Small)', price: 1699, description: 'Lasagna topped pizza' },
      { id: 'lasagna-pizza-medium', name: 'Lasagna Pizza (Medium)', price: 2299, description: 'Lasagna topped pizza' },
      { id: 'kabab-special-pizza-small', name: 'Kabab Special Pizza (Small)', price: 749, description: 'Kabab topping' },
      { id: 'kabab-special-pizza-medium', name: 'Kabab Special Pizza (Medium)', price: 1299, description: 'Kabab topping' },
      { id: 'kabab-special-pizza-large', name: 'Kabab Special Pizza (Large)', price: 1999, description: 'Kabab topping' },
      { id: 'super-supreme-pizza-small', name: 'Super Supreme Pizza (Small)', price: 699, description: 'All toppings' },
      { id: 'super-supreme-pizza-medium', name: 'Super Supreme Pizza (Medium)', price: 1299, description: 'All toppings' },
      { id: 'super-supreme-pizza-large', name: 'Super Supreme Pizza (Large)', price: 1999, description: 'All toppings' },
      { id: 'into-wood-pizza-small', name: 'Into Wood Pizza (Small)', price: 749, description: 'Wood fired style' },
      { id: 'into-wood-pizza-medium', name: 'Into Wood Pizza (Medium)', price: 1299, description: 'Wood fired style' },
      { id: 'into-wood-pizza-large', name: 'Into Wood Pizza (Large)', price: 1999, description: 'Wood fired style' },
      { id: 'platinum-pizza', name: 'Platinum Pizza', price: 1999, description: 'Premium pizza' },
      { id: 'pepperoni-pizza', name: 'Pepperoni Pizza', price: 1799, description: 'Pepperoni topping' },
    ]
  },
  {
    id: 'broast',
    name: 'Crispy Broast',
    icon: '🍗',
    items: [
      { id: 'broast-quarter-small', name: 'Broast Quarter (Small)', price: 799, description: 'Crispy quarter broast' },
      { id: 'broast-half-medium', name: 'Broast Half (Medium)', price: 1299, description: 'Crispy half broast' },
      { id: 'broast-full-large', name: 'Broast Full (Large)', price: 2399, description: 'Crispy full broast' },
    ]
  },
  {
    id: 'wraps',
    name: 'Fresh Wraps',
    icon: '🌯',
    items: [
      { id: 'jn-special-wrap', name: 'JN Special Wrap', price: 799, description: 'Signature house wrap' },
      { id: 'grill-chicken-wrap', name: 'Grill Chicken Wrap', price: 749, description: 'Grilled chicken wrap' },
      { id: 'smooky-chicken-wrap', name: 'Smooky Chicken Wrap', price: 749, description: 'Smoky chicken wrap' },
      { id: 'cheese-wrap', name: 'Cheese Wrap', price: 549, description: 'Cheese filled wrap' },
      { id: 'kabab-wrap', name: 'Kabab Wrap', price: 649, description: 'Kabab wrap' },
      { id: 'baby-wrap', name: 'Baby Wrap', price: 549, description: 'Small size wrap' },
      { id: 'fish-wrap', name: 'Fish Wrap', price: 899, description: 'Crispy fish wrap' },
      { id: 'zinger-wrap', name: 'Zinger Wrap', price: 599, description: 'Zinger chicken wrap' },
      { id: 'beef-wrap', name: 'Beef Wrap', price: 849, description: 'Beef wrap' },
      { id: 'jn-special-sauce', name: 'JN Special Sauce', price: 99, description: 'Signature sauce' },
      { id: 'chipotle-sauce', name: 'Chipotle Sauce', price: 99, description: 'Spicy chipotle' },
      { id: 'tarter-sauce', name: 'Tarter Sauce', price: 99, description: 'Tarter sauce' },
      { id: 'garlic-sauce', name: 'Garlic Sauce', price: 99, description: 'Garlic sauce' },
      { id: 'jalapeno-sauce', name: 'Jalapeno Sauce', price: 99, description: 'Jalapeno sauce' },
      { id: 'honey-mustard-sauce', name: 'Honey Mustard Sauce', price: 99, description: 'Honey mustard' },
      { id: 'pizza-sauce', name: 'Pizza Sauce', price: 99, description: 'Pizza sauce' },
    ]
  },
  {
    id: 'pasta',
    name: 'Pasta & Noodles',
    icon: '🍝',
    items: [
      { id: 'fettuccine-pasta', name: 'Fettuccine Pasta', price: 1099, description: 'Fettuccine pasta' },
      { id: 'fried-chicken-pasta', name: 'Fried Chicken Pasta', price: 1149, description: 'Pasta with fried chicken' },
      { id: 'jn-special-italian-pasta', name: 'JN Special Italian Pasta', price: 1199, description: 'Special Italian pasta' },
      { id: 'penne-pasta', name: 'Penne Pasta', price: 1149, description: 'Penne pasta' },
      { id: 'bake-cheese-pasta', name: 'Bake Cheese Pasta', price: 1099, description: 'Baked cheese pasta' },
      { id: 'bake-pasta-with-fries', name: 'Bake Pasta with Fries', price: 999, description: 'Pasta with fries' },
      { id: 'dragon-noodles', name: 'Dragon Noodles', price: 1299, description: 'Spicy dragon noodles' },
      { id: 'mexican-noodles', name: 'Mexican Noodles', price: 1299, description: 'Mexican style noodles' },
    ]
  },
  {
    id: 'soups',
    name: 'Hot Soups',
    icon: '🥣',
    items: [
      { id: 'special-soup-small', name: 'Special Soup (Small)', price: 549, description: 'House special soup' },
      { id: 'special-soup-large', name: 'Special Soup (Large)', price: 1599, description: 'House special soup' },
      { id: 'soup-19b-small', name: '19B Soup (Small)', price: 599, description: 'Special 19B soup' },
      { id: 'soup-19b-large', name: '19B Soup (Large)', price: 1799, description: 'Special 19B soup' },
      { id: 'hot-sour-soup-small', name: 'Hot & Sour Soup (Small)', price: 399, description: 'Hot and sour soup' },
      { id: 'hot-sour-soup-large', name: 'Hot & Sour Soup (Large)', price: 1299, description: 'Hot and sour soup' },
      { id: 'cream-mushroom-soup', name: 'Cream of Mushroom Soup', price: 699, description: 'Creamy mushroom soup' },
      { id: 'aux-pollo-soup', name: 'Aux Pollo Soup', price: 699, description: 'Aux pollo style soup' },
      { id: 'vegetable-soup-small', name: 'Vegetable Soup (Small)', price: 399, description: 'Vegetable soup' },
      { id: 'vegetable-soup-large', name: 'Vegetable Soup (Large)', price: 1199, description: 'Vegetable soup' },
      { id: 'sweet-sour-soup', name: 'Sweet & Sour Soup', price: 1299, description: 'Sweet and sour soup' },
    ]
  },
  {
    id: 'salads',
    name: 'Fresh Salads',
    icon: '🥗',
    items: [
      { id: 'gym-lover-sandwich', name: 'Gym Lover Sandwich', price: 699, description: 'Healthy sandwich' },
      { id: 'gym-platter', name: 'Gym Platter', price: 899, description: 'Gym platter' },
      { id: 'caesar-salad', name: 'Caesar Salad', price: 699, description: 'Classic Caesar salad' },
      { id: 'crispy-salad', name: 'Crispy Salad', price: 699, description: 'Crispy fresh salad' },
      { id: 'coleslaw', name: 'Coleslaw', price: 249, description: 'Creamy coleslaw' },
    ]
  },
  {
    id: 'sandwiches',
    name: 'Tasty Sandwiches',
    icon: '🥪',
    items: [
      { id: 'jn-special-sandwich', name: 'JN Special Sandwich', price: 799, description: 'Signature house sandwich' },
      { id: 'club-sandwich', name: 'Club Sandwich', price: 749, description: 'Club sandwich' },
      { id: 'grill-chicken-sandwich', name: 'Grill Chicken Sandwich', price: 649, description: 'Grilled chicken sandwich' },
      { id: 'jn-crispy-sandwich', name: 'JN Crispy Sandwich', price: 699, description: 'Crispy sandwich' },
      { id: 'cheese-sandwich', name: 'Cheese Sandwich', price: 549, description: 'Cheese sandwich' },
      { id: 'mexican-sandwich', name: 'Mexican Sandwich', price: 899, description: 'Mexican style sandwich' },
      { id: 'smash-sandwich', name: 'Smash Sandwich', price: 749, description: 'Smashed sandwich' },
    ]
  },
  {
    id: 'appetizers',
    name: 'Appetizers',
    icon: '🍤',
    items: [
      { id: 'jumbo-prawns-small', name: 'Jumbo Prawns (Small)', price: 1799, description: 'Large prawns' },
      { id: 'jumbo-prawns-large', name: 'Jumbo Prawns (Large)', price: 2099, description: 'Large prawns' },
      { id: 'dynamite-chicken', name: 'Dynamite Chicken', price: 799, description: 'Spicy chicken bites' },
      { id: 'dynamite-fish', name: 'Dynamite Fish', price: 999, description: 'Spicy fish bites' },
      { id: 'dynamite-prawns', name: 'Dynamite Prawns', price: 1299, description: 'Spicy prawns' },
      { id: 'chicken-strips', name: 'Chicken Strips', price: 799, description: 'Chicken strips' },
      { id: 'pizza-bite', name: 'Pizza Bite', price: 499, description: 'Mini pizza bites' },
      { id: 'finger-mozzarella', name: 'Finger Mozzarella', price: 799, description: 'Mozzarella sticks' },
      { id: 'hot-dog-sandwich', name: 'Hot Dog Sandwich', price: 999, description: 'Hot dog sandwich' },
      { id: 'fish-katsu', name: 'Fish Katsu', price: 1199, description: 'Fish katsu' },
      { id: 'glazzed-wings', name: 'Glazzed Wings', price: 999, description: 'Glazed chicken wings' },
      { id: 'nuggets', name: 'Nuggets', price: 499, description: 'Chicken nuggets' },
      { id: 'loaded-fries', name: 'Loaded Fries', price: 599, description: 'Loaded fries' },
      { id: 'nacho-loaded-fries', name: 'Nacho Loaded Fries', price: 799, description: 'Nacho loaded fries' },
      { id: 'wild-fries', name: 'Wild Fries', price: 899, description: 'Wild seasoned fries' },
      { id: 'plain-fries-small', name: 'Plain Fries (Small)', price: 299, description: 'Plain fries' },
      { id: 'plain-fries-large', name: 'Plain Fries (Large)', price: 499, description: 'Plain fries' },
      { id: 'dhaka-chicken', name: 'Dhaka Chicken', price: 999, description: 'Dhaka style chicken' },
      { id: 'dhaka-fish', name: 'Dhaka Fish', price: 699, description: 'Dhaka style fish' },
      { id: 'thai-chicken-rolls', name: 'Thai Chicken Rolls', price: 699, description: 'Thai chicken rolls' },
      { id: 'tempura-chicken', name: 'Tempura Chicken', price: 699, description: 'Tempura chicken' },
      { id: 'chicken-tenders', name: 'Chicken Tenders (4pcs)', price: 999, description: 'Chicken tenders' },
      { id: 'spring-roll', name: 'Spring Roll', price: 699, description: 'Spring rolls' },
      { id: 'fish-strips', name: 'Fish Strips', price: 1399, description: 'Fish strips' },
    ]
  },
];

// Register all items for cart
COMPLETE_MENU_CATEGORIES.forEach(category => {
  category.items.forEach(item => {
    registerMenuItem(item.id, item.name, item.price);
  });
});

// Filters
const FILTERS = [
  { id: 'all', name: 'All Menu', icon: '✨' },
  { id: 'shakes', name: 'Shakes', icon: '🥤' },
  { id: 'chillers', name: 'Chillers', icon: '🧊' },
  { id: 'mojitos', name: 'Mojitos', icon: '🌿' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
  { id: 'tea', name: 'Tea', icon: '🍵' },
  { id: 'coffee', name: 'Coffee', icon: '☕' },
  { id: 'thai', name: 'Thai/Chinese', icon: '🥢' },
  { id: 'specials', name: 'Specials', icon: '⭐' },
  { id: 'burgers', name: 'Burgers', icon: '🍔' },
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'steaks', name: 'Steaks', icon: '🥩' },
  { id: 'wraps', name: 'Wraps', icon: '🌯' },
  { id: 'appetizers', name: 'Appetizers', icon: '🍤' },
];

export default function CompleteMenu() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [quantities, setQuantities] = useState({});
  const { addToCart, cartCount, removeFromCart, getCartItems } = useCart();

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    addToCart(item.id, item.name, item.price, quantity);
    
    // Success animation
    const button = document.getElementById(`cart-btn-${item.id}`);
    if (button) {
      const originalHTML = button.innerHTML;
      button.innerHTML = '✓ Added!';
      button.classList.add('bg-green-600');
      
      setTimeout(() => {
        button.innerHTML = originalHTML;
        button.classList.remove('bg-green-600');
      }, 1500);
    }
  };

  const updateQuantity = (itemId, change) => {
    setQuantities(prev => {
      const current = prev[itemId] || 1;
      const newQty = Math.max(1, current + change);
      return { ...prev, [itemId]: newQty };
    });
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
    setQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[itemId];
      return newQuantities;
    });
  };

  const getFilteredCategories = () => {
    if (activeFilter === 'all') return COMPLETE_MENU_CATEGORIES;
    return COMPLETE_MENU_CATEGORIES.filter(cat => cat.id === activeFilter);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-950" id="menu">
      <div className="container px-4 mx-auto md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full border border-orange-500/30">
            <ChefHat className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-semibold tracking-wider">EXPLORE 155+ ITEMS</span>
          </div>
          <h2 className="mb-6 text-5xl font-bold text-white md:text-7xl font-playfair">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Complete
            </span> Menu
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-400">
            From shakes to steaks - 155+ items crafted with passion
          </p>
        </div>

        {/* Cart Summary */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl">
            <span className="text-orange-400 font-bold">Items in Cart: {cartCount}</span>
            {cartCount > 0 && (
              <button 
                onClick={() => {
                  const items = getCartItems();
                  if (items.length > 0) {
                    // Show cart items in alert
                    let message = 'Cart Items:\n';
                    items.forEach((item, index) => {
                      message += `${index + 1}. ${item.name} x${item.quantity} = Rs ${item.price * item.quantity}\n`;
                    });
                    alert(message);
                  }
                }}
                className="text-sm text-orange-300 hover:text-orange-400"
              >
                View Cart
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-3">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl shadow-orange-500/30'
                    : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                <span className="text-lg">{filter.icon}</span>
                <span className="font-medium text-sm whitespace-nowrap">{filter.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-20">
          {getFilteredCategories().map((category) => (
            <div key={category.id} className="scroll-mt-24">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl">
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white md:text-4xl">{category.name}</h3>
                  <p className="text-gray-400">{category.items.length} delicious options</p>
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.items.map((item) => (
                  <div 
                    key={item.id}
                    className="group bg-gradient-to-b from-zinc-900/50 to-black rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${CATEGORY_IMAGES[category.id] || CATEGORY_IMAGES.shakes})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      
                      {/* Price Tag */}
                      <div className="absolute bottom-4 right-4">
                        <div className="px-4 py-2 bg-black/80 backdrop-blur-sm rounded-xl">
                          <div className="text-2xl font-bold text-orange-400">Rs {item.price}</div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="mb-2 text-xl font-bold text-white">{item.name}</h4>
                      <p className="mb-6 text-gray-400 text-sm line-clamp-2">{item.description}</p>

                      {/* Quantity & Add to Cart */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-lg font-bold text-white">
                            {quantities[item.id] || 1}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30"
                            title="Remove from cart"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          
                          <button
                            id={`cart-btn-${item.id}`}
                            onClick={() => handleAddToCart(item)}
                            className="flex items-center gap-2 px-5 py-2.5 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl hover:shadow-lg hover:shadow-orange-500/30"
                          >
                            <span>Add</span>
                            <span className="text-sm opacity-70">
                              Rs {item.price * (quantities[item.id] || 1)}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}