

// 'use client'

// import { useState } from 'react'
// import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Instagram, Facebook, MessageSquare } from 'lucide-react'
// import GoogleMap from './GoogleMap'

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   })

//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
    
//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false)
//       setIsSubmitted(true)
      
//       // Reset form after 3 seconds
//       setTimeout(() => {
//         setIsSubmitted(false)
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           subject: '',
//           message: ''
//         })
//       }, 3000)
//     }, 1500)
//   }

//   return (
//     <section className="py-24 bg-gradient-to-b from-black to-zinc-950" id="contact">
//       <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-2xl border border-orange-500/20">
//             <MessageCircle className="w-6 h-6 text-orange-400" />
//             <span className="text-orange-300 font-semibold tracking-wide">GET IN TOUCH</span>
//           </div>
          
//           <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
//             <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
//               Contact
//             </span> Us
//           </h2>
          
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Have questions, feedback, or special requests? We&apos;d love to hear from you!
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16">
          
//           {/* Left Column - Contact Info */}
//           <div className="space-y-8">
//             {/* Contact Info Cards */}
//             <div className="grid md:grid-cols-2 gap-6">
//               {/* Phone Card */}
//               <div className="group bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-6 border border-zinc-800 hover:border-orange-500/50 transition-all duration-500 hover:scale-105">
//                 <div className="space-y-4">
//                   <div className="p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl w-fit">
//                     <Phone className="w-8 h-8 text-orange-400" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
//                     <a 
//                       href="tel:03210001112" 
//                       className="text-2xl font-bold text-white hover:text-orange-400 transition-colors block mb-2"
//                     >
//                       0321 0001112
//                     </a>
//                     <p className="text-gray-400">For reservations & inquiries</p>
//                   </div>
//                   <a 
//                     href="tel:03210001112"
//                     className="block w-full py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-400 rounded-xl font-medium hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 transition-all text-center"
//                   >
//                     Call Now
//                   </a>
//                 </div>
//               </div>

//               {/* Location Card */}
//               <div className="group bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-6 border border-zinc-800 hover:border-orange-500/50 transition-all duration-500 hover:scale-105">
//                 <div className="space-y-4">
//                   <div className="p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl w-fit">
//                     <MapPin className="w-8 h-8 text-orange-400" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
//                     <p className="text-gray-300 mb-2">
//                       RC7X+CW4, Tehsil Rd, Waris Colony Aamir Colony, Okara
//                     </p>
//                     <div className="text-sm text-gray-400 space-y-1">
//                       <p>📍 Okara, Punjab, Pakistan</p>
//                       <p>📞 0321 0001112</p>
//                       <p>⏰ Open: 10:00 AM - 1:00 AM</p>
//                     </div>
//                   </div>
//                   <a 
//                     href="https://www.google.com/maps/place/RC7X%2BCW4+Tehsil+Rd,+Waris+Colony+Aamir+Colony,+Okara,+Pakistan/@30.8121,73.4515,17z"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block w-full py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-400 rounded-xl font-medium hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 transition-all text-center"
//                   >
//                     Get Directions
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Hours Card */}
//             <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-orange-500/30">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl">
//                   <Clock className="w-8 h-8 text-orange-400" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white">Opening Hours</h3>
//               </div>
              
//               <div className="space-y-4">
//                 {[
//                   { day: 'Monday - Sunday', time: '10:00 AM - 1:00 AM' },
//                   { day: 'Kitchen Last Order', time: '12:00 AM' },
//                   { day: 'Drinks Last Order', time: '12:30 AM' },
//                 ].map((schedule, index) => (
//                   <div key={index} className="flex justify-between items-center py-3 border-b border-zinc-800 last:border-0">
//                     <span className="text-gray-300">{schedule.day}</span>
//                     <span className="text-white font-semibold">{schedule.time}</span>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="mt-8 pt-6 border-t border-zinc-800">
//                 <p className="text-orange-400 text-center">
//                   Open 7 days a week • We accept walk-ins
//                 </p>
//               </div>
//             </div>

//             {/* Social Media */}
//             <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-zinc-800">
//               <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
              
//               <div className="grid grid-cols-2 gap-4">
//                 {/* Instagram */}
//                 <a 
//                   href="https://www.instagram.com/cafejanoshi/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="group"
//                 >
//                   <div className="bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-orange-500/5 p-6 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 group-hover:scale-105">
//                     <div className="flex items-center gap-4">
//                       <div className="p-3 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-orange-500/20 rounded-xl">
//                         <Instagram className="w-6 h-6 text-pink-400" />
//                       </div>
//                       <div>
//                         <div className="font-bold text-white">Instagram</div>
//                         <div className="text-gray-400 text-sm">@cafejanoshi</div>
//                         <div className="text-pink-300 text-xs mt-1">4K+ followers</div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
                
//                 {/* Facebook */}
//                 <a 
//                   href="https://www.facebook.com/janoshiofficial/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="group"
//                 >
//                   <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
//                     <div className="flex items-center gap-4">
//                       <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl">
//                         <Facebook className="w-6 h-6 text-blue-400" />
//                       </div>
//                       <div>
//                         <div className="font-bold text-white">Facebook</div>
//                         <div className="text-gray-400 text-sm">Janoshi Official</div>
//                         <div className="text-blue-300 text-xs mt-1">70+ reviews</div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>
              
//               {/* WhatsApp */}
//               <div className="mt-6 pt-6 border-t border-zinc-800">
//                 <a 
//                   href="https://wa.me/923210001112" 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-500/20 transition-all group"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl">
//                       <MessageSquare className="w-6 h-6 text-green-400" />
//                     </div>
//                     <div className="text-left">
//                       <div className="font-bold text-white">WhatsApp Business</div>
//                       <div className="text-gray-400 text-sm">Order directly on WhatsApp</div>
//                     </div>
//                   </div>
//                   <div className="text-green-400 group-hover:translate-x-1 transition-transform">
//                     →
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Contact Form */}
//           <div className="relative">
//             {/* Success Message */}
//             {isSubmitted && (
//               <div className="absolute inset-0 z-50 flex items-center justify-center">
//                 <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-3xl p-12 border border-green-500/30 max-w-md mx-auto">
//                   <div className="text-center space-y-6">
//                     <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
//                       <Send className="w-10 h-10 text-white" />
//                     </div>
//                     <h3 className="text-3xl font-bold text-white">Message Sent!</h3>
//                     <p className="text-gray-300">
//                       We&apos;ll get back to you within 24 hours. Thank you for contacting Cafe Janoshi!
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Contact Form Card */}
//             <div className={`bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-orange-500/30 shadow-2xl shadow-orange-500/20 p-8 transition-all duration-300 ${isSubmitted ? 'opacity-50' : 'opacity-100'}`}>
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl">
//                   <Mail className="w-8 h-8 text-orange-400" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>
//                   <p className="text-gray-400">We usually respond within a few hours</p>
//                 </div>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label className="text-gray-300 font-medium">Your Name *</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
//                       placeholder="Enter your name"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-gray-300 font-medium">Phone Number *</label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
//                       placeholder="0321 0001112"
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-gray-300 font-medium">Email Address *</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
//                       placeholder="your@email.com"
//                     />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-gray-300 font-medium">Subject *</label>
//                   <select
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all appearance-none"
//                   >
//                     <option value="">Select a subject</option>
//                     <option value="reservation">Table Reservation</option>
//                     <option value="catering">Catering Inquiry</option>
//                     <option value="feedback">Feedback & Suggestions</option>
//                     <option value="partnership">Business Partnership</option>
//                     <option value="other">Other Inquiry</option>
//                   </select>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-gray-300 font-medium">Your Message *</label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="4"
//                     className="w-full px-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
//                     placeholder="How can we help you today?"
//                   />
//                 </div>

//                 <div className="pt-4">
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={`w-full py-5 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${isSubmitting ? 'animate-pulse' : ''}`}
//                   >
//                     {isSubmitting ? (
//                       <span className="flex items-center justify-center gap-3">
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         Sending...
//                       </span>
//                     ) : (
//                       <span className="flex items-center justify-center gap-3">
//                         <Send className="w-5 h-5" />
//                         Send Message
//                       </span>
//                     )}
//                   </button>
                  
//                   <p className="text-gray-400 text-sm text-center mt-4">
//                     By submitting, you agree to our privacy policy
//                   </p>
//                 </div>
//               </form>
//             </div>

//             {/* Quick Contact */}
//             <div className="mt-8 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl border border-orange-500/20 p-6">
//               <div className="text-center space-y-3">
//                 <h4 className="text-lg font-bold text-white">Need Immediate Help?</h4>
//                 <p className="text-gray-300">
//                   Call us directly for urgent matters
//                 </p>
//                 <a 
//                   href="tel:03210001112" 
//                   className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all"
//                 >
//                   <Phone className="w-5 h-5" />
//                   <span>0321 0001112</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Map Preview */}
//         <div className="mt-24">
//           <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-orange-500/30 p-6">
//             <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
//               <div>
//                 <h3 className="text-2xl font-bold text-white">📍 Our Location</h3>
//                 <p className="text-gray-400 mt-2">
//                   RC7X+CW4, Tehsil Rd, Waris Colony Aamir Colony, Okara
//                 </p>
//               </div>
//               <a 
//                 href="https://www.google.com/maps/dir//30.8121,73.4515"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-6 py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-400 rounded-xl font-medium hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 transition-all whitespace-nowrap"
//               >
//                 Get Directions
//               </a>
//             </div>
            
//             {/* Google Map */}
//             <GoogleMap />

//             {/* Map Info */}
//             <div className="mt-6 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
//               <div className="flex flex-wrap items-center justify-between gap-4">
//                 <div>
//                   <h4 className="text-white font-semibold">📍 Coordinates</h4>
//                   <p className="text-gray-400 text-sm">30.8121° N, 73.4515° E</p>
//                 </div>
//                 <div>
//                   <h4 className="text-white font-semibold">🚗 Parking</h4>
//                   <p className="text-gray-400 text-sm">Available</p>
//                 </div>
//                 <div>
//                   <h4 className="text-white font-semibold">⏰ Distance</h4>
//                   <p className="text-gray-400 text-sm">5 min from Okara Center</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactSection 



'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Instagram, Facebook, MessageSquare } from 'lucide-react'
import GoogleMap from './GoogleMap'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      }, 3000)
    }, 1500)
  }

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-black to-zinc-950" id="contact">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16 px-2">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-orange-500/20">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
            <span className="text-orange-300 text-xs sm:text-sm md:text-base font-semibold tracking-wide">
              GET IN TOUCH
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-5 lg:mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Contact
            </span> Us
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            Have questions, feedback, or special requests? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-6 md:space-y-8">
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {/* Phone Card */}
              <div className="group bg-gradient-to-br from-zinc-900 to-black rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-zinc-800 hover:border-orange-500/50 transition-all duration-500 hover:scale-105">
                <div className="space-y-3 sm:space-y-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg sm:rounded-xl w-fit">
                    <Phone className="w-5 h-5 sm:w-6 sm:w-8 h-8 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Call Us</h3>
                    <a 
                      href="tel:03210001112" 
                      className="text-xl sm:text-2xl font-bold text-white hover:text-orange-400 transition-colors block mb-1 sm:mb-2"
                    >
                      0321 0001112
                    </a>
                    <p className="text-gray-400 text-xs sm:text-sm">For reservations & inquiries</p>
                  </div>
                  <a 
                    href="tel:03210001112"
                    className="block w-full py-2 sm:py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-400 rounded-lg sm:rounded-xl font-medium hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 transition-all text-center text-sm sm:text-base"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="group bg-gradient-to-br from-zinc-900 to-black rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-zinc-800 hover:border-orange-500/50 transition-all duration-500 hover:scale-105">
                <div className="space-y-3 sm:space-y-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg sm:rounded-xl w-fit">
                    <MapPin className="w-5 h-5 sm:w-6 sm:w-8 h-8 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Visit Us</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">
                      RC7X+CW4, Tehsil Rd, Waris Colony Aamir Colony, Okara
                    </p>
                    <div className="text-xs sm:text-sm text-gray-400 space-y-0.5 sm:space-y-1">
                      <p>📍 Okara, Punjab, Pakistan</p>
                      <p>📞 0321 0001112</p>
                      <p>⏰ Open: 10:00 AM - 1:00 AM</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.google.com/maps/place/RC7X%2BCW4+Tehsil+Rd,+Waris+Colony+Aamir+Colony,+Okara,+Pakistan/@30.8121,73.4515,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2 sm:py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-400 rounded-lg sm:rounded-xl font-medium hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 transition-all text-center text-sm sm:text-base"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-orange-500/30">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg sm:rounded-xl">
                  <Clock className="w-5 h-5 sm:w-6 sm:w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Opening Hours</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  { day: 'Monday - Sunday', time: '10:00 AM - 1:00 AM' },
                  { day: 'Kitchen Last Order', time: '12:00 AM' },
                  { day: 'Drinks Last Order', time: '12:30 AM' },
                ].map((schedule, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center py-2 sm:py-3 border-b border-zinc-800 last:border-0 gap-1 sm:gap-0">
                    <span className="text-gray-300 text-sm sm:text-base">{schedule.day}</span>
                    <span className="text-white font-semibold text-sm sm:text-base">{schedule.time}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-5 sm:mt-6 md:mt-8 pt-4 sm:pt-5 md:pt-6 border-t border-zinc-800">
                <p className="text-orange-400 text-center text-sm sm:text-base">
                  Open 7 days a week • We accept walk-ins
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-zinc-800">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-5 md:mb-6">Connect With Us</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/cafejanoshi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-orange-500/5 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-orange-500/20 rounded-lg sm:rounded-xl">
                        <Instagram className="w-4 h-4 sm:w-5 h-5 sm:w-6 h-6 text-pink-400" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm sm:text-base">Instagram</div>
                        <div className="text-gray-400 text-xs sm:text-sm">@cafejanoshi</div>
                        <div className="text-pink-300 text-xs mt-0.5 sm:mt-1">4K+ followers</div>
                      </div>
                    </div>
                  </div>
                </a>
                
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/janoshiofficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl">
                        <Facebook className="w-4 h-4 sm:w-5 h-5 sm:w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm sm:text-base">Facebook</div>
                        <div className="text-gray-400 text-xs sm:text-sm">Janoshi Official</div>
                        <div className="text-blue-300 text-xs mt-0.5 sm:mt-1">70+ reviews</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              
              {/* WhatsApp */}
              <div className="mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 md:pt-6 border-t border-zinc-800">
                <a 
                  href="https://wa.me/923210001112" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-500/20 transition-all group"
                >
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg sm:rounded-xl">
                      <MessageSquare className="w-4 h-4 sm:w-5 h-5 sm:w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white text-sm sm:text-base">WhatsApp Business</div>
                      <div className="text-gray-400 text-xs sm:text-sm">Order directly on WhatsApp</div>
                    </div>
                  </div>
                  <div className="text-green-400 group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            {/* Success Message */}
            {isSubmitted && (
              <div className="absolute inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-green-500/30 max-w-md w-full mx-auto">
                  <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
                      <Send className="w-6 h-6 sm:w-7 h-7 md:w-10 md:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Message Sent!</h3>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                      We'll get back to you within 24 hours. Thank you for contacting Cafe Janoshi!
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Form Card */}
            <div className={`bg-gradient-to-br from-zinc-900 to-black rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-orange-500/30 shadow-xl sm:shadow-2xl shadow-orange-500/20 p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 ${isSubmitted ? 'opacity-50' : 'opacity-100'}`}>
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 md:mb-8">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg sm:rounded-xl">
                  <Mail className="w-5 h-5 sm:w-6 h-6 md:w-8 md:h-8 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Send Us a Message</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">We usually respond within a few hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm sm:text-base font-medium">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-zinc-800/50 border border-zinc-700 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm sm:text-base"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm sm:text-base font-medium">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-zinc-800/50 border border-zinc-700 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm sm:text-base"
                      placeholder="0321 0001112"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm sm:text-base font-medium">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-zinc-800/50 border border-zinc-700 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm sm:text-base font-medium">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-zinc-800/50 border border-zinc-700 rounded-lg sm:rounded-xl text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm sm:text-base appearance-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Table Reservation</option>
                    <option value="catering">Catering Inquiry</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm sm:text-base font-medium">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-zinc-800/50 border border-zinc-700 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none text-sm sm:text-base"
                    placeholder="How can we help you today?"
                  />
                </div>

                <div className="pt-2 sm:pt-3 md:pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 sm:py-4 md:py-5 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white font-bold text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl md:rounded-2xl hover:shadow-xl sm:hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${isSubmitting ? 'animate-pulse' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2 sm:gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-xs sm:text-sm md:text-base">Sending...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2 sm:gap-3">
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm md:text-base">Send Message</span>
                      </span>
                    )}
                  </button>
                  
                  <p className="text-gray-400 text-xs sm:text-sm text-center mt-2 sm:mt-3 md:mt-4">
                    By submitting, you agree to our privacy policy
                  </p>
                </div>
              </form>
            </div>

            {/* Quick Contact */}
            <div className="mt-5 sm:mt-6 md:mt-8 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-lg sm:rounded-xl md:rounded-2xl border border-orange-500/20 p-3 sm:p-4 md:p-6">
              <div className="text-center space-y-2 sm:space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-white">Need Immediate Help?</h4>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                  Call us directly for urgent matters
                </p>
                <a 
                  href="tel:03210001112" 
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>0321 0001112</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Preview */}
        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-orange-500/30 p-4 sm:p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 sm:mb-5 md:mb-6 gap-3 sm:gap-4">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">📍 Our Location</h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
                  RC7X+CW4, Tehsil Rd, Waris Colony Aamir Colony, Okara
                </p>
              </div>
              <a 
                href="https://www.google.com/maps/dir//30.8121,73.4515"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-400 rounded-lg sm:rounded-xl font-medium hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 transition-all whitespace-nowrap text-sm sm:text-base"
              >
                Get Directions
              </a>
            </div>
            
            {/* Google Map */}
            <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg sm:rounded-xl overflow-hidden">
              <GoogleMap />
            </div>

            {/* Map Info */}
            <div className="mt-3 sm:mt-4 md:mt-6 p-3 sm:p-4 bg-zinc-900/50 rounded-lg sm:rounded-xl border border-zinc-800">
              <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 md:gap-4">
                <div className="flex-1 min-w-[120px] sm:min-w-[140px]">
                  <h4 className="text-white font-semibold text-xs sm:text-sm md:text-base">📍 Coordinates</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">30.8121° N, 73.4515° E</p>
                </div>
                <div className="flex-1 min-w-[120px] sm:min-w-[140px]">
                  <h4 className="text-white font-semibold text-xs sm:text-sm md:text-base">🚗 Parking</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Available</p>
                </div>
                <div className="flex-1 min-w-[120px] sm:min-w-[140px]">
                  <h4 className="text-white font-semibold text-xs sm:text-sm md:text-base">⏰ Distance</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">5 min from Okara Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection