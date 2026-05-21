import styles from './Ticker.module.css'

const ITEMS = ['Indoor Advertising','Brand Visibility','Gym Branding','Clinic Ads','Café Marketing','Salon Campaigns','Kerala Coverage']

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={i % 2 === 0 ? styles.item : styles.dot}>
            {i % 2 === 0 ? item : '✦'}
          </span>
        ))}
      </div>
    </div>
  )
}
