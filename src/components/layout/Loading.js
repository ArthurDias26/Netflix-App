import React from 'react'
import LoadingImage from '../../midia/Netflix_LoadTime.gif'
import ReactDOM from 'react-dom'
import styles from './styles/Loading.module.css'

export default function Loading() {
  return ReactDOM.createPortal(
    <div className={styles.loading}>
        <img src={LoadingImage} alt="Loading" />
    </div>,
    document.getElementById('portal')
  )
}
