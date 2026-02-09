

// 'use client';

// import { useState } from 'react';
// import { Plus, Minus, Trash2, Star, ChefHat, Coffee, CupSoda, Cake, Pizza, Beef, Sandwich, Fish, Utensils, Soup, IceCream } from 'lucide-react';
// import { useCart, registerMenuItem } from '../context/CartContext';

// // Category Images Mapping
// const CATEGORY_IMAGES = {
//   shakes: '/lotus.jpg,/kitkat.jpg',
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
//   addons: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80',
// };

// // COMPLETE 155 ITEMS - ALL ITEMS FROM YOUR LIST
// const COMPLETE_MENU_CATEGORIES = [
//   {
//     id: 'shakes',
//     name: 'Signature Shakes',
//     icon: '🥤',
//     items: [
//       { id: 'lotus-shake', name: 'Lotus Shake', price: 699, description: 'Crushed Lotus biscuits with creamy milk',    image: '/lotus.jpg' },
//       { id: 'kitkat-shake', name: 'Kitkat Shake', price: 599, description: 'Chocolate Kitkat delight', image: '/lotus.jpg' },
//       { id: 'oreo-shake', name: 'Oreo Shake', price: 499, description: 'Classic Oreo cookies blend', image: '/lotus.jpg'  },
//       { id: 'nutella-shake', name: 'Nutella Shake', price: 699, description: 'Rich Nutella chocolate shake', image: '/lotus.jpg'  },
//       { id: 'cold-coffee', name: 'Cold Coffee', price: 699, description: 'Iced coffee perfection', image: '/lotus.jpg'  },
//       { id: 'vanilla-shake', name: 'Vanilla Shake', price: 699, description: 'Classic vanilla flavor' , image: '/lotus.jpg' },
//       { id: 'mango-shake', name: 'Mango Shake', price: 699, description: 'Fresh mango delight', image: '/lotus.jpg'  },
//       { id: 'strawberry-shake', name: 'Strawberry Shake', price: 699, description: 'Sweet strawberry blend', image: '/lotus.jpg'  },
//       { id: 'pistacio-shake', name: 'Pistacio Shake', price: 699, description: 'Nutty pistachio flavor', image: '/lotus.jpg'  },
//       { id: 'protein-shake', name: 'Protein Shake', price: 699, description: 'Healthy protein boost' , image: '/lotus.jpg' },
//       { id: 'blueberry-shake', name: 'Blueberry Shake', price: 699, description: 'Antioxidant rich blueberry', image: '/lotus.jpg'  },
//       { id: 'cocktail-shake', name: 'Cocktail Shake', price: 699, description: 'Mixed fruit special', image: '/lotus.jpg'  },
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
//       { id: 'cafe-latte-hot', name: 'Cafe Latte', price: 499, description: 'Smooth milk coffee' },
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
//       { id: 'garlic-fried', name: 'Garlic Fried', price: 349, description: 'Garlic flavored rice' },
//       { id: 'egg-fried', name: 'Egg Fried', price: 349, description: 'Rice with egg' },
//       { id: 'vegetables-fried', name: 'Vegetables Fried', price: 349, description: 'Mixed vegetable rice' },
//       { id: 'masala-fried', name: 'Masala Fried', price: 349, description: 'Spiced rice' },
//       { id: 'chicken-fried', name: 'Chicken Fried', price: 499, description: 'Chicken fried rice' },
//     ]
//   },
//   {
//     id: 'specials',
//     name: 'Janoshi Specials',
//     icon: '⭐',
//     items: [
//       { id: 'stuffed-chicken-1699', name: 'Stuffed Chicken', price: 1699, description: 'Cheese stuffed chicken (Regular)' },
//       { id: 'stuffed-chicken-1999', name: 'Stuffed Chicken', price: 1999, description: 'Cheese stuffed chicken (Large)' },
//       { id: 'parmesan-chicken', name: 'Parmesan Chicken', price: 1799, description: 'Parmesan crusted chicken' },
//       { id: 'auxpolo-chicken', name: 'Auxpolo Chicken', price: 1699, description: 'Special auxpolo sauce' },
//       { id: 'auxpolo-kabab', name: 'Auxpolo Kabab', price: 1499, description: 'Grilled auxpolo kabab' },
//       { id: 'tarragon-chicken', name: 'Tarragon Chicken', price: 1599, description: 'Herb roasted chicken' },
//       { id: 'moroccon-chicken', name: 'Moroccon Chicken', price: 1699, description: 'Moroccan spices chicken' },
//       { id: 'cordon-bleu-chicken', name: 'Cordon Bleu Chicken', price: 1699, description: 'Ham & cheese stuffed' },
//       { id: 'bai-ze-chicken', name: 'Bai-ze Chicken', price: 1799, description: 'Special Bai-ze sauce' },
//       { id: 'marinara-chicken', name: 'Marinara Chicken', price: 1699, description: 'Tomato marinara chicken' },
//       { id: 'fried-tender-chicken', name: 'Fried Tender Chicken', price: 1749, description: 'Crispy tender chicken' },
//       { id: 'fried-crispy-fish', name: 'Fried Crispy Fish', price: 1999, description: 'Golden fried fish' },
//       { id: 'seafood-platter', name: 'Seafood Platter', price: 3999, description: 'Assorted seafood for 2-3' },
//       { id: 'napolean-chicken', name: 'Napolean Chicken', price: 1899, description: 'Layered chicken dish' },
//     ]
//   },
//   {
//     id: 'addons',
//     name: 'Add-ons',
//     icon: '➕',
//     items: [
//       { id: 'mash-potato', name: 'Mash Potato', price: 199, description: 'Creamy mashed potatoes' },
//       { id: 'baked-potato', name: 'Baked Potato', price: 199, description: 'Baked potato' },
//       { id: 'sauteed-vegetables', name: 'Sauteed Vegetables', price: 199, description: 'Fresh sautéed veggies' },
//       { id: 'fries', name: 'Fries', price: 199, description: 'Crispy french fries' },
//       { id: 'cream-spinach', name: 'Cream Spinach', price: 199, description: 'Creamy spinach' },
//       { id: 'caramelized-onion', name: 'Caramelized Onion', price: 199, description: 'Sweet caramelized onions' },
//       { id: 'potato-wedges', name: 'Potato Wedges', price: 199, description: 'Seasoned potato wedges' },
//     ]
//   },
//   {
//     id: 'steaks',
//     name: 'Premium Steaks',
//     icon: '🥩',
//     items: [
//       { id: 'chicken-steak', name: 'Chicken Steak', price: 1699, description: 'Grilled chicken steak' },
//       { id: 'fish-steak', name: 'Fish Steak', price: 2099, description: 'Fresh fish steak' },
//       { id: 'beef-steak', name: 'Beef Steak', price: 2999, description: 'Juicy beef steak' },
//       { id: 'rib-eye-steak', name: 'Rib Eye Steak', price: 4499, description: 'Premium rib eye' },
//       { id: 'mushroom-steak', name: 'Mushroom Steak', price: 299, description: 'Mushroom sauce addon' },
//       { id: 'moroccan-steak', name: 'Moroccan Steak', price: 299, description: 'Moroccan sauce addon' },
//       { id: 'tarragon-steak', name: 'Tarragon Steak', price: 299, description: 'Tarragon sauce addon' },
//       { id: 'blackpepper-steak', name: 'Black Pepper Steak', price: 299, description: 'Black pepper sauce addon' },
//       { id: 'mexican-steak', name: 'Mexican Steak', price: 299, description: 'Mexican sauce addon' },
//       { id: 'auxpolo-steak', name: 'Auxpolo Steak', price: 299, description: 'Auxpolo sauce addon' },
//       { id: 'french-onion-steak', name: 'French Onion Steak', price: 299, description: 'French onion sauce addon' },
//     ]
//   },
//   {
//     id: 'burgers',
//     name: 'Gourmet Burgers',
//     icon: '🍔',
//     items: [
//       { id: 'jn-special-burger', name: 'JN Special Burger', price: 999, description: 'Signature house burger' },
//       { id: 'zinger-burger', name: 'Zinger Burger', price: 599, description: 'Crispy chicken burger' },
//       { id: 'grill-chicken-burger', name: 'Grill Chicken Burger', price: 699, description: 'Grilled chicken patty' },
//       { id: 'jn-crispy-burger', name: 'JN Crispy Burger', price: 749, description: 'Extra crispy special' },
//       { id: 'reggy-burger', name: 'Reggy Burger', price: 299, description: 'Classic regular burger' },
//       { id: 'max-smash-burger', name: 'Max Smash Burger', price: 999, description: 'Double smashed patty' },
//       { id: 'wild-smash-burger', name: 'Wild Smash Burger', price: 749, description: 'Spicy smashed burger' },
//       { id: 'melty-lava-beef-burger', name: 'Melty Lava Beef Burger', price: 1199, description: 'Cheese lava beef' },
//       { id: 'fish-burger', name: 'Fish Burger', price: 999, description: 'Crispy fish fillet' },
//       { id: 'cheese-addon', name: 'Cheese Addon', price: 299, description: 'Extra cheese' },
//       { id: 'jalapeno-addon', name: 'Jalapeno Addon', price: 299, description: 'Spicy jalapenos' },
//       { id: 'mushroom-addon', name: 'Mushroom Addon', price: 299, description: 'Mushrooms' },
//       { id: 'olive-addon', name: 'Olive Addon', price: 299, description: 'Olives' },
//     ]
//   },
//   {
//     id: 'pizza',
//     name: 'Delicious Pizza',
//     icon: '🍕',
//     items: [
//       { id: 'donut-pizza', name: 'Donut Pizza', price: 2299, description: 'Sweet donut shaped pizza' },
//       { id: 'lasagna-pizza-small', name: 'Lasagna Pizza (Small)', price: 1699, description: 'Lasagna topped pizza' },
//       { id: 'lasagna-pizza-medium', name: 'Lasagna Pizza (Medium)', price: 2299, description: 'Lasagna topped pizza' },
//       { id: 'kabab-special-pizza-small', name: 'Kabab Special Pizza (Small)', price: 749, description: 'Kabab topping' },
//       { id: 'kabab-special-pizza-medium', name: 'Kabab Special Pizza (Medium)', price: 1299, description: 'Kabab topping' },
//       { id: 'kabab-special-pizza-large', name: 'Kabab Special Pizza (Large)', price: 1999, description: 'Kabab topping' },
//       { id: 'super-supreme-pizza-small', name: 'Super Supreme Pizza (Small)', price: 699, description: 'All toppings' },
//       { id: 'super-supreme-pizza-medium', name: 'Super Supreme Pizza (Medium)', price: 1299, description: 'All toppings' },
//       { id: 'super-supreme-pizza-large', name: 'Super Supreme Pizza (Large)', price: 1999, description: 'All toppings' },
//       { id: 'into-wood-pizza-small', name: 'Into Wood Pizza (Small)', price: 749, description: 'Wood fired style' },
//       { id: 'into-wood-pizza-medium', name: 'Into Wood Pizza (Medium)', price: 1299, description: 'Wood fired style' },
//       { id: 'into-wood-pizza-large', name: 'Into Wood Pizza (Large)', price: 1999, description: 'Wood fired style' },
//       { id: 'platinum-pizza', name: 'Platinum Pizza', price: 1999, description: 'Premium pizza' },
//       { id: 'pepperoni-pizza', name: 'Pepperoni Pizza', price: 1799, description: 'Pepperoni topping' },
//     ]
//   },
//   {
//     id: 'broast',
//     name: 'Crispy Broast',
//     icon: '🍗',
//     items: [
//       { id: 'broast-quarter-small', name: 'Broast Quarter (Small)', price: 799, description: 'Crispy quarter broast' },
//       { id: 'broast-half-medium', name: 'Broast Half (Medium)', price: 1299, description: 'Crispy half broast' },
//       { id: 'broast-full-large', name: 'Broast Full (Large)', price: 2399, description: 'Crispy full broast' },
//     ]
//   },
//   {
//     id: 'wraps',
//     name: 'Fresh Wraps',
//     icon: '🌯',
//     items: [
//       { id: 'jn-special-wrap', name: 'JN Special Wrap', price: 799, description: 'Signature house wrap' },
//       { id: 'grill-chicken-wrap', name: 'Grill Chicken Wrap', price: 749, description: 'Grilled chicken wrap' },
//       { id: 'smooky-chicken-wrap', name: 'Smooky Chicken Wrap', price: 749, description: 'Smoky chicken wrap' },
//       { id: 'cheese-wrap', name: 'Cheese Wrap', price: 549, description: 'Cheese filled wrap' },
//       { id: 'kabab-wrap', name: 'Kabab Wrap', price: 649, description: 'Kabab wrap' },
//       { id: 'baby-wrap', name: 'Baby Wrap', price: 549, description: 'Small size wrap' },
//       { id: 'fish-wrap', name: 'Fish Wrap', price: 899, description: 'Crispy fish wrap' },
//       { id: 'zinger-wrap', name: 'Zinger Wrap', price: 599, description: 'Zinger chicken wrap' },
//       { id: 'beef-wrap', name: 'Beef Wrap', price: 849, description: 'Beef wrap' },
//       { id: 'jn-special-sauce', name: 'JN Special Sauce', price: 99, description: 'Signature sauce' },
//       { id: 'chipotle-sauce', name: 'Chipotle Sauce', price: 99, description: 'Spicy chipotle' },
//       { id: 'tarter-sauce', name: 'Tarter Sauce', price: 99, description: 'Tarter sauce' },
//       { id: 'garlic-sauce', name: 'Garlic Sauce', price: 99, description: 'Garlic sauce' },
//       { id: 'jalapeno-sauce', name: 'Jalapeno Sauce', price: 99, description: 'Jalapeno sauce' },
//       { id: 'honey-mustard-sauce', name: 'Honey Mustard Sauce', price: 99, description: 'Honey mustard' },
//       { id: 'pizza-sauce', name: 'Pizza Sauce', price: 99, description: 'Pizza sauce' },
//     ]
//   },
//   {
//     id: 'pasta',
//     name: 'Pasta & Noodles',
//     icon: '🍝',
//     items: [
//       { id: 'fettuccine-pasta', name: 'Fettuccine Pasta', price: 1099, description: 'Fettuccine pasta' },
//       { id: 'fried-chicken-pasta', name: 'Fried Chicken Pasta', price: 1149, description: 'Pasta with fried chicken' },
//       { id: 'jn-special-italian-pasta', name: 'JN Special Italian Pasta', price: 1199, description: 'Special Italian pasta' },
//       { id: 'penne-pasta', name: 'Penne Pasta', price: 1149, description: 'Penne pasta' },
//       { id: 'bake-cheese-pasta', name: 'Bake Cheese Pasta', price: 1099, description: 'Baked cheese pasta' },
//       { id: 'bake-pasta-with-fries', name: 'Bake Pasta with Fries', price: 999, description: 'Pasta with fries' },
//       { id: 'dragon-noodles', name: 'Dragon Noodles', price: 1299, description: 'Spicy dragon noodles' },
//       { id: 'mexican-noodles', name: 'Mexican Noodles', price: 1299, description: 'Mexican style noodles' },
//     ]
//   },
//   {
//     id: 'soups',
//     name: 'Hot Soups',
//     icon: '🥣',
//     items: [
//       { id: 'special-soup-small', name: 'Special Soup (Small)', price: 549, description: 'House special soup' },
//       { id: 'special-soup-large', name: 'Special Soup (Large)', price: 1599, description: 'House special soup' },
//       { id: 'soup-19b-small', name: '19B Soup (Small)', price: 599, description: 'Special 19B soup' },
//       { id: 'soup-19b-large', name: '19B Soup (Large)', price: 1799, description: 'Special 19B soup' },
//       { id: 'hot-sour-soup-small', name: 'Hot & Sour Soup (Small)', price: 399, description: 'Hot and sour soup' },
//       { id: 'hot-sour-soup-large', name: 'Hot & Sour Soup (Large)', price: 1299, description: 'Hot and sour soup' },
//       { id: 'cream-mushroom-soup', name: 'Cream of Mushroom Soup', price: 699, description: 'Creamy mushroom soup' },
//       { id: 'aux-pollo-soup', name: 'Aux Pollo Soup', price: 699, description: 'Aux pollo style soup' },
//       { id: 'vegetable-soup-small', name: 'Vegetable Soup (Small)', price: 399, description: 'Vegetable soup' },
//       { id: 'vegetable-soup-large', name: 'Vegetable Soup (Large)', price: 1199, description: 'Vegetable soup' },
//       { id: 'sweet-sour-soup', name: 'Sweet & Sour Soup', price: 1299, description: 'Sweet and sour soup' },
//     ]
//   },
//   {
//     id: 'salads',
//     name: 'Fresh Salads',
//     icon: '🥗',
//     items: [
//       { id: 'gym-lover-sandwich', name: 'Gym Lover Sandwich', price: 699, description: 'Healthy sandwich' },
//       { id: 'gym-platter', name: 'Gym Platter', price: 899, description: 'Gym platter' },
//       { id: 'caesar-salad', name: 'Caesar Salad', price: 699, description: 'Classic Caesar salad' },
//       { id: 'crispy-salad', name: 'Crispy Salad', price: 699, description: 'Crispy fresh salad' },
//       { id: 'coleslaw', name: 'Coleslaw', price: 249, description: 'Creamy coleslaw' },
//     ]
//   },
//   {
//     id: 'sandwiches',
//     name: 'Tasty Sandwiches',
//     icon: '🥪',
//     items: [
//       { id: 'jn-special-sandwich', name: 'JN Special Sandwich', price: 799, description: 'Signature house sandwich' },
//       { id: 'club-sandwich', name: 'Club Sandwich', price: 749, description: 'Club sandwich' },
//       { id: 'grill-chicken-sandwich', name: 'Grill Chicken Sandwich', price: 649, description: 'Grilled chicken sandwich' },
//       { id: 'jn-crispy-sandwich', name: 'JN Crispy Sandwich', price: 699, description: 'Crispy sandwich' },
//       { id: 'cheese-sandwich', name: 'Cheese Sandwich', price: 549, description: 'Cheese sandwich' },
//       { id: 'mexican-sandwich', name: 'Mexican Sandwich', price: 899, description: 'Mexican style sandwich' },
//       { id: 'smash-sandwich', name: 'Smash Sandwich', price: 749, description: 'Smashed sandwich' },
//     ]
//   },
//   {
//     id: 'appetizers',
//     name: 'Appetizers',
//     icon: '🍤',
//     items: [
//       { id: 'jumbo-prawns-small', name: 'Jumbo Prawns (Small)', price: 1799, description: 'Large prawns' },
//       { id: 'jumbo-prawns-large', name: 'Jumbo Prawns (Large)', price: 2099, description: 'Large prawns' },
//       { id: 'dynamite-chicken', name: 'Dynamite Chicken', price: 799, description: 'Spicy chicken bites' },
//       { id: 'dynamite-fish', name: 'Dynamite Fish', price: 999, description: 'Spicy fish bites' },
//       { id: 'dynamite-prawns', name: 'Dynamite Prawns', price: 1299, description: 'Spicy prawns' },
//       { id: 'chicken-strips', name: 'Chicken Strips', price: 799, description: 'Chicken strips' },
//       { id: 'pizza-bite', name: 'Pizza Bite', price: 499, description: 'Mini pizza bites' },
//       { id: 'finger-mozzarella', name: 'Finger Mozzarella', price: 799, description: 'Mozzarella sticks' },
//       { id: 'hot-dog-sandwich', name: 'Hot Dog Sandwich', price: 999, description: 'Hot dog sandwich' },
//       { id: 'fish-katsu', name: 'Fish Katsu', price: 1199, description: 'Fish katsu' },
//       { id: 'glazzed-wings', name: 'Glazzed Wings', price: 999, description: 'Glazed chicken wings' },
//       { id: 'nuggets', name: 'Nuggets', price: 499, description: 'Chicken nuggets' },
//       { id: 'loaded-fries', name: 'Loaded Fries', price: 599, description: 'Loaded fries' },
//       { id: 'nacho-loaded-fries', name: 'Nacho Loaded Fries', price: 799, description: 'Nacho loaded fries' },
//       { id: 'wild-fries', name: 'Wild Fries', price: 899, description: 'Wild seasoned fries' },
//       { id: 'plain-fries-small', name: 'Plain Fries (Small)', price: 299, description: 'Plain fries' },
//       { id: 'plain-fries-large', name: 'Plain Fries (Large)', price: 499, description: 'Plain fries' },
//       { id: 'dhaka-chicken', name: 'Dhaka Chicken', price: 999, description: 'Dhaka style chicken' },
//       { id: 'dhaka-fish', name: 'Dhaka Fish', price: 699, description: 'Dhaka style fish' },
//       { id: 'thai-chicken-rolls', name: 'Thai Chicken Rolls', price: 699, description: 'Thai chicken rolls' },
//       { id: 'tempura-chicken', name: 'Tempura Chicken', price: 699, description: 'Tempura chicken' },
//       { id: 'chicken-tenders', name: 'Chicken Tenders (4pcs)', price: 999, description: 'Chicken tenders' },
//       { id: 'spring-roll', name: 'Spring Roll', price: 699, description: 'Spring rolls' },
//       { id: 'fish-strips', name: 'Fish Strips', price: 1399, description: 'Fish strips' },
//     ]
//   },
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
//   { id: 'tea', name: 'Tea', icon: '🍵' },
//   { id: 'coffee', name: 'Coffee', icon: '☕' },
//   { id: 'thai', name: 'Thai/Chinese', icon: '🥢' },
//   { id: 'specials', name: 'Specials', icon: '⭐' },
//   { id: 'burgers', name: 'Burgers', icon: '🍔' },
//   { id: 'pizza', name: 'Pizza', icon: '🍕' },
//   { id: 'steaks', name: 'Steaks', icon: '🥩' },
//   { id: 'wraps', name: 'Wraps', icon: '🌯' },
//   { id: 'appetizers', name: 'Appetizers', icon: '🍤' },
// ];

// export default function CompleteMenu() {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [quantities, setQuantities] = useState({});
//   const { addToCart, cartCount, removeFromCart, getCartItems } = useCart();

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

//   const handleRemoveItem = (itemId) => {
//     removeFromCart(itemId);
//     setQuantities(prev => {
//       const newQuantities = { ...prev };
//       delete newQuantities[itemId];
//       return newQuantities;
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

//         {/* Cart Summary */}
//         <div className="mb-8 text-center">
//           <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl">
//             <span className="text-orange-400 font-bold">Items in Cart: {cartCount}</span>
//             {cartCount > 0 && (
//               <button 
//                 onClick={() => {
//                   const items = getCartItems();
//                   if (items.length > 0) {
//                     // Show cart items in alert
//                     let message = 'Cart Items:\n';
//                     items.forEach((item, index) => {
//                       message += `${index + 1}. ${item.name} x${item.quantity} = Rs ${item.price * item.quantity}\n`;
//                     });
//                     alert(message);
//                   }
//                 }}
//                 className="text-sm text-orange-300 hover:text-orange-400"
//               >
//                 View Cart
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Filter Tabs */}
//         <div className="mb-16">
//           <div className="flex flex-wrap justify-center gap-3">
//             {FILTERS.map((filter) => (
//               <button
//                 key={filter.id}
//                 onClick={() => setActiveFilter(filter.id)}
//                 className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
//                   activeFilter === filter.id
//                     ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl shadow-orange-500/30'
//                     : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white'
//                 }`}
//               >
//                 <span className="text-lg">{filter.icon}</span>
//                 <span className="font-medium text-sm whitespace-nowrap">{filter.name}</span>
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

//                         <div className="flex gap-2">
//                           <button
//                             onClick={() => handleRemoveItem(item.id)}
//                             className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30"
//                             title="Remove from cart"
//                           >
//                             <Trash2 className="w-4 h-4" />
//                           </button>
                          
//                           <button
//                             id={`cart-btn-${item.id}`}
//                             onClick={() => handleAddToCart(item)}
//                             className="flex items-center gap-2 px-5 py-2.5 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl hover:shadow-lg hover:shadow-orange-500/30"
//                           >
//                             <span>Add</span>
//                             <span className="text-sm opacity-70">
//                               Rs {item.price * (quantities[item.id] || 1)}
//                             </span>
//                           </button>
//                         </div>
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
  shakes: '/kitkat.jpg',
  chillers: '/kitkat.jpg',
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
      { id: 'lotus-shake', name: 'Lotus Shake', price: 699, description: 'Crushed Lotus biscuits with creamy milk', image: '/lotus.jpg' },
      { id: 'kitkat-shake', name: 'Kitkat Shake', price: 599, description: 'Chocolate Kitkat delight', image: '/kitkat.jpg' },
      { id: 'oreo-shake', name: 'Oreo Shake', price: 499, description: 'Classic Oreo cookies blend', image: '/oreo.jpg' },
      { id: 'nutella-shake', name: 'Nutella Shake', price: 699, description: 'Rich Nutella chocolate shake', image: '/nutella.jpg' },
      { id: 'cold-coffee', name: 'Cold Coffee', price: 699, description: 'Iced coffee perfection', image: '/cold.jpg' },
      { id: 'vanilla-shake', name: 'Vanilla Shake', price: 699, description: 'Classic vanilla flavor', image: '/vanilla.jpg' },
      { id: 'mango-shake', name: 'Mango Shake', price: 699, description: 'Fresh mango delight', image: '/mango.jpg' },
      { id: 'strawberry-shake', name: 'Strawberry Shake', price: 699, description: 'Sweet strawberry blend', image: '/strawberry.jpg' },
      { id: 'pistacio-shake', name: 'Pistacio Shake', price: 699, description: 'Nutty pistachio flavor', image: '/pistacio.jpg' },
      { id: 'protein-shake', name: 'Protein Shake', price: 699, description: 'Healthy protein boost', image: '/protein.jpg' },
      { id: 'blueberry-shake', name: 'Blueberry Shake', price: 699, description: 'Antioxidant rich blueberry', image: '/blueberry.jpg' },
      { id: 'cocktail-shake', name: 'Cocktail Shake', price: 699, description: 'Mixed fruit special', image: '/cocktail.jpg' },
    ]
  },
  {
    id: 'chillers',
    name: 'Refreshing Chillers',
    icon: '🧊',
    items: [
      { id: 'blue-buzz', name: 'Blue Buzz', price: 549, description: 'Blueberry mint cooler', image: '/blue.jpg' },
      { id: 'peach-buzz', name: 'Peach Buzz', price: 549, description: 'Fresh peach delight', image: '/peach.jpg' },
      { id: 'mango-buzz', name: 'Mango Buzz', price: 549, description: 'Tropical mango blast', image: '/mangob.jpg' },
      { id: 'mix-buzz', name: 'Mix Buzz', price: 549, description: 'Mixed fruit explosion', image: '/mixb.jpg' },
      { id: 'passion-fruit', name: 'Passion Fruit', price: 549, description: 'Exotic passion fruit', image: '/passionf.jpg' },
      { id: 'kiwi-crush', name: 'Kiwi Crush', price: 549, description: 'Tangy kiwi freshness', image: '/kiwic.jpg' },
      { id: 'green-apple', name: 'Green Apple', price: 549, description: 'Crisp apple flavor', image: '/grena.jpg' },
      { id: 'mix-berries', name: 'Mix Berries', price: 549, description: 'Berry medley', image: '/mixbu.jpg' },
    ]
  },
  {
    id: 'mojitos',
    name: 'Fresh Mojitos',
    icon: '🌿',
    items: [
      { id: 'moon-rocker', name: 'Moon Rocker', price: 599, description: 'Special mint mojito', image: '/moonrocker.jpg' },
      { id: 'italian-mojito', name: 'Italian Mojito', price: 499, description: 'Italian herbs twist', image: '/italianmojito.jpg' },
      { id: 'north-pole', name: 'North Pole', price: 499, description: 'Minty cool sensation', image: '/northpole.jpg' },
      { id: 'green-apple-mojito', name: 'Green Apple Mojito', price: 499, description: 'Apple mint fusion', image: '/greenmojito.jpg' },
      { id: 'electric-lemonade', name: 'Electric Lemonade', price: 499, description: 'Zesty lemon blast', image: '/electriclemonade.jpg' },
      { id: 'blue-lagoon', name: 'Blue Lagoon', price: 499, description: 'Blue curacao special', image: '/bluelagoon.jpg' },
      { id: 'royal-rose', name: 'Royal Rose', price: 599, description: 'Rose flavored luxury', image: '/royalrose.jpg' },
      { id: 'the-green', name: 'The Green', price: 599, description: 'Fresh herbal blend', image: '/greenm.jpg' },
    ]
  },
  {
    id: 'margaritas',
    name: 'Margaritas',
    icon: '🍹',
    items: [
      { id: 'mint-margarita', name: 'Mint Margarita', price: 349, description: 'Refreshing mint margarita', image: '/mint-margarita.jpg' },
      { id: 'blueberry-margarita', name: 'Blue Berry Margarita', price: 449, description: 'Sweet blueberry margarita', image: '/blueberry-margarita.jpg' },
      { id: 'strawberry-margarita', name: 'Strawberry Margarita', price: 449, description: 'Fresh strawberry blend', image: '/strawberry-margarita.jpg' },
    ]
  },
  {
    id: 'icedCoffee',
    name: 'Iced Coffee',
    icon: '❄️',
    items: [
      { id: 'frappuccino', name: 'Frappuccino', price: 699, description: 'Blended ice coffee', image: '/frappuccino.jpg' },
      { id: 'cafe-latte-iced', name: 'Cafe Latte', price: 699, description: 'Iced latte', image: '/cafe-latte.jpg' },
      { id: 'pistacio-latte', name: 'Pistacio Latte', price: 699, description: 'Pistachio flavored latte', image: '/pistachio-latte.jpg' },
      { id: 'nutella-latte', name: 'Nutella Latte', price: 699, description: 'Nutella coffee delight', image: '/nutella-latte.jpg' },
      { id: 'lotus-latte', name: 'Lotus Latte', price: 699, description: 'Biscoff lotus latte', image: '/lotus-latte.jpg' },
      { id: 'strawberry-latte', name: 'Strawberry Latte', price: 699, description: 'Strawberry flavored latte', image: '/strawberry-latte.jpg' },
      { id: 'blueberry-latte', name: 'Blue Berry Latte', price: 699, description: 'Blueberry coffee blend', image: '/blueberry-latte.jpg' },
    ]
  },
  {
    id: 'desserts',
    name: 'Sweet Desserts',
    icon: '🍰',
    items: [
      { id: 'jn-white-lava', name: 'JN Special White Lava Cake', price: 999, description: 'Molten white chocolate', image: '/whitelava.jpg' },
      { id: 'lava-cake', name: 'Lava Cake', price: 699, description: 'Chocolate lava explosion', image: '/lavacake.jpg' },
      { id: 'bread-pudding', name: 'Bread Pudding (Chocolate/Caramel)', price: 699, description: 'Warm bread pudding', image: '/breadpudding.jpg' },
      { id: 'three-layer-cake', name: 'Three Layer Cake', price: 699, description: 'Triple layer delight', image: '/threelayer.jpg' },
      { id: 'cheese-cake', name: 'Cheese Cake', price: 699, description: 'Creamy cheesecake', image: '/cheese.jpg' },
      { id: 'cup-cake', name: 'Cup Cake', price: 399, description: 'Single serve delight', image: '/cup.jpg' },
      { id: 'alaska-cake', name: 'Alaska Cake', price: 699, description: 'Baked Alaska special', image: '/alaskacake.jpg' },
      { id: 'kunafa-cake', name: 'Kunafa Cake', price: 749, description: 'Middle Eastern delight', image: '/kunafacake.jpg' },
      { id: 'milky-cake', name: 'Milky Cake', price: 699, description: 'Soft milk cake', image: '/milkycake.jpg' },
      { id: 'sweetza', name: 'Sweetza', price: 999, description: 'Sweet pizza dessert', image: '/sweet.jpg' },
      { id: 'french-toast', name: 'French Toast', price: 749, description: 'Caramelized toast', image: '/frenchtoast.jpg' },
      { id: 'dome-cake', name: 'Dome Cake', price: 1499, description: 'Chocolate dome surprise', image: '/domecake.jpg' },
      { id: 'nutella-croissant', name: 'Nutella Croissant', price: 999, description: 'Nutella filled pastry', image: '/nutellacr.jpg' },
      { id: 'arabic-kunafa', name: 'Arabic Kunafa', price: 1199, description: 'Traditional kunafa', image: '/arabickunafa.jpg' },
    ]
  },
  {
    id: 'tea',
    name: 'Premium Teas',
    icon: '🍵',
    items: [
      { id: 'karak-tea', name: 'Karak Tea', price: 119, description: 'Strong traditional tea', image: '/karaktea.jpg' },
      { id: 'kashmiri-tea', name: 'Kashmiri Tea', price: 249, description: 'Pink Kashmiri chai', image: '/kashmiritea.jpg' },
      { id: 'creamy-tea', name: 'Creamy Tea', price: 249, description: 'Cream topped tea', image: '/creamytea.jpg' },
      { id: 'cardamom-tea', name: 'Cardamom Tea', price: 199, description: 'Aromatic cardamom tea', image: '/cardamomtea.jpg' },
    ]
  },
  {
    id: 'coffee',
    name: 'Artisan Coffee',
    icon: '☕',
    items: [
      { id: 'cappuccino', name: 'Cappuccino', price: 499, description: 'Classic Italian coffee', image: '/capuccino.jpg' },
      { id: 'cafe-latte-hot', name: 'Cafe Latte', price: 499, description: 'Smooth milk coffee', image: '/latte.jpg' },
      { id: 'americano-espresso', name: 'Americano/Espresso', price: 399, description: 'Strong black coffee', image: '/americano.jpg' },
      { id: 'caramel-latte', name: 'Caramel Latte', price: 699, description: 'Caramel flavored latte', image: '/caramellatte.jpg' },
      { id: 'irish-nut-cream', name: 'Irish Nut Cream', price: 699, description: 'Nutty Irish cream', image: '/irishnutcream.jpg' },
      { id: 'spanish-latte', name: 'Spanish Latte', price: 799, description: 'Sweet Spanish style', image: '/spanishlatte.jpg' },
      { id: 'vanilla-latte', name: 'Vanilla Latte', price: 699, description: 'Vanilla infused coffee', image: '/vanillalatte.jpg' },
      { id: 'hazelnut', name: 'Hazelnut', price: 699, description: 'Nutty hazelnut flavor', image: '/hazelnut.jpg' },
      { id: 'homemade', name: 'Homemade', price: 699, description: 'House special blend', image: '/homemaidcoffee.jpg' },
      { id: 'french-vanilla', name: 'French Vanilla', price: 699, description: 'French style vanilla', image: '/frenchvanilla.jpg' },
    ]
  },
  {
    id: 'thai',
    name: 'Thai & Chinese',
    icon: '🥢',
    items: [
      { id: 'chilli-dry-chicken', name: 'Chilli Dry Chicken', price: 1099, description: 'Spicy dry chicken', image: '/chillidrychicken.jpg' },
      { id: 'chilli-dry-fish', name: 'Chilli Dry Fish', price: 1499, description: 'Spicy dry fish', image: '/chillidryfish.jpg' },
      { id: 'chilli-dry-prawns', name: 'Chilli Dry Prawns', price: 1899, description: 'Spicy dry prawns', image: '/chilliprawns.jpg' },
      { id: 'kung-pao-chicken', name: 'Kung Pao Chicken', price: 1299, description: 'Spicy kung pao chicken', image: '/kungpaochicken.jpg' },
      { id: 'chicken-cashew-nut', name: 'Chicken Cashew Nut', price: 1299, description: 'Chicken with cashew nuts', image: '/chickencashewnut.jpg' },
      { id: 'chicken-schezwan', name: 'Chicken Schezwan', price: 1099, description: 'Schezwan style chicken', image: '/chickenschizwan.jpg' },
      { id: 'chicken-manchurian', name: 'Chicken Manchurian', price: 1099, description: 'Indo-Chinese favorite', image: '/chickenmanchurian.jpg' },
      { id: 'mongolian-chicken', name: 'Mongolian Chicken', price: 1199, description: 'Mongolian style', image: '/mongolianchicken.jpg' },
      { id: 'chicken-shashlik', name: 'Chicken Shashlik', price: 1299, description: 'Chicken shashlik', image: '/chickenshashlik.jpg' },
      { id: 'black-pepper-chicken', name: 'Black Pepper Chicken', price: 999, description: 'Peppery chicken', image: '/blackpepperchicken.jpg' },
      { id: 'chicken-chowmein', name: 'Chicken Chowmein', price: 1199, description: 'Stir fried noodles', image: '/chickenchowmein.jpg' },
      { id: 'sweet-chilli-chicken', name: 'Sweet Chilli Chicken', price: 1099, description: 'Sweet & spicy chicken', image: '/sweetchillichicken.jpg' },
      { id: 'garlic-fried', name: 'Garlic Fried', price: 349, description: 'Garlic flavored rice', image: '/garlicfried.jpg' },
      { id: 'egg-fried', name: 'Egg Fried', price: 349, description: 'Rice with egg', image: '/eggfriedrice.jpg' },
      { id: 'vegetables-fried', name: 'Vegetables Fried', price: 349, description: 'mixedvegetablerice', image: '/vegetablesfriedrice.jpg' },
      { id: 'masala-fried', name: 'Masala Fried', price: 349, description: 'spiced rice', image: '/masalafried.jpg' },
      { id: 'chicken-fried', name: 'Chicken Fried', price: 499, description: 'Chicken fried rice', image: '/chickenfriedrice.jpg' },
    ]
  },
  {
    id: 'specials',
    name: 'Janoshi Specials',
    icon: '⭐',
    items: [
      { id: 'stuffed-chicken-1699', name: 'Stuffed Chicken', price: 1699, description: 'Cheese stuffed chicken (Regular)', image: '/stuffedchicken.jpg' },
      { id: 'stuffed-chicken-1999', name: 'Stuffed Chicken', price: 1999, description: 'Cheese stuffed chicken (Large)', image: '/stuffed.jpg' },
      { id: 'parmesan-chicken', name: 'Parmesan Chicken', price: 1799, description: 'Parmesan crusted chicken', image: '/parmesanchicken.jpg' },
      { id: 'auxpolo-chicken', name: 'Auxpolo Chicken', price: 1699, description: 'Special auxpolo sauce', image: '/auxpolochicken.jpg' },
      { id: 'auxpolo-kabab', name: 'Auxpolo Kabab', price: 1499, description: 'Grilled auxpolo kabab', image: '/auxpolokabab.jpg' },
      { id: 'tarragon-chicken', name: 'Tarragon Chicken', price: 1599, description: 'Herb roasted chicken', image: '/tarragonchicken.jpg' },
      { id: 'moroccon-chicken', name: 'Moroccon Chicken', price: 1699, description: 'Moroccan spices chicken', image: '/morroconchicken.jpg' },
      { id: 'cordon-bleu-chicken', name: 'Cordon Bleu Chicken', price: 1699, description: 'Ham & cheese stuffed', image: '/cordonbleuchicken.jpg' },
      { id: 'bai-ze-chicken', name: 'Bai-ze Chicken', price: 1799, description: 'Special Bai-ze sauce', image: '/baizechicken.jpg' },
      { id: 'marinara-chicken', name: 'Marinara Chicken', price: 1699, description: 'Tomato marinara chicken', image: '/marinarachicken.jpg' },
      { id: 'fried-tender-chicken', name: 'Fried Tender Chicken', price: 1749, description: 'Crispy tender chicken', image: '/friedtenderchicken.jpg' },
      { id: 'fried-crispy-fish', name: 'Fried Crispy Fish', price: 1999, description: 'Golden fried fish', image: '/friedcrispyfish.jpg' },
      { id: 'seafood-platter', name: 'Seafood Platter', price: 3999, description: 'Assorted seafood for 2-3', image: '/seafoodplatter.jpg' },
      { id: 'napolean-chicken', name: 'Napolean Chicken', price: 1899, description: 'Layered chicken dish', image: '/napoleanchicken.jpg' },
    ]
  },
  {
    id: 'addons',
    name: 'Add-ons',
    icon: '➕',
    items: [
      { id: 'mash-potato', name: 'Mash Potato', price: 199, description: 'Creamy mashed potatoes', image: '/mash-potato.jpg' },
      { id: 'baked-potato', name: 'Baked Potato', price: 199, description: 'Baked potato', image: '/baked-potato.jpg' },
      { id: 'sauteed-vegetables', name: 'Sauteed Vegetables', price: 199, description: 'Fresh sautéed veggies', image: '/sauteed-vegetables.jpg' },
      { id: 'fries', name: 'Fries', price: 199, description: 'Crispy french fries', image: '/fries.jpg' },
      { id: 'cream-spinach', name: 'Cream Spinach', price: 199, description: 'Creamy spinach', image: '/cream-spinach.jpg' },
      { id: 'caramelized-onion', name: 'Caramelized Onion', price: 199, description: 'Sweet caramelized onions', image: '/caramelized-onion.jpg' },
      { id: 'potato-wedges', name: 'Potato Wedges', price: 199, description: 'Seasoned potato wedges', image: '/potato-wedges.jpg' },
    ]
  },
  {
    id: 'steaks',
    name: 'Premium Steaks',
    icon: '🥩',
    items: [
      { id: 'chicken-steak', name: 'Chicken Steak', price: 1699, description: 'Grilled chicken steak', image: '/chickensteak.jpg' },
      { id: 'fish-steak', name: 'Fish Steak', price: 2099, description: 'Fresh fish steak', image: '/fishsteak.jpg' },
      { id: 'beef-steak', name: 'Beef Steak', price: 2999, description: 'Juicy beef steak', image: '/beefsteak.jpg' },
      { id: 'rib-eye-steak', name: 'Rib Eye Steak', price: 4499, description: 'Premium rib eye', image: '/ribeyesteak.jpg' },
      { id: 'mushroom-steak', name: 'Mushroom Steak', price: 299, description: 'Mushroom sauce addon', image: '/mushroomsteak.jpg' },
      { id: 'moroccan-steak', name: 'Moroccan Steak', price: 299, description: 'Moroccan sauce addon', image: '/moroccansteak.jpg' },
      { id: 'tarragon-steak', name: 'Tarragon Steak', price: 299, description: 'Tarragon sauce addon', image: '/tarragonsteak.jpg' },
      { id: 'blackpepper-steak', name: 'Black Pepper Steak', price: 299, description: 'Black pepper sauce addon', image: '/blackpeppersteak.jpg' },
      { id: 'mexican-steak', name: 'Mexican Steak', price: 299, description: 'Mexican sauce addon', image: '/mexicansteak.jpg' },
      { id: 'auxpolo-steak', name: 'Auxpolo Steak', price: 299, description: 'Auxpolo sauce addon', image: '/auxpolosteak.jpg' },
      { id: 'french-onion-steak', name: 'French Onion Steak', price: 299, description: 'French onion sauce addon', image: '/frenchonionsteak.jpg' },
    ]
  },
  {
    id: 'burgers',
    name: 'Janoshi Burgers',
    icon: '🍔',
    items: [
      { id: 'jn-special-burger', name: 'JN Special Burger', price: 999, description: 'Signature house burger', image: '/jnspecialburger.jpg' },
      { id: 'zinger-burger', name: 'Zinger Burger', price: 599, description: 'Crispy chicken burger', image: '/zingerburger.jpg' },
      { id: 'grill-chicken-burger', name: 'Grill Chicken Burger', price: 699, description: 'Grilled chicken patty', image: '/grillchickenburger.jpg' },
      { id: 'jn-crispy-burger', name: 'JN Crispy Burger', price: 749, description: 'Extra crispy special', image: '/crispyburger.jpg' },
      { id: 'reggy-burger', name: 'Reggy Burger', price: 299, description: 'Classic regular burger', image: '/raggyburger.jpg' },
      { id: 'max-smash-burger', name: 'Max Smash Burger', price: 999, description: 'Double smashed patty', image: '/maxsmashburger.jpg' },
      { id: 'wild-smash-burger', name: 'Wild Smash Burger', price: 749, description: 'Spicy smashed burger', image: '/wildsmashburger.jpg' },
      { id: 'melty-lava-beef-burger', name: 'Melty Lava Beef Burger', price: 1199, description: 'Cheese lava beef', image: '/meltylavabeefburger.jpg' },
      { id: 'fish-burger', name: 'Fish Burger', price: 999, description: 'Crispy fish fillet', image: '/fishburger.jpg' },
      { id: 'cheese-addon', name: 'Cheese Addon', price: 299, description: 'Extra cheese', image: '/cheese.jpg' },
      { id: 'jalapeno-addon', name: 'Jalapeno Addon', price: 299, description: 'Spicy jalapenos', image: '/jalapenosauce.jpg' },
      { id: 'mushroom-addon', name: 'Mushroom Addon', price: 299, description: 'Mushrooms', image: '/mushroomsauce.jpg' },
      { id: 'olive-addon', name: 'Olive Addon', price: 299, description: 'Olives', image: '/olivesauce.jpg' },
    ]
  },
  {
    id: 'pizza',
    name: 'Delicious Pizza',
    icon: '🍕',
    items: [
      { id: 'donut-pizza', name: 'Donut Pizza', price: 2299, description: 'Sweet donut shaped pizza', image: '/donutpizza.jpg' },
      { id: 'lasagna-pizza-small', name: 'Lasagna Pizza (Small)', price: 1699, description: 'Lasagna topped pizza', image: '/lasagnapizza.jpg' },
      { id: 'lasagna-pizza-medium', name: 'Lasagna Pizza (Medium)', price: 2299, description: 'Lasagna topped pizza', image: '/lasagnapizza.jpg' },
      { id: 'kabab-special-pizza-small', name: 'Kabab Special Pizza (Small)', price: 749, description: 'Kabab topping', image: '/kababpizza.jpg' },
      { id: 'kabab-special-pizza-medium', name: 'Kabab Special Pizza (Medium)', price: 1299, description: 'Kabab topping', image: '/kababpizza.jpg' },
      { id: 'kabab-special-pizza-large', name: 'Kabab Special Pizza (Large)', price: 1999, description: 'Kabab topping', image: '/kababpizza.jpg' },
      { id: 'super-supreme-pizza-small', name: 'Super Supreme Pizza (Small)', price: 699, description: 'All toppings', image: '/supremepizza.jpg' },
      { id: 'super-supreme-pizza-medium', name: 'Super Supreme Pizza (Medium)', price: 1299, description: 'All toppings', image: '/supremepizza.jpg' },
      { id: 'super-supreme-pizza-large', name: 'Super Supreme Pizza (Large)', price: 1999, description: 'All toppings', image: '/supremepizza.jpg' },
      { id: 'into-wood-pizza-small', name: 'Into Wood Pizza (Small)', price: 749, description: 'Wood fired style', image: '/intowoodpizza.jpg' },
      { id: 'into-wood-pizza-medium', name: 'Into Wood Pizza (Medium)', price: 1299, description: 'Wood fired style', image: '/intowoodpizza.jpg' },
      { id: 'into-wood-pizza-large', name: 'Into Wood Pizza (Large)', price: 1999, description: 'Wood fired style', image: '/intowoodpizza.jpg' },
      { id: 'platinum-pizza', name: 'Platinum Pizza', price: 1999, description: 'Premium pizza', image: '/platinumpizza.jpg' },
      { id: 'pepperoni-pizza', name: 'Pepperoni Pizza', price: 1799, description: 'Pepperoni topping', image: '/pepperonipizza.jpg' },
    ]
  },
  {
    id: 'broast',
    name: 'Crispy Broast',
    icon: '🍗',
    items: [
      { id: 'broast-quarter-small', name: 'Broast Quarter (Small)', price: 799, description: 'Crispy quarter broast', image: '/broast-quarter.jpg' },
      { id: 'broast-half-medium', name: 'Broast Half (Medium)', price: 1299, description: 'Crispy half broast', image: '/broast-half.jpg' },
      { id: 'broast-full-large', name: 'Broast Full (Large)', price: 2399, description: 'Crispy full broast', image: '/broast-full.jpg' },
    ]
  },
  {
    id: 'wraps',
    name: 'Fresh Wraps',
    icon: '🌯',
    items: [
      { id: 'jn-special-wrap', name: 'JN Special Wrap', price: 799, description: 'Signature house wrap', image: '/jnspecialwrap.jpg' },
      { id: 'grill-chicken-wrap', name: 'Grill Chicken Wrap', price: 749, description: 'Grilled chicken wrap', image: '/grillchickenwrap.jpg' },
      { id: 'smooky-chicken-wrap', name: 'Smooky Chicken Wrap', price: 749, description: 'Smoky chicken wrap', image: '/smookychickenwrap.jpg' },
      { id: 'cheese-wrap', name: 'Cheese Wrap', price: 549, description: 'Cheese filled wrap', image: '/cheesewrap.jpg' },
      { id: 'kabab-wrap', name: 'Kabab Wrap', price: 649, description: 'Kabab wrap', image: '/kababwrap.jpg' },
      { id: 'baby-wrap', name: 'Baby Wrap', price: 549, description: 'Small size wrap', image: '/babywrap.jpg' },
      { id: 'fish-wrap', name: 'Fish Wrap', price: 899, description: 'Crispy fish wrap', image: '/fishwrap.jpg' },
      { id: 'zinger-wrap', name: 'Zinger Wrap', price: 599, description: 'Zinger chicken wrap', image: '/zingerwrap.jpg' },
      { id: 'beef-wrap', name: 'Beef Wrap', price: 849, description: 'Beef wrap', image: '/beefwrap.jpg' },
      { id: 'jn-special-sauce', name: 'JN Special Sauce', price: 99, description: 'Signature sauce', image: '/jalapenosauce.jpg' },
      { id: 'chipotle-sauce', name: 'Chipotle Sauce', price: 99, description: 'Spicy chipotle', image: '/chipotlesauce.jpg' },
      { id: 'tarter-sauce', name: 'Tarter Sauce', price: 99, description: 'Tarter sauce', image: '/tartersauce.jpg' },
      { id: 'garlic-sauce', name: 'Garlic Sauce', price: 99, description: 'Garlic sauce', image: '/garlicsauce.jpg' },
      { id: 'jalapeno-sauce', name: 'Jalapeno Sauce', price: 99, description: 'Jalapeno sauce', image: '/jalapenosauce.jpg' },
      { id: 'honey-mustard-sauce', name: 'Honey Mustard Sauce', price: 99, description: 'Honey mustard', image: '/honeymustardsauce.jpg' },
      { id: 'pizza-sauce', name: 'Pizza Sauce', price: 99, description: 'Pizza sauce', image: '/pizzasauce.jpg' },
    ]
  },
  {
    id: 'pasta',
    name: 'Pasta & Noodles',
    icon: '🍝',
    items: [
      { id: 'fettuccine-pasta', name: 'Fettuccine Pasta', price: 1099, description: 'Fettuccine pasta', image: '/fettuccine-pasta.jpg' },
      { id: 'fried-chicken-pasta', name: 'Fried Chicken Pasta', price: 1149, description: 'Pasta with fried chicken', image: '/fried-chicken-pasta.jpg' },
      { id: 'jn-special-italian-pasta', name: 'JN Special Italian Pasta', price: 1199, description: 'Special Italian pasta', image: '/jn-italian-pasta.jpg' },
      { id: 'penne-pasta', name: 'Penne Pasta', price: 1149, description: 'Penne pasta', image: '/penne-pasta.jpg' },
      { id: 'bake-cheese-pasta', name: 'Bake Cheese Pasta', price: 1099, description: 'Baked cheese pasta', image: '/bake-cheese-pasta.jpg' },
      { id: 'bake-pasta-with-fries', name: 'Bake Pasta with Fries', price: 999, description: 'Pasta with fries', image: '/bake-pasta-fries.jpg' },
      { id: 'dragon-noodles', name: 'Dragon Noodles', price: 1299, description: 'Spicy dragon noodles', image: '/dragon-noodles.jpg' },
      { id: 'mexican-noodles', name: 'Mexican Noodles', price: 1299, description: 'Mexican style noodles', image: '/mexican-noodles.jpg' },
    ]
  },
  {
    id: 'soups',
    name: 'Hot Soups',
    icon: '🥣',
    items: [
      { id: 'special-soup-small', name: 'Special Soup (Small)', price: 549, description: 'House special soup', image: '/special-soup.jpg' },
      { id: 'special-soup-large', name: 'Special Soup (Large)', price: 1599, description: 'House special soup', image: '/special-soup.jpg' },
      { id: 'soup-19b-small', name: '19B Soup (Small)', price: 599, description: 'Special 19B soup', image: '/19b-soup.jpg' },
      { id: 'soup-19b-large', name: '19B Soup (Large)', price: 1799, description: 'Special 19B soup', image: '/19b-soup.jpg' },
      { id: 'hot-sour-soup-small', name: 'Hot & Sour Soup (Small)', price: 399, description: 'Hot and sour soup', image: '/hot-sour-soup.jpg' },
      { id: 'hot-sour-soup-large', name: 'Hot & Sour Soup (Large)', price: 1299, description: 'Hot and sour soup', image: '/hot-sour-soup.jpg' },
      { id: 'cream-mushroom-soup', name: 'Cream of Mushroom Soup', price: 699, description: 'Creamy mushroom soup', image: '/cream-mushroom-soup.jpg' },
      { id: 'aux-pollo-soup', name: 'Aux Pollo Soup', price: 699, description: 'Aux pollo style soup', image: '/aux-pollo-soup.jpg' },
      { id: 'vegetable-soup-small', name: 'Vegetable Soup (Small)', price: 399, description: 'Vegetable soup', image: '/vegetable-soup.jpg' },
      { id: 'vegetable-soup-large', name: 'Vegetable Soup (Large)', price: 1199, description: 'Vegetable soup', image: '/vegetable-soup.jpg' },
      { id: 'sweet-sour-soup', name: 'Sweet & Sour Soup', price: 1299, description: 'Sweet and sour soup', image: '/sweet-sour-soup.jpg' },
    ]
  },
  {
    id: 'salads',
    name: 'Fresh Salads',
    icon: '🥗',
    items: [
      { id: 'gym-lover-sandwich', name: 'Gym Lover Sandwich', price: 699, description: 'Healthy sandwich', image: '/gym-sandwich.jpg' },
      { id: 'gym-platter', name: 'Gym Platter', price: 899, description: 'Gym platter', image: '/gym-platter.jpg' },
      { id: 'caesar-salad', name: 'Caesar Salad', price: 699, description: 'Classic Caesar salad', image: '/caesar-salad.jpg' },
      { id: 'crispy-salad', name: 'Crispy Salad', price: 699, description: 'Crispy fresh salad', image: '/crispy-salad.jpg' },
      { id: 'coleslaw', name: 'Coleslaw', price: 249, description: 'Creamy coleslaw', image: '/coleslaw.jpg' },
    ]
  },
  {
    id: 'sandwiches',
    name: 'Tasty Sandwiches',
    icon: '🥪',
    items: [
      { id: 'jn-special-sandwich', name: 'JN Special Sandwich', price: 799, description: 'Signature house sandwich', image: '/jn-special-sandwich.jpg' },
      { id: 'club-sandwich', name: 'Club Sandwich', price: 749, description: 'Club sandwich', image: '/club-sandwich.jpg' },
      { id: 'grill-chicken-sandwich', name: 'Grill Chicken Sandwich', price: 649, description: 'Grilled chicken sandwich', image: '/grill-chicken-sandwich.jpg' },
      { id: 'jn-crispy-sandwich', name: 'JN Crispy Sandwich', price: 699, description: 'Crispy sandwich', image: '/jn-crispy-sandwich.jpg' },
      { id: 'cheese-sandwich', name: 'Cheese Sandwich', price: 549, description: 'Cheese sandwich', image: '/cheese-sandwich.jpg' },
      { id: 'mexican-sandwich', name: 'Mexican Sandwich', price: 899, description: 'Mexican style sandwich', image: '/mexican-sandwich.jpg' },
      { id: 'smash-sandwich', name: 'Smash Sandwich', price: 749, description: 'Smashed sandwich', image: '/smash-sandwich.jpg' },
    ]
  },
  {
    id: 'appetizers',
    name: 'Appetizers',
    icon: '🍤',
    items: [
      { id: 'jumbo-prawns-small', name: 'Jumbo Prawns (Small)', price: 1799, description: 'Large prawns', image: '/jumboprawns.jpg' },
      { id: 'jumbo-prawns-large', name: 'Jumbo Prawns (Large)', price: 2099, description: 'Large prawns', image: '/jumboprawns.jpg' },
      { id: 'dynamite-chicken', name: 'Dynamite Chicken', price: 799, description: 'Spicy chicken bites', image: '/dynamitechicken.jpg' },
      { id: 'dynamite-fish', name: 'Dynamite Fish', price: 999, description: 'Spicy fish bites', image: '/dynamitefish.jpg' },
      { id: 'dynamite-prawns', name: 'Dynamite Prawns', price: 1299, description: 'Spicy prawns', image: '/dynamiteprawns.jpg' },
      { id: 'chicken-strips', name: 'Chicken Strips', price: 799, description: 'Chicken strips', image: '/chickenstrips.jpg' },
      { id: 'pizza-bite', name: 'Pizza Bite', price: 499, description: 'Mini pizza bites', image: '/pizzabite.jpg' },
      { id: 'finger-mozzarella', name: 'Finger Mozzarella', price: 799, description: 'Mozzarella sticks', image: '/fingermozarella.jpg' },
      { id: 'hot-dog-sandwich', name: 'Hot Dog Sandwich', price: 999, description: 'Hot dog sandwich', image: '/hotdogsandwich.jpg' },
      { id: 'fish-katsu', name: 'Fish Katsu', price: 1199, description: 'Fish katsu', image: '/fishkatsu.jpg' },
      { id: 'glazzed-wings', name: 'Glazzed Wings', price: 999, description: 'Glazed chicken wings', image: '/glazzedwings.jpg' },
      { id: 'nuggets', name: 'Nuggets', price: 499, description: 'Chicken nuggets', image: '/nuggets.jpg' },
      { id: 'loaded-fries', name: 'Loaded Fries', price: 599, description: 'Loaded fries', image: '/loadedfries.jpg' },
      { id: 'nacho-loaded-fries', name: 'Nacho Loaded Fries', price: 799, description: 'Nacho loaded fries', image: '/nacholoadedfries.jpg' },
      { id: 'wild-fries', name: 'Wild Fries', price: 899, description: 'Wild seasoned fries', image: '/wildfries.jpg' },
      { id: 'plain-fries-small', name: 'Plain Fries (Small)', price: 299, description: 'Plain fries', image: '/plainfries.jpg' },
      { id: 'plain-fries-large', name: 'Plain Fries (Large)', price: 499, description: 'Plain fries', image: '/plainfries.jpg' },
      { id: 'dhaka-chicken', name: 'Dhaka Chicken', price: 999, description: 'Dhaka style chicken', image: '/dhakachicken.jpg' },
      { id: 'dhaka-fish', name: 'Dhaka Fish', price: 699, description: 'Dhaka style fish', image: '/dhakafish.jpg' },
      { id: 'thai-chicken-rolls', name: 'Thai Chicken Rolls', price: 699, description: 'Thai chicken rolls', image: '/thaichickenrolls.jpg' },
      { id: 'tempura-chicken', name: 'Tempura Chicken', price: 699, description: 'Tempura chicken', image: '/tempurachicken.jpg' },
      { id: 'chicken-tenders', name: 'Chicken Tenders (4pcs)', price: 999, description: 'Chicken tenders', image: '/chickentenders.jpg' },
      { id: 'spring-roll', name: 'Spring Roll', price: 699, description: 'Spring rolls', image: '/springrolls.jpg' },
      { id: 'fish-strips', name: 'Fish Strips', price: 1399, description: 'Fish strips', image: '/fishstrips.jpg' },
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

  // Function to get image for an item - YEH NAYA FUNCTION ADD KAREIN
  const getItemImage = (item) => {
    // Pehle item ki apni image
    if (item.image) return item.image;
    
    // Phir category ki default image
    if (CATEGORY_IMAGES[item.categoryId]) return CATEGORY_IMAGES[item.categoryId];
    
    // Last option fallback
    return '/default-food.jpg';
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
                    {/* Image - AB ITEM KI APNI IMAGE USE KAREIN */}
                    <div className="relative h-48 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ 
                          backgroundImage: `url(${getItemImage(item)})` // YEH LINE CHANGE KAREIN
                        }}
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