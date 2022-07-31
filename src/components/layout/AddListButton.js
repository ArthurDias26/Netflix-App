import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/LinkButton.module.css'

export default function LinkButton({link, text}) {
  return (
    <Link to={link} className={styles.LinkButton} style={{backgroundColor: '#333', color: '#fff'}}>
        {text}
    </Link>
  )
}
