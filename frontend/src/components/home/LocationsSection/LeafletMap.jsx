import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix default icon issue with Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({ iconRetinaUrl: null, iconUrl: null, shadowUrl: null })

const makeIcon = (color, size = 10) => L.divIcon({
  className: '',
  html: `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${color};border:2px solid rgba(255,255,255,.5);box-shadow:0 0 0 3px ${color}33"></div>`,
  iconSize: [size, size], iconAnchor: [size / 2, size / 2],
})

export default function LeafletMap({ districts, activeVenue, onVenueClick }) {
  const mapRef      = useRef(null)
  const instanceRef = useRef(null)
  const markersRef  = useRef({})

  useEffect(() => {
    if (instanceRef.current) return
    instanceRef.current = L.map(mapRef.current, { zoomControl: true, scrollWheelZoom: false })
      .setView([10.1, 76.5], 8)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '© OpenStreetMap © CARTO', subdomains: 'abcd', maxZoom: 18,
    }).addTo(instanceRef.current)
  }, [])

  useEffect(() => {
    if (!instanceRef.current || !districts.length) return
    Object.values(markersRef.current).flat().forEach(m => m.remove())
    markersRef.current = {}

    districts.forEach(d => {
      markersRef.current[d.district] = (d.venues || []).map(v => {
        const m = L.marker([v.lat, v.lng], { icon: makeIcon('#d4a94a'), opacity: 0 })
          .addTo(instanceRef.current)
        m._meta = { district: d.district, venue: v.name, lat: v.lat, lng: v.lng }
        m.on('click', () => onVenueClick({ ...m._meta, type: 'venue' }))
        return m
      })
    })
  }, [districts])

  useEffect(() => {
    if (!instanceRef.current) return

    if (!activeVenue) {
      Object.values(markersRef.current).flat().forEach(m => m.setOpacity(0))
      instanceRef.current.flyTo([10.1, 76.5], 8, { duration: 1 })
      return
    }

    if (activeVenue.type === 'district') {
      Object.entries(markersRef.current).forEach(([name, markers]) => {
        markers.forEach(m => {
          m.setOpacity(name === activeVenue.district ? 1 : 0)
          m.setIcon(makeIcon('#d4a94a', 10))
        })
      })
      instanceRef.current.flyTo([activeVenue.lat, activeVenue.lng], 12, { duration: 1 })
    }

    if (activeVenue.type === 'venue') {
      const all = Object.entries(markersRef.current)
      all.forEach(([name, markers]) => {
        markers.forEach(m => {
          const isActive = m._meta.venue === activeVenue.venue && m._meta.district === activeVenue.district
          m.setOpacity(name === activeVenue.district ? 1 : 0)
          m.setIcon(makeIcon(isActive ? '#c94a2b' : '#d4a94a', isActive ? 14 : 10))
        })
      })
      instanceRef.current.flyTo([activeVenue.lat, activeVenue.lng], 15, { duration: 1.1 })
    }
  }, [activeVenue])

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
}
