import React from 'react'
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader"
import AppContext from '../../context';

function Card({onFavorite, imgURL, id, title, price, onPlus, favorited = false, loading = false}) {

  const { isItemAdded } = React.useContext(AppContext)
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  
  const onClickPlus = () => {
    onPlus({id, title, imgURL, price})
  }

  const favoriteAdd = () => {
    onFavorite({id, title, imgURL, price})
    setIsFavorite(!isFavorite)
  }

    return (
        <div className={styles.card}>
          {
            loading ? <ContentLoader speed={2} width={155} height={265} viewBox="0 0 155 265" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
            <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
            <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
            <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
            <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
            <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
          </ContentLoader> : <>
              <div className={styles.favorite}>
                  <img onClick={favoriteAdd} src={isFavorite ? '/img/heart-like.svg' : '/img/heart.svg'} alt="heart" />
                </div>
                <img width={133} height={112} src={imgURL} alt="Sneakers" />
                <h5 className={styles.cardTitle}>{title}</h5>
                <div className={styles.cardItem}>
                  <div className={styles.cardPrice}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                  </div>
                  <img className={styles.plus} onClick={onClickPlus} src={isItemAdded(id) ? '/img/check.svg' : '/img/plus.svg'} alt="plus" />
                </div>
          </>
          }
        </div>
    )
}

export default Card