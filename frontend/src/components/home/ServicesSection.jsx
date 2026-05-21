import { useEffect, useRef } from 'react'
import styles from './ServicesSection.module.css'

const SERVICES = [
  { n:'01', title:'Digital Screen Ads',       desc:'Dynamic displays inside high-footfall venues. Real-time content updates keep campaigns fresh.' },
  { n:'02', title:'Standee & Poster Branding', desc:'Premium print collateral at gym entrances, clinic waiting rooms, and café counters.' },
  { n:'03', title:'Timed Slot Campaigns',      desc:'Book slots aligned with your audience — morning gym rush, lunch crowd, evening queues.' },
  { n:'04', title:'Hyper-Local Targeting',     desc:'Reach specific neighbourhoods by selecting venues in your customers\' exact localities.' },
  { n:'05', title:'Campaign Analytics',        desc:'Track reach, impressions, and engagement. Data-backed insights for every future run.' },
  { n:'06', title:'Creative Design Support',   desc:'In-house team crafts creatives for every format — no extra cost on eligible packages.' },
]

export default function ServicesSection() {
  const ref = useRef()
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { ref.current.classList.add('visible'); obs.disconnect() }
    }, { threshold: .1 })
    if (ref.current) obs.observe(ref.current)
  }, [])

  return (
    <section id="services" className={styles.section}>
      <div className={`reveal ${styles.head}`} ref={ref}>
        <div>
          <p className="section-label">What We Do</p>
          <h2 className={`section-h2 ${styles.h2}`}>
            SMART<br /><em>indoor</em><br />SOLUTIONS
          </h2>
        </div>
        <p className={styles.intro}>
          We curate the right indoor spaces across Kerala to put your brand in
          front of the right people at the moments that matter most.
        </p>
      </div>

      <div className={styles.grid}>
        {SERVICES.map(s => (
          <div key={s.n} className={styles.card}>
            <span className={styles.num}>{s.n}</span>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
