import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <header>
        <div className={styles.logo}>
            AD<span>BITE</span>
            <sup>ADMIN</sup>
        </div>
    </header>
  )
}

export default Navbar
