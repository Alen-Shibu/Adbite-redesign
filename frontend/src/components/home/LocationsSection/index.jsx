import { useState, useEffect, useRef } from 'react'
import useLocations from '../../../hooks/useLocations'
import DistrictAccordion from './DistrictAccordion'
import LeafletMap from './LeafletMap'
import styles from './LocationsSection.module.css'

export default function LocationsSection() {
  const { locations, loading } = useLocations()
  const [activeVenue, setActiveVenue] = useState(null)
  const ref = useRef()

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { ref.current?.classList.add('visible'); obs.disconnect() }
    }, { threshold: .08 })
    if (ref.current) obs.observe(ref.current)
  }, [])

  return (
    <section id="locations" className={styles.section}>
      <div className={`reveal ${styles.head}`} ref={ref}>
        <p className={styles.label}>Where We Are</p>
        <h2 className={styles.h2}>
          ACROSS<br /><em>Kerala</em>,<br />WE'RE THERE.
        </h2>
      </div>

      <div className={styles.layout}>
        {/* LEFT — accordion */}
        <div>
          <p className={styles.intro}>
            Tap a district to see our venues inside it. Click any venue to zoom in on the map.
          </p>
          {loading
            ? <p className={styles.loading}>Loading locations…</p>
            : <DistrictAccordion
                districts={locations}
                activeVenue={activeVenue}
                onDistrictOpen={d => setActiveVenue(d ? { type: 'district', district: d.district, lat: d.lat ?? 10.1, lng: d.lng ?? 76.5 } : null)}
                onVenueSelect={setActiveVenue}
              />
          }
        </div>

        {/* RIGHT — map */}
        <div className={styles.mapWrap}>
          <LeafletMap
            districts={locations}
            activeVenue={activeVenue}
            onVenueClick={setActiveVenue}
          />
        </div>
      </div>
    </section>
  )
}
