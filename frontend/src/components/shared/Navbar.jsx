import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = ['Services', 'Locations', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="/" className={styles.logo}>AD<span>BITE</span></a>
      <ul className={styles.links}>
        {NAV_LINKS.map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
        ))}
        <li><a href="#contact" className={styles.cta}>Get Started</a></li>
      </ul>
    </nav>
  )
}
