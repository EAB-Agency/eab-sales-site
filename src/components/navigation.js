import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import { Button } from '../components/'


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
      <li className={styles.navigationItem}>
        <Link to="/news/">News</Link>
      </li>
      <li className={styles.navigationItem}>
        <Button>Apply Now</Button>
      </li>
      <li className={styles.navigationItem}>
        <Button>Request Info</Button>
      </li>
    </ul>
  </nav>
)
