import React from 'react'
import styles from './Card.module.scss'

function Card({favorite, imgURL, title, price, onPlus}) {

  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onPlus({title, imgURL, price})
    setIsAdded(!isAdded)
  }

    return (
        <div className={styles.card}>
            <div className={favorite}>
              <img src="/img/heart.svg" alt="heart" />
            </div>
            <img width={133} height={112} src={imgURL} alt="Sneakers" />
            <h5 className={styles.cardTitle}>{title}</h5>
            <div className={styles.cardItem}>
              <div className={styles.cardPrice}>
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>
              <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/check.svg' : '/img/plus.svg'} alt="plus" />
            </div>
          </div>
    )
}

export default Card