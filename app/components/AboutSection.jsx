'use client'

import { MapPin, Phone, Clock, Instagram, Facebook, Users, Award, Heart } from 'lucide-react'

const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-950 to-black" id="about">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-2xl border border-orange-500/20">
            <Heart className="w-6 h-6 text-orange-400" />
            <span className="text-orange-300 font-semibold tracking-wide">OUR STORY</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              About Cafe
            </span> Janoshi
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Where tradition meets taste, and every meal tells a story of Okara's rich culinary heritage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Our Story */}
          <div className="space-y-10">
            {/* Main Story */}
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-white">
                A Decade of <span className="text-orange-400">Culinary Excellence</span>
              </h3>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded over 12 years ago, <span className="text-orange-400 font-semibold">Cafe Janoshi</span> has been at the heart of Okara's dining scene, serving as a beloved gathering spot for food enthusiasts, families, and friends.
                </p>
                
                <p>
                  What started as a small cafe with a passion for authentic flavors has grown into Okara's premier dining destination, celebrated for its innovative menu that blends traditional recipes with contemporary culinary techniques.
                </p>
                
                <p>
                  Our philosophy is simple: use the freshest local ingredients, prepare each dish with love and attention, and create memorable dining experiences that keep our community coming back.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
              {[
                { value: '12+', label: 'Years Experience', icon: <Award className="w-5 h-5" /> },
                { value: '155+', label: 'Menu Items', icon: <Heart className="w-5 h-5" /> },
                { value: '1.7K+', label: 'Followers', icon: <Users className="w-5 h-5" /> },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-b from-zinc-900/40 to-black/40 p-6 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition-all duration-500 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-xl text-orange-400">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact & Info Card */}
          <div className="relative">
            {/* Card with Glow Effect */}
            <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-orange-500/30 shadow-2xl shadow-orange-500/20">
              
              {/* Header */}
              <div className="p-8 border-b border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center">
                    <span className="text-black text-2xl font-bold">CJ</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Cafe Janoshi</h3>
                    <p className="text-gray-400">Okara's Flavor Hub</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-8 space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">Our Location</h4>
                    <p className="text-gray-300 leading-relaxed">
                      RC7X+CW4, Tehsil Rd, Waris Colony Aamir Colony, Okara, Punjab
                    </p>
                    <button className="mt-3 text-orange-400 hover:text-orange-300 font-medium flex items-center gap-2">
                      <span>View on Map</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">Contact Number</h4>
                    <a 
                      href="tel:03210001112" 
                      className="text-2xl font-bold text-white hover:text-orange-400 transition-colors"
                    >
                      0321 0001112
                    </a>
                    <p className="text-gray-400 text-sm mt-1">Call for reservations & orders</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl">
                    <Clock className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-3">Opening Hours</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Monday - Sunday</span>
                        <span className="text-white font-semibold">10:00 AM - 1:00 AM</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Open everyday • Last order at 12:30 AM
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-6 border-t border-zinc-800">
                  <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://instagram.com/cafejanoshi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex-1"
                    >
                      <div className="bg-gradient-to-br from-zinc-900 to-black p-4 rounded-2xl border border-zinc-800 hover:border-pink-500/50 transition-all duration-300 group-hover:scale-105">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg">
                            <Instagram className="w-5 h-5 text-pink-400" />
                          </div>
                          <div>
                            <div className="font-bold text-white">Instagram</div>
                            <div className="text-gray-400 text-sm">@cafejanoshi</div>
                          </div>
                        </div>
                      </div>
                    </a>
                    
                    <a 
                      href="https://facebook.com/Janoshi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex-1"
                    >
                      <div className="bg-gradient-to-br from-zinc-900 to-black p-4 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                            <Facebook className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <div className="font-bold text-white">Facebook</div>
                            <div className="text-gray-400 text-sm">1.7K+ followers</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-gradient-to-r from-orange-500/5 to-red-500/5 border-t border-zinc-800">
                <div className="text-center">
                  <p className="text-gray-300">
                    Visit us today and experience the taste of Okara!
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tl from-yellow-500/5 to-transparent rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500/5 to-red-500/5 backdrop-blur-lg rounded-3xl p-12 border border-orange-500/20">
              <div className="text-center space-y-6">
                <Heart className="w-12 h-12 text-orange-400 mx-auto" />
                <h3 className="text-3xl font-bold text-white">
                  Our <span className="text-orange-400">Mission</span>
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To create unforgettable dining experiences by combining authentic Pakistani flavors with modern culinary artistry, 
                  while maintaining the warmth and hospitality that our community has cherished for over a decade.
                </p>
                <div className="pt-6">
                  <button 
                    onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 hover:scale-105"
                  >
                    <span>Explore Our Menu</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

// ArrowRight component add karo agar needed ho
const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)