import { useEffect, useState } from 'react'
import AdminNav from '../../components/admin/AdminNav'
import DistrictTable from '../../components/admin/DistrictTable'
import DistrictModal from '../../components/admin/DistrictModal'
import { getLocations, createLocation, updateLocation, deleteLocation } from '../../api/locations'
import styles from './DashboardPage.module.css'

export default function DashboardPage() {
  const [districts, setDistricts] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalMode, setModalMode] = useState(null)
  const [editing, setEditing] = useState(null)
  const [toast, setToast] = useState('')

  useEffect(() => {
    fetchLocations()
  }, [])

  const fetchLocations = async () => {
    setLoading(true)
    try {
      const res = await getLocations()
      setDistricts(res.data || [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async (data) => {
    try {
      if (modalMode === 'create') {
        await createLocation(data)
        setToast('District created successfully')
      } else {
        await updateLocation(data._id, data)
        setToast('District updated successfully')
      }
      setModalMode(null)
      setEditing(null)
      await fetchLocations()
    } catch (err) {
      console.error(err)
      setToast('Unable to save district')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this district?')) return
    try {
      await deleteLocation(id)
      setToast('District deleted')
      await fetchLocations()
    } catch (err) {
      console.error(err)
      setToast('Unable to delete district')
    }
  }

  return (
    <div className={styles.page}>
      <AdminNav />
      <main className={styles.main}>
        <div className={styles.topBar}>
          <div>
            <h1 className={styles.pageTitle}>Dashboard</h1>
            <p className={styles.pageSub}>Manage districts, venues and campaign coverage.</p>
          </div>
          <button className={styles.btnAdd} onClick={() => { setModalMode('create'); setEditing(null) }}>
            Add District
          </button>
        </div>

        <div className={styles.tableWrap}>
          {loading
            ? <div className={styles.loading}>Loading districts…</div>
            : <DistrictTable districts={districts} onEdit={d => { setEditing(d); setModalMode('edit') }} onDelete={handleDelete} />
          }
        </div>
      </main>

      {modalMode && (
        <DistrictModal
          mode={modalMode}
          initial={editing}
          onSave={handleSave}
          onClose={() => { setModalMode(null); setEditing(null) }}
        />
      )}

      {toast && <div className={styles.toast}>{toast}</div>}
    </div>
  )
}
