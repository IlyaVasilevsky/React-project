import styles from './Card.module.scss'


function Card(props) {

  const onClickBtn = () => {
    alert(props.title)
  }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
              <img src="/img/heart.svg" alt="heart" />
            </div>
            <img width={133} height={112} src={props.imgURL} alt="Sneakers" />
            <h5 className={styles.cardTitle}>{props.title}</h5>
            <div className={styles.cardItem}>
              <div className={styles.cardPrice}>
                <span>Цена:</span>
                <b>{props.price} руб.</b>
              </div>
              <button className={styles.cardBtn} onClick={onClickBtn} >
                <img src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
    )
}

export default Card