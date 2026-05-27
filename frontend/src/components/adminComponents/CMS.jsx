import React from 'react'
import styles from './CMS.module.css'

const CMS = () => {
  return (
    <main>

      <h2 className={styles.page_header}>Locations</h2>
      <p className={styles.page_sub}>Manage districts and their mapped venues.</p>

      <div className={styles.page_top}>
        <div className={styles.search_bar}> 
          <svg className={styles.search_icon} viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" placeholder='Search' className={styles.search_input} />
        </div>
          <button className={styles.add_btn}>
          <svg className={styles.plus_icon} viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add District</button>
      </div>

    <div className={styles.table_wrap}>
    <table>
      <thead>
        <tr>
          <th style={{width:'32px'}}></th>
          <th>District</th>
          <th>Description</th>
          <th>Venues</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><button className={`${styles.btn_ghost} ${styles.btn_sm}`}><svg className={styles.btn_icon} viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg></button></td>
          <td className={styles.td_name}>Ernakulam</td>
          <td className={styles.td_description}>High commercial footfall — malls, gyms, caoasuyshshshshshshshshshshshshshshshshshshshshshshshshshshlinics.</td>
          <td className={styles.venue}><span className={`${styles.badge} ${styles.badge_rust}`}>2 venues</span></td>
          <td className={styles.td_buttons}>
            <button className={`${styles.btn_ghost} ${styles.btn_sm}`}>Edit</button>
            <button className={`${styles.btn_danger} ${styles.btn_sm}`}>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>


    </main>
  )
}

export default CMS
