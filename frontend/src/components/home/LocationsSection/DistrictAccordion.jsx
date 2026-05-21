import { useState } from 'react'
import VenueList from './VenueList'
import styles from './LocationsSection.module.css'

export default function DistrictAccordion({ districts, activeVenue, onDistrictOpen, onVenueSelect }) {
  const [open, setOpen] = useState(null)

  const toggle = (d) => {
    const next = open === d.district ? null : d.district
    setOpen(next)
    onDistrictOpen(next ? d : null)
  }

  return (
    <div>
      {districts.map(d => {
        const isOpen = open === d.district
        return (
          <div key={d._id} className={styles.districtItem}>
            <div className={styles.districtHeader} onClick={() => toggle(d)}>
              <span className={`${styles.dot} ${isOpen ? styles.dotOpen : ''}`} />
              <span className={`${styles.districtName} ${isOpen ? styles.districtNameOpen : ''}`}>
                {d.district}
              </span>
              <span className={styles.venueCount}>{d.venues?.length ?? 0} venues</span>
              <svg
                className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            <div className={`${styles.venuePanel} ${isOpen ? styles.venuePanelOpen : ''}`}>
              <VenueList
                venues={d.venues || []}
                activeVenueName={activeVenue?.venue}
                onSelect={v => onVenueSelect({ ...v, district: d.district, type: 'venue' })}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
