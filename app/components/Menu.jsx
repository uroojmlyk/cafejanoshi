'use client';

import { useState } from 'react';
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart, registerMenuItem } from '../context/CartContext';

/* ─────────────── DATA ─────────────── */
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
};

const COMPLETE_MENU_CATEGORIES = [
  { id:'shakes', name:'Signature Shakes', icon:'🥤', items:[
    {id:'lotus-shake',name:'Lotus Shake',price:699,description:'Crushed Lotus biscuits with creamy milk',image:'/lotus.jpg'},
    {id:'kitkat-shake',name:'Kitkat Shake',price:599,description:'Chocolate Kitkat delight',image:'/kitkat.jpg'},
    {id:'oreo-shake',name:'Oreo Shake',price:499,description:'Classic Oreo cookies blend',image:'/oreo.jpg'},
    {id:'nutella-shake',name:'Nutella Shake',price:699,description:'Rich Nutella chocolate shake',image:'/nutella.jpg'},
    {id:'cold-coffee',name:'Cold Coffee',price:699,description:'Iced coffee perfection',image:'/cold.jpg'},
    {id:'vanilla-shake',name:'Vanilla Shake',price:699,description:'Classic vanilla flavor',image:'/vanilla.jpg'},
    {id:'mango-shake',name:'Mango Shake',price:699,description:'Fresh mango delight',image:'/mango.jpg'},
    {id:'strawberry-shake',name:'Strawberry Shake',price:699,description:'Sweet strawberry blend',image:'/strawberry.jpg'},
    {id:'pistacio-shake',name:'Pistacio Shake',price:699,description:'Nutty pistachio flavor',image:'/pistacio.jpg'},
    {id:'protein-shake',name:'Protein Shake',price:699,description:'Healthy protein boost',image:'/protein.jpg'},
    {id:'blueberry-shake',name:'Blueberry Shake',price:699,description:'Antioxidant rich blueberry',image:'/blueberry.jpg'},
    {id:'cocktail-shake',name:'Cocktail Shake',price:699,description:'Mixed fruit special',image:'/cocktail.jpg'},
  ]},
  { id:'chillers', name:'Refreshing Chillers', icon:'🧊', items:[
    {id:'blue-buzz',name:'Blue Buzz',price:549,description:'Blueberry mint cooler',image:'/blue.jpg'},
    {id:'peach-buzz',name:'Peach Buzz',price:549,description:'Fresh peach delight',image:'/peach.jpg'},
    {id:'mango-buzz',name:'Mango Buzz',price:549,description:'Tropical mango blast',image:'/mangob.jpg'},
    {id:'mix-buzz',name:'Mix Buzz',price:549,description:'Mixed fruit explosion',image:'/mixb.jpg'},
    {id:'passion-fruit',name:'Passion Fruit',price:549,description:'Exotic passion fruit',image:'/passionf.jpg'},
    {id:'kiwi-crush',name:'Kiwi Crush',price:549,description:'Tangy kiwi freshness',image:'/kiwic.jpg'},
    {id:'green-apple',name:'Green Apple',price:549,description:'Crisp apple flavor',image:'/grena.jpg'},
    {id:'mix-berries',name:'Mix Berries',price:549,description:'Berry medley',image:'/mixbu.jpg'},
  ]},
  { id:'mojitos', name:'Fresh Mojitos', icon:'🌿', items:[
    {id:'moon-rocker',name:'Moon Rocker',price:599,description:'Special mint mojito',image:'/moonrocker.jpg'},
    {id:'italian-mojito',name:'Italian Mojito',price:499,description:'Italian herbs twist',image:'/italianmojito.jpg'},
    {id:'north-pole',name:'North Pole',price:499,description:'Minty cool sensation',image:'/northpole.jpg'},
    {id:'green-apple-mojito',name:'Green Apple Mojito',price:499,description:'Apple mint fusion',image:'/greenmojito.jpg'},
    {id:'electric-lemonade',name:'Electric Lemonade',price:499,description:'Zesty lemon blast',image:'/electriclemonade.jpg'},
    {id:'blue-lagoon',name:'Blue Lagoon',price:499,description:'Blue curacao special',image:'/bluelagoon.jpg'},
    {id:'royal-rose',name:'Royal Rose',price:599,description:'Rose flavored luxury',image:'/royalrose.jpg'},
    {id:'the-green',name:'The Green',price:599,description:'Fresh herbal blend',image:'/greenm.jpg'},
  ]},
  { id:'margaritas', name:'Margaritas', icon:'🍹', items:[
    {id:'mint-margarita',name:'Mint Margarita',price:349,description:'Refreshing mint margarita',image:'/mintmargarita.jpg'},
    {id:'blueberry-margarita',name:'Blue Berry Margarita',price:449,description:'Sweet blueberry margarita',image:'/blueberrymargarita.jpg'},
    {id:'strawberry-margarita',name:'Strawberry Margarita',price:449,description:'Fresh strawberry blend',image:'/strawberrymargarita.jpg'},
  ]},
  { id:'icedCoffee', name:'Iced Coffee', icon:'❄️', items:[
    {id:'frappuccino',name:'Frappuccino',price:699,description:'Blended ice coffee',image:'/frappuccino.jpg'},
    {id:'cafe-latte-iced',name:'Cafe Latte',price:699,description:'Iced latte',image:'/icedlatte.jpg'},
    {id:'pistacio-latte',name:'Pistacio Latte',price:699,description:'Pistachio flavored latte',image:'/pistaciolatte.jpg'},
    {id:'nutella-latte',name:'Nutella Latte',price:699,description:'Nutella coffee delight',image:'/nutellalatte.jpg'},
    {id:'lotus-latte',name:'Lotus Latte',price:699,description:'Biscoff lotus latte',image:'/lotuslatte.jpg'},
    {id:'strawberry-latte',name:'Strawberry Latte',price:699,description:'Strawberry flavored latte',image:'/strawberrylatte.jpg'},
    {id:'blueberry-latte',name:'Blue Berry Latte',price:699,description:'Blueberry coffee blend',image:'/blueberrylatte.jpg'},
  ]},
  { id:'desserts', name:'Sweet Desserts', icon:'🍰', items:[
    {id:'jn-white-lava',name:'JN Special White Lava Cake',price:999,description:'Molten white chocolate',image:'/whitelava.jpg'},
    {id:'lava-cake',name:'Lava Cake',price:699,description:'Chocolate lava explosion',image:'/lavacake.jpg'},
    {id:'bread-pudding',name:'Bread Pudding',price:699,description:'Chocolate/Caramel warm pudding',image:'/breadpudding.jpg'},
    {id:'three-layer-cake',name:'Three Layer Cake',price:699,description:'Triple layer delight',image:'/threelayer.jpg'},
    {id:'cheese-cake',name:'Cheese Cake',price:699,description:'Creamy cheesecake',image:'/cheese.jpg'},
    {id:'cup-cake',name:'Cup Cake',price:399,description:'Single serve delight',image:'/cup.jpg'},
    {id:'alaska-cake',name:'Alaska Cake',price:699,description:'Baked Alaska special',image:'/alaskacake.jpg'},
    {id:'kunafa-cake',name:'Kunafa Cake',price:749,description:'Middle Eastern delight',image:'/kunafacake.jpg'},
    {id:'milky-cake',name:'Milky Cake',price:699,description:'Soft milk cake',image:'/milkycake.jpg'},
    {id:'sweetza',name:'Sweetza',price:999,description:'Sweet pizza dessert',image:'/sweet.jpg'},
    {id:'french-toast',name:'French Toast',price:749,description:'Caramelized toast',image:'/frenchtoast.jpg'},
    {id:'dome-cake',name:'Dome Cake',price:1499,description:'Chocolate dome surprise',image:'/domecake.jpg'},
    {id:'nutella-croissant',name:'Nutella Croissant',price:999,description:'Nutella filled pastry',image:'/nutellacr.jpg'},
    {id:'arabic-kunafa',name:'Arabic Kunafa',price:1199,description:'Traditional kunafa',image:'/arabickunafa.jpg'},
  ]},
  { id:'tea', name:'Premium Teas', icon:'🍵', items:[
    {id:'karak-tea',name:'Karak Tea',price:119,description:'Strong traditional tea',image:'/karaktea.jpg'},
    {id:'kashmiri-tea',name:'Kashmiri Tea',price:249,description:'Pink Kashmiri chai',image:'/kashmiritea.jpg'},
    {id:'creamy-tea',name:'Creamy Tea',price:249,description:'Cream topped tea',image:'/creamytea.jpg'},
    {id:'cardamom-tea',name:'Cardamom Tea',price:199,description:'Aromatic cardamom tea',image:'/cardamomtea.jpg'},
  ]},
  { id:'coffee', name:'Artisan Coffee', icon:'☕', items:[
    {id:'cappuccino',name:'Cappuccino',price:499,description:'Classic Italian coffee',image:'/capuccino.jpg'},
    {id:'cafe-latte-hot',name:'Cafe Latte',price:499,description:'Smooth milk coffee',image:'/latte.jpg'},
    {id:'americano-espresso',name:'Americano/Espresso',price:399,description:'Strong black coffee',image:'/americano.jpg'},
    {id:'caramel-latte',name:'Caramel Latte',price:699,description:'Caramel flavored latte',image:'/caramellatte.jpg'},
    {id:'irish-nut-cream',name:'Irish Nut Cream',price:699,description:'Nutty Irish cream',image:'/irishnutcream.jpg'},
    {id:'spanish-latte',name:'Spanish Latte',price:799,description:'Sweet Spanish style',image:'/spanishlatte.jpg'},
    {id:'vanilla-latte',name:'Vanilla Latte',price:699,description:'Vanilla infused coffee',image:'/vanillalatte.jpg'},
    {id:'hazelnut',name:'Hazelnut',price:699,description:'Nutty hazelnut flavor',image:'/hazelnut.jpg'},
    {id:'homemade',name:'Homemade',price:699,description:'House special blend',image:'/homemaidcoffee.jpg'},
    {id:'french-vanilla',name:'French Vanilla',price:699,description:'French style vanilla',image:'/frenchvanilla.jpg'},
  ]},
  { id:'thai', name:'Thai & Chinese', icon:'🥢', items:[
    {id:'chilli-dry-chicken',name:'Chilli Dry Chicken',price:1099,description:'Spicy dry chicken',image:'/chillidrychicken.jpg'},
    {id:'chilli-dry-fish',name:'Chilli Dry Fish',price:1499,description:'Spicy dry fish',image:'/chillidryfish.jpg'},
    {id:'chilli-dry-prawns',name:'Chilli Dry Prawns',price:1899,description:'Spicy dry prawns',image:'/chilliprawns.jpg'},
    {id:'kung-pao-chicken',name:'Kung Pao Chicken',price:1299,description:'Spicy kung pao chicken',image:'/kungpaochicken.jpg'},
    {id:'chicken-cashew-nut',name:'Chicken Cashew Nut',price:1299,description:'Chicken with cashew nuts',image:'/chickencashewnut.jpg'},
    {id:'chicken-schezwan',name:'Chicken Schezwan',price:1099,description:'Schezwan style chicken',image:'/chickenschizwan.jpg'},
    {id:'chicken-manchurian',name:'Chicken Manchurian',price:1099,description:'Indo-Chinese favorite',image:'/chickenmanchurian.jpg'},
    {id:'mongolian-chicken',name:'Mongolian Chicken',price:1199,description:'Mongolian style',image:'/mongolianchicken.jpg'},
    {id:'chicken-shashlik',name:'Chicken Shashlik',price:1299,description:'Chicken shashlik',image:'/chickenshashlik.jpg'},
    {id:'black-pepper-chicken',name:'Black Pepper Chicken',price:999,description:'Peppery chicken',image:'/blackpepperchicken.jpg'},
    {id:'chicken-chowmein',name:'Chicken Chowmein',price:1199,description:'Stir fried noodles',image:'/chickenchowmein.jpg'},
    {id:'sweet-chilli-chicken',name:'Sweet Chilli Chicken',price:1099,description:'Sweet & spicy chicken',image:'/sweetchillichicken.jpg'},
    {id:'garlic-fried',name:'Garlic Fried Rice',price:349,description:'Garlic flavored rice',image:'/garlicfried.jpg'},
    {id:'egg-fried',name:'Egg Fried Rice',price:349,description:'Rice with egg',image:'/eggfriedrice.jpg'},
    {id:'vegetables-fried',name:'Vegetables Fried Rice',price:349,description:'Mixed vegetable rice',image:'/vegetablesfriedrice.jpg'},
    {id:'masala-fried',name:'Masala Fried Rice',price:349,description:'Spiced rice',image:'/masalafried.jpg'},
    {id:'chicken-fried',name:'Chicken Fried Rice',price:499,description:'Chicken fried rice',image:'/chickenfriedrice.jpg'},
  ]},
  { id:'specials', name:'Janoshi Specials', icon:'⭐', items:[
    {id:'stuffed-chicken-1699',name:'Stuffed Chicken (Regular)',price:1699,description:'Cheese stuffed chicken',image:'/stuffedchicken.jpg'},
    {id:'stuffed-chicken-1999',name:'Stuffed Chicken (Large)',price:1999,description:'Cheese stuffed chicken',image:'/stuffed.jpg'},
    {id:'parmesan-chicken',name:'Parmesan Chicken',price:1799,description:'Parmesan crusted chicken',image:'/parmesanchicken.jpg'},
    {id:'auxpolo-chicken',name:'Auxpolo Chicken',price:1699,description:'Special auxpolo sauce',image:'/auxpolochicken.jpg'},
    {id:'auxpolo-kabab',name:'Auxpolo Kabab',price:1499,description:'Grilled auxpolo kabab',image:'/auxpolokabab.jpg'},
    {id:'tarragon-chicken',name:'Tarragon Chicken',price:1599,description:'Herb roasted chicken',image:'/tarragonchicken.jpg'},
    {id:'moroccon-chicken',name:'Moroccan Chicken',price:1699,description:'Moroccan spices chicken',image:'/morroconchicken.jpg'},
    {id:'cordon-bleu-chicken',name:'Cordon Bleu Chicken',price:1699,description:'Ham & cheese stuffed',image:'/cordonbleuchicken.jpg'},
    {id:'bai-ze-chicken',name:'Bai-ze Chicken',price:1799,description:'Special Bai-ze sauce',image:'/baizechicken.jpg'},
    {id:'marinara-chicken',name:'Marinara Chicken',price:1699,description:'Tomato marinara chicken',image:'/marinarachicken.jpg'},
    {id:'fried-tender-chicken',name:'Fried Tender Chicken',price:1749,description:'Crispy tender chicken',image:'/friedtenderchicken.jpg'},
    {id:'fried-crispy-fish',name:'Fried Crispy Fish',price:1999,description:'Golden fried fish',image:'/friedcrispyfish.jpg'},
    {id:'seafood-platter',name:'Seafood Platter',price:3999,description:'Assorted seafood for 2–3',image:'/seafoodplatter.jpg'},
    {id:'napolean-chicken',name:'Napoleon Chicken',price:1899,description:'Layered chicken dish',image:'/napoleanchicken.jpg'},
  ]},
  { id:'steaks', name:'Premium Steaks', icon:'🥩', items:[
    {id:'chicken-steak',name:'Chicken Steak',price:1699,description:'Grilled chicken steak',image:'/chickensteak.jpg'},
    {id:'fish-steak',name:'Fish Steak',price:2099,description:'Fresh fish steak',image:'/fishsteak.jpg'},
    {id:'beef-steak',name:'Beef Steak',price:2999,description:'Juicy beef steak',image:'/beefsteak.jpg'},
    {id:'rib-eye-steak',name:'Rib Eye Steak',price:4499,description:'Premium rib eye',image:'/ribeyesteak.jpg'},
    {id:'mushroom-steak',name:'Mushroom Sauce',price:299,description:'Mushroom sauce addon',image:'/mushroomsteak.jpg'},
    {id:'moroccan-steak',name:'Moroccan Sauce',price:299,description:'Moroccan sauce addon',image:'/moroccansteak.jpg'},
    {id:'tarragon-steak',name:'Tarragon Sauce',price:299,description:'Tarragon sauce addon',image:'/tarragonsteak.jpg'},
    {id:'blackpepper-steak',name:'Black Pepper Sauce',price:299,description:'Black pepper sauce',image:'/blackpeppersteak.jpg'},
    {id:'mexican-steak',name:'Mexican Sauce',price:299,description:'Mexican sauce addon',image:'/mexicansteak.jpg'},
    {id:'auxpolo-steak',name:'Auxpolo Sauce',price:299,description:'Auxpolo sauce addon',image:'/auxpolosteak.jpg'},
    {id:'french-onion-steak',name:'French Onion Sauce',price:299,description:'French onion sauce',image:'/frenchonionsteak.jpg'},
  ]},
  { id:'burgers', name:'Janoshi Burgers', icon:'🍔', items:[
    {id:'jn-special-burger',name:'JN Special Burger',price:999,description:'Signature house burger',image:'/jnspecialburger.jpg'},
    {id:'zinger-burger',name:'Zinger Burger',price:599,description:'Crispy chicken burger',image:'/zingerburger.jpg'},
    {id:'grill-chicken-burger',name:'Grill Chicken Burger',price:699,description:'Grilled chicken patty',image:'/grillchickenburger.jpg'},
    {id:'jn-crispy-burger',name:'JN Crispy Burger',price:749,description:'Extra crispy special',image:'/crispyburger.jpg'},
    {id:'reggy-burger',name:'Reggy Burger',price:299,description:'Classic regular burger',image:'/raggyburger.jpg'},
    {id:'max-smash-burger',name:'Max Smash Burger',price:999,description:'Double smashed patty',image:'/maxsmashburger.jpg'},
    {id:'wild-smash-burger',name:'Wild Smash Burger',price:749,description:'Spicy smashed burger',image:'/wildsmashburger.jpg'},
    {id:'melty-lava-beef-burger',name:'Melty Lava Beef Burger',price:1199,description:'Cheese lava beef',image:'/meltylavabeefburger.jpg'},
    {id:'fish-burger',name:'Fish Burger',price:999,description:'Crispy fish fillet',image:'/fishburger.jpg'},
  ]},
  { id:'pizza', name:'Delicious Pizza', icon:'🍕', items:[
    {id:'donut-pizza',name:'Donut Pizza',price:2299,description:'Sweet donut shaped pizza',image:'/donutpizza.jpg'},
    {id:'lasagna-pizza-small',name:'Lasagna Pizza (Small)',price:1699,description:'Lasagna topped pizza',image:'/lasagnapizza.jpg'},
    {id:'lasagna-pizza-medium',name:'Lasagna Pizza (Medium)',price:2299,description:'Lasagna topped pizza',image:'/lasagnapizza.jpg'},
    {id:'kabab-special-pizza-small',name:'Kabab Special Pizza (S)',price:749,description:'Kabab topping',image:'/kababpizza.jpg'},
    {id:'kabab-special-pizza-medium',name:'Kabab Special Pizza (M)',price:1299,description:'Kabab topping',image:'/kababpizza.jpg'},
    {id:'kabab-special-pizza-large',name:'Kabab Special Pizza (L)',price:1999,description:'Kabab topping',image:'/kababpizza.jpg'},
    {id:'super-supreme-pizza-small',name:'Super Supreme Pizza (S)',price:699,description:'All toppings',image:'/supremepizza.jpg'},
    {id:'super-supreme-pizza-medium',name:'Super Supreme Pizza (M)',price:1299,description:'All toppings',image:'/supremepizza.jpg'},
    {id:'super-supreme-pizza-large',name:'Super Supreme Pizza (L)',price:1999,description:'All toppings',image:'/supremepizza.jpg'},
    {id:'into-wood-pizza-small',name:'Into Wood Pizza (S)',price:749,description:'Wood fired style',image:'/intowoodpizza.jpg'},
    {id:'into-wood-pizza-medium',name:'Into Wood Pizza (M)',price:1299,description:'Wood fired style',image:'/intowoodpizza.jpg'},
    {id:'into-wood-pizza-large',name:'Into Wood Pizza (L)',price:1999,description:'Wood fired style',image:'/intowoodpizza.jpg'},
    {id:'platinum-pizza',name:'Platinum Pizza',price:1999,description:'Premium pizza',image:'/platinumpizza.jpg'},
    {id:'pepperoni-pizza',name:'Pepperoni Pizza',price:1799,description:'Pepperoni topping',image:'/pepperonipizza.jpg'},
  ]},
  { id:'broast', name:'Crispy Broast', icon:'🍗', items:[
    {id:'broast-quarter-small',name:'Broast Quarter (Small)',price:799,description:'Crispy quarter broast',image:'/broast.jpg'},
    {id:'broast-half-medium',name:'Broast Half (Medium)',price:1299,description:'Crispy half broast',image:'/broast.jpg'},
    {id:'broast-full-large',name:'Broast Full (Large)',price:2399,description:'Crispy full broast',image:'/broast.jpg'},
  ]},
  { id:'wraps', name:'Fresh Wraps', icon:'🌯', items:[
    {id:'jn-special-wrap',name:'JN Special Wrap',price:799,description:'Signature house wrap',image:'/jnspecialwrap.jpg'},
    {id:'grill-chicken-wrap',name:'Grill Chicken Wrap',price:749,description:'Grilled chicken wrap',image:'/grillchickenwrap.jpg'},
    {id:'smooky-chicken-wrap',name:'Smooky Chicken Wrap',price:749,description:'Smoky chicken wrap',image:'/smookychickenwrap.jpg'},
    {id:'cheese-wrap',name:'Cheese Wrap',price:549,description:'Cheese filled wrap',image:'/cheesewrap.jpg'},
    {id:'kabab-wrap',name:'Kabab Wrap',price:649,description:'Kabab wrap',image:'/kababwrap.jpg'},
    {id:'baby-wrap',name:'Baby Wrap',price:549,description:'Small size wrap',image:'/babywrap.jpg'},
    {id:'fish-wrap',name:'Fish Wrap',price:899,description:'Crispy fish wrap',image:'/fishwrap.jpg'},
    {id:'zinger-wrap',name:'Zinger Wrap',price:599,description:'Zinger chicken wrap',image:'/zingerwrap.jpg'},
    {id:'beef-wrap',name:'Beef Wrap',price:849,description:'Beef wrap',image:'/beefwrap.jpg'},
  ]},
  { id:'pasta', name:'Pasta & Noodles', icon:'🍝', items:[
    {id:'fettuccine-pasta',name:'Fettuccine Pasta',price:1099,description:'Fettuccine pasta',image:'/fettuccinepasta.jpg'},
    {id:'fried-chicken-pasta',name:'Fried Chicken Pasta',price:1149,description:'Pasta with fried chicken',image:'/friedchickenpasta.jpg'},
    {id:'jn-special-italian-pasta',name:'JN Special Italian Pasta',price:1199,description:'Special Italian pasta',image:'/jnspecialitalianpasta.jpg'},
    {id:'penne-pasta',name:'Penne Pasta',price:1149,description:'Penne pasta',image:'/pennypasta.jpg'},
    {id:'bake-cheese-pasta',name:'Bake Cheese Pasta',price:1099,description:'Baked cheese pasta',image:'/bakecheesepasta.jpg'},
    {id:'bake-pasta-with-fries',name:'Bake Pasta with Fries',price:999,description:'Pasta with fries',image:'/bakepastawithfries.jpg'},
    {id:'dragon-noodles',name:'Dragon Noodles',price:1299,description:'Spicy dragon noodles',image:'/dragonnoddles.jpg'},
    {id:'mexican-noodles',name:'Mexican Noodles',price:1299,description:'Mexican style noodles',image:'/mexicannoddles.jpg'},
  ]},
  { id:'soups', name:'Hot Soups', icon:'🥣', items:[
    {id:'special-soup-small',name:'Special Soup (Small)',price:549,description:'House special soup',image:'/specialsoup.jpg'},
    {id:'special-soup-large',name:'Special Soup (Large)',price:1599,description:'House special soup',image:'/specialsoup.jpg'},
    {id:'hot-sour-soup-small',name:'Hot & Sour Soup (Small)',price:399,description:'Hot and sour soup',image:'/hotandsoursoup.jpg'},
    {id:'hot-sour-soup-large',name:'Hot & Sour Soup (Large)',price:1299,description:'Hot and sour soup',image:'/hotandsoursoup.jpg'},
    {id:'cream-mushroom-soup',name:'Cream of Mushroom Soup',price:699,description:'Creamy mushroom soup',image:'/mushroom.jpg'},
    {id:'vegetable-soup-small',name:'Vegetable Soup (Small)',price:399,description:'Vegetable soup',image:'/vegetablesoup.jpg'},
    {id:'vegetable-soup-large',name:'Vegetable Soup (Large)',price:1199,description:'Vegetable soup',image:'/vegetablesoup.jpg'},
  ]},
  { id:'salads', name:'Fresh Salads', icon:'🥗', items:[
    {id:'caesar-salad',name:'Caesar Salad',price:699,description:'Classic Caesar salad',image:'/caesarsalad.jpg'},
    {id:'crispy-salad',name:'Crispy Salad',price:699,description:'Crispy fresh salad',image:'/crispysalad.jpg'},
    {id:'gym-platter',name:'Gym Platter',price:899,description:'Healthy gym platter',image:'/gymplatter.jpg'},
    {id:'coleslaw',name:'Coleslaw',price:249,description:'Creamy coleslaw',image:'/colslaw.jpg'},
  ]},
  { id:'sandwiches', name:'Tasty Sandwiches', icon:'🥪', items:[
    {id:'jn-special-sandwich',name:'JN Special Sandwich',price:799,description:'Signature house sandwich',image:'/gymloversandwich.jpg'},
    {id:'club-sandwich',name:'Club Sandwich',price:749,description:'Club sandwich',image:'/clubsandwich.jpg'},
    {id:'grill-chicken-sandwich',name:'Grill Chicken Sandwich',price:649,description:'Grilled chicken sandwich',image:'/grillchickensandwich.jpg'},
    {id:'jn-crispy-sandwich',name:'JN Crispy Sandwich',price:699,description:'Crispy sandwich',image:'/jncrispysandwich.jpg'},
    {id:'cheese-sandwich',name:'Cheese Sandwich',price:549,description:'Cheese sandwich',image:'/cheesesandwich.jpg'},
    {id:'mexican-sandwich',name:'Mexican Sandwich',price:899,description:'Mexican style sandwich',image:'/mexicansandwich.jpg'},
  ]},
  { id:'appetizers', name:'Appetizers', icon:'🍤', items:[
    {id:'dynamite-chicken',name:'Dynamite Chicken',price:799,description:'Spicy chicken bites',image:'/dynamitechicken.jpg'},
    {id:'dynamite-fish',name:'Dynamite Fish',price:999,description:'Spicy fish bites',image:'/dynamitefish.jpg'},
    {id:'dynamite-prawns',name:'Dynamite Prawns',price:1299,description:'Spicy prawns',image:'/dynamiteprawns.jpg'},
    {id:'chicken-strips',name:'Chicken Strips',price:799,description:'Chicken strips',image:'/chickenstrips.jpg'},
    {id:'pizza-bite',name:'Pizza Bite',price:499,description:'Mini pizza bites',image:'/pizzabite.jpg'},
    {id:'finger-mozzarella',name:'Finger Mozzarella',price:799,description:'Mozzarella sticks',image:'/fingermozarella.jpg'},
    {id:'glazzed-wings',name:'Glazzed Wings',price:999,description:'Glazed chicken wings',image:'/glazzedwings.jpg'},
    {id:'nuggets',name:'Nuggets',price:499,description:'Chicken nuggets',image:'/nuggets.jpg'},
    {id:'loaded-fries',name:'Loaded Fries',price:599,description:'Loaded fries',image:'/loadedfries.jpg'},
    {id:'nacho-loaded-fries',name:'Nacho Loaded Fries',price:799,description:'Nacho loaded fries',image:'/nacholoadedfries.jpg'},
    {id:'wild-fries',name:'Wild Fries',price:899,description:'Wild seasoned fries',image:'/wildfries.jpg'},
    {id:'plain-fries-small',name:'Plain Fries (Small)',price:299,description:'Plain fries',image:'/plainfries.jpg'},
    {id:'plain-fries-large',name:'Plain Fries (Large)',price:499,description:'Plain fries',image:'/plainfries.jpg'},
    {id:'spring-roll',name:'Spring Roll',price:699,description:'Spring rolls',image:'/springrolls.jpg'},
    {id:'fish-strips',name:'Fish Strips',price:1399,description:'Fish strips',image:'/fishstrips.jpg'},
    {id:'jumbo-prawns-small',name:'Jumbo Prawns (Small)',price:1799,description:'Large prawns',image:'/jumboprawns.jpg'},
    {id:'jumbo-prawns-large',name:'Jumbo Prawns (Large)',price:2099,description:'Large prawns',image:'/jumboprawns.jpg'},
  ]},
];

// Register all items
COMPLETE_MENU_CATEGORIES.forEach(cat => {
  cat.items.forEach(item => registerMenuItem(item.id, item.name, item.price));
});

const FILTERS = [
  { id:'all',        name:'All',        icon:'✨' },
  { id:'shakes',     name:'Shakes',     icon:'🥤' },
  { id:'chillers',   name:'Chillers',   icon:'🧊' },
  { id:'mojitos',    name:'Mojitos',    icon:'🌿' },
  { id:'desserts',   name:'Desserts',   icon:'🍰' },
  { id:'tea',        name:'Tea',        icon:'🍵' },
  { id:'coffee',     name:'Coffee',     icon:'☕' },
  { id:'thai',       name:'Thai/Chinese',icon:'🥢'},
  { id:'specials',   name:'Specials',   icon:'⭐' },
  { id:'burgers',    name:'Burgers',    icon:'🍔' },
  { id:'pizza',      name:'Pizza',      icon:'🍕' },
  { id:'steaks',     name:'Steaks',     icon:'🥩' },
  { id:'wraps',      name:'Wraps',      icon:'🌯' },
  { id:'appetizers', name:'Appetizers', icon:'🍤' },
];

/* ─────────────── COMPONENT ─────────────── */
export default function CompleteMenu() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [quantities, setQuantities]     = useState({});
  const { addToCart, cartCount, removeFromCart, getCartItems } = useCart();

  const handleAddToCart = (item) => {
    const qty = quantities[item.id] || 1;
    addToCart(item.id, item.name, item.price, qty);
    const btn = document.getElementById(`mbtn-${item.id}`);
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = '✓';
      btn.style.background = 'var(--fg)';
      setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 1400);
    }
  };

  const updateQty = (id, delta) =>
    setQuantities(p => ({ ...p, [id]: Math.max(1, (p[id] || 1) + delta) }));

  const handleRemove = (id) => {
    removeFromCart(id);
    setQuantities(p => { const n = {...p}; delete n[id]; return n; });
  };

  const filtered = activeFilter === 'all'
    ? COMPLETE_MENU_CATEGORIES
    : COMPLETE_MENU_CATEGORIES.filter(c => c.id === activeFilter);

  const getImg = (item) =>
    item.image?.startsWith('http') || item.image?.startsWith('/')
      ? item.image
      : CATEGORY_IMAGES[item.categoryId] || 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80';

  return (
    <section id="menu" style={{ background: 'var(--bg)', padding: '120px 0' }}>
      <div className="mn-container">

        {/* Header */}
        <div className="mn-header">
          <div className="mn-label">155+ Creations</div>
          <h2 className="mn-title">Our <em>Complete</em> Menu</h2>
          <p className="mn-sub">From artisan coffee to premium steaks — every dish crafted with passion</p>
        </div>

        {/* Cart indicator */}
        {cartCount > 0 && (
          <div className="mn-cart-bar">
            <ShoppingBag size={14} strokeWidth={1.5} />
            <span>{cartCount} item{cartCount !== 1 ? 's' : ''} in your order</span>
          </div>
        )}

        {/* Filter tabs */}
        <div className="mn-filters">
          {FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`mn-filter-btn${activeFilter === f.id ? ' mn-filter-btn--active' : ''}`}
            >
              <span className="mn-filter-icon">{f.icon}</span>
              <span>{f.name}</span>
            </button>
          ))}
        </div>

        {/* Categories */}
        <div className="mn-categories">
          {filtered.map(cat => (
            <div key={cat.id} className="mn-category">
              {/* Category heading */}
              <div className="mn-cat-header">
                <span className="mn-cat-icon">{cat.icon}</span>
                <div>
                  <h3 className="mn-cat-name">{cat.name}</h3>
                  <span className="mn-cat-count">{cat.items.length} items</span>
                </div>
                <div className="mn-cat-line" />
              </div>

              {/* Items grid */}
              <div className="mn-items-grid">
                {cat.items.map(item => (
                  <div key={item.id} className="mn-card">
                    {/* Image */}
                    <div className="mn-card-img">
                      <div
                        style={{ backgroundImage: `url(${getImg(item)})` }}
                        className="mn-card-bg"
                      />
                      <div className="mn-card-price">Rs {item.price}</div>
                    </div>

                    {/* Body */}
                    <div className="mn-card-body">
                      <h4 className="mn-card-name">{item.name}</h4>
                      <p className="mn-card-desc">{item.description}</p>

                      {/* Controls */}
                      <div className="mn-card-controls">
                        <div className="mn-qty">
                          <button onClick={() => updateQty(item.id, -1)} className="mn-qty-btn">
                            <Minus size={12} />
                          </button>
                          <span className="mn-qty-num">{quantities[item.id] || 1}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="mn-qty-btn">
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="mn-card-actions">
                          <button onClick={() => handleRemove(item.id)} className="mn-remove-btn" title="Remove">
                            <Trash2 size={12} />
                          </button>
                          <button
                            id={`mbtn-${item.id}`}
                            onClick={() => handleAddToCart(item)}
                            className="mn-add-btn"
                          >
                            Add · Rs {item.price * (quantities[item.id] || 1)}
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

      <style jsx global>{`
        .mn-container { max-width: 1320px; margin: 0 auto; padding: 0 40px; }
        @media (max-width: 600px) { .mn-container { padding: 0 20px; } }

        /* Header */
        .mn-header { text-align: center; margin-bottom: 64px; }
        .mn-label {
          font-family: var(--font-body);
          font-size: 0.65rem; letter-spacing: 0.28em; text-transform: uppercase;
          color: var(--fg-muted); font-weight: 300; margin-bottom: 20px;
        }
        .mn-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 300; color: var(--fg);
          line-height: 1.1; margin-bottom: 16px;
        }
        .mn-title em { font-style: italic; }
        .mn-sub {
          font-family: var(--font-body); font-size: 1rem; font-weight: 100;
          color: var(--fg-muted); letter-spacing: 0.04em; max-width: 480px; margin: 0 auto;
        }

        /* Cart bar */
        .mn-cart-bar {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 10px 20px; background: var(--fg); color: var(--bg);
          font-family: var(--font-body); font-size: 0.72rem; letter-spacing: 0.12em;
          text-transform: uppercase; font-weight: 300; margin-bottom: 40px;
        }

        /* Filters */
        .mn-filters {
          display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 72px;
          border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light);
          padding: 20px 0;
        }
        .mn-filter-btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-body); font-size: 0.67rem; font-weight: 300;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 8px 16px; border: 1px solid var(--border); background: transparent;
          color: var(--fg-muted); cursor: pointer; transition: all 0.3s var(--ease-smooth);
        }
        .mn-filter-btn:hover { border-color: var(--fg-muted); color: var(--fg); }
        .mn-filter-btn--active {
          border-color: var(--fg); background: var(--fg); color: var(--bg);
        }
        .mn-filter-icon { font-size: 0.85rem; }

        /* Categories */
        .mn-categories { display: flex; flex-direction: column; gap: 80px; }

        /* Category header */
        .mn-cat-header {
          display: flex; align-items: center; gap: 16px; margin-bottom: 32px;
        }
        .mn-cat-icon { font-size: 1.6rem; line-height: 1; flex-shrink: 0; }
        .mn-cat-name {
          font-family: var(--font-display); font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 300; color: var(--fg); line-height: 1; letter-spacing: 0.02em;
        }
        .mn-cat-count {
          font-family: var(--font-body); font-size: 0.65rem; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--fg-muted); font-weight: 300;
        }
        .mn-cat-line { flex: 1; height: 1px; background: var(--border-light); }

        /* Items grid */
        .mn-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1px; background: var(--border-light);
        }

        /* Card */
        .mn-card {
          background: var(--bg); display: flex; flex-direction: column;
          transition: background 0.3s;
        }
        .mn-card:hover { background: rgba(201,169,110,0.04); }

        .mn-card-img {
          position: relative; aspect-ratio: 4/3; overflow: hidden; background: var(--border-light);
        }
        .mn-card-bg {
          position: absolute; inset: 0; background-size: cover; background-position: center;
          transition: transform 0.7s var(--ease-smooth);
        }
        .mn-card:hover .mn-card-bg { transform: scale(1.05); }
        .mn-card-price {
          position: absolute; bottom: 0; right: 0;
          background: rgba(243,237,226,0.96); backdrop-filter: blur(4px);
          font-family: var(--font-display); font-size: 1.1rem; font-weight: 300;
          color: var(--fg); padding: 6px 12px; letter-spacing: 0.02em;
        }

        .mn-card-body { padding: 18px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
        .mn-card-name {
          font-family: var(--font-body); font-size: 0.85rem; font-weight: 400;
          color: var(--fg); letter-spacing: 0.04em; line-height: 1.3;
        }
        .mn-card-desc {
          font-family: var(--font-body); font-size: 0.75rem; font-weight: 100;
          color: var(--fg-muted); letter-spacing: 0.03em; line-height: 1.5;
          flex: 1;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }

        .mn-card-controls {
          display: flex; align-items: center; justify-content: space-between;
          gap: 8px; margin-top: 8px;
        }
        .mn-qty { display: flex; align-items: center; gap: 6px; }
        .mn-qty-btn {
          width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;
          border: 1px solid var(--border); background: none; color: var(--fg-light);
          cursor: pointer; transition: all 0.25s;
        }
        .mn-qty-btn:hover { border-color: var(--fg); color: var(--fg); }
        .mn-qty-num {
          font-family: var(--font-body); font-size: 0.8rem; font-weight: 400;
          color: var(--fg); width: 20px; text-align: center;
        }

        .mn-card-actions { display: flex; gap: 6px; }
        .mn-remove-btn {
          width: 28px; height: 28px; display: flex; align-items: center; justify-content: center;
          border: 1px solid var(--border); background: none; color: var(--fg-muted);
          cursor: pointer; transition: all 0.25s;
        }
        .mn-remove-btn:hover { border-color: #c0392b; color: #c0392b; }
        .mn-add-btn {
          font-family: var(--font-body); font-size: 0.62rem; font-weight: 400;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 6px 12px; background: transparent;
          border: 1px solid var(--fg); color: var(--fg);
          cursor: pointer; transition: all 0.3s; white-space: nowrap;
        }
        .mn-add-btn:hover { background: var(--fg); color: var(--bg); }
      `}</style>
    </section>
  );
}