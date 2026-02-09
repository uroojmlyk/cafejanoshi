



// 'use client'

// const GoogleMap = () => {
//   return (
//     <div className="w-full h-[400px] rounded-2xl border border-orange-500/30 overflow-hidden">
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2586902848423!2d73.1084!3d31.9784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392248a5e4b8b0c1%3A0x85e6c41acd0e7b5d!2sOkara%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         allowFullScreen
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         title="Cafe Janoshi Location Map"
//         className="rounded-2xl"
//       />
//     </div>
//   )
// }

// export default GoogleMap  






'use client'

import { MapPin } from 'lucide-react'

const GoogleMap = () => {
  return (
    <div className="relative w-full h-[400px] rounded-2xl border border-orange-500/30 overflow-hidden bg-gradient-to-br from-zinc-900 to-black">
      {/* Google Maps Iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2586902848423!2d73.1084!3d31.9784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392248a5e4b8b0c1%3A0x85e6c41acd0e7b5d!2sOkara%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Cafe Janoshi Location"
        className="rounded-2xl"
      />
      
      {/* Custom Marker */}
      <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-orange-500/30 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg">
            <MapPin className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">Cafe Janoshi</h4>
            <p className="text-gray-300 text-xs">Okara, Punjab</p>
          </div>
        </div>
      </div>
      
      {/* Get Directions Button */}
      <div className="absolute bottom-4 right-4">
        <a
          href="https://www.google.com/maps/dir//30.8121,73.4515"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all"
        >
          <MapPin className="w-4 h-4" />
          Get Directions
        </a>
      </div>
    </div>
  )
}

export default GoogleMap