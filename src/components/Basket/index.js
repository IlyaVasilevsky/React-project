import styles from './Basket.module.scss'

function Basket({onClose, onRemove, items = []}) {

  return (
    <div className={styles.cover}>
      <div className={styles.basket}>
        <h2>Корзина <img className={styles.close} onClick={onClose} src="/img/cross.svg" alt="close" /> </h2>
        {
          items.length > 0 ?
          <div>
            <div className={styles.items}>
              {
                items.map((obj) => (
                  <div className={styles.cartItem}>
                    <img className={styles.cartImg} width={70} height={70} src={obj.imgURL} alt="sneakers" />
                    <div>
                      <p>{obj.title}</p>
                      <b>{obj.price} руб.</b>
                    </div>
                    <img className={styles.close} onClick={() => onRemove(obj.id)} src="/img/cross.svg" alt="remove" />
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
            <button className={styles.cartBtn}>Оформить заказ</button>
          </div> :
          <div className={styles.cartEmpty}>
            <img width={120} height={120} src="/img/empty-cart.jpg" alt="empty" />
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className={styles.cartBtn} onClick={onClose}>Вернуться назад</button>
          </div>
        }
      </div>
    </div>
  )    
}

export default Basket