import styles from './Basket.module.scss'

function Basket({onClose, items = []}) {
    return (
        <div className={styles.cover}>
        <div className={styles.basket}>
          <h2>Корзина <img className={styles.close} onClick={onClose} src="/img/cross.svg" alt="close" /></h2>

          <div className={styles.items}>
            {
              items.map((obj) => (
                <div className={styles.cartItem}>
                  <img className={styles.cartImg} width={70} height={70} src={obj.imgURL} alt="sneakers" />
                  <div>
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img className={styles.remove} src="/img/cross.svg" alt="remove" />
                </div>   
              ))
            }
          </div>

          <ul className={styles.totalPrice}>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className={styles.orderBtn}>Оформить заказ</button>
        </div>
      </div>
    )
}

export default Basket