import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="/" className={styles.logo}>AD<span>BITE</span></a>
      <p className={styles.copy}>© 2025 Adbite. All rights reserved.</p>
      <nav className={styles.links}>
        {['Services','Locations','Contact','Privacy'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
        ))}
      </nav>
    </footer>
  )
}
