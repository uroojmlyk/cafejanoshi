// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { Plus, Minus, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
// import { useCart, registerMenuItem } from '../context/CartContext';

// /* ═══════════════════════════════════
//    ALL 155+ MENU ITEMS
//    ═══════════════════════════════════ */
// const CATEGORIES = [
//   { id:'shakes', name:'Signature Shakes', items:[
//     {id:'lotus-shake',name:'Lotus Shake',price:699,desc:'Crushed Lotus biscuits with creamy milk',img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'},
//     {id:'kitkat-shake',name:'Kitkat Shake',price:599,desc:'Chocolate Kitkat delight',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'},
//     {id:'oreo-shake',name:'Oreo Shake',price:499,desc:'Classic Oreo cookies blend',img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'},
//     {id:'nutella-shake',name:'Nutella Shake',price:699,desc:'Rich Nutella chocolate shake',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'},
//     {id:'cold-coffee',name:'Cold Coffee',price:699,desc:'Iced coffee perfection',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//     {id:'vanilla-shake',name:'Vanilla Shake',price:699,desc:'Classic vanilla flavor',img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'},
//     {id:'mango-shake',name:'Mango Shake',price:699,desc:'Fresh mango delight',img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'},
//     {id:'strawberry-shake',name:'Strawberry Shake',price:699,desc:'Sweet strawberry blend',img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'},
//     {id:'pistacio-shake',name:'Pistacio Shake',price:699,desc:'Nutty pistachio flavor',img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'},
//     {id:'protein-shake',name:'Protein Shake',price:699,desc:'Healthy protein boost',img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'},
//     {id:'blueberry-shake',name:'Blueberry Shake',price:699,desc:'Antioxidant rich blueberry',img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'},
//     {id:'cocktail-shake',name:'Cocktail Shake',price:699,desc:'Mixed fruit special',img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'},
//   ]},



//   { id:'chillers', name:'Refreshing Chillers', items:[
//     {id:'blue-buzz',name:'Blue Buzz',price:549,desc:'Blueberry mint cooler',img:'https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=600&q=80'},
//     {id:'peach-buzz',name:'Peach Buzz',price:549,desc:'Fresh peach delight',img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'},
//     {id:'mango-buzz',name:'Mango Buzz',price:549,desc:'Tropical mango blast',img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'},
//     {id:'mix-buzz',name:'Mix Buzz',price:549,desc:'Mixed fruit explosion',img:'https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=600&q=80'},
//     {id:'passion-fruit',name:'Passion Fruit',price:549,desc:'Exotic passion fruit',img:'https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=600&q=80'},
//     {id:'kiwi-crush',name:'Kiwi Crush',price:549,desc:'Tangy kiwi freshness',img:'https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=600&q=80'},
//     {id:'green-apple',name:'Green Apple',price:549,desc:'Crisp apple flavor',img:'https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=600&q=80'},
//     {id:'mix-berries',name:'Mix Berries',price:549,desc:'Berry medley',img:'https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'mojitos', name:'Fresh Mojitos', items:[
//     {id:'moon-rocker',name:'Moon Rocker',price:599,desc:'Special mint mojito',img:'https://images.unsplash.com/photo-1510707577719-ae7c9b788690?auto=format&fit=crop&w=600&q=80'},
//     {id:'italian-mojito',name:'Italian Mojito',price:499,desc:'Italian herbs twist',img:'https://images.unsplash.com/photo-1510707577719-ae7c9b788690?auto=format&fit=crop&w=600&q=80'},
//     {id:'north-pole',name:'North Pole',price:499,desc:'Minty cool sensation',img:'https://images.unsplash.com/photo-1510707577719-ae7c9b788690?auto=format&fit=crop&w=600&q=80'},
//     {id:'green-apple-mojito',name:'Green Apple Mojito',price:499,desc:'Apple mint fusion',img:'https://images.unsplash.com/photo-1510707577719-ae7c9b788690?auto=format&fit=crop&w=600&q=80'},
//     {id:'electric-lemonade',name:'Electric Lemonade',price:499,desc:'Zesty lemon blast',img:'https://images.unsplash.com/photo-1510707577719-ae7c9b788690?auto=format&fit=crop&w=600&q=80'},
//     {id:'blue-lagoon',name:'Blue Lagoon',price:499,desc:'Blue curacao special',img:'https://images.unsplash.com/photo-1510707577719-ae7c9b788690?auto=format&fit=crop&w=600&q=80'},
//     {id:'royal-rose',name:'Royal Rose',price:599,desc:'Rose flavored luxury',img:'https://images.unsplash.com/photo-1510707577719-ae7c9b788690?auto=format&fit=crop&w=600&q=80'},
//     {id:'the-green',name:'The Green',price:599,desc:'Fresh herbal blend',img:'https://images.unsplash.com/photo-1510707577719-ae7c9b788690?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'margaritas', name:'Margaritas', items:[
//     {id:'mint-margarita',name:'Mint Margarita',price:349,desc:'Refreshing mint margarita',img:'https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=600&q=80'},
//     {id:'blueberry-margarita',name:'Blue Berry Margarita',price:449,desc:'Sweet blueberry margarita',img:'https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=600&q=80'},
//     {id:'strawberry-margarita',name:'Strawberry Margarita',price:449,desc:'Fresh strawberry blend',img:'https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'icedcoffee', name:'Iced Coffee', items:[
//     {id:'frappuccino',name:'Frappuccino',price:699,desc:'Blended ice coffee',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//     {id:'cafe-latte-iced',name:'Cafe Latte (Iced)',price:699,desc:'Iced latte',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//     {id:'pistacio-latte',name:'Pistacio Latte',price:699,desc:'Pistachio flavored latte',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//     {id:'nutella-latte',name:'Nutella Latte',price:699,desc:'Nutella coffee delight',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//     {id:'lotus-latte',name:'Lotus Latte',price:699,desc:'Biscoff lotus latte',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//     {id:'strawberry-latte',name:'Strawberry Latte',price:699,desc:'Strawberry flavored latte',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//     {id:'blueberry-latte',name:'Blue Berry Latte',price:699,desc:'Blueberry coffee blend',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'desserts', name:'Sweet Desserts', items:[
//     {id:'jn-white-lava',name:'JN Special White Lava Cake',price:999,desc:'Molten white chocolate',img:'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80'},
//     {id:'lava-cake',name:'Lava Cake',price:699,desc:'Chocolate lava explosion',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'},
//     {id:'bread-pudding',name:'Bread Pudding (Choc/Caramel)',price:699,desc:'Warm bread pudding',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'},
//     {id:'three-layer-cake',name:'Three Layer Cake',price:699,desc:'Triple layer delight',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'},
//     {id:'cheese-cake',name:'Cheese Cake',price:699,desc:'Creamy cheesecake',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'},
//     {id:'cup-cake',name:'Cup Cake',price:399,desc:'Single serve delight',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'},
//     {id:'alaska-cake',name:'Alaska Cake',price:699,desc:'Baked Alaska special',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'},
//     {id:'kunafa-cake',name:'Kunafa Cake',price:749,desc:'Middle Eastern delight',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'},
//     {id:'milky-cake',name:'Milky Cake',price:699,desc:'Soft milk cake',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'},
//     {id:'sweetza',name:'Sweetza',price:999,desc:'Sweet pizza dessert',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'},
//     {id:'french-toast',name:'French Toast',price:749,desc:'Caramelized toast',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'},
//     {id:'dome-cake',name:'Dome Cake',price:1499,desc:'Chocolate dome surprise',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'},
//     {id:'nutella-croissant',name:'Nutella Croissant',price:999,desc:'Nutella filled pastry',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'},
//     {id:'arabic-kunafa',name:'Arabic Kunafa',price:1199,desc:'Traditional kunafa',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'tea', name:'Premium Teas', items:[
//     {id:'karak-tea',name:'Karak Tea',price:119,desc:'Strong traditional tea',img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80'},
//     {id:'kashmiri-tea',name:'Kashmiri Tea',price:249,desc:'Pink Kashmiri chai',img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80'},
//     {id:'creamy-tea',name:'Creamy Tea',price:249,desc:'Cream topped tea',img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80'},
//     {id:'cardamom-tea',name:'Cardamom Tea',price:199,desc:'Aromatic cardamom tea',img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'coffee', name:'Artisan Coffee', items:[
//     {id:'cappuccino',name:'Cappuccino',price:499,desc:'Classic Italian coffee',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//     {id:'cafe-latte-hot',name:'Cafe Latte',price:499,desc:'Smooth milk coffee',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//     {id:'americano',name:'Americano / Espresso',price:399,desc:'Strong black coffee',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//     {id:'caramel-latte',name:'Caramel Latte',price:699,desc:'Caramel flavored latte',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//     {id:'irish-nut-cream',name:'Irish Nut Cream',price:699,desc:'Nutty Irish cream coffee',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//     {id:'spanish-latte',name:'Spanish Latte',price:799,desc:'Sweet Spanish style latte',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//     {id:'vanilla-latte',name:'Vanilla Latte',price:699,desc:'Vanilla infused coffee',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//     {id:'hazelnut-coffee',name:'Hazelnut',price:699,desc:'Nutty hazelnut flavor',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//     {id:'homemade-coffee',name:'Homemade',price:699,desc:'House special blend',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//     {id:'french-vanilla-coffee',name:'French Vanilla',price:699,desc:'French style vanilla',img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'thai', name:'Thai & Chinese', items:[
//     {id:'chilli-dry-chicken',name:'Chilli Dry Chicken',price:1099,desc:'Spicy dry chicken',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//     {id:'chilli-dry-fish',name:'Chilli Dry Fish',price:1499,desc:'Spicy dry fish',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//     {id:'chilli-dry-prawns',name:'Chilli Dry Prawns',price:1899,desc:'Spicy dry prawns',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//     {id:'kung-pao-chicken',name:'Kung Pao Chicken',price:1299,desc:'Spicy kung pao chicken',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//     {id:'chicken-cashew-nut',name:'Chicken Cashew Nut',price:1299,desc:'Chicken with cashew nuts',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//     {id:'chicken-schezwan',name:'Chicken Schezwan',price:1099,desc:'Schezwan style chicken',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//     {id:'chicken-manchurian',name:'Chicken Manchurian',price:1099,desc:'Indo-Chinese favorite',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//     {id:'mongolian-chicken',name:'Mongolian Chicken',price:1199,desc:'Mongolian style',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//     {id:'chicken-shashlik',name:'Chicken Shashlik',price:1299,desc:'Chicken shashlik',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//     {id:'black-pepper-chicken',name:'Black Pepper Chicken',price:999,desc:'Peppery chicken',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//     {id:'chicken-chowmein',name:'Chicken Chowmein',price:1199,desc:'Stir fried noodles',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//     {id:'sweet-chilli-chicken',name:'Sweet Chilli Chicken',price:1099,desc:'Sweet & spicy chicken',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//     {id:'garlic-fried-rice',name:'Garlic Fried Rice',price:349,desc:'Garlic flavored rice',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//     {id:'egg-fried-rice',name:'Egg Fried Rice',price:349,desc:'Rice with egg',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//     {id:'veg-fried-rice',name:'Vegetables Fried Rice',price:349,desc:'Mixed vegetable rice',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//     {id:'masala-fried-rice',name:'Masala Fried Rice',price:349,desc:'Spiced rice',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//     {id:'chicken-fried-rice',name:'Chicken Fried Rice',price:499,desc:'Chicken fried rice',img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'specials', name:'Janoshi Specials', items:[
//     {id:'stuffed-chicken-reg',name:'Stuffed Chicken (Regular)',price:1699,desc:'Cheese stuffed chicken',img:'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?auto=format&fit=crop&w=600&q=80'},
//     {id:'stuffed-chicken-lrg',name:'Stuffed Chicken (Large)',price:1999,desc:'Cheese stuffed chicken',img:'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?auto=format&fit=crop&w=600&q=80'},
//     {id:'parmesan-chicken',name:'Parmesan Chicken',price:1799,desc:'Parmesan crusted chicken',img:'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?auto=format&fit=crop&w=600&q=80'},
//     {id:'auxpolo-chicken',name:'Auxpolo Chicken',price:1699,desc:'Special auxpolo sauce',img:'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?auto=format&fit=crop&w=600&q=80'},
//     {id:'auxpolo-kabab',name:'Auxpolo Kabab',price:1499,desc:'Grilled auxpolo kabab',img:'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?auto=format&fit=crop&w=600&q=80'},
//     {id:'tarragon-chicken',name:'Tarragon Chicken',price:1599,desc:'Herb roasted chicken',img:'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?auto=format&fit=crop&w=600&q=80'},
//     {id:'moroccan-chicken',name:'Moroccan Chicken',price:1699,desc:'Moroccan spices chicken',img:'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?auto=format&fit=crop&w=600&q=80'},
//     {id:'cordon-bleu',name:'Cordon Bleu Chicken',price:1699,desc:'Ham & cheese stuffed',img:'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?auto=format&fit=crop&w=600&q=80'},
//     {id:'bai-ze-chicken',name:'Bai-ze Chicken',price:1799,desc:'Special Bai-ze sauce',img:'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?auto=format&fit=crop&w=600&q=80'},
//     {id:'marinara-chicken',name:'Marinara Chicken',price:1699,desc:'Tomato marinara chicken',img:'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?auto=format&fit=crop&w=600&q=80'},
//     {id:'fried-tender-chicken',name:'Fried Tender Chicken',price:1749,desc:'Crispy tender chicken',img:'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?auto=format&fit=crop&w=600&q=80'},
//     {id:'fried-crispy-fish',name:'Fried Crispy Fish',price:1999,desc:'Golden fried fish',img:'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?auto=format&fit=crop&w=600&q=80'},
//     {id:'seafood-platter',name:'Seafood Platter',price:3999,desc:'Assorted seafood for 2–3',img:'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80'},
//     {id:'napoleon-chicken',name:'Napoleon Chicken',price:1899,desc:'Layered chicken dish',img:'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'steaks', name:'Premium Steaks', items:[
//     {id:'chicken-steak',name:'Chicken Steak',price:1699,desc:'Grilled chicken steak',img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'},
//     {id:'fish-steak',name:'Fish Steak',price:2099,desc:'Fresh fish steak',img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'},
//     {id:'beef-steak',name:'Beef Steak',price:2999,desc:'Juicy beef steak',img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'},
//     {id:'rib-eye-steak',name:'Rib Eye Steak',price:4499,desc:'Prime cut rib eye',img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'},
//     {id:'mushroom-sauce',name:'Mushroom Sauce (Add-on)',price:299,desc:'Mushroom sauce add-on',img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'},
//     {id:'moroccan-sauce',name:'Moroccan Sauce (Add-on)',price:299,desc:'Moroccan sauce add-on',img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'},
//     {id:'tarragon-sauce',name:'Tarragon Sauce (Add-on)',price:299,desc:'Tarragon sauce add-on',img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'},
//     {id:'blackpepper-sauce',name:'Black Pepper Sauce (Add-on)',price:299,desc:'Black pepper sauce',img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'},
//     {id:'mexican-sauce',name:'Mexican Sauce (Add-on)',price:299,desc:'Mexican sauce add-on',img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'},
//     {id:'auxpolo-sauce',name:'Auxpolo Sauce (Add-on)',price:299,desc:'Auxpolo sauce add-on',img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'},
//     {id:'french-onion-sauce',name:'French Onion Sauce (Add-on)',price:299,desc:'French onion sauce',img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'burgers', name:'Janoshi Burgers', items:[
//     {id:'jn-special-burger',name:'JN Special Burger',price:999,desc:'Signature house burger',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'},
//     {id:'zinger-burger',name:'Zinger Burger',price:599,desc:'Crispy chicken burger',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'},
//     {id:'grill-chicken-burger',name:'Grill Chicken Burger',price:699,desc:'Grilled chicken patty',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'},
//     {id:'jn-crispy-burger',name:'JN Crispy Burger',price:749,desc:'Extra crispy special',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'},
//     {id:'reggy-burger',name:'Reggy Burger',price:299,desc:'Classic regular burger',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'},
//     {id:'max-smash-burger',name:'Max Smash Burger',price:999,desc:'Double smashed patty',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'},
//     {id:'wild-smash-burger',name:'Wild Smash Burger',price:749,desc:'Spicy smashed burger',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'},
//     {id:'melty-lava-burger',name:'Melty Lava Beef Burger',price:1199,desc:'Cheese lava beef burger',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'},
//     {id:'fish-burger',name:'Fish Burger',price:999,desc:'Crispy fish fillet',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'pizza', name:'Delicious Pizza', items:[
//     {id:'donut-pizza',name:'Donut Pizza',price:2299,desc:'Sweet donut shaped pizza',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'},
//     {id:'lasagna-pizza-s',name:'Lasagna Pizza (Small)',price:1699,desc:'Lasagna topped pizza',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'},
//     {id:'lasagna-pizza-m',name:'Lasagna Pizza (Medium)',price:2299,desc:'Lasagna topped pizza',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'},
//     {id:'kabab-pizza-s',name:'Kabab Special Pizza (S)',price:749,desc:'Kabab topping pizza',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'},
//     {id:'kabab-pizza-m',name:'Kabab Special Pizza (M)',price:1299,desc:'Kabab topping pizza',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'},
//     {id:'kabab-pizza-l',name:'Kabab Special Pizza (L)',price:1999,desc:'Kabab topping pizza',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'},
//     {id:'supreme-pizza-s',name:'Super Supreme Pizza (S)',price:699,desc:'All toppings',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'},
//     {id:'supreme-pizza-m',name:'Super Supreme Pizza (M)',price:1299,desc:'All toppings',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'},
//     {id:'supreme-pizza-l',name:'Super Supreme Pizza (L)',price:1999,desc:'All toppings',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'},
//     {id:'wood-pizza-s',name:'Into Wood Pizza (S)',price:749,desc:'Wood fired style',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'},
//     {id:'wood-pizza-m',name:'Into Wood Pizza (M)',price:1299,desc:'Wood fired style',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'},
//     {id:'wood-pizza-l',name:'Into Wood Pizza (L)',price:1999,desc:'Wood fired style',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'},
//     {id:'platinum-pizza',name:'Platinum Pizza',price:1999,desc:'Premium pizza',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'},
//     {id:'pepperoni-pizza',name:'Pepperoni Pizza',price:1799,desc:'Pepperoni topping',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'broast', name:'Crispy Broast', items:[
//     {id:'broast-s',name:'Broast Quarter (Small)',price:799,desc:'Crispy quarter broast',img:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80'},
//     {id:'broast-m',name:'Broast Half (Medium)',price:1299,desc:'Crispy half broast',img:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80'},
//     {id:'broast-l',name:'Broast Full (Large)',price:2399,desc:'Crispy full broast',img:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'wraps', name:'Fresh Wraps', items:[
//     {id:'jn-special-wrap',name:'JN Special Wrap',price:799,desc:'Signature house wrap',img:'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'},
//     {id:'grill-chicken-wrap',name:'Grill Chicken Wrap',price:749,desc:'Grilled chicken wrap',img:'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'},
//     {id:'smoky-chicken-wrap',name:'Smoky Chicken Wrap',price:749,desc:'Smoky chicken wrap',img:'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'},
//     {id:'cheese-wrap',name:'Cheese Wrap',price:549,desc:'Cheese filled wrap',img:'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'},
//     {id:'kabab-wrap',name:'Kabab Wrap',price:649,desc:'Kabab wrap',img:'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'},
//     {id:'baby-wrap',name:'Baby Wrap',price:549,desc:'Small size wrap',img:'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'},
//     {id:'fish-wrap',name:'Fish Wrap',price:899,desc:'Crispy fish wrap',img:'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'},
//     {id:'zinger-wrap',name:'Zinger Wrap',price:599,desc:'Zinger chicken wrap',img:'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'},
//     {id:'beef-wrap',name:'Beef Wrap',price:849,desc:'Beef wrap',img:'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'pasta', name:'Pasta & Noodles', items:[
//     {id:'fettuccine-pasta',name:'Fettuccine Pasta',price:1099,desc:'Fettuccine pasta',img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80'},
//     {id:'fried-chicken-pasta',name:'Fried Chicken Pasta',price:1149,desc:'Pasta with fried chicken',img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80'},
//     {id:'jn-italian-pasta',name:'JN Special Italian Pasta',price:1199,desc:'Special Italian pasta',img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80'},
//     {id:'penne-pasta',name:'Penne Pasta',price:1149,desc:'Penne pasta',img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80'},
//     {id:'bake-cheese-pasta',name:'Bake Cheese Pasta',price:1099,desc:'Baked cheese pasta',img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80'},
//     {id:'bake-pasta-fries',name:'Bake Pasta with Fries',price:999,desc:'Pasta with fries',img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80'},
//     {id:'dragon-noodles',name:'Dragon Noodles',price:1299,desc:'Spicy dragon noodles',img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80'},
//     {id:'mexican-noodles',name:'Mexican Noodles',price:1299,desc:'Mexican style noodles',img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'soups', name:'Hot Soups', items:[
//     {id:'special-soup-s',name:'Special Soup (Small)',price:549,desc:'House special soup',img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80'},
//     {id:'special-soup-l',name:'Special Soup (Large)',price:1599,desc:'House special soup',img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80'},
//     {id:'19b-soup-s',name:'19B Soup (Small)',price:599,desc:'Special 19B soup',img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80'},
//     {id:'19b-soup-l',name:'19B Soup (Large)',price:1799,desc:'Special 19B soup',img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80'},
//     {id:'hot-sour-soup-s',name:'Hot & Sour Soup (Small)',price:399,desc:'Hot and sour soup',img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80'},
//     {id:'hot-sour-soup-l',name:'Hot & Sour Soup (Large)',price:1299,desc:'Hot and sour soup',img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80'},
//     {id:'cream-mushroom-soup',name:'Cream of Mushroom Soup',price:699,desc:'Creamy mushroom soup',img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80'},
//     {id:'aux-pollo-soup',name:'Aux Pollo Soup',price:699,desc:'Aux pollo style soup',img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80'},
//     {id:'veg-soup-s',name:'Vegetable Soup (Small)',price:399,desc:'Vegetable soup',img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80'},
//     {id:'veg-soup-l',name:'Vegetable Soup (Large)',price:1199,desc:'Vegetable soup',img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80'},
//     {id:'sweet-sour-soup',name:'Sweet & Sour Soup',price:1299,desc:'Sweet and sour soup',img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'salads', name:'Salads & Healthy', items:[
//     {id:'caesar-salad',name:'Caesar Salad',price:699,desc:'Classic Caesar salad',img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'},
//     {id:'crispy-salad',name:'Crispy Salad',price:699,desc:'Crispy fresh salad',img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'},
//     {id:'gym-platter',name:'Gym Platter',price:899,desc:'Healthy gym platter',img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'},
//     {id:'coleslaw',name:'Coleslaw',price:249,desc:'Creamy coleslaw',img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'sandwiches', name:'Tasty Sandwiches', items:[
//     {id:'jn-special-sandwich',name:'JN Special Sandwich',price:799,desc:'Signature house sandwich',img:'https://images.unsplash.com/photo-1550507991-ca1faa30e324?auto=format&fit=crop&w=600&q=80'},
//     {id:'club-sandwich',name:'Club Sandwich',price:749,desc:'Classic club sandwich',img:'https://images.unsplash.com/photo-1550507991-ca1faa30e324?auto=format&fit=crop&w=600&q=80'},
//     {id:'grill-chicken-sandwich',name:'Grill Chicken Sandwich',price:649,desc:'Grilled chicken sandwich',img:'https://images.unsplash.com/photo-1550507991-ca1faa30e324?auto=format&fit=crop&w=600&q=80'},
//     {id:'jn-crispy-sandwich',name:'JN Crispy Sandwich',price:699,desc:'Crispy sandwich',img:'https://images.unsplash.com/photo-1550507991-ca1faa30e324?auto=format&fit=crop&w=600&q=80'},
//     {id:'cheese-sandwich',name:'Cheese Sandwich',price:549,desc:'Cheese sandwich',img:'https://images.unsplash.com/photo-1550507991-ca1faa30e324?auto=format&fit=crop&w=600&q=80'},
//     {id:'mexican-sandwich',name:'Mexican Sandwich',price:899,desc:'Mexican style sandwich',img:'https://images.unsplash.com/photo-1550507991-ca1faa30e324?auto=format&fit=crop&w=600&q=80'},
//     {id:'smash-sandwich',name:'Smash Sandwich',price:749,desc:'Smashed sandwich',img:'https://images.unsplash.com/photo-1550507991-ca1faa30e324?auto=format&fit=crop&w=600&q=80'},
//   ]},
//   { id:'appetizers', name:'Appetizers & Fries', items:[
//     {id:'jumbo-prawns-s',name:'Jumbo Prawns (Small)',price:1799,desc:'Crispy jumbo prawns',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'},
//     {id:'jumbo-prawns-l',name:'Jumbo Prawns (Large)',price:2099,desc:'Crispy jumbo prawns',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'},
//     {id:'dynamite-chicken',name:'Dynamite Chicken',price:799,desc:'Spicy chicken bites',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'dynamite-fish',name:'Dynamite Fish',price:999,desc:'Spicy fish bites',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'dynamite-prawns',name:'Dynamite Prawns',price:1299,desc:'Spicy dynamite prawns',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'chicken-strips',name:'Chicken Strips',price:799,desc:'Crispy chicken strips',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'pizza-bite',name:'Pizza Bite',price:499,desc:'Mini pizza bites',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'finger-mozzarella',name:'Finger Mozzarella',price:799,desc:'Mozzarella sticks',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'hot-dog-sandwich',name:'Hot Dog Sandwich',price:999,desc:'Classic hot dog',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'fish-katsu',name:'Fish Katsu',price:1199,desc:'Japanese style fish katsu',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'glazed-wings',name:'Glazed Wings',price:999,desc:'Glazed chicken wings',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'nuggets',name:'Nuggets',price:499,desc:'Chicken nuggets',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'loaded-fries',name:'Loaded Fries',price:599,desc:'Loaded fries',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'nacho-fries',name:'Nacho Loaded Fries',price:799,desc:'Nacho loaded fries',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'wild-fries',name:'Wild Fries',price:899,desc:'Wild seasoned fries',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'plain-fries-s',name:'Plain Fries (Small)',price:299,desc:'Classic fries',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'plain-fries-l',name:'Plain Fries (Large)',price:499,desc:'Classic fries',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'dhaka-chicken',name:'Dhaka Chicken',price:999,desc:'Dhaka style chicken',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'dhaka-fish',name:'Dhaka Fish',price:699,desc:'Dhaka style fish',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'thai-chicken-rolls',name:'Thai Chicken Rolls',price:699,desc:'Thai chicken rolls',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'tempura-chicken',name:'Tempura Chicken',price:699,desc:'Crispy tempura chicken',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'chicken-tenders',name:'Chicken Tenders (4pcs)',price:999,desc:'Juicy chicken tenders',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'spring-roll',name:'Spring Roll',price:699,desc:'Crispy spring rolls',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//     {id:'fish-strips',name:'Fish Strips',price:1399,desc:'Crispy fish strips',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'},
//   ]},
// ];

// /* Register every item */
// CATEGORIES.forEach(cat => cat.items.forEach(i => registerMenuItem(i.id, i.name, i.price)));

// const FILTERS = [
//   { id:'all',         label:'All' },
//   { id:'coffee',      label:'Coffee' },
//   { id:'shakes',      label:'Shakes' },
//   { id:'chillers',    label:'Chillers' },
//   { id:'mojitos',     label:'Mojitos' },
//   { id:'desserts',    label:'Desserts' },
//   { id:'tea',         label:'Tea' },
//   { id:'specials',    label:'Specials' },
//   { id:'steaks',      label:'Steaks' },
//   { id:'burgers',     label:'Burgers' },
//   { id:'pizza',       label:'Pizza' },
//   { id:'thai',        label:'Thai/Chinese' },
//   { id:'pasta',       label:'Pasta' },
//   { id:'wraps',       label:'Wraps' },
//   { id:'appetizers',  label:'Appetizers' },
//   { id:'soups',       label:'Soups' },
//   { id:'sandwiches',  label:'Sandwiches' },
//   { id:'salads',      label:'Salads' },
//   { id:'broast',      label:'Broast' },
// ];

// function useReveal(th = 0.08) {
//   const ref = useRef(null);
//   useEffect(() => {
//     const el = ref.current; if (!el) return;
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('on'); obs.disconnect(); } }, { threshold: th });
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [th]);
//   return ref;
// }

// /* ═══ ITEM CARD ═══ */
// function ItemCard({ item, delay }) {
//   const ref = useRef(null);
//   const [qty, setQty]     = useState(1);
//   const [added, setAdded] = useState(false);
//   const { addToCart }     = useCart();

//   useEffect(() => {
//     const el = ref.current; if (!el) return;
//     const obs = new IntersectionObserver(([e]) => {
//       if (e.isIntersecting) {
//         setTimeout(() => { el.style.opacity = 1; el.style.transform = 'none'; }, delay);
//         obs.disconnect();
//       }
//     }, { threshold: 0.05 });
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [delay]);

//   const handleAdd = () => {
//     addToCart(item.id, item.name, item.price, qty);
//     setAdded(true);
//     setTimeout(() => setAdded(false), 1500);
//   };

//   return (
//     <div
//       ref={ref}
//       className="fm2-card"
//       style={{ opacity: 0, transform: 'translateY(28px)', transition: `opacity .8s var(--ease-out), transform .8s var(--ease-out)` }}
//     >
//       {/* Image */}
//       <div className="fm2-img-wrap">
//         <img src={item.img} alt={item.name} className="fm2-img" loading="lazy" />
//         <div className="fm2-price">Rs {item.price.toLocaleString()}</div>
//       </div>

//       {/* Body */}
//       <div className="fm2-body">
//         <div className="fm2-name">{item.name}</div>
//         <p className="fm2-desc">{item.desc}</p>

//         <div className="fm2-controls">
//           {/* Qty */}
//           <div className="fm2-qty">
//             <button onClick={() => setQty(q => Math.max(1,q-1))} className="fm2-qbtn"><Minus size={11}/></button>
//             <span className="fm2-qnum">{qty}</span>
//             <button onClick={() => setQty(q => q+1)} className="fm2-qbtn"><Plus size={11}/></button>
//           </div>
//           {/* Add */}
//           <button onClick={handleAdd} className={`fm2-add${added ? ' fm2-add--done' : ''}`}>
//             {added ? '✓ Added' : `Add · Rs ${(item.price * qty).toLocaleString()}`}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ═══ MAIN COMPONENT ═══ */
// export default function FullMenu() {
//   const [active, setActive] = useState('all');
//   const { cartCount }       = useCart();
//   const headRef = useReveal();

//   const shown = active === 'all' ? CATEGORIES : CATEGORIES.filter(c => c.id === active);
//   const total = CATEGORIES.reduce((s,c) => s + c.items.length, 0);

//   return (
//     <div style={{ background: 'var(--cream)', paddingTop: 72 }}>

//       {/* ── Page Hero ── */}
//       <div className="fm2-hero">
//         <div className="wrap">
//           <div ref={headRef} className="reveal fm2-hero-inner">
//             <span className="eyebrow eyebrow-lt">Complete Menu</span>
//             <h1 className="fm2-hero-title">
//               <em>Every</em> dish,<br />every craving
//             </h1>
//             <p className="fm2-hero-sub">
//               {total}+ items across 19 categories — crafted with care, served with pride.
//             </p>
//             {cartCount > 0 && (
//               <div className="fm2-cart-pill">
//                 <ShoppingCart size={14} strokeWidth={1.5} />
//                 <span>{cartCount} item{cartCount !== 1 ? 's' : ''} in your order</span>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ── Sticky filter bar ── */}
//       <div className="fm2-filter-bar">
//         <div className="wrap">
//           <div className="fm2-filters">
//             {FILTERS.map(f => (
//               <button
//                 key={f.id}
//                 onClick={() => setActive(f.id)}
//                 className={`fm2-filter${active === f.id ? ' fm2-filter--on' : ''}`}
//               >
//                 {f.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── Categories ── */}
//       <div className="wrap" style={{ paddingTop: 64, paddingBottom: 120 }}>
//         {shown.map(cat => (
//           <div key={cat.id} className="fm2-cat" id={`cat-${cat.id}`}>
//             <div className="fm2-cat-head">
//               <h2 className="fm2-cat-name">{cat.name}</h2>
//               <span className="fm2-cat-count">{cat.items.length} items</span>
//               <div className="fm2-cat-rule" />
//             </div>
//             <div className="fm2-grid">
//               {cat.items.map((item, i) => (
//                 <ItemCard key={item.id} item={item} delay={i * 55} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <style jsx global>{`
//         /* Page Hero */
//         .fm2-hero {
//           background: var(--charcoal);
//           padding: 100px 0 80px;
//           position: relative;
//           overflow: hidden;
//         }
//         .fm2-hero::before {
//           content: '';
//           position: absolute; inset: 0;
//           background: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=50') center/cover;
//           filter: brightness(0.12);
//         }
//         .fm2-hero-inner { position: relative; z-index: 1; max-width: 700px; }
//         .fm2-hero-title {
//           font-family: var(--serif);
//           font-size: clamp(3rem, 7vw, 6.5rem);
//           font-weight: 400;
//           color: #f3ede2;
//           line-height: 1.0;
//           margin-bottom: 22px;
//         }
//         .fm2-hero-title em { font-style: italic; }
//         .fm2-hero-sub {
//           font-family: var(--sans);
//           font-size: 1rem;
//           font-weight: 300;
//           color: rgba(243,237,226,0.52);
//           letter-spacing: 0.04em;
//           line-height: 1.7;
//           margin-bottom: 28px;
//         }
//         .fm2-cart-pill {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           font-family: var(--sans);
//           font-size: 0.7rem;
//           font-weight: 400;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: var(--gold-lt);
//           border: 1px solid rgba(201,169,110,0.35);
//           padding: 8px 18px;
//         }

//         /* Filter bar */
//         .fm2-filter-bar {
//           position: sticky;
//           top: 72px;
//           z-index: 100;
//           background: rgba(243,237,226,0.97);
//           backdrop-filter: blur(16px);
//           border-bottom: 1px solid var(--border);
//           padding: 0;
//         }
//         .fm2-filters {
//           display: flex;
//           gap: 0;
//           overflow-x: auto;
//           -webkit-overflow-scrolling: touch;
//           scrollbar-width: none;
//         }
//         .fm2-filters::-webkit-scrollbar { display: none; }
//         .fm2-filter {
//           font-family: var(--sans);
//           font-size: 0.65rem;
//           font-weight: 400;
//           letter-spacing: 0.16em;
//           text-transform: uppercase;
//           color: var(--ink-3);
//           padding: 18px 20px;
//           white-space: nowrap;
//           border-bottom: 2px solid transparent;
//           transition: color 0.3s var(--ease), border-color 0.3s;
//           background: none;
//           flex-shrink: 0;
//         }
//         .fm2-filter:hover      { color: var(--ink); }
//         .fm2-filter--on {
//           color: var(--ink);
//           border-color: var(--ink);
//         }

//         /* Category section */
//         .fm2-cat { margin-bottom: 80px; }
//         .fm2-cat-head {
//           display: flex;
//           align-items: baseline;
//           gap: 20px;
//           margin-bottom: 36px;
//           padding-bottom: 20px;
//           border-bottom: 1px solid var(--border);
//         }
//         .fm2-cat-name {
//           font-family: var(--serif);
//           font-size: clamp(1.6rem, 3vw, 2.4rem);
//           font-weight: 400;
//           color: var(--ink);
//           letter-spacing: 0.01em;
//           flex-shrink: 0;
//         }
//         .fm2-cat-count {
//           font-family: var(--sans);
//           font-size: 0.62rem;
//           font-weight: 400;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: var(--ink-3);
//           flex-shrink: 0;
//         }
//         .fm2-cat-rule { flex: 1; height: 1px; background: var(--border-lt); }

//         /* Items grid */
//         .fm2-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
//           gap: 1px;
//           background: var(--border);
//           border: 1px solid var(--border);
//         }

//         /* Item card */
//         .fm2-card {
//           background: var(--cream);
//           display: flex;
//           flex-direction: column;
//           transition: background 0.35s var(--ease);
//         }
//         .fm2-card:hover { background: var(--cream-2); }

//         .fm2-img-wrap {
//           position: relative;
//           aspect-ratio: 4/3;
//           overflow: hidden;
//           background: var(--cream-2);
//         }
//         .fm2-img {
//           width: 100%; height: 100%;
//           object-fit: cover;
//           transition: transform 0.8s var(--ease);
//           filter: brightness(0.9);
//         }
//         .fm2-card:hover .fm2-img { transform: scale(1.05); filter: brightness(0.95); }
//         .fm2-price {
//           position: absolute;
//           bottom: 0; right: 0;
//           font-family: var(--serif);
//           font-size: 1.1rem;
//           font-weight: 400;
//           color: var(--ink);
//           background: rgba(243,237,226,0.95);
//           padding: 6px 12px;
//           letter-spacing: 0.02em;
//         }

//         .fm2-body {
//           padding: 18px 20px 20px;
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//           flex: 1;
//         }
//         .fm2-name {
//           font-family: var(--sans);
//           font-size: 0.88rem;
//           font-weight: 400;
//           color: var(--ink);
//           letter-spacing: 0.03em;
//           line-height: 1.3;
//         }
//         .fm2-desc {
//           font-family: var(--sans);
//           font-size: 0.78rem;
//           font-weight: 300;
//           color: var(--ink-3);
//           line-height: 1.6;
//           letter-spacing: 0.02em;
//           flex: 1;
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//         .fm2-controls {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 10px;
//           margin-top: 10px;
//         }
//         .fm2-qty {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }
//         .fm2-qbtn {
//           width: 24px; height: 24px;
//           border: 1px solid var(--border);
//           display: flex; align-items: center; justify-content: center;
//           color: var(--ink-2);
//           transition: all 0.25s;
//           flex-shrink: 0;
//         }
//         .fm2-qbtn:hover { border-color: var(--ink); color: var(--ink); }
//         .fm2-qnum {
//           font-family: var(--sans);
//           font-size: 0.82rem;
//           font-weight: 400;
//           color: var(--ink);
//           min-width: 18px;
//           text-align: center;
//         }
//         .fm2-add {
//           font-family: var(--sans);
//           font-size: 0.6rem;
//           font-weight: 400;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: var(--ink);
//           border: 1px solid var(--ink);
//           padding: 7px 12px;
//           white-space: nowrap;
//           transition: all 0.35s var(--ease);
//           flex-shrink: 0;
//         }
//         .fm2-add:hover     { background: var(--ink); color: var(--cream); }
//         .fm2-add--done {
//           background: var(--ink);
//           color: var(--cream);
//           border-color: var(--ink);
//         }

//         @media (max-width: 540px) {
//           .fm2-grid { grid-template-columns: 1fr 1fr; }
//           .fm2-body { padding: 14px; }
//           .fm2-name { font-size: 0.78rem; }
//         }
//         @media (max-width: 380px) {
//           .fm2-grid { grid-template-columns: 1fr; }
//         }
//       `}</style>
//     </div>
//   );
// }












'use client';

import { useState, useEffect, useRef } from 'react';
import { Plus, Minus, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart, registerMenuItem } from '../context/CartContext';

/* ═══════════════════════════════════
   ALL 155+ MENU ITEMS — WITH YOUR ORIGINAL IMAGE PATHS
   ═══════════════════════════════════ */
const CATEGORIES = [
  { id:'shakes', name:'Signature Shakes', items:[
    {id:'lotus-shake',name:'Lotus Shake',price:699,desc:'Crushed Lotus biscuits with creamy milk',img:'/lotus.jpg'},
    {id:'kitkat-shake',name:'Kitkat Shake',price:599,desc:'Chocolate Kitkat delight',img:'/kitkat.jpg'},
    {id:'oreo-shake',name:'Oreo Shake',price:499,desc:'Classic Oreo cookies blend',img:'/oreo.jpg'},
    {id:'nutella-shake',name:'Nutella Shake',price:699,desc:'Rich Nutella chocolate shake',img:'/nutella.jpg'},
    {id:'cold-coffee',name:'Cold Coffee',price:699,desc:'Iced coffee perfection',img:'/cold.jpg'},
    {id:'vanilla-shake',name:'Vanilla Shake',price:699,desc:'Classic vanilla flavor',img:'/vanilla.jpg'},
    {id:'mango-shake',name:'Mango Shake',price:699,desc:'Fresh mango delight',img:'/mango.jpg'},
    {id:'strawberry-shake',name:'Strawberry Shake',price:699,desc:'Sweet strawberry blend',img:'/strawberry.jpg'},
    {id:'pistacio-shake',name:'Pistacio Shake',price:699,desc:'Nutty pistachio flavor',img:'/pistacio.jpg'},
    {id:'protein-shake',name:'Protein Shake',price:699,desc:'Healthy protein boost',img:'/protein.jpg'},
    {id:'blueberry-shake',name:'Blueberry Shake',price:699,desc:'Antioxidant rich blueberry',img:'/blueberry.jpg'},
    {id:'cocktail-shake',name:'Cocktail Shake',price:699,desc:'Mixed fruit special',img:'/cocktail.jpg'},
  ]},
  { id:'chillers', name:'Refreshing Chillers', items:[
    {id:'blue-buzz',name:'Blue Buzz',price:549,desc:'Blueberry mint cooler',img:'/blue.jpg'},
    {id:'peach-buzz',name:'Peach Buzz',price:549,desc:'Fresh peach delight',img:'/peach.jpg'},
    {id:'mango-buzz',name:'Mango Buzz',price:549,desc:'Tropical mango blast',img:'/mangob.jpg'},
    {id:'mix-buzz',name:'Mix Buzz',price:549,desc:'Mixed fruit explosion',img:'/mixb.jpg'},
    {id:'passion-fruit',name:'Passion Fruit',price:549,desc:'Exotic passion fruit',img:'/passionf.jpg'},
    {id:'kiwi-crush',name:'Kiwi Crush',price:549,desc:'Tangy kiwi freshness',img:'/kiwic.jpg'},
    {id:'green-apple',name:'Green Apple',price:549,desc:'Crisp apple flavor',img:'/grena.jpg'},
    {id:'mix-berries',name:'Mix Berries',price:549,desc:'Berry medley',img:'/mixbu.jpg'},
  ]},
  { id:'mojitos', name:'Fresh Mojitos', items:[
    {id:'moon-rocker',name:'Moon Rocker',price:599,desc:'Special mint mojito',img:'/moonrocker.jpg'},
    {id:'italian-mojito',name:'Italian Mojito',price:499,desc:'Italian herbs twist',img:'/italianmojito.jpg'},
    {id:'north-pole',name:'North Pole',price:499,desc:'Minty cool sensation',img:'/northpole.jpg'},
    {id:'green-apple-mojito',name:'Green Apple Mojito',price:499,desc:'Apple mint fusion',img:'/greenmojito.jpg'},
    {id:'electric-lemonade',name:'Electric Lemonade',price:499,desc:'Zesty lemon blast',img:'/electriclemonade.jpg'},
    {id:'blue-lagoon',name:'Blue Lagoon',price:499,desc:'Blue curacao special',img:'/bluelagoon.jpg'},
    {id:'royal-rose',name:'Royal Rose',price:599,desc:'Rose flavored luxury',img:'/royalrose.jpg'},
    {id:'the-green',name:'The Green',price:599,desc:'Fresh herbal blend',img:'/greenm.jpg'},
  ]},
  { id:'margaritas', name:'Margaritas', items:[
    {id:'mint-margarita',name:'Mint Margarita',price:349,desc:'Refreshing mint margarita',img:'/mintmargarita.jpg'},
    {id:'blueberry-margarita',name:'Blue Berry Margarita',price:449,desc:'Sweet blueberry margarita',img:'/blueberrymargarita.jpg'},
    {id:'strawberry-margarita',name:'Strawberry Margarita',price:449,desc:'Fresh strawberry blend',img:'/strawberrymargarita.jpg'},
  ]},
  { id:'icedcoffee', name:'Iced Coffee', items:[
    {id:'frappuccino',name:'Frappuccino',price:699,desc:'Blended ice coffee',img:'/frappuccino.jpg'},
    {id:'cafe-latte-iced',name:'Cafe Latte (Iced)',price:699,desc:'Iced latte',img:'/icedlatte.jpg'},
    {id:'pistacio-latte',name:'Pistacio Latte',price:699,desc:'Pistachio flavored latte',img:'/pistaciolatte.jpg'},
    {id:'nutella-latte',name:'Nutella Latte',price:699,desc:'Nutella coffee delight',img:'/nutellalatte.jpg'},
    {id:'lotus-latte',name:'Lotus Latte',price:699,desc:'Biscoff lotus latte',img:'/lotuslatte.jpg'},
    {id:'strawberry-latte',name:'Strawberry Latte',price:699,desc:'Strawberry flavored latte',img:'/strawberrylatte.jpg'},
    {id:'blueberry-latte',name:'Blue Berry Latte',price:699,desc:'Blueberry coffee blend',img:'/blueberrylatte.jpg'},
  ]},
  { id:'desserts', name:'Sweet Desserts', items:[
    {id:'jn-white-lava',name:'JN Special White Lava Cake',price:999,desc:'Molten white chocolate',img:'/whitelava.jpg'},
    {id:'lava-cake',name:'Lava Cake',price:699,desc:'Chocolate lava explosion',img:'/lavacake.jpg'},
    {id:'bread-pudding',name:'Bread Pudding (Choc/Caramel)',price:699,desc:'Warm bread pudding',img:'/breadpudding.jpg'},
    {id:'three-layer-cake',name:'Three Layer Cake',price:699,desc:'Triple layer delight',img:'/threelayer.jpg'},
    {id:'cheese-cake',name:'Cheese Cake',price:699,desc:'Creamy cheesecake',img:'/cheese.jpg'},
    {id:'cup-cake',name:'Cup Cake',price:399,desc:'Single serve delight',img:'/cup.jpg'},
    {id:'alaska-cake',name:'Alaska Cake',price:699,desc:'Baked Alaska special',img:'/alaskacake.jpg'},
    {id:'kunafa-cake',name:'Kunafa Cake',price:749,desc:'Middle Eastern delight',img:'/kunafacake.jpg'},
    {id:'milky-cake',name:'Milky Cake',price:699,desc:'Soft milk cake',img:'/milkycake.jpg'},
    {id:'sweetza',name:'Sweetza',price:999,desc:'Sweet pizza dessert',img:'/sweet.jpg'},
    {id:'french-toast',name:'French Toast',price:749,desc:'Caramelized toast',img:'/frenchtoast.jpg'},
    {id:'dome-cake',name:'Dome Cake',price:1499,desc:'Chocolate dome surprise',img:'/domecake.jpg'},
    {id:'nutella-croissant',name:'Nutella Croissant',price:999,desc:'Nutella filled pastry',img:'/nutellacr.jpg'},
    {id:'arabic-kunafa',name:'Arabic Kunafa',price:1199,desc:'Traditional kunafa',img:'/arabickunafa.jpg'},
  ]},
  { id:'tea', name:'Premium Teas', items:[
    {id:'karak-tea',name:'Karak Tea',price:119,desc:'Strong traditional tea',img:'/karaktea.jpg'},
    {id:'kashmiri-tea',name:'Kashmiri Tea',price:249,desc:'Pink Kashmiri chai',img:'/kashmiritea.jpg'},
    {id:'creamy-tea',name:'Creamy Tea',price:249,desc:'Cream topped tea',img:'/creamytea.jpg'},
    {id:'cardamom-tea',name:'Cardamom Tea',price:199,desc:'Aromatic cardamom tea',img:'/cardamomtea.jpg'},
  ]},
  { id:'coffee', name:'Artisan Coffee', items:[
    {id:'cappuccino',name:'Cappuccino',price:499,desc:'Classic Italian coffee',img:'/capuccino.jpg'},
    {id:'cafe-latte-hot',name:'Cafe Latte',price:499,desc:'Smooth milk coffee',img:'/latte.jpg'},
    {id:'americano',name:'Americano / Espresso',price:399,desc:'Strong black coffee',img:'/americano.jpg'},
    {id:'caramel-latte',name:'Caramel Latte',price:699,desc:'Caramel flavored latte',img:'/caramellatte.jpg'},
    {id:'irish-nut-cream',name:'Irish Nut Cream',price:699,desc:'Nutty Irish cream coffee',img:'/irishnutcream.jpg'},
    {id:'spanish-latte',name:'Spanish Latte',price:799,desc:'Sweet Spanish style latte',img:'/spanishlatte.jpg'},
    {id:'vanilla-latte',name:'Vanilla Latte',price:699,desc:'Vanilla infused coffee',img:'/vanillalatte.jpg'},
    {id:'hazelnut-coffee',name:'Hazelnut',price:699,desc:'Nutty hazelnut flavor',img:'/hazelnut.jpg'},
    {id:'homemade-coffee',name:'Homemade',price:699,desc:'House special blend',img:'/homemaidcoffee.jpg'},
    {id:'french-vanilla-coffee',name:'French Vanilla',price:699,desc:'French style vanilla',img:'/frenchvanilla.jpg'},
  ]},
  { id:'thai', name:'Thai & Chinese', items:[
    {id:'chilli-dry-chicken',name:'Chilli Dry Chicken',price:1099,desc:'Spicy dry chicken',img:'/chillidrychicken.jpg'},
    {id:'chilli-dry-fish',name:'Chilli Dry Fish',price:1499,desc:'Spicy dry fish',img:'/chillidryfish.jpg'},
    {id:'chilli-dry-prawns',name:'Chilli Dry Prawns',price:1899,desc:'Spicy dry prawns',img:'/chilliprawns.jpg'},
    {id:'kung-pao-chicken',name:'Kung Pao Chicken',price:1299,desc:'Spicy kung pao chicken',img:'/kungpaochicken.jpg'},
    {id:'chicken-cashew-nut',name:'Chicken Cashew Nut',price:1299,desc:'Chicken with cashew nuts',img:'/chickencashewnut.jpg'},
    {id:'chicken-schezwan',name:'Chicken Schezwan',price:1099,desc:'Schezwan style chicken',img:'/chickenschizwan.jpg'},
    {id:'chicken-manchurian',name:'Chicken Manchurian',price:1099,desc:'Indo-Chinese favorite',img:'/chickenmanchurian.jpg'},
    {id:'mongolian-chicken',name:'Mongolian Chicken',price:1199,desc:'Mongolian style',img:'/mongolianchicken.jpg'},
    {id:'chicken-shashlik',name:'Chicken Shashlik',price:1299,desc:'Chicken shashlik',img:'/chickenshashlik.jpg'},
    {id:'black-pepper-chicken',name:'Black Pepper Chicken',price:999,desc:'Peppery chicken',img:'/blackpepperchicken.jpg'},
    {id:'chicken-chowmein',name:'Chicken Chowmein',price:1199,desc:'Stir fried noodles',img:'/chickenchowmein.jpg'},
    {id:'sweet-chilli-chicken',name:'Sweet Chilli Chicken',price:1099,desc:'Sweet & spicy chicken',img:'/sweetchillichicken.jpg'},
    {id:'garlic-fried-rice',name:'Garlic Fried Rice',price:349,desc:'Garlic flavored rice',img:'/garlicfried.jpg'},
    {id:'egg-fried-rice',name:'Egg Fried Rice',price:349,desc:'Rice with egg',img:'/eggfriedrice.jpg'},
    {id:'veg-fried-rice',name:'Vegetables Fried Rice',price:349,desc:'Mixed vegetable rice',img:'/vegetablesfriedrice.jpg'},
    {id:'masala-fried-rice',name:'Masala Fried Rice',price:349,desc:'Spiced rice',img:'/masalafried.jpg'},
    {id:'chicken-fried-rice',name:'Chicken Fried Rice',price:499,desc:'Chicken fried rice',img:'/chickenfriedrice.jpg'},
  ]},
  { id:'specials', name:'Janoshi Specials', items:[
    {id:'stuffed-chicken-reg',name:'Stuffed Chicken (Regular)',price:1699,desc:'Cheese stuffed chicken',img:'/stuffedchicken.jpg'},
    {id:'stuffed-chicken-lrg',name:'Stuffed Chicken (Large)',price:1999,desc:'Cheese stuffed chicken',img:'/stuffed.jpg'},
    {id:'parmesan-chicken',name:'Parmesan Chicken',price:1799,desc:'Parmesan crusted chicken',img:'/parmesanchicken.jpg'},
    {id:'auxpolo-chicken',name:'Auxpolo Chicken',price:1699,desc:'Special auxpolo sauce',img:'/auxpolochicken.jpg'},
    {id:'auxpolo-kabab',name:'Auxpolo Kabab',price:1499,desc:'Grilled auxpolo kabab',img:'/auxpolokabab.jpg'},
    {id:'tarragon-chicken',name:'Tarragon Chicken',price:1599,desc:'Herb roasted chicken',img:'/tarragonchicken.jpg'},
    {id:'moroccan-chicken',name:'Moroccan Chicken',price:1699,desc:'Moroccan spices chicken',img:'/morroconchicken.jpg'},
    {id:'cordon-bleu',name:'Cordon Bleu Chicken',price:1699,desc:'Ham & cheese stuffed',img:'/cordonbleuchicken.jpg'},
    {id:'bai-ze-chicken',name:'Bai-ze Chicken',price:1799,desc:'Special Bai-ze sauce',img:'/baizechicken.jpg'},
    {id:'marinara-chicken',name:'Marinara Chicken',price:1699,desc:'Tomato marinara chicken',img:'/marinarachicken.jpg'},
    {id:'fried-tender-chicken',name:'Fried Tender Chicken',price:1749,desc:'Crispy tender chicken',img:'/friedtenderchicken.jpg'},
    {id:'fried-crispy-fish',name:'Fried Crispy Fish',price:1999,desc:'Golden fried fish',img:'/friedcrispyfish.jpg'},
    {id:'seafood-platter',name:'Seafood Platter',price:3999,desc:'Assorted seafood for 2–3',img:'/seafoodplatter.jpg'},
    {id:'napoleon-chicken',name:'Napoleon Chicken',price:1899,desc:'Layered chicken dish',img:'/napoleanchicken.jpg'},
  ]},
  { id:'steaks', name:'Premium Steaks', items:[
    {id:'chicken-steak',name:'Chicken Steak',price:1699,desc:'Grilled chicken steak',img:'/chickensteak.jpg'},
    {id:'fish-steak',name:'Fish Steak',price:2099,desc:'Fresh fish steak',img:'/fishsteak.jpg'},
    {id:'beef-steak',name:'Beef Steak',price:2999,desc:'Juicy beef steak',img:'/beefsteak.jpg'},
    {id:'rib-eye-steak',name:'Rib Eye Steak',price:4499,desc:'Prime cut rib eye',img:'/ribeyesteak.jpg'},
    {id:'mushroom-sauce',name:'Mushroom Sauce (Add-on)',price:299,desc:'Mushroom sauce add-on',img:'/mushroomsteak.jpg'},
    {id:'moroccan-sauce',name:'Moroccan Sauce (Add-on)',price:299,desc:'Moroccan sauce add-on',img:'/moroccansteak.jpg'},
    {id:'tarragon-sauce',name:'Tarragon Sauce (Add-on)',price:299,desc:'Tarragon sauce add-on',img:'/tarragonsteak.jpg'},
    {id:'blackpepper-sauce',name:'Black Pepper Sauce (Add-on)',price:299,desc:'Black pepper sauce',img:'/blackpeppersteak.jpg'},
    {id:'mexican-sauce',name:'Mexican Sauce (Add-on)',price:299,desc:'Mexican sauce add-on',img:'/mexicansteak.jpg'},
    {id:'auxpolo-sauce',name:'Auxpolo Sauce (Add-on)',price:299,desc:'Auxpolo sauce add-on',img:'/auxpolosteak.jpg'},
    {id:'french-onion-sauce',name:'French Onion Sauce (Add-on)',price:299,desc:'French onion sauce',img:'/frenchonionsteak.jpg'},
  ]},
  { id:'burgers', name:'Janoshi Burgers', items:[
    {id:'jn-special-burger',name:'JN Special Burger',price:999,desc:'Signature house burger',img:'/jnspecialburger.jpg'},
    {id:'zinger-burger',name:'Zinger Burger',price:599,desc:'Crispy chicken burger',img:'/zingerburger.jpg'},
    {id:'grill-chicken-burger',name:'Grill Chicken Burger',price:699,desc:'Grilled chicken patty',img:'/grillchickenburger.jpg'},
    {id:'jn-crispy-burger',name:'JN Crispy Burger',price:749,desc:'Extra crispy special',img:'/crispyburger.jpg'},
    {id:'reggy-burger',name:'Reggy Burger',price:299,desc:'Classic regular burger',img:'/raggyburger.jpg'},
    {id:'max-smash-burger',name:'Max Smash Burger',price:999,desc:'Double smashed patty',img:'/maxsmashburger.jpg'},
    {id:'wild-smash-burger',name:'Wild Smash Burger',price:749,desc:'Spicy smashed burger',img:'/wildsmashburger.jpg'},
    {id:'melty-lava-burger',name:'Melty Lava Beef Burger',price:1199,desc:'Cheese lava beef burger',img:'/meltylavabeefburger.jpg'},
    {id:'fish-burger',name:'Fish Burger',price:999,desc:'Crispy fish fillet',img:'/fishburger.jpg'},
    {id:'cheese-addon',name:'Cheese Addon',price:299,desc:'Extra cheese',img:'/cheese.jpg'},
    {id:'jalapeno-addon',name:'Jalapeno Addon',price:299,desc:'Spicy jalapenos',img:'/jalapenosauce.jpg'},
    {id:'mushroom-addon',name:'Mushroom Addon',price:299,desc:'Mushrooms',img:'/mushroomsauce.jpg'},
    {id:'olive-addon',name:'Olive Addon',price:299,desc:'Olives',img:'/olivesauce.jpg'},
  ]},
  { id:'pizza', name:'Delicious Pizza', items:[
    {id:'donut-pizza',name:'Donut Pizza',price:2299,desc:'Sweet donut shaped pizza',img:'/donutpizza.jpg'},
    {id:'lasagna-pizza-s',name:'Lasagna Pizza (Small)',price:1699,desc:'Lasagna topped pizza',img:'/lasagnapizza.jpg'},
    {id:'lasagna-pizza-m',name:'Lasagna Pizza (Medium)',price:2299,desc:'Lasagna topped pizza',img:'/lasagnapizza.jpg'},
    {id:'kabab-pizza-s',name:'Kabab Special Pizza (S)',price:749,desc:'Kabab topping pizza',img:'/kababpizza.jpg'},
    {id:'kabab-pizza-m',name:'Kabab Special Pizza (M)',price:1299,desc:'Kabab topping pizza',img:'/kababpizza.jpg'},
    {id:'kabab-pizza-l',name:'Kabab Special Pizza (L)',price:1999,desc:'Kabab topping pizza',img:'/kababpizza.jpg'},
    {id:'supreme-pizza-s',name:'Super Supreme Pizza (S)',price:699,desc:'All toppings',img:'/supremepizza.jpg'},
    {id:'supreme-pizza-m',name:'Super Supreme Pizza (M)',price:1299,desc:'All toppings',img:'/supremepizza.jpg'},
    {id:'supreme-pizza-l',name:'Super Supreme Pizza (L)',price:1999,desc:'All toppings',img:'/supremepizza.jpg'},
    {id:'wood-pizza-s',name:'Into Wood Pizza (S)',price:749,desc:'Wood fired style',img:'/intowoodpizza.jpg'},
    {id:'wood-pizza-m',name:'Into Wood Pizza (M)',price:1299,desc:'Wood fired style',img:'/intowoodpizza.jpg'},
    {id:'wood-pizza-l',name:'Into Wood Pizza (L)',price:1999,desc:'Wood fired style',img:'/intowoodpizza.jpg'},
    {id:'platinum-pizza',name:'Platinum Pizza',price:1999,desc:'Premium pizza',img:'/platinumpizza.jpg'},
    {id:'pepperoni-pizza',name:'Pepperoni Pizza',price:1799,desc:'Pepperoni topping',img:'/pepperonipizza.jpg'},
  ]},
  { id:'broast', name:'Crispy Broast', items:[
    {id:'broast-s',name:'Broast Quarter (Small)',price:799,desc:'Crispy quarter broast',img:'/broast.jpg'},
    {id:'broast-m',name:'Broast Half (Medium)',price:1299,desc:'Crispy half broast',img:'/broast.jpg'},
    {id:'broast-l',name:'Broast Full (Large)',price:2399,desc:'Crispy full broast',img:'/broast.jpg'},
  ]},
  { id:'wraps', name:'Fresh Wraps', items:[
    {id:'jn-special-wrap',name:'JN Special Wrap',price:799,desc:'Signature house wrap',img:'/jnspecialwrap.jpg'},
    {id:'grill-chicken-wrap',name:'Grill Chicken Wrap',price:749,desc:'Grilled chicken wrap',img:'/grillchickenwrap.jpg'},
    {id:'smoky-chicken-wrap',name:'Smoky Chicken Wrap',price:749,desc:'Smoky chicken wrap',img:'/smookychickenwrap.jpg'},
    {id:'cheese-wrap',name:'Cheese Wrap',price:549,desc:'Cheese filled wrap',img:'/cheesewrap.jpg'},
    {id:'kabab-wrap',name:'Kabab Wrap',price:649,desc:'Kabab wrap',img:'/kababwrap.jpg'},
    {id:'baby-wrap',name:'Baby Wrap',price:549,desc:'Small size wrap',img:'/babywrap.jpg'},
    {id:'fish-wrap',name:'Fish Wrap',price:899,desc:'Crispy fish wrap',img:'/fishwrap.jpg'},
    {id:'zinger-wrap',name:'Zinger Wrap',price:599,desc:'Zinger chicken wrap',img:'/zingerwrap.jpg'},
    {id:'beef-wrap',name:'Beef Wrap',price:849,desc:'Beef wrap',img:'/beefwrap.jpg'},
    {id:'jn-special-sauce',name:'JN Special Sauce',price:99,desc:'Signature sauce',img:'/jalapenosauce.jpg'},
    {id:'chipotle-sauce',name:'Chipotle Sauce',price:99,desc:'Spicy chipotle',img:'/chipotlesauce.jpg'},
    {id:'tarter-sauce',name:'Tarter Sauce',price:99,desc:'Tarter sauce',img:'/tartersauce.jpg'},
    {id:'garlic-sauce',name:'Garlic Sauce',price:99,desc:'Garlic sauce',img:'/garlicsauce.jpg'},
    {id:'jalapeno-sauce',name:'Jalapeno Sauce',price:99,desc:'Jalapeno sauce',img:'/jalapenosauce.jpg'},
    {id:'honey-mustard-sauce',name:'Honey Mustard Sauce',price:99,desc:'Honey mustard',img:'/honeymustardsauce.jpg'},
    {id:'pizza-sauce',name:'Pizza Sauce',price:99,desc:'Pizza sauce',img:'/pizzasauce.jpg'},
  ]},
  { id:'pasta', name:'Pasta & Noodles', items:[
    {id:'fettuccine-pasta',name:'Fettuccine Pasta',price:1099,desc:'Fettuccine pasta',img:'/fettuccinepasta.jpg'},
    {id:'fried-chicken-pasta',name:'Fried Chicken Pasta',price:1149,desc:'Pasta with fried chicken',img:'/friedchickenpasta.jpg'},
    {id:'jn-italian-pasta',name:'JN Special Italian Pasta',price:1199,desc:'Special Italian pasta',img:'/jnspecialitalianpasta.jpg'},
    {id:'penne-pasta',name:'Penne Pasta',price:1149,desc:'Penne pasta',img:'/pennypasta.jpg'},
    {id:'bake-cheese-pasta',name:'Bake Cheese Pasta',price:1099,desc:'Baked cheese pasta',img:'/bakecheesepasta.jpg'},
    {id:'bake-pasta-fries',name:'Bake Pasta with Fries',price:999,desc:'Pasta with fries',img:'/bakepastawithfries.jpg'},
    {id:'dragon-noodles',name:'Dragon Noodles',price:1299,desc:'Spicy dragon noodles',img:'/dragonnoddles.jpg'},
    {id:'mexican-noodles',name:'Mexican Noodles',price:1299,desc:'Mexican style noodles',img:'/mexicannoddles.jpg'},
  ]},
  { id:'soups', name:'Hot Soups', items:[
    {id:'special-soup-s',name:'Special Soup (Small)',price:549,desc:'House special soup',img:'/specialsoup.jpg'},
    {id:'special-soup-l',name:'Special Soup (Large)',price:1599,desc:'House special soup',img:'/specialsoup.jpg'},
    {id:'19b-soup-s',name:'19B Soup (Small)',price:599,desc:'Special 19B soup',img:'/19bsoup.jpg'},
    {id:'19b-soup-l',name:'19B Soup (Large)',price:1799,desc:'Special 19B soup',img:'/19bsoup.jpg'},
    {id:'hot-sour-soup-s',name:'Hot & Sour Soup (Small)',price:399,desc:'Hot and sour soup',img:'/hotandsoursoup.jpg'},
    {id:'hot-sour-soup-l',name:'Hot & Sour Soup (Large)',price:1299,desc:'Hot and sour soup',img:'/hotandsoursoup.jpg'},
    {id:'cream-mushroom-soup',name:'Cream of Mushroom Soup',price:699,desc:'Creamy mushroom soup',img:'/mushroom.jpg'},
    {id:'aux-pollo-soup',name:'Aux Pollo Soup',price:699,desc:'Aux pollo style soup',img:'/auxpolosoup.jpg'},
    {id:'veg-soup-s',name:'Vegetable Soup (Small)',price:399,desc:'Vegetable soup',img:'/vegetablesoup.jpg'},
    {id:'veg-soup-l',name:'Vegetable Soup (Large)',price:1199,desc:'Vegetable soup',img:'/vegetablesoup.jpg'},
    {id:'sweet-sour-soup',name:'Sweet & Sour Soup',price:1299,desc:'Sweet and sour soup',img:'/sweetandsoursoup.jpg'},
  ]},
  { id:'salads', name:'Salads & Healthy', items:[
    {id:'gym-lover-sandwich',name:'Gym Lover Sandwich',price:699,desc:'Healthy sandwich',img:'/gymloversandwich.jpg'},
    {id:'gym-platter',name:'Gym Platter',price:899,desc:'Healthy gym platter',img:'/gymplatter.jpg'},
    {id:'caesar-salad',name:'Caesar Salad',price:699,desc:'Classic Caesar salad',img:'/caesarsalad.jpg'},
    {id:'crispy-salad',name:'Crispy Salad',price:699,desc:'Crispy fresh salad',img:'/crispysalad.jpg'},
    {id:'coleslaw',name:'Coleslaw',price:249,desc:'Creamy coleslaw',img:'/colslaw.jpg'},
  ]},
  { id:'sandwiches', name:'Tasty Sandwiches', items:[
    {id:'jn-special-sandwich',name:'JN Special Sandwich',price:799,desc:'Signature house sandwich',img:'/gymloversandwich.jpg'},
    {id:'club-sandwich',name:'Club Sandwich',price:749,desc:'Classic club sandwich',img:'/clubsandwich.jpg'},
    {id:'grill-chicken-sandwich',name:'Grill Chicken Sandwich',price:649,desc:'Grilled chicken sandwich',img:'/grillchickensandwich.jpg'},
    {id:'jn-crispy-sandwich',name:'JN Crispy Sandwich',price:699,desc:'Crispy sandwich',img:'/jncrispysandwich.jpg'},
    {id:'cheese-sandwich',name:'Cheese Sandwich',price:549,desc:'Cheese sandwich',img:'/cheesesandwich.jpg'},
    {id:'mexican-sandwich',name:'Mexican Sandwich',price:899,desc:'Mexican style sandwich',img:'/mexicansandwich.jpg'},
    {id:'smash-sandwich',name:'Smash Sandwich',price:749,desc:'Smashed sandwich',img:'/smashsandwich.jpg'},
  ]},
  { id:'appetizers', name:'Appetizers & Fries', items:[
    {id:'jumbo-prawns-s',name:'Jumbo Prawns (Small)',price:1799,desc:'Crispy jumbo prawns',img:'/jumboprawns.jpg'},
    {id:'jumbo-prawns-l',name:'Jumbo Prawns (Large)',price:2099,desc:'Crispy jumbo prawns',img:'/jumboprawns.jpg'},
    {id:'dynamite-chicken',name:'Dynamite Chicken',price:799,desc:'Spicy chicken bites',img:'/dynamitechicken.jpg'},
    {id:'dynamite-fish',name:'Dynamite Fish',price:999,desc:'Spicy fish bites',img:'/dynamitefish.jpg'},
    {id:'dynamite-prawns',name:'Dynamite Prawns',price:1299,desc:'Spicy dynamite prawns',img:'/dynamiteprawns.jpg'},
    {id:'chicken-strips',name:'Chicken Strips',price:799,desc:'Crispy chicken strips',img:'/chickenstrips.jpg'},
    {id:'pizza-bite',name:'Pizza Bite',price:499,desc:'Mini pizza bites',img:'/pizzabite.jpg'},
    {id:'finger-mozzarella',name:'Finger Mozzarella',price:799,desc:'Mozzarella sticks',img:'/fingermozarella.jpg'},
    {id:'hot-dog-sandwich',name:'Hot Dog Sandwich',price:999,desc:'Classic hot dog',img:'/hotdogsandwich.jpg'},
    {id:'fish-katsu',name:'Fish Katsu',price:1199,desc:'Japanese style fish katsu',img:'/fishkatsu.jpg'},
    {id:'glazed-wings',name:'Glazed Wings',price:999,desc:'Glazed chicken wings',img:'/glazzedwings.jpg'},
    {id:'nuggets',name:'Nuggets',price:499,desc:'Chicken nuggets',img:'/nuggets.jpg'},
    {id:'loaded-fries',name:'Loaded Fries',price:599,desc:'Loaded fries',img:'/loadedfries.jpg'},
    {id:'nacho-fries',name:'Nacho Loaded Fries',price:799,desc:'Nacho loaded fries',img:'/nacholoadedfries.jpg'},
    {id:'wild-fries',name:'Wild Fries',price:899,desc:'Wild seasoned fries',img:'/wildfries.jpg'},
    {id:'plain-fries-s',name:'Plain Fries (Small)',price:299,desc:'Classic fries',img:'/plainfries.jpg'},
    {id:'plain-fries-l',name:'Plain Fries (Large)',price:499,desc:'Classic fries',img:'/plainfries.jpg'},
    {id:'dhaka-chicken',name:'Dhaka Chicken',price:999,desc:'Dhaka style chicken',img:'/dhakachicken.jpg'},
    {id:'dhaka-fish',name:'Dhaka Fish',price:699,desc:'Dhaka style fish',img:'/dhakafish.jpg'},
    {id:'thai-chicken-rolls',name:'Thai Chicken Rolls',price:699,desc:'Thai chicken rolls',img:'/thaichickenrolls.jpg'},
    {id:'tempura-chicken',name:'Tempura Chicken',price:699,desc:'Crispy tempura chicken',img:'/tempurachicken.jpg'},
    {id:'chicken-tenders',name:'Chicken Tenders (4pcs)',price:999,desc:'Juicy chicken tenders',img:'/chickentenders.jpg'},
    {id:'spring-roll',name:'Spring Roll',price:699,desc:'Crispy spring rolls',img:'/springrolls.jpg'},
    {id:'fish-strips',name:'Fish Strips',price:1399,desc:'Crispy fish strips',img:'/fishstrips.jpg'},
  ]},
];

/* Register every item */
CATEGORIES.forEach(cat => cat.items.forEach(i => registerMenuItem(i.id, i.name, i.price)));

const FILTERS = [
  { id:'all',         label:'All' },
  { id:'coffee',      label:'Coffee' },
  { id:'shakes',      label:'Shakes' },
  { id:'chillers',    label:'Chillers' },
  { id:'mojitos',     label:'Mojitos' },
  { id:'desserts',    label:'Desserts' },
  { id:'tea',         label:'Tea' },
  { id:'specials',    label:'Specials' },
  { id:'steaks',      label:'Steaks' },
  { id:'burgers',     label:'Burgers' },
  { id:'pizza',       label:'Pizza' },
  { id:'thai',        label:'Thai/Chinese' },
  { id:'pasta',       label:'Pasta' },
  { id:'wraps',       label:'Wraps' },
  { id:'appetizers',  label:'Appetizers' },
  { id:'soups',       label:'Soups' },
  { id:'sandwiches',  label:'Sandwiches' },
  { id:'salads',      label:'Salads' },
  { id:'broast',      label:'Broast' },
];

function useReveal(th = 0.08) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('on'); obs.disconnect(); } }, { threshold: th });
    obs.observe(el);
    return () => obs.disconnect();
  }, [th]);
  return ref;
}

/* ═══ ITEM CARD ═══ */
function ItemCard({ item, delay }) {
  const ref = useRef(null);
  const [qty, setQty]     = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart }     = useCart();

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => { el.style.opacity = 1; el.style.transform = 'none'; }, delay);
        obs.disconnect();
      }
    }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const handleAdd = () => {
    addToCart(item.id, item.name, item.price, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      ref={ref}
      className="fm2-card"
      style={{ opacity: 0, transform: 'translateY(28px)', transition: `opacity .8s var(--ease-out), transform .8s var(--ease-out)` }}
    >
      <div className="fm2-img-wrap">
        <img src={item.img} alt={item.name} className="fm2-img" loading="lazy" />
        <div className="fm2-price">Rs {item.price.toLocaleString()}</div>
      </div>
      <div className="fm2-body">
        <div className="fm2-name">{item.name}</div>
        <p className="fm2-desc">{item.desc}</p>
        <div className="fm2-controls">
          <div className="fm2-qty">
            <button onClick={() => setQty(q => Math.max(1,q-1))} className="fm2-qbtn"><Minus size={11}/></button>
            <span className="fm2-qnum">{qty}</span>
            <button onClick={() => setQty(q => q+1)} className="fm2-qbtn"><Plus size={11}/></button>
          </div>
          <button onClick={handleAdd} className={`fm2-add${added ? ' fm2-add--done' : ''}`}>
            {added ? '✓ Added' : `Add · Rs ${(item.price * qty).toLocaleString()}`}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══ MAIN COMPONENT ═══ */
export default function FullMenu() {
  const [active, setActive] = useState('all');
  const { cartCount }       = useCart();
  const headRef = useReveal();

  const shown = active === 'all' ? CATEGORIES : CATEGORIES.filter(c => c.id === active);
  const total = CATEGORIES.reduce((s,c) => s + c.items.length, 0);

  return (
    <div style={{ background: 'var(--cream)', paddingTop: 72 }}>

      {/* Page Hero */}
      <div className="fm2-hero">
        <div className="wrap">
          <div ref={headRef} className="reveal fm2-hero-inner">
            <span className="eyebrow">Complete Menu</span>
            <h1 className="fm2-hero-title">
              <em>Every</em> dish,<br />every craving
            </h1>
            <p className="fm2-hero-sub">
              {total}+ items across 19 categories — crafted with care, served with pride.
            </p>
            {cartCount > 0 && (
              <div className="fm2-cart-pill">
                <ShoppingCart size={14} strokeWidth={1.5} />
                <span>{cartCount} item{cartCount !== 1 ? 's' : ''} in your order</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sticky filter bar */}
      <div className="fm2-filter-bar">
        <div className="wrap">
          <div className="fm2-filters">
            {FILTERS.map(f => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`fm2-filter${active === f.id ? ' fm2-filter--on' : ''}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="wrap" style={{ paddingTop: 64, paddingBottom: 120 }}>
        {shown.map(cat => (
          <div key={cat.id} className="fm2-cat" id={`cat-${cat.id}`}>
            <div className="fm2-cat-head">
              <h2 className="fm2-cat-name">{cat.name}</h2>
              <span className="fm2-cat-count">{cat.items.length} items</span>
              <div className="fm2-cat-rule" />
            </div>
            <div className="fm2-grid">
              {cat.items.map((item, i) => (
                <ItemCard key={item.id} item={item} delay={i * 55} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .fm2-hero {
          background: var(--dark);
          padding: 100px 0 80px;
          position: relative;
          overflow: hidden;
        }
        .fm2-hero::before {
          content: '';
          position: absolute; inset: 0;
          background: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=50') center/cover;
          filter: brightness(0.12);
        }
        .fm2-hero-inner { position: relative; z-index: 1; max-width: 700px; }
        .fm2-hero-title {
          font-family: var(--serif);
          font-size: clamp(3rem, 7vw, 6.5rem);
          font-weight: 400;
          color: #f3ede2;
          line-height: 1.0;
          margin-bottom: 22px;
        }
        .fm2-hero-title em { font-style: italic; }
        .fm2-hero-sub {
          font-family: var(--sans);
          font-size: 1rem;
          font-weight: 300;
          color: rgba(243,237,226,0.52);
          letter-spacing: 0.04em;
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .fm2-cart-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--sans);
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold-lt);
          border: 1px solid rgba(201,169,110,0.35);
          padding: 8px 18px;
        }
        .fm2-filter-bar {
          position: sticky;
          top: 72px;
          z-index: 100;
          background: rgba(243,237,226,0.97);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          padding: 0;
        }
        .fm2-filters {
          display: flex;
          gap: 0;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .fm2-filters::-webkit-scrollbar { display: none; }
        .fm2-filter {
          font-family: var(--sans);
          font-size: 0.65rem;
          font-weight: 400;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink-3);
          padding: 18px 20px;
          white-space: nowrap;
          border-bottom: 2px solid transparent;
          transition: color 0.3s var(--ease), border-color 0.3s;
          background: none;
          flex-shrink: 0;
        }
        .fm2-filter:hover      { color: var(--ink); }
        .fm2-filter--on {
          color: var(--ink);
          border-color: var(--ink);
        }
        .fm2-cat { margin-bottom: 80px; }
        .fm2-cat-head {
          display: flex;
          align-items: baseline;
          gap: 20px;
          margin-bottom: 36px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
        }
        .fm2-cat-name {
          font-family: var(--serif);
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 400;
          color: var(--ink);
          letter-spacing: 0.01em;
          flex-shrink: 0;
        }
        .fm2-cat-count {
          font-family: var(--sans);
          font-size: 0.62rem;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-3);
          flex-shrink: 0;
        }
        .fm2-cat-rule { flex: 1; height: 1px; background: var(--border-lt); }
        .fm2-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }
        .fm2-card {
          background: var(--cream);
          display: flex;
          flex-direction: column;
          transition: background 0.35s var(--ease);
        }
        .fm2-card:hover { background: var(--cream-2); }
        .fm2-img-wrap {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: var(--cream-2);
        }
        .fm2-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.8s var(--ease);
          filter: brightness(0.9);
        }
        .fm2-card:hover .fm2-img { transform: scale(1.05); filter: brightness(0.95); }
        .fm2-price {
          position: absolute;
          bottom: 0; right: 0;
          font-family: var(--serif);
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--ink);
          background: rgba(243,237,226,0.95);
          padding: 6px 12px;
          letter-spacing: 0.02em;
        }
        .fm2-body {
          padding: 18px 20px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }
        .fm2-name {
          font-family: var(--sans);
          font-size: 0.88rem;
          font-weight: 400;
          color: var(--ink);
          letter-spacing: 0.03em;
          line-height: 1.3;
        }
        .fm2-desc {
          font-family: var(--sans);
          font-size: 0.78rem;
          font-weight: 300;
          color: var(--ink-3);
          line-height: 1.6;
          letter-spacing: 0.02em;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .fm2-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 10px;
        }
        .fm2-qty {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .fm2-qbtn {
          width: 24px; height: 24px;
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--ink-2);
          transition: all 0.25s;
          flex-shrink: 0;
        }
        .fm2-qbtn:hover { border-color: var(--ink); color: var(--ink); }
        .fm2-qnum {
          font-family: var(--sans);
          font-size: 0.82rem;
          font-weight: 400;
          color: var(--ink);
          min-width: 18px;
          text-align: center;
        }
        .fm2-add {
          font-family: var(--sans);
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink);
          border: 1px solid var(--ink);
          padding: 7px 12px;
          white-space: nowrap;
          transition: all 0.35s var(--ease);
          flex-shrink: 0;
        }
        .fm2-add:hover     { background: var(--ink); color: var(--cream); }
        .fm2-add--done {
          background: var(--ink);
          color: var(--cream);
          border-color: var(--ink);
        }
        @media (max-width: 540px) {
          .fm2-grid { grid-template-columns: 1fr 1fr; }
          .fm2-body { padding: 14px; }
          .fm2-name { font-size: 0.78rem; }
        }
        @media (max-width: 380px) {
          .fm2-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}