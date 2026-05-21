import styles from './LocationsSection.module.css'

export default function VenueList({ venues, activeVenueName, onSelect }) {
  return (
    <div className={styles.venueList}>
      {venues.map(v => (
        <div
          key={v.name}
          onClick={() => onSelect(v)}
          className={`${styles.venueItem} ${activeVenueName === v.name ? styles.venueItemActive : ''}`}
        >
          <span className={styles.venueDot} />
          <span className={styles.venueName}>{v.name}</span>
        </div>
      ))}
    </div>
  )
}
