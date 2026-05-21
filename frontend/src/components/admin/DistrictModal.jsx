import { useState, useEffect } from 'react'
import VenueFields from './VenueFields'
import styles from './DistrictModal.module.css'

const EMPTY = { district: '', description: '', order: 0, venues: [] }

export default function DistrictModal({ mode, initial, onSave, onClose }) {
  const [form, setForm] = useState(EMPTY)
  useEffect(() => setForm(initial ? { ...initial, venues: initial.venues || [] } : EMPTY), [initial])

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>{mode === 'create' ? 'Add District' : 'Edit District'}</h2>
          <button className={styles.close} onClick={onClose}>×</button>
        </div>

        <div className={styles.fields}>
          <div className={styles.field}>
            <label>District Name</label>
            <input value={form.district} onChange={e => set('district', e.target.value)} placeholder="e.g. Kottayam" required />
          </div>
          <div className={styles.field}>
            <label>Description</label>
            <input value={form.description} onChange={e => set('description', e.target.value)} placeholder="Short subtitle" />
          </div>
          <div className={styles.field}>
            <label>Sort Order</label>
            <input type="number" value={form.order} onChange={e => set('order', Number(e.target.value))} />
          </div>
          <VenueFields venues={form.venues} onChange={v => set('venues', v)} />
        </div>

        <div className={styles.footer}>
          <button className={styles.btnCancel} onClick={onClose}>Cancel</button>
          <button className={styles.btnSave}   onClick={() => onSave(form)}>
            {mode === 'create' ? 'Create' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  )
}
