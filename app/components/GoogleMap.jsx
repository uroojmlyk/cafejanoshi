'use client'

import { useEffect, useRef } from 'react'

const GoogleMap = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    if (!window.google || !mapRef.current) return

    const location = { lat: 30.8121, lng: 73.4515 } // Okara, Pakistan
    
    const map = new window.google.maps.Map(mapRef.current, {
      center: location,
      zoom: 16,
      mapTypeControl: false,
      streetViewControl: false,
      styles: [
        {
          featureType: "all",
          elementType: "geometry",
          stylers: [{ color: "#0f0f0f" }]
        },
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [{ color: "#ffffff" }]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#1a1a1a" }]
        }
      ]
    })

    const marker = new window.google.maps.Marker({
      position: location,
      map: map,
      title: "Cafe Janoshi",
      icon: {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f97316'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z'/%3E%3C/svg%3E",
        scaledSize: new window.google.maps.Size(40, 40)
      }
    })

    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="color: #000; padding: 15px; max-width: 250px;">
          <h3 style="margin: 0 0 10px 0; color: #f97316; font-size: 18px;">Cafe Janoshi</h3>
          <p style="margin: 0; color: #666; font-size: 14px;">
            RC7X+CW4, Tehsil Rd, Waris Colony Aamir Colony, Okara, Pakistan
          </p>
          <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">
            📞 0321 0001112
          </p>
        </div>
      `
    })

    marker.addListener("click", () => {
      infoWindow.open(map, marker)
    })
    
    infoWindow.open(map, marker)

  }, [])

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-2xl border border-orange-500/30"
    />
  )
}

export default GoogleMap