import React from 'react'
import styles from './Info.module.scss'
import AppContext from '../../context';

function Info({image, title, description}) {
  const { setCartOpened } = React.useContext(AppContext)
  return (
    <div className={styles.cartEmpty}>
        <img width={120} height={120} src={image} alt="empty" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button className={styles.cartBtn} onClick={() => setCartOpened(false)}>Вернуться назад</button>
    </div>
  )
}

export default Info