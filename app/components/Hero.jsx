






// // 'use client'

// // import { ArrowRight, Star, Clock, Coffee, ChefHat, Users, Award, Sparkles } from 'lucide-react'
// // import { useEffect, useState } from 'react'

// // const Hero = () => {
// //   const [loaded, setLoaded] = useState(false)

// //   useEffect(() => {
// //     setLoaded(true)
// //   }, [])

// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
// //       {/* Premium Background with Particles */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0A0A] to-[#1A0F0F] z-0">
// //         {/* Animated Gradient Mesh */}
// //         <div className="absolute inset-0 opacity-20">
// //           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
// //           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-600/10 to-red-600/10 rounded-full blur-3xl"></div>
// //         </div>
        
// //         {/* Grid Pattern */}
// //         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
// //       </div>

// //       {/* Floating Elements */}
// //       <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-2xl animate-pulse"></div>
// //       <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-tl from-yellow-500/5 to-transparent rounded-full blur-2xl"></div>
// //       <div className="absolute top-10 right-1/4 w-40 h-40 bg-gradient-to-r from-red-500/3 to-transparent rounded-full blur-xl"></div>

// //       <div className="container mx-auto px-4 md:px-8 lg:px-12 z-10">
// //         <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
// //           loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// //         }`}>
          
// //           <div className="grid lg:grid-cols-2 gap-16 items-center">
            
// //             {/* Left Content - Premium */}
// //             <div className="space-y-10">
// //               {/* Premium Badge */}
// //               <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-2xl border border-orange-500/20 shadow-lg shadow-orange-500/5">
// //                 <Sparkles className="w-5 h-5 text-orange-400 animate-pulse" />
// //                 <span className="text-orange-300 font-semibold tracking-wide">OKARA&apos;S PREMIUM DINING EXPERIENCE</span>
// //               </div>

// //               {/* Main Heading with Glow */}
// //               <div className="space-y-6">
// //                 <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
// //                   <span className="relative">
// //                     <span className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 blur-xl opacity-30"></span>
// //                     <span className="relative bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent">
// //                       Cafe
// //                     </span>
// //                   </span>
// //                   <br />
// //                   <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
// //                     Janoshi
// //                   </span>
// //                 </h1>
                
// //                 <div className="flex items-center gap-4">
// //                   <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
// //                   <ChefHat className="w-8 h-8 text-orange-400" />
// //                   <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
// //                 </div>

// //                 <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light max-w-2xl">
// //                   Where <span className="text-orange-400 font-semibold">traditional flavors</span> meet{' '}
// //                   <span className="text-yellow-400 font-semibold">modern elegance</span>. 
// //                   A culinary journey through Okara&apos;s finest.
// //                 </p>
// //               </div>

// //               {/* Premium Stats */}
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
// //                 {[
// //                   { icon: <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />, value: '4.9/5', label: 'Rating' },
// //                   { icon: <Users className="w-6 h-6 text-orange-400" />, value: '500+', label: 'Happy Customers' },
// //                   { icon: <Award className="w-6 h-6 text-yellow-400" />, value: '12yrs', label: 'Experience' },
// //                   { icon: <Coffee className="w-6 h-6 text-orange-400" />, value: '155+', label: 'Menu Items' },
// //                 ].map((stat, index) => (
// //                   <div 
// //                     key={index}
// //                     className="group bg-gradient-to-b from-zinc-900/40 to-black/40 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
// //                   >
// //                     <div className="flex flex-col items-center text-center space-y-3">
// //                       <div className="p-3 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-xl">
// //                         {stat.icon}
// //                       </div>
// //                       <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
// //                         {stat.value}
// //                       </div>
// //                       <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>

// //               {/* Premium CTA Buttons */}
// //               <div className="flex flex-wrap gap-6 pt-8">
// //                 <button className="group relative px-10 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 hover:scale-105 overflow-hidden">
// //                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
// //                   <span className="relative flex items-center gap-3">
// //                     <span>Explore Menu</span>
// //                     <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
// //                   </span>
// //                 </button>
                
// //                 <button className="group px-10 py-4 bg-transparent text-orange-400 rounded-2xl font-bold text-lg border-2 border-orange-500/50 hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-500 hover:scale-105">
// //                   <span className="flex items-center gap-3">
// //                     <Clock className="w-5 h-5" />
// //                     <span>Book Table</span>
// //                   </span>
// //                 </button>
// //               </div>

// //               {/* Opening Hours - Premium */}
// //               <div className="pt-8">
// //                 <div className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-zinc-900/50 to-black/50 backdrop-blur-lg rounded-2xl border border-zinc-800">
// //                   <div className="p-3 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl">
// //                     <Clock className="w-6 h-6 text-orange-400" />
// //                   </div>
// //                   <div>
// //                     <div className="text-orange-300 font-semibold">OPENING HOURS</div>
// //                     <div className="text-gray-300">10:00 AM - 12:00 AM • Everyday</div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Right Image/Visual - Premium */}
// //             <div className="relative">
// //               {/* Main Image Container */}
// //               <div className="relative">
// //                 {/* Outer Glow */}
// //                 <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-red-500/10 to-yellow-500/20 rounded-3xl blur-2xl"></div>
                
// //                 {/* Image Frame */}
// //                 <div className="relative rounded-3xl overflow-hidden border border-orange-500/30 shadow-2xl shadow-orange-500/20">
// //                   {/* Image with Overlay */}
// //                   <div className="aspect-square bg-gradient-to-br from-orange-900/30 via-black to-zinc-900 flex items-center justify-center p-12">
// //                     <div className="text-center space-y-8">
// //                       {/* Animated Logo */}
// //                       <div className="relative">
// //                         <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
// //                         <div className="relative w-40 h-40 mx-auto bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
// //                           <span className="text-black text-5xl font-bold">CJ</span>
// //                         </div>
// //                       </div>
                      
// //                       <div className="space-y-4">
// //                         <div className="text-4xl font-bold text-white">Cafe Janoshi</div>
// //                         <div className="text-orange-300 text-lg">Okara&apos;s Culinary Gem</div>
                        
// //                         {/* Animated Divider */}
// //                         <div className="flex items-center justify-center gap-4">
// //                           <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-500"></div>
// //                           <Sparkles className="w-5 h-5 text-yellow-400 animate-spin-slow" />
// //                           <div className="h-px w-16 bg-gradient-to-r from-orange-500 to-transparent"></div>
// //                         </div>
                        
// //                         <div className="text-gray-400 text-sm max-w-xs mx-auto">
// //                           Premium dining experience with 155+ gourmet dishes
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Floating Cards */}
// //                 <div className="absolute -top-6 -left-6">
// //                   <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl shadow-2xl shadow-orange-500/30 animate-float-slow">
// //                     <div className="text-2xl font-bold">30% OFF</div>
// //                     <div className="text-sm">First Order</div>
// //                   </div>
// //                 </div>
                
// //                 <div className="absolute -bottom-6 -right-6">
// //                   <div className="bg-gradient-to-br from-black to-zinc-900 text-orange-400 px-6 py-3 rounded-xl shadow-2xl border border-orange-500/30 backdrop-blur-sm animate-float">
// //                     <div className="flex items-center gap-2">
// //                       <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
// //                       <div className="font-bold">Chef&apos;s Special</div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Decorative Elements */}
// //               <div className="absolute top-1/2 -left-12 w-24 h-24 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-xl"></div>
// //               <div className="absolute bottom-1/2 -right-12 w-24 h-24 bg-gradient-to-l from-yellow-500/10 to-transparent rounded-full blur-xl"></div>
// //             </div>

// //           </div>
// //         </div>
// //       </div>

// //       {/* Premium Scroll Indicator */}
// //       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
// //         <div className="flex flex-col items-center gap-2">
// //           <div className="text-gray-400 text-sm font-light tracking-widest">SCROLL</div>
// //           <div className="w-6 h-10 border-2 border-orange-500/50 rounded-full flex justify-center">
// //             <div className="w-1 h-3 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full mt-2 animate-pulse"></div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Animated Border Bottom */}
// //       <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
// //     </section>
// //   )
// // }

// // export default Hero   








// 'use client'

// import { ArrowRight, Star, Clock, Coffee, ChefHat, Users, Award, Sparkles, Utensils, Pizza, Beef, IceCream } from 'lucide-react'
// import { useEffect, useState } from 'react'

// const Hero = () => {
//   const [loaded, setLoaded] = useState(false)

//   useEffect(() => {
//     setLoaded(true)
//   }, [])

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
//       {/* Premium Background with Particles */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0A0A] to-[#1A0F0F] z-0">
//         {/* Animated Gradient Mesh */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-600/10 to-red-600/10 rounded-full blur-3xl"></div>
//         </div>
        
//         {/* Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
//       </div>

//       {/* Floating Food Icons */}
//       <div className="absolute top-20 left-20 animate-float-slow">
//         <Pizza className="w-12 h-12 text-orange-400/30" />
//       </div>
//       <div className="absolute top-40 right-32 animate-float">
//         <Beef className="w-10 h-10 text-yellow-400/30" />
//       </div>
//       <div className="absolute bottom-40 left-32 animate-float-slow delay-1000">
//         <IceCream className="w-14 h-14 text-pink-400/20" />
//       </div>
//       <div className="absolute bottom-20 right-20 animate-float delay-500">
//         <Utensils className="w-12 h-12 text-red-400/20" />
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-2xl animate-pulse"></div>
//       <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-tl from-yellow-500/5 to-transparent rounded-full blur-2xl"></div>
//       <div className="absolute top-10 right-1/4 w-40 h-40 bg-gradient-to-r from-red-500/3 to-transparent rounded-full blur-xl"></div>

//       <div className="container mx-auto px-4 md:px-8 lg:px-12 z-10">
//         <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
//           loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//         }`}>
          
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
            
//             {/* Left Content - Premium */}
//             <div className="space-y-10">
//               {/* Premium Badge */}
//               <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-2xl border border-orange-500/20 shadow-lg shadow-orange-500/5">
//                 <Sparkles className="w-5 h-5 text-orange-400 animate-pulse" />
//                 <span className="text-orange-300 font-semibold tracking-wide">OKARA&apos;S PREMIUM DINING EXPERIENCE</span>
//               </div>

//               {/* Main Heading with Glow */}
//               <div className="space-y-6">
//                 <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
//                   <span className="relative">
//                     <span className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 blur-xl opacity-30"></span>
//                     <span className="relative bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent">
//                       Cafe
//                     </span>
//                   </span>
//                   <br />
//                   <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
//                     Janoshi
//                   </span>
//                 </h1>
                
//                 <div className="flex items-center gap-4">
//                   <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
//                   <ChefHat className="w-8 h-8 text-orange-400" />
//                   <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
//                 </div>

//                 <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light max-w-2xl">
//                   Where <span className="text-orange-400 font-semibold">traditional flavors</span> meet{' '}
//                   <span className="text-yellow-400 font-semibold">modern elegance</span>. 
//                   A culinary journey through Okara&apos;s finest.
//                 </p>
//               </div>

//               {/* Premium Stats */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
//                 {[
//                   { icon: <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />, value: '4.9/5', label: 'Rating' },
//                   { icon: <Users className="w-6 h-6 text-orange-400" />, value: '500+', label: 'Happy Customers' },
//                   { icon: <Award className="w-6 h-6 text-yellow-400" />, value: '12yrs', label: 'Experience' },
//                   { icon: <Coffee className="w-6 h-6 text-orange-400" />, value: '155+', label: 'Menu Items' },
//                 ].map((stat, index) => (
//                   <div 
//                     key={index}
//                     className="group bg-gradient-to-b from-zinc-900/40 to-black/40 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
//                   >
//                     <div className="flex flex-col items-center text-center space-y-3">
//                       <div className="p-3 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-xl">
//                         {stat.icon}
//                       </div>
//                       <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
//                         {stat.value}
//                       </div>
//                       <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Premium CTA Buttons */}
//               <div className="flex flex-wrap gap-6 pt-8">
//                 <button 
//                   onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
//                   className="group relative px-10 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 hover:scale-105 overflow-hidden"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
//                   <span className="relative flex items-center gap-3">
//                     <span>Explore Menu</span>
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
//                   </span>
//                 </button>
                
//                 <button 
//                   onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
//                   className="group px-10 py-4 bg-transparent text-orange-400 rounded-2xl font-bold text-lg border-2 border-orange-500/50 hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-500 hover:scale-105"
//                 >
//                   <span className="flex items-center gap-3">
//                     <Clock className="w-5 h-5" />
//                     <span>Book Table</span>
//                   </span>
//                 </button>
//               </div>

//               {/* Opening Hours - Premium */}
//               <div className="pt-8">
//                 <div className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-zinc-900/50 to-black/50 backdrop-blur-lg rounded-2xl border border-zinc-800">
//                   <div className="p-3 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl">
//                     <Clock className="w-6 h-6 text-orange-400" />
//                   </div>
//                   <div>
//                     <div className="text-orange-300 font-semibold">OPENING HOURS</div>
//                     <div className="text-gray-300">10:00 AM - 12:00 AM • Everyday</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Image/Visual - Premium */}
//             <div className="relative">
//               {/* Main Image Container */}
//               <div className="relative">
//                 {/* Outer Glow */}
//                 <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-red-500/10 to-yellow-500/20 rounded-3xl blur-2xl"></div>
                
//                 {/* Image Frame */}
//                 <div className="relative rounded-3xl overflow-hidden border border-orange-500/30 shadow-2xl shadow-orange-500/20">
//                   {/* Fast Food Image with Overlay */}
//                   <div 
//                     className="aspect-square bg-cover bg-center flex items-center justify-center p-12 relative"
//                     style={{ 
//                       backgroundImage: 'url(https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80)',
//                       backgroundBlendMode: 'overlay'
//                     }}
//                   >
//                     {/* Dark Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-zinc-900/60"></div>
                    
//                     {/* Food Icons Overlay */}
//                     <div className="absolute top-6 left-6 animate-float">
//                       <Pizza className="w-10 h-10 text-orange-400" />
//                     </div>
//                     <div className="absolute top-6 right-6 animate-float delay-500">
//                       <Beef className="w-10 h-10 text-yellow-400" />
//                     </div>
//                     <div className="absolute bottom-6 left-6 animate-float-slow">
//                       <IceCream className="w-10 h-10 text-pink-300" />
//                     </div>
//                     <div className="absolute bottom-6 right-6 animate-float delay-700">
//                       <Coffee className="w-10 h-10 text-amber-300" />
//                     </div>
                    
//                     {/* Content Overlay */}
//                     <div className="text-center space-y-8 relative z-10">
//                       {/* Animated Logo */}
//                       <div className="relative">
//                         <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
//                         <div className="relative w-40 h-40 mx-auto bg-gradient-to-br from-orange-500/90 to-yellow-500/90 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-orange-300/30">
//                           <span className="text-black text-5xl font-bold drop-shadow-lg">CJ</span>
//                         </div>
//                       </div>
                      
//                       <div className="space-y-4">
//                         <div className="text-4xl font-bold text-white drop-shadow-lg">Cafe Janoshi</div>
//                         <div className="text-orange-300 text-lg drop-shadow">Okara&apos;s Culinary Gem</div>
                        
//                         {/* Animated Divider */}
//                         <div className="flex items-center justify-center gap-4">
//                           <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-500"></div>
//                           <Sparkles className="w-5 h-5 text-yellow-400 animate-spin-slow" />
//                           <div className="h-px w-16 bg-gradient-to-r from-orange-500 to-transparent"></div>
//                         </div>
                        
//                         <div className="text-gray-300 text-sm max-w-xs mx-auto drop-shadow">
//                           Premium dining experience with 155+ gourmet dishes
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Cards */}
//                 <div className="absolute -top-6 -left-6">
//                   <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl shadow-2xl shadow-orange-500/30 animate-float-slow">
//                     <div className="text-2xl font-bold">30% OFF</div>
//                     <div className="text-sm">First Order</div>
//                   </div>
//                 </div>
                
//                 <div className="absolute -bottom-6 -right-6">
//                   <div className="bg-gradient-to-br from-black to-zinc-900 text-orange-400 px-6 py-3 rounded-xl shadow-2xl border border-orange-500/30 backdrop-blur-sm animate-float">
//                     <div className="flex items-center gap-2">
//                       <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                       <div className="font-bold">Chef&apos;s Special</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Decorative Food Elements */}
//               <div className="absolute top-1/2 -left-12 animate-bounce-slow">
//                 <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                   <Utensils className="w-8 h-8 text-orange-400/60" />
//                 </div>
//               </div>
//               <div className="absolute bottom-1/2 -right-12 animate-bounce delay-500">
//                 <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                   <Coffee className="w-7 h-7 text-red-400/60" />
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Premium Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="flex flex-col items-center gap-2">
//           <div className="text-gray-400 text-sm font-light tracking-widest">SCROLL</div>
//           <div className="w-6 h-10 border-2 border-orange-500/50 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full mt-2 animate-pulse"></div>
//           </div>
//         </div>
//       </div>

//       {/* Animated Border Bottom */}
//       <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
//     </section>
//   )
// }

// export default Hero 






'use client'

import { ArrowRight, Star, Users, Award, Coffee, ChefHat, MapPin, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Restaurant Background */}
      <div className="absolute inset-0 z-0">
        {/* High-quality restaurant image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80)',
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90"></div>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content - Elegant */}
            <div className="space-y-12">
              {/* Tagline */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-white/90 text-sm font-medium tracking-wide">PREMIUM RESTAURANT & CAFE</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="block text-white">
                    Cafe
                  </span>
                  <span className="block bg-gradient-to-r from-amber-400 via-orange-300 to-amber-400 bg-clip-text text-transparent">
                    Janoshi
                  </span>
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-xl">
                  Experience culinary excellence at Okara's most distinguished dining destination. 
                  Where every meal is a celebration of flavor.
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm font-medium mb-1">LOCATION</div>
                    <div className="text-white font-medium">Main Road, Okara</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm font-medium mb-1">CONTACT</div>
                    <div className="text-white font-medium">+92 300 1234567</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {[
                  { icon: <Star className="w-5 h-5 text-amber-400 fill-amber-400" />, value: '4.9', label: 'Rating' },
                  { icon: <Users className="w-5 h-5 text-amber-400" />, value: '500+', label: 'Guests' },
                  { icon: <Award className="w-5 h-5 text-amber-400" />, value: '12', label: 'Years' },
                  { icon: <Coffee className="w-5 h-5 text-amber-400" />, value: '155+', label: 'Dishes' },
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="p-2 bg-white/10 rounded-lg">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-xs font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-8">
                <button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative flex items-center gap-3">
                    <span>View Full Menu</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                
                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border border-white/20 hover:border-amber-400/50 hover:bg-white/20 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    <ChefHat className="w-5 h-5" />
                    <span>Reserve Table</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side - Feature Highlights */}
            <div className="space-y-8">
              {/* Feature Card */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl">
                    <ChefHat className="w-8 h-8 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Executive Chef</h3>
                    <p className="text-gray-400">Master Chef Muhammad Ali</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <p className="text-gray-300">15+ years international experience</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <p className="text-gray-300">Specialized in fusion cuisine</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <p className="text-gray-300">Award-winning recipes</p>
                  </div>
                </div>
              </div>

              {/* Special Offer Card */}
              <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-xl rounded-2xl border border-amber-500/20 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-amber-300 font-medium mb-1">SPECIAL OFFER</div>
                    <h3 className="text-2xl font-bold text-white">30% Off First Visit</h3>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    30%
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  Experience our premium dining with special introductory offer. 
                  Valid for dine-in only.
                </p>
                <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all">
                  Claim Offer
                </button>
              </div>

              {/* Signature Dishes */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Signature Dishes</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Truffle Pasta', price: 'Rs 2,499' },
                    { name: 'Wagyu Steak', price: 'Rs 4,999' },
                    { name: 'Seafood Platter', price: 'Rs 3,999' },
                    { name: 'Molten Cake', price: 'Rs 1,499' },
                  ].map((dish, index) => (
                    <div key={index} className="text-center group cursor-pointer">
                      <div className="h-24 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl mb-3 flex items-center justify-center group-hover:from-amber-500/20 group-hover:to-orange-500/20 transition-all">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                          <ChefHat className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="text-white font-medium">{dish.name}</div>
                      <div className="text-amber-400 text-sm">{dish.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="text-gray-400 text-xs font-light tracking-widest">EXPLORE</div>
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero