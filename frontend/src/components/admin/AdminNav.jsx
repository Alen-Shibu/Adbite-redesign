import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import styles from './AdminNav.module.css'

export default function AdminNav() {
  const { logout } = useAuth()
  const nav = useNavigate()
  return (
    <nav className={styles.nav}>
      <span className={styles.brand}>AD<span>BITE</span><span className={styles.tag}>Admin</span></span>
      <button className={styles.logout} onClick={() => { logout(); nav('/admin/login') }}>Logout</button>
    </nav>
  )
}
