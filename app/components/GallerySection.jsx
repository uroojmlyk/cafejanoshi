



// 'use client'

// import { useState } from 'react'
// import { 
//   Instagram, 
//   Heart, 
//   Star, 
//   Users, 
//   MapPin, 
//   Clock, 
//   Coffee,
//   ChevronRight,
//   Award,
//   ThumbsUp,
//   Utensils,
//   Music,
//   Image as ImageIcon
// } from 'lucide-react'

// const GallerySection = () => {
//   const [activeImage, setActiveImage] = useState(0)

//   // Restaurant Big Images - ACTUAL IMAGE PLACEHOLDERS
//   const restaurantImages = [
//     {
//       id: 1,
//       image: '/jan1.jpg',
//       title: 'Elegant Dining Area',
//       description: 'Experience fine dining in our beautifully decorated main hall with ambient lighting'
//     },
//     {
//       id: 2,
//       image: '/restaurant2.jpg',
//       title: 'Cozy Corner Setup',
//       description: 'Perfect spot for intimate conversations and romantic evenings'
//     },
//     {
//       id: 3,
//       image: '/restaurant3.jpg',
//       title: 'Outdoor Seating',
//       description: 'Enjoy your meals in our peaceful garden area with natural surroundings'
//     },
//     {
//       id: 4,
//       image: '/restaurant4.jpg',
//       title: 'VIP Lounge',
//       description: 'Exclusive area for special occasions and private gatherings'
//     }
//   ]

//   // Customer Food Photos
//   const customerPhotos = [
//     {
//       id: 1,
//       image: '/food1.jpg',
//       title: 'Chicken Steak Special',
//       customer: 'Ali R.',
//       rating: 5
//     },
//     {
//       id: 2,
//       image: '/customer-food2.jpg',
//       title: 'BBQ Pizza Feast',
//       customer: 'Sara K.',
//       rating: 4.5
//     },
//     {
//       id: 3,
//       image: '/customer-food3.jpg',
//       title: 'Pasta Delight',
//       customer: 'Ahmed M.',
//       rating: 5
//     },
//     {
//       id: 4,
//       image: '/customer-food4.jpg',
//       title: 'Fresh Fruit Shake',
//       customer: 'Fatima Z.',
//       rating: 4.8
//     }
//   ]

//   // Additional Restaurant Images
//   const additionalImages = [
//     {
//       id: 1,
//       image: '/restaurant5.jpg',
//       title: 'Live Music Stage',
//       description: 'Weekly live performances for entertainment'
//     },
//     {
//       id: 2,
//       image: '/restaurant6.jpg',
//       title: 'Kitchen View',
//       description: 'Watch our chefs create culinary masterpieces'
//     }
//   ]

//   // Function to get image placeholder with fallback
//   const renderImagePlaceholder = (imageUrl, alt, className = "") => {
//     return (
//       <div className="relative w-full h-full">
//         {/* Actual Image Container */}
//         <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/10 to-red-500/10 ${className}`}>
//           <div className="text-center">
//             <ImageIcon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
//             <p className="text-gray-300"> {alt}</p>
//             <p className="text-gray-500 text-sm mt-2"></p>
//           </div>
//         </div>
        
//         {/* Image Loading Indicator */}
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
//           <div className="bg-black/70 backdrop-blur-sm rounded-xl p-4">
//             <p className="text-white text-sm">Add actual image at: <code className="text-orange-300">{imageUrl}</code></p>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <section className="py-20 bg-gradient-to-b from-black to-zinc-950" id="gallery">
//       <div className="container mx-auto px-4 md:px-8">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-2xl border border-orange-500/20">
//             <Instagram className="w-6 h-6 text-orange-400" />
//             <span className="text-orange-300 font-semibold tracking-wide">RESTAURANT GALLERY</span>
//           </div>
          
//           <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
//             <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
//               Our Ambiance
//             </span>
//           </h2>
          
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
//             Step into a world where culinary excellence meets breathtaking ambiance
//           </p>
//         </div>

//         {/* Main Restaurant Images Grid - ACTUAL IMAGE PLACEHOLDERS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
//           {restaurantImages.map((img, index) => (
//             <div 
//               key={img.id}
//               className="relative group overflow-hidden rounded-3xl border border-orange-500/30 bg-gradient-to-br from-zinc-900 to-black hover:border-orange-500/50 transition-all duration-500 shadow-2xl shadow-orange-500/10"
//               onMouseEnter={() => setActiveImage(index)}
//             >
//               {/* Image Container - ACTUAL IMAGE PLACEHOLDER */}
//               <div className="aspect-[4/3] overflow-hidden">
//                 {renderImagePlaceholder(img.image, img.title, "p-8")}
//               </div>

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
//                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                   <div className="flex items-center gap-2 mb-3">
//                     <MapPin className="w-5 h-5 text-orange-400" />
//                     <span className="text-white font-medium">Cafe Janoshi, Okara</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-2">{img.title}</h3>
//                   <p className="text-gray-300 mb-4">{img.description}</p>
//                   <div className="flex items-center gap-3">
//                     <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all">
//                       View Details
//                     </button>
//                     <button className="px-4 py-2 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
//                       <Heart className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Image Title Badge */}
//               <div className="absolute top-4 left-4 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-xl border border-orange-500/30">
//                 <h3 className="text-white font-bold text-lg">{img.title}</h3>
//               </div>

//               {/* Image Number Indicator */}
//               <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full">
//                 {index + 1}/4
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Cafe Janoshi About Section */}
//         <div className="mb-20">
//           <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-orange-500/30 p-8 md:p-12 shadow-2xl">
//             <div className="flex flex-col md:flex-row items-center gap-8">
//               {/* Content */}
//               <div className="md:w-2/3">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full mb-6">
//                   <Award className="w-5 h-5 text-orange-400" />
//                   <span className="text-orange-300 font-bold">TOP RATED RESTAURANT</span>
//                 </div>
                
//                 <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                   Cafe Janoshi - <span className="text-orange-400">Okara's #1 Dining Destination</span>
//                 </h3>
                
//                 <div className="space-y-4 text-gray-300 mb-8">
//                   <p className="text-lg leading-relaxed">
//                     Nestled in the heart of Okara, Cafe Janoshi has redefined the dining experience 
//                     with its perfect blend of exquisite cuisine, elegant ambiance, and unparalleled 
//                     service. Our restaurant features multiple themed areas designed to cater to 
//                     every occasion - from romantic dinners to family gatherings and corporate events.
//                   </p>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//                     <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-xl border border-zinc-800">
//                       <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg">
//                         <Star className="w-6 h-6 text-orange-400" />
//                       </div>
//                       <div>
//                         <div className="text-white font-bold text-xl">4.9/5</div>
//                         <div className="text-gray-400 text-sm">500+ Customer Reviews</div>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-xl border border-zinc-800">
//                       <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg">
//                         <Users className="w-6 h-6 text-orange-400" />
//                       </div>
//                       <div>
//                         <div className="text-white font-bold text-xl">10,000+</div>
//                         <div className="text-gray-400 text-sm">Happy Customers</div>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-xl border border-zinc-800">
//                       <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg">
//                         <Clock className="w-6 h-6 text-orange-400" />
//                       </div>
//                       <div>
//                         <div className="text-white font-bold text-xl">3 Years</div>
//                         <div className="text-gray-400 text-sm">Culinary Excellence</div>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-xl border border-zinc-800">
//                       <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg">
//                         <ThumbsUp className="w-6 h-6 text-orange-400" />
//                       </div>
//                       <div>
//                         <div className="text-white font-bold text-xl">Award Winning</div>
//                         <div className="text-gray-400 text-sm">Best Cafe 2023</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <a 
//                     href="#contact"
//                     className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-orange-500/30 transition-all"
//                   >
//                     Book Your Table
//                     <ChevronRight className="w-5 h-5" />
//                   </a>
//                   <a 
//                     href="#menu"
//                     className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-zinc-800 to-zinc-900 text-gray-300 rounded-xl font-medium hover:bg-gradient-to-r hover:from-zinc-700 hover:to-zinc-800 transition-all border border-zinc-800"
//                   >
//                     View Full Menu
//                   </a>
//                 </div>
//               </div>
              
//               {/* Tea Buffet Menu Card */}
//               <div className="md:w-1/3">
//                 <div className="bg-gradient-to-br from-amber-900 to-amber-950 rounded-2xl border border-amber-600/30 p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300 shadow-2xl shadow-amber-900/30">
//                   <div className="text-center mb-6">
//                     <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
//                       <Coffee className="w-10 h-10 text-amber-900" />
//                     </div>
//                     <h4 className="text-2xl font-bold text-amber-100">Evening Tea Buffet</h4>
//                     <p className="text-amber-300 text-sm">Special Package • 6 PM - 10 PM</p>
//                   </div>
                  
//                   <div className="space-y-3 mb-6">
//                     <div className="flex justify-between items-center p-3 bg-amber-900/30 rounded-lg">
//                       <span className="text-amber-200">Unlimited Tea & Coffee</span>
//                       <span className="text-amber-400 font-bold">✓</span>
//                     </div>
//                     <div className="flex justify-between items-center p-3 bg-amber-900/30 rounded-lg">
//                       <span className="text-amber-200">15+ Snack Varieties</span>
//                       <span className="text-amber-400 font-bold">✓</span>
//                     </div>
//                     <div className="flex justify-between items-center p-3 bg-amber-900/30 rounded-lg">
//                       <span className="text-amber-200">Live Counter Service</span>
//                       <span className="text-amber-400 font-bold">✓</span>
//                     </div>
//                     <div className="flex justify-between items-center p-3 bg-amber-900/30 rounded-lg">
//                       <span className="text-amber-200">2 Hours Dining</span>
//                       <span className="text-amber-400 font-bold">✓</span>
//                     </div>
//                   </div>
                  
//                   <div className="text-center pt-4 border-t border-amber-800/30">
//                     <div className="flex items-center justify-center gap-2 mb-2">
//                       <span className="text-amber-400 text-sm line-through">Rs 1,999</span>
//                       <span className="text-3xl font-bold text-amber-300">Rs 1,499</span>
//                     </div>
//                     <div className="text-amber-400 text-sm mb-4">Per Person • 25% OFF</div>
//                     <button className="w-full py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-amber-50 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all">
//                       Book Tea Buffet
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Customer Food Photos Section */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h3 className="text-4xl font-bold text-white mb-4">
//               <span className="text-orange-400">Customer</span> Experiences
//             </h3>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Real moments captured by our guests - showcasing their memorable dining experiences
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {customerPhotos.map((photo) => (
//               <div 
//                 key={photo.id}
//                 className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black hover:border-orange-500/40 transition-all duration-300 shadow-lg"
//               >
//                 <div className="aspect-square overflow-hidden">
//                   {renderImagePlaceholder(photo.image, photo.title, "p-6")}
//                 </div>
                
//                 <div className="p-4 bg-gradient-to-t from-black to-transparent">
//                   <div className="flex items-center justify-between mb-2">
//                     <h4 className="text-white font-bold">{photo.title}</h4>
//                     <div className="flex items-center gap-1">
//                       <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                       <span className="text-white text-sm font-bold">{photo.rating}</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <Users className="w-4 h-4 text-gray-400" />
//                       <span className="text-gray-400 text-sm">{photo.customer}</span>
//                     </div>
//                     <Heart className="w-5 h-5 text-pink-400 hover:text-pink-300 transition-colors cursor-pointer" />
//                   </div>
//                 </div>
                
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
//                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                     <div className="flex items-center justify-between mb-3">
//                       <h4 className="text-white font-bold text-lg">{photo.title}</h4>
//                       <div className="px-2 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded text-xs text-orange-300">
//                         Verified Customer
//                       </div>
//                     </div>
//                     <p className="text-gray-300 text-sm mb-3">"Amazing food experience at Cafe Janoshi!"</p>
//                     <div className="flex items-center justify-between">
//                       <span className="text-gray-400 text-sm">Shared by {photo.customer}</span>
//                       <button className="text-orange-400 text-sm hover:text-orange-300 transition-colors">
//                         View Full Review →
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="text-center mt-8">
//             <a 
//               href="https://www.instagram.com/cafejanoshi/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-pink-500/30 transition-all"
//             >
//               <Instagram className="w-5 h-5" />
//               Share Your Janoshi Moment
//             </a>
//           </div>
//         </div>

//         {/* Additional Restaurant Images */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
//           {additionalImages.map((img) => (
//             <div 
//               key={img.id}
//               className="relative group overflow-hidden rounded-3xl border border-orange-500/30 bg-gradient-to-br from-zinc-900 to-black shadow-2xl"
//             >
//               <div className="aspect-[16/9] overflow-hidden">
//                 {renderImagePlaceholder(img.image, img.title, "p-8")}
//               </div>
              
//               {/* Content Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end p-8">
//                 <div>
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl backdrop-blur-sm">
//                       {img.id === 1 ? (
//                         <Music className="w-6 h-6 text-orange-400" />
//                       ) : (
//                         <Utensils className="w-6 h-6 text-orange-400" />
//                       )}
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-bold text-white">{img.title}</h3>
//                       <p className="text-gray-300">{img.description}</p>
//                     </div>
//                   </div>
//                   <button className="mt-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all">
//                     Explore More
//                   </button>
//                 </div>
//               </div>
              
//               {/* Image Label */}
//               <div className="absolute top-4 left-4 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-xl border border-orange-500/30">
//                 <span className="text-white font-bold">{img.id === 1 ? 'Live Entertainment' : 'Kitchen Tour'}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Final CTA */}
//         <div className="text-center">
//           <div className="inline-block bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-orange-500/30 p-12 max-w-3xl shadow-2xl">
//             <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mb-6">
//               <Star className="w-12 h-12 text-orange-400" />
//             </div>
            
//             <h3 className="text-4xl font-bold text-white mb-6">
//               Ready to Experience <span className="text-orange-400">Okara's Finest?</span>
//             </h3>
            
//             <p className="text-gray-400 mb-8 text-lg leading-relaxed">
//               Join thousands of satisfied customers who have made Cafe Janoshi their favorite dining destination. 
//               From romantic dinners to family gatherings, we create memories that last a lifetime.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a 
//                 href="#contact"
//                 className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-orange-500/30 transition-all text-lg"
//               >
//                 📞 Book Your Table Now
//               </a>
//               <a 
//                 href="tel:03210001112"
//                 className="px-8 py-3 bg-gradient-to-r from-zinc-800 to-zinc-900 text-gray-300 rounded-xl font-medium hover:bg-gradient-to-r hover:from-zinc-700 hover:to-zinc-800 transition-all border border-zinc-800 text-lg"
//               >
//                 ☎️ Call: 0321 0001112
//               </a>
//             </div>
            
//             <div className="mt-8 pt-8 border-t border-zinc-800">
//               <p className="text-gray-500 text-sm">
//                 Open Daily: 10:00 AM - 1:00 AM • RC7X+CW4, Tehsil Rd, Waris Colony Aamir Colony, Okara
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default GallerySection 






'use client'

import { useState } from 'react'
import { 
  Instagram, 
  Heart, 
  Star, 
  Users, 
  MapPin, 
  Clock, 
  Coffee,
  ChevronRight,
  Award,
  ThumbsUp,
  Utensils,
  Music
} from 'lucide-react'

const GallerySection = () => {
  const [activeImage, setActiveImage] = useState(0)

  // Restaurant Big Images - ACTUAL IMAGES
  const restaurantImages = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200',
      title: 'Elegant Dining Area',
      description: 'Experience fine dining in our beautifully decorated main hall with ambient lighting'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200',
      title: 'Cozy Corner Setup',
      description: 'Perfect spot for intimate conversations and romantic evenings'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200',
      title: 'Outdoor Seating',
      description: 'Enjoy your meals in our peaceful garden area with natural surroundings'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200',
      title: 'VIP Lounge',
      description: 'Exclusive area for special occasions and private gatherings'
    }
  ]

  // Customer Food Photos
  const customerPhotos = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      title: 'Chicken Steak Special',
      customer: 'Ali R.',
      rating: 5
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800',
      title: 'BBQ Pizza Feast',
      customer: 'Sara K.',
      rating: 4.5
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d9d6?auto=format&fit=crop&w=800',
      title: 'Pasta Delight',
      customer: 'Ahmed M.',
      rating: 5
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      title: 'Fresh Fruit Shake',
      customer: 'Fatima Z.',
      rating: 4.8
    }
  ]

  // Additional Restaurant Images
  const additionalImages = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200',
      title: 'Live Music Stage',
      description: 'Weekly live performances for entertainment'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200',
      title: 'Kitchen View',
      description: 'Watch our chefs create culinary masterpieces'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-950" id="gallery">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-2xl border border-orange-500/20">
            <Instagram className="w-6 h-6 text-orange-400" />
            <span className="text-orange-300 font-semibold tracking-wide">RESTAURANT GALLERY</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Our Ambiance
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Step into a world where culinary excellence meets breathtaking ambiance
          </p>
        </div>

        {/* Main Restaurant Images Grid - ACTUAL IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {restaurantImages.map((img, index) => (
            <div 
              key={img.id}
              className="relative group overflow-hidden rounded-3xl border border-orange-500/30 bg-gradient-to-br from-zinc-900 to-black hover:border-orange-500/50 transition-all duration-500 shadow-2xl shadow-orange-500/10"
              onMouseEnter={() => setActiveImage(index)}
            >
              {/* Actual Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={img.image} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-orange-400" />
                    <span className="text-white font-medium">Cafe Janoshi, Okara</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{img.title}</h3>
                  <p className="text-gray-300 mb-4">{img.description}</p>
                  <div className="flex items-center gap-3">
                    <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                      View Details
                    </button>
                    <button className="px-4 py-2 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Title Badge */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-xl border border-orange-500/30">
                <h3 className="text-white font-bold text-lg">{img.title}</h3>
              </div>

              {/* Image Number Indicator */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full">
                {index + 1}/4
              </div>
            </div>
          ))}
        </div>

        {/* Cafe Janoshi About Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-orange-500/30 p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Content */}
              <div className="md:w-2/3">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full mb-6">
                  <Award className="w-5 h-5 text-orange-400" />
                  <span className="text-orange-300 font-bold">TOP RATED RESTAURANT</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Cafe Janoshi - <span className="text-orange-400">Okara's #1 Dining Destination</span>
                </h3>
                
                <div className="space-y-4 text-gray-300 mb-8">
                  <p className="text-lg leading-relaxed">
                    Nestled in the heart of Okara, Cafe Janoshi has redefined the dining experience 
                    with its perfect blend of exquisite cuisine, elegant ambiance, and unparalleled 
                    service. Our restaurant features multiple themed areas designed to cater to 
                    every occasion - from romantic dinners to family gatherings and corporate events.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-xl border border-zinc-800">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg">
                        <Star className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl">4.9/5</div>
                        <div className="text-gray-400 text-sm">500+ Customer Reviews</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-xl border border-zinc-800">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg">
                        <Users className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl">10,000+</div>
                        <div className="text-gray-400 text-sm">Happy Customers</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-xl border border-zinc-800">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg">
                        <Clock className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl">3 Years</div>
                        <div className="text-gray-400 text-sm">Culinary Excellence</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-xl border border-zinc-800">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg">
                        <ThumbsUp className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl">Award Winning</div>
                        <div className="text-gray-400 text-sm">Best Cafe 2023</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-orange-500/30 transition-all"
                  >
                    Book Your Table
                    <ChevronRight className="w-5 h-5" />
                  </a>
                  <a 
                    href="#menu"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-zinc-800 to-zinc-900 text-gray-300 rounded-xl font-medium hover:bg-gradient-to-r hover:from-zinc-700 hover:to-zinc-800 transition-all border border-zinc-800"
                  >
                    View Full Menu
                  </a>
                </div>
              </div>
              
              {/* Tea Buffet Menu Card */}
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-amber-900 to-amber-950 rounded-2xl border border-amber-600/30 p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300 shadow-2xl shadow-amber-900/30">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <Coffee className="w-10 h-10 text-amber-900" />
                    </div>
                    <h4 className="text-2xl font-bold text-amber-100">Evening Tea Buffet</h4>
                    <p className="text-amber-300 text-sm">Special Package • 6 PM - 10 PM</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center p-3 bg-amber-900/30 rounded-lg">
                      <span className="text-amber-200">Unlimited Tea & Coffee</span>
                      <span className="text-amber-400 font-bold">✓</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-amber-900/30 rounded-lg">
                      <span className="text-amber-200">15+ Snack Varieties</span>
                      <span className="text-amber-400 font-bold">✓</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-amber-900/30 rounded-lg">
                      <span className="text-amber-200">Live Counter Service</span>
                      <span className="text-amber-400 font-bold">✓</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-amber-900/30 rounded-lg">
                      <span className="text-amber-200">2 Hours Dining</span>
                      <span className="text-amber-400 font-bold">✓</span>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4 border-t border-amber-800/30">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-amber-400 text-sm line-through">Rs 1,999</span>
                      <span className="text-3xl font-bold text-amber-300">Rs 1,499</span>
                    </div>
                    <div className="text-amber-400 text-sm mb-4">Per Person • 25% OFF</div>
                    <button className="w-full py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-amber-50 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all">
                      Book Tea Buffet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Food Photos Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">
              <span className="text-orange-400">Customer</span> Experiences
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real moments captured by our guests - showcasing their memorable dining experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerPhotos.map((photo) => (
              <div 
                key={photo.id}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black hover:border-orange-500/40 transition-all duration-300 shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-4 bg-gradient-to-t from-black to-transparent">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-bold">{photo.title}</h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-bold">{photo.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{photo.customer}</span>
                    </div>
                    <Heart className="w-5 h-5 text-pink-400 hover:text-pink-300 transition-colors cursor-pointer" />
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-bold text-lg">{photo.title}</h4>
                      <div className="px-2 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded text-xs text-orange-300">
                        Verified Customer
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">"Amazing food experience at Cafe Janoshi!"</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Shared by {photo.customer}</span>
                      <button className="text-orange-400 text-sm hover:text-orange-300 transition-colors">
                        View Full Review →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://www.instagram.com/cafejanoshi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-pink-500/30 transition-all"
            >
              <Instagram className="w-5 h-5" />
              Share Your Janoshi Moment
            </a>
          </div>
        </div>

        {/* Additional Restaurant Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {additionalImages.map((img) => (
            <div 
              key={img.id}
              className="relative group overflow-hidden rounded-3xl border border-orange-500/30 bg-gradient-to-br from-zinc-900 to-black shadow-2xl"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={img.image} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end p-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl backdrop-blur-sm">
                      {img.id === 1 ? (
                        <Music className="w-6 h-6 text-orange-400" />
                      ) : (
                        <Utensils className="w-6 h-6 text-orange-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{img.title}</h3>
                      <p className="text-gray-300">{img.description}</p>
                    </div>
                  </div>
                  <button className="mt-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                    Explore More
                  </button>
                </div>
              </div>
              
              {/* Image Label */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-xl border border-orange-500/30">
                <span className="text-white font-bold">{img.id === 1 ? 'Live Entertainment' : 'Kitchen Tour'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-orange-500/30 p-12 max-w-3xl shadow-2xl">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mb-6">
              <Star className="w-12 h-12 text-orange-400" />
            </div>
            
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Experience <span className="text-orange-400">Okara's Finest?</span>
            </h3>
            
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Join thousands of satisfied customers who have made Cafe Janoshi their favorite dining destination. 
              From romantic dinners to family gatherings, we create memories that last a lifetime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-orange-500/30 transition-all text-lg"
              >
                📞 Book Your Table Now
              </a>
              <a 
                href="tel:03210001112"
                className="px-8 py-3 bg-gradient-to-r from-zinc-800 to-zinc-900 text-gray-300 rounded-xl font-medium hover:bg-gradient-to-r hover:from-zinc-700 hover:to-zinc-800 transition-all border border-zinc-800 text-lg"
              >
                ☎️ Call: 0321 0001112
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-zinc-800">
              <p className="text-gray-500 text-sm">
                Open Daily: 10:00 AM - 1:00 AM • RC7X+CW4, Tehsil Rd, Waris Colony Aamir Colony, Okara
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection