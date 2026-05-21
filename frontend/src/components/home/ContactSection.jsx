import { useState } from 'react'
import styles from './ContactSection.module.css'

const INFO = [
  { label: 'Email',          value: 'hello@adbite.in',      href: 'mailto:hello@adbite.in' },
  { label: 'Phone',          value: '+91 98765 43210',       href: 'tel:+919876543210' },
  { label: 'Headquarters',   value: 'Kochi, Kerala — 682 001' },
  { label: 'Business Hours', value: 'Mon – Sat, 9 AM – 6 PM' },
  { label: 'WhatsApp',       value: 'Chat on WhatsApp →',    href: 'https://wa.me/919876543210', external: true },
]

export default function ContactSection() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className={styles.section}>
      <p className="section-label">Get In Touch</p>
      <h2 className="section-h2" style={{ color: 'var(--ink)' }}>
        LET'S BUILD<br />YOUR <em>next</em><br />CAMPAIGN.
      </h2>

      <div className={styles.layout}>
        {/* Info cards */}
        <div className={styles.info}>
          {INFO.map(({ label, value, href, external }) => (
            <div key={label} className={styles.infoCard}>
              <span className={styles.infoLabel}>{label}</span>
              {href
                ? <a href={href} className={styles.infoVal} target={external ? '_blank' : undefined} rel="noreferrer">{value}</a>
                : <span className={styles.infoVal}>{value}</span>
              }
            </div>
          ))}
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={e => { e.preventDefault(); setSent(true) }}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>First Name</label>
              <input placeholder="Rahul" required />
            </div>
            <div className={styles.field}>
              <label>Last Name</label>
              <input placeholder="Menon" required />
            </div>
          </div>
          <div className={styles.field}>
            <label>Email</label>
            <input type="email" placeholder="rahul@example.com" required />
          </div>
          <div className={styles.field}>
            <label>Phone</label>
            <input type="tel" placeholder="+91 98765 43210" />
          </div>
          <div className={styles.field}>
            <label>Service</label>
            <select>
              <option value="">Select a service</option>
              {['Digital Screen Ads','Standee & Poster Branding','Timed Slot Campaigns','Hyper-Local Targeting','Campaign Analytics','Creative Design Support'].map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className={styles.field}>
            <label>Message</label>
            <textarea placeholder="Tell us about your brand and campaign goals…" />
          </div>
          <button type="submit" className={styles.submit} disabled={sent}>
            {sent ? "Sent! We'll be in touch ✓" : 'Send Enquiry →'}
          </button>
        </form>
      </div>
    </section>
  )
}
