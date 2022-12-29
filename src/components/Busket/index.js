import styles from './Busket.module.scss'

function Busket() {
    return (
        <div className={styles.cover}>
        <div className={styles.busket}>
          <h2>Корзина <img className={styles.remove} src="/img/cross.svg" alt="remove" /></h2>

          <div className={styles.items}>
            <div className={styles.cartItem}>
              <img className={styles.cartImg} width={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers" />
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className={styles.remove} src="/img/cross.svg" alt="remove" />
            </div>

            <div className={styles.cartItem}>
              <img className={styles.cartImg} width={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers" />
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className={styles.remove} src="/img/cross.svg" alt="remove" />
            </div>   
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

export default Busket