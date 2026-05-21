import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* LEFT */}
      <div className={styles.left}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Kerala's Indoor Advertising Experts
        </div>

        <h1 className={styles.h1}>
          YOUR BRAND,<br />
          <em>everywhere</em><br />
          INDOORS.
        </h1>

        <p className={styles.sub}>
          Adbite places your brand inside the spaces people actually spend time —
          gyms, clinics, cafés, salons, and more across Kerala.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>Start a Campaign</a>
          <a href="#services" className={styles.btnGhost}>See Services →</a>
        </div>

        <div className={styles.stats}>
          {[['50', 'Venues'], ['10', 'Cities'], ['200', 'Campaigns']].map(([n, l]) => (
            <div key={l} className={styles.stat}>
              <span className={styles.statNum}>{n}<em>+</em></span>
              <span className={styles.statLabel}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — drop your logo image here */}
      <div className={styles.right}>
        <div className={styles.gridBg} />
        <div className={styles.glow} />
        <img
          src="/adbite-logo.png"
          alt="Adbite"
          className={styles.logo}
          onError={e => { e.target.style.display = 'none' }}
        />
        {/* Fallback shown until image is added */}
        <div className={styles.logoFallback}>
          <span>ADBITE</span>
          <small>Add logo to /public/adbite-logo.png</small>
        </div>
      </div>
    </section>
  )
}
