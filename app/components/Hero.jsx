



// 'use client'

// import { ArrowRight, Star, Users, Award, Coffee, ChefHat, MapPin, Phone } from 'lucide-react'
// import { useEffect, useState } from 'react'

// const Hero = () => {
//   const [loaded, setLoaded] = useState(false)

//   useEffect(() => {
//     setLoaded(true)
//   }, [])

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Premium Restaurant Background */}
//       <div className="absolute inset-0 z-0">
//         {/* High-quality restaurant image */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80)',
//           }}
//         >
//           {/* Dark overlay for text readability */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90"></div>
//           {/* Subtle gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 md:px-8 lg:px-12 z-10">
//         <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
//           loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//         }`}>
          
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
            
//             {/* Left Content - Elegant */}
//             <div className="space-y-12">
//               {/* Tagline */}
//               <div className="space-y-6">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
//                   <span className="text-white/90 text-sm font-medium tracking-wide">PREMIUM RESTAURANT & CAFE</span>
//                 </div>

//                 {/* Main Heading */}
//                 <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
//                   <span className="block text-white">
//                     Cafe
//                   </span>
//                   <span className="block bg-gradient-to-r from-amber-400 via-orange-300 to-amber-400 bg-clip-text text-transparent">
//                     Janoshi
//                   </span>
//                 </h1>

//                 {/* Subheading */}
//                 <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-xl">
//                   Experience culinary excellence at Okara's most distinguished dining destination. 
//                   Where every meal is a celebration of flavor.
//                 </p>
//               </div>

//               {/* Contact Info */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
//                     <MapPin className="w-6 h-6 text-amber-400" />
//                   </div>
//                   <div>
//                     <div className="text-gray-400 text-sm font-medium mb-1">LOCATION</div>
//                     <div className="text-white font-medium">Main Road, Okara</div>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
//                     <Phone className="w-6 h-6 text-amber-400" />
//                   </div>
//                   <div>
//                     <div className="text-gray-400 text-sm font-medium mb-1">CONTACT</div>
//                     <div className="text-white font-medium">+92 300 1234567</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
//                 {[
//                   { icon: <Star className="w-5 h-5 text-amber-400 fill-amber-400" />, value: '4.9', label: 'Rating' },
//                   { icon: <Users className="w-5 h-5 text-amber-400" />, value: '500+', label: 'Guests' },
//                   { icon: <Award className="w-5 h-5 text-amber-400" />, value: '12', label: 'Years' },
//                   { icon: <Coffee className="w-5 h-5 text-amber-400" />, value: '155+', label: 'Dishes' },
//                 ].map((stat, index) => (
//                   <div 
//                     key={index}
//                     className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
//                   >
//                     <div className="flex flex-col items-center text-center space-y-2">
//                       <div className="p-2 bg-white/10 rounded-lg">
//                         {stat.icon}
//                       </div>
//                       <div className="text-2xl font-bold text-white">
//                         {stat.value}
//                       </div>
//                       <div className="text-gray-400 text-xs font-medium">{stat.label}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-wrap gap-4 pt-8">
//                 <button 
//                   onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
//                   className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02]"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
//                   <span className="relative flex items-center gap-3">
//                     <span>View Full Menu</span>
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
//                   </span>
//                 </button>
                
//                 <button 
//                   onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
//                   className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border border-white/20 hover:border-amber-400/50 hover:bg-white/20 transition-all duration-300"
//                 >
//                   <span className="flex items-center gap-3">
//                     <ChefHat className="w-5 h-5" />
//                     <span>Reserve Table</span>
//                   </span>
//                 </button>
//               </div>
//             </div>

//             {/* Right Side - Feature Highlights */}
//             <div className="space-y-8">
//               {/* Feature Card */}
//               <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="p-3 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl">
//                     <ChefHat className="w-8 h-8 text-amber-400" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-white">Executive Chef</h3>
//                     <p className="text-gray-400">Master Chef Muhammad Ali</p>
//                   </div>
//                 </div>
                
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
//                     <p className="text-gray-300">15+ years international experience</p>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
//                     <p className="text-gray-300">Specialized in fusion cuisine</p>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
//                     <p className="text-gray-300">Award-winning recipes</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Special Offer Card */}
//               <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-xl rounded-2xl border border-amber-500/20 p-8">
//                 <div className="flex items-center justify-between mb-6">
//                   <div>
//                     <div className="text-sm text-amber-300 font-medium mb-1">SPECIAL OFFER</div>
//                     <h3 className="text-2xl font-bold text-white">30% Off First Visit</h3>
//                   </div>
//                   <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
//                     30%
//                   </div>
//                 </div>
//                 <p className="text-gray-300 mb-6">
//                   Experience our premium dining with special introductory offer. 
//                   Valid for dine-in only.
//                 </p>
//                 <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all">
//                   Claim Offer
//                 </button>
//               </div>

//               {/* Signature Dishes */}
//               <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
//                 <h3 className="text-2xl font-bold text-white mb-6">Signature Dishes</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {[
//                     { name: 'Truffle Pasta', price: 'Rs 2,499' },
//                     { name: 'Wagyu Steak', price: 'Rs 4,999' },
//                     { name: 'Seafood Platter', price: 'Rs 3,999' },
//                     { name: 'Molten Cake', price: 'Rs 1,499' },
//                   ].map((dish, index) => (
//                     <div key={index} className="text-center group cursor-pointer">
//                       <div className="h-24 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl mb-3 flex items-center justify-center group-hover:from-amber-500/20 group-hover:to-orange-500/20 transition-all">
//                         <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
//                           <ChefHat className="w-5 h-5 text-white" />
//                         </div>
//                       </div>
//                       <div className="text-white font-medium">{dish.name}</div>
//                       <div className="text-amber-400 text-sm">{dish.price}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <div className="flex flex-col items-center gap-2">
//           <div className="text-gray-400 text-xs font-light tracking-widest">EXPLORE</div>
//           <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full mt-2 animate-pulse"></div>
//           </div>
//         </div>
//       </div>
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Content - Elegant */}
            <div className="space-y-8 lg:space-y-12 px-4 sm:px-0">
              {/* Tagline */}
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">PREMIUM RESTAURANT & CAFE</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                  <span className="block text-white">
                    Cafe
                  </span>
                  <span className="block bg-gradient-to-r from-amber-400 via-orange-300 to-amber-400 bg-clip-text text-transparent">
                    Janoshi
                  </span>
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light max-w-xl">
                  Experience culinary excellence at Okara's most distinguished dining destination. 
                  Where every meal is a celebration of flavor.
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs sm:text-sm font-medium mb-1">LOCATION</div>
                    <div className="text-white font-medium text-sm sm:text-base">Main Road, Okara</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs sm:text-sm font-medium mb-1">CONTACT</div>
                    <div className="text-white font-medium text-sm sm:text-base">+92 300 1234567</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 sm:pt-4">
                {[
                  { icon: <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400" />, value: '4.9', label: 'Rating' },
                  { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />, value: '500+', label: 'Guests' },
                  { icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />, value: '12', label: 'Years' },
                  { icon: <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />, value: '155+', label: 'Dishes' },
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/10"
                  >
                    <div className="flex flex-col items-center text-center space-y-1.5 sm:space-y-2">
                      <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg">
                        {stat.icon}
                      </div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-xs font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-6 sm:pt-8">
                <button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                    <span>View Full Menu</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                
                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-sm sm:text-base lg:text-lg border border-white/20 hover:border-amber-400/50 hover:bg-white/20 transition-all duration-300"
                >
                  <span className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                    <ChefHat className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Reserve Table</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side - Feature Highlights */}
            <div className="space-y-6 lg:space-y-8 px-4 sm:px-0 mt-8 lg:mt-0">
              {/* Feature Card */}
              <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-white/10 p-6 lg:p-8">
                <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <div className="p-2 lg:p-3 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg lg:rounded-xl flex-shrink-0">
                    <ChefHat className="w-6 h-6 lg:w-8 lg:h-8 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white">Executive Chef</h3>
                    <p className="text-gray-400 text-sm lg:text-base">Master Chef Muhammad Ali</p>
                  </div>
                </div>
                
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm lg:text-base">15+ years international experience</p>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm lg:text-base">Specialized in fusion cuisine</p>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm lg:text-base">Award-winning recipes</p>
                  </div>
                </div>
              </div>

              {/* Special Offer Card */}
              <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-amber-500/20 p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <div>
                    <div className="text-xs lg:text-sm text-amber-300 font-medium mb-1">SPECIAL OFFER</div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white">30% Off First Visit</h3>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    30%
                  </div>
                </div>
                <p className="text-gray-300 text-sm lg:text-base mb-4 lg:mb-6">
                  Experience our premium dining with special introductory offer. 
                  Valid for dine-in only.
                </p>
                <button className="w-full py-2.5 lg:py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold text-sm lg:text-base hover:shadow-lg hover:shadow-amber-500/30 transition-all">
                  Claim Offer
                </button>
              </div>

              {/* Signature Dishes */}
              <div className="bg-white/5 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-white/10 p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">Signature Dishes</h3>
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  {[
                    { name: 'Truffle Pasta', price: 'Rs 2,499' },
                    { name: 'Wagyu Steak', price: 'Rs 4,999' },
                    { name: 'Seafood Platter', price: 'Rs 3,999' },
                    { name: 'Molten Cake', price: 'Rs 1,499' },
                  ].map((dish, index) => (
                    <div key={index} className="text-center group cursor-pointer">
                      <div className="h-20 lg:h-24 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-lg lg:rounded-xl mb-2 lg:mb-3 flex items-center justify-center group-hover:from-amber-500/20 group-hover:to-orange-500/20 transition-all">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                          <ChefHat className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                        </div>
                      </div>
                      <div className="text-white font-medium text-sm lg:text-base">{dish.name}</div>
                      <div className="text-amber-400 text-xs lg:text-sm">{dish.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className="text-gray-400 text-xs font-light tracking-widest">EXPLORE</div>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero