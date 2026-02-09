'use client'

import { useState } from 'react'
import { Instagram, Heart, Share2, ZoomIn, Coffee, Utensils, Users, Star } from 'lucide-react'

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const categories = [
    { id: 'all', name: 'All Photos', icon: '📸', count: 24 },
    { id: 'food', name: 'Food & Drinks', icon: '🍔', count: 12 },
    { id: 'interior', name: 'Cafe Interior', icon: '🏠', count: 6 },
    { id: 'events', name: 'Events', icon: '🎉', count: 4 },
    { id: 'customers', name: 'Customers', icon: '😊', count: 8 },
  ]

  // Sample gallery images
  const galleryImages = [
    { id: 1, category: 'food', src: '/images/food-1.jpg', likes: 42, title: 'Chicken Steak Platter' },
    { id: 2, category: 'interior', src: '/images/interior-1.jpg', likes: 28, title: 'Cozy Corner' },
    { id: 3, category: 'food', src: '/images/food-2.jpg', likes: 56, title: 'BBQ Pizza' },
    { id: 4, category: 'events', src: '/images/event-1.jpg', likes: 34, title: 'Birthday Party' },
    { id: 5, category: 'customers', src: '/images/customer-1.jpg', likes: 67, title: 'Happy Family' },
    { id: 6, category: 'food', src: '/images/food-3.jpg', likes: 89, title: 'Pasta Special' },
    { id: 7, category: 'interior', src: '/images/interior-2.jpg', likes: 31, title: 'Ambient Lighting' },
    { id: 8, category: 'customers', src: '/images/customer-2.jpg', likes: 45, title: 'Friends Gathering' },
  ]

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-950" id="gallery">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-2xl border border-orange-500/20">
            <Instagram className="w-6 h-6 text-orange-400" />
            <span className="text-orange-300 font-semibold tracking-wide">VISUAL STORY</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Feast your eyes on our mouth-watering dishes, cozy ambiance, and happy moments at Cafe Janoshi
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              <span className="text-xl">{cat.icon}</span>
              <span>{cat.name}</span>
              <span className="text-sm opacity-75">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 hover:border-orange-500/50 transition-all duration-500"
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">
                    {image.category === 'food' && '🍔'}
                    {image.category === 'interior' && '🏠'}
                    {image.category === 'events' && '🎉'}
                    {image.category === 'customers' && '😊'}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                  <div className="flex items-center justify-center gap-4">
                    <span className="flex items-center gap-1 text-pink-400">
                      <Heart className="w-4 h-4" />
                      {image.likes}
                    </span>
                    <span className="text-gray-400 text-sm capitalize">{image.category}</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="w-full">
                  <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                        <Heart className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                        <Share2 className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </button>
                    </div>
                    <span className="text-orange-400 font-bold">Featured</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-orange-500/30 p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Share Your Janoshi Moments!
                </h3>
                <p className="text-gray-400 mb-6">
                  Tag <span className="text-orange-400 font-bold">@cafejanoshi</span> on Instagram 
                  to get featured in our gallery
                </p>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg border border-pink-500/20">
                    <span className="text-pink-400 font-bold">#cafejanoshi</span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
                    <span className="text-orange-400 font-bold">#janoshifood</span>
                  </div>
                </div>
              </div>
              
              <a
                href="https://www.instagram.com/cafejanoshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-pink-500/30 transition-all flex items-center gap-3 whitespace-nowrap"
              >
                <Instagram className="w-6 h-6" />
                Follow @cafejanoshi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection