import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/LinkButton.module.css'

export default function LinkButton({link, icon, text, customStyle}) { 

  return (
    <Link to={link} className={styles.LinkButton} style={customStyle}>
        <span>{icon}{text}</span>
    </Link>
  )
}
