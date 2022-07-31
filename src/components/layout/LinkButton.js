import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/LinkButton.module.css'

import {FaPlay} from 'react-icons/fa'

export default function LinkButton({link, text}) {
  return (
    <Link to={link} className={styles.LinkButton}>
        <span>{<FaPlay/>} {text}</span>
    </Link>
  )
}
