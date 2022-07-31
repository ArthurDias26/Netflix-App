import React from 'react'
import styles from './styles/Footer.module.css'

import {FaLinkedin, FaGithub, FaPortrait} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <p>Projeto didatico feito com react, por Arthur Dias.</p>
      <p>Dados retirados do banco de dados do TMDB.</p>
      <p>Contanto:</p>
      <ul>
        <li><a href=""><FaLinkedin/> Linkedin</a></li>
        <li><a href=""><FaGithub/> Github</a></li>
        <li><a href=""><FaPortrait/> Meu portifólio</a></li>
      </ul>

    </footer>
  )
}
