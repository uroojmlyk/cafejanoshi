'use client'

import { useState } from 'react'
import { Calendar, Clock, Users, Phone, Mail, MapPin, CheckCircle, X } from 'lucide-react'

const BookTableSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    specialRequest: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedTime, setSelectedTime] = useState('')

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM'
  ]

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
          phone: '',
          email: '',
          date: '',
          time: '',
          guests: '2',
          specialRequest: ''
        })
        setSelectedTime('')
      }, 3000)
    }, 1500)
  }

  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  const getMaxDate = () => {
    const maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + 30)
    return maxDate.toISOString().split('T')[0]
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-950" id="booking">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-2xl border border-orange-500/20">
            <Calendar className="w-6 h-6 text-orange-400" />
            <span className="text-orange-300 font-semibold tracking-wide">RESERVATIONS</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Book Your
            </span> Table
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Reserve your spot at Cafe Janoshi for an unforgettable dining experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column - Booking Form */}
          <div className="relative">
            {/* Success Message */}
            {isSubmitted && (
              <div className="absolute inset-0 z-50 flex items-center justify-center">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-3xl p-12 border border-green-500/30 max-w-md mx-auto">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Booking Confirmed!</h3>
                    <p className="text-gray-300">
                      Your table has been reserved. We&apos;ll send a confirmation to your phone.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Booking Form Card */}
            <div className={`bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-orange-500/30 shadow-2xl shadow-orange-500/20 p-8 transition-all duration-300 ${isSubmitted ? 'opacity-50' : 'opacity-100'}`}>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Personal Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-gray-300 font-medium">Full Name *</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Users className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-gray-300 font-medium">Phone Number *</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Phone className="w-5 h-5" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                          placeholder="0321 0001112"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-300 font-medium">Email Address</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Booking Details */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Booking Details</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-gray-300 font-medium">Date *</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={getTodayDate()}
                          max={getMaxDate()}
                          className="w-full pl-12 pr-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-gray-300 font-medium">Guests *</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Users className="w-5 h-5" />
                        </div>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all appearance-none"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'Person' : 'People'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-gray-300 font-medium">Time *</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Clock className="w-5 h-5" />
                        </div>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all appearance-none"
                        >
                          <option value="">Select Time</option>
                          {timeSlots.map(time => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Popular Time Slots */}
                  <div className="pt-4">
                    <p className="text-gray-300 mb-3">Popular Time Slots:</p>
                    <div className="flex flex-wrap gap-3">
                      {['7:00 PM', '8:00 PM', '9:00 PM'].map(time => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, time })
                            setSelectedTime(time)
                          }}
                          className={`px-4 py-2 rounded-lg border transition-all ${selectedTime === time 
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-500' 
                            : 'bg-zinc-800/50 text-gray-300 border-zinc-700 hover:border-orange-500/50'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Special Request */}
                <div className="space-y-2">
                  <label className="text-gray-300 font-medium">Special Requests</label>
                  <textarea
                    name="specialRequest"
                    value={formData.specialRequest}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                    placeholder="Any special requirements? (Birthday, Anniversary, etc.)"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${isSubmitting ? 'animate-pulse' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </span>
                    ) : (
                      'Confirm Reservation'
                    )}
                  </button>
                  
                  <p className="text-gray-400 text-sm text-center mt-4">
                    We&apos;ll call you within 30 minutes to confirm your booking
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Info & Contact */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-orange-500/30 shadow-2xl shadow-orange-500/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">Call Us</h4>
                    <a 
                      href="tel:03210001112" 
                      className="text-2xl font-bold text-white hover:text-orange-400 transition-colors"
                    >
                      0321 0001112
                    </a>
                    <p className="text-gray-400 text-sm mt-1">Available 10 AM - 12 AM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">Visit Us</h4>
                    <p className="text-gray-300 leading-relaxed">
                      RC7X+CW4, Tehsil Rd, Waris Colony Aamir Colony, Okara
                    </p>
                    <button className="mt-3 text-orange-400 hover:text-orange-300 font-medium">
                      Get Directions →
                    </button>
                  </div>
                </div>

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
                        Last reservation at 11:30 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Book With Us */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-orange-500/30 shadow-2xl shadow-orange-500/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Book With Us?</h3>
              
              <div className="space-y-6">
                {[
                  { 
                    title: 'Priority Seating', 
                    desc: 'Guaranteed table even during peak hours',
                    icon: '✓'
                  },
                  { 
                    title: 'Special Offers', 
                    desc: '10% discount on pre-booked orders',
                    icon: '🎁'
                  },
                  { 
                    title: 'Birthday Special', 
                    desc: 'Free dessert for birthday celebrations',
                    icon: '🎂'
                  },
                  { 
                    title: 'Quick Confirmation', 
                    desc: 'Instant confirmation via SMS & call',
                    icon: '⚡'
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-orange-400 font-bold">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Walk-in Info */}
            <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl border border-orange-500/20 p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl">
                  <X className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Walk-in Available</h4>
                  <p className="text-gray-300">
                    No reservation? No problem! Walk-ins welcome based on availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/3 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-red-500/2 to-transparent rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  )
}

export default BookTableSection