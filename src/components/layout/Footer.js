import React from 'react'
import styles from './styles/Footer.module.css'

import {FaLinkedin, FaGithub, FaPortrait} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.shadow}>
        <div className={styles.lists_container}>
          <ul>
            <li><a href="">FAQ  </a></li>
            <li><a href="">Investor Relations</a></li>
            <li><a href="">Ways to Watch</a></li>
          </ul>

          <ul>
            <li><a href="">Help Center</a></li>
            <li><a href="">Jobs</a></li>
            <li><a href="">Terms of Use</a></li>
          </ul>

          <ul>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Account</a></li>
            <li><a href="">Privacy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
