import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/Header.module.css'

export default function Header() {

  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {

    const scrolListener = () =>{

      if (window.scrollY > 10) {
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrolListener)

    return () => {
    window.removeEventListener('scroll', scrolListener)
    }

  }, [])

  return (
    <header className={`${styles.header} ${blackHeader ? styles.blackHeader : ''}`}>
      <div className={styles.hader_logo}>
        <Link to='/'>
          <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt="Netflix logo"/>
        </Link>
      </div>

      <div className={styles.hader_account}>
        <Link to='/accounts'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="Netflix account"/>
        </Link> 
      </div>
    </header>
  )
}
