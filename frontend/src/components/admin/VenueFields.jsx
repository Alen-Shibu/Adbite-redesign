import { useEffect, useState } from 'react'
import styles from './DistrictModal.module.css'

export default function VenueFields({ venues, onChange }) {
  const [local, setLocal] = useState(venues || [])

  useEffect(() => {
    setLocal(venues || [])
  }, [venues])

  const updateVenue = (index, key, value) => {
    const updated = local.map((venue, idx) => idx === index ? { ...venue, [key]: value } : venue)
    setLocal(updated)
    onChange(updated)
  }

  const addVenue = () => {
    const next = [...local, { name: '', lat: '', lng: '' }]
    setLocal(next)
    onChange(next)
  }

  const removeVenue = (index) => {
    const next = local.filter((_, idx) => idx !== index)
    setLocal(next)
    onChange(next)
  }

  return (
    <div className={styles.fields}>
      <div className={styles.field}>
        <label>Venues</label>
        <button type="button" className={styles.btnSave} onClick={addVenue}>Add Venue</button>
      </div>
      {local.map((venue, index) => (
        <div key={index} className={styles.field}>
          <input value={venue.name} placeholder="Venue name" onChange={e => updateVenue(index, 'name', e.target.value)} />
          <input value={venue.lat} placeholder="Latitude" onChange={e => updateVenue(index, 'lat', e.target.value)} />
          <input value={venue.lng} placeholder="Longitude" onChange={e => updateVenue(index, 'lng', e.target.value)} />
          <button type="button" className={styles.btnCancel} onClick={() => removeVenue(index)}>Remove</button>
        </div>
      ))}
    </div>
  )
}
