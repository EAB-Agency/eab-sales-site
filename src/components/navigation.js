import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/programs/">Programs</Link>
      </li>

      <li className={styles.navigationItem}>
        <Link to="/financial-aid/">Financial Aid</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/adminssions/">Admissions</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/student-life/">Student Life</Link>
      </li>
    </ul>
  </nav>
)
