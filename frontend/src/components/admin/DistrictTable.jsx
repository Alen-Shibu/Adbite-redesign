import styles from './DistrictTable.module.css'

export default function DistrictTable({ districts, onEdit, onDelete }) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            {['Order','District','Description','Venues','Actions'].map(h => (
              <th key={h} className={styles.th}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {districts.length === 0
            ? <tr><td colSpan={5} className={`${styles.td} ${styles.empty}`}>No locations yet. Add your first district.</td></tr>
            : districts.map(d => (
              <tr key={d._id}>
                <td className={styles.td} style={{ color: 'rgba(245,240,232,.4)' }}>{d.order ?? 0}</td>
                <td className={styles.td} style={{ fontFamily: "'DM Serif Display'", fontSize: '1rem' }}>{d.district}</td>
                <td className={styles.td} style={{ color: 'rgba(245,240,232,.55)', maxWidth: 200 }}>{d.description || '—'}</td>
                <td className={styles.td}>{d.venues?.length ?? 0}</td>
                <td className={styles.td}>
                  <button className={styles.btnEdit} onClick={() => onEdit(d)}>Edit</button>
                  <button className={styles.btnDel}  onClick={() => onDelete(d._id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
