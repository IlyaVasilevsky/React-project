import styles from './Basket.module.scss'
import Info from '../Info'
import React from 'react'
import axios from 'axios'
import { useCart } from '../../hooks/useCart'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Basket({onClose, onRemove, items = []}) {

  const {cartItems, setCartItems, totalPrice} = useCart()
  const [isOrderComplete, setIsOrderComplete] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [orderId, setOrderId] = React.useState(null)


  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const {data} = await axios.post('https://63af1796649c73f572b525fe.mockapi.io/orders', {
        items: cartItems,
      })
      setOrderId(data.id)
      setIsOrderComplete(true)
      setCartItems([])

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i]
        await axios.delete('https://63af1796649c73f572b525fe.mockapi.io/cart/' + item.id)
        await delay(1000)
      }
    } catch (error) {
      alert('Не удалось создать заказ.')
    }
    setIsLoading(false)
  }

  return (
    <div className={styles.cover}>
      <div className={styles.basket}>
        <h2>Корзина <img className={styles.close} onClick={onClose} src="/img/cross.svg" alt="close" /> </h2>
        {
          items.length > 0 ?
          <>
            <div className={styles.items}>
              {
                items.map((obj) => (
                  <div key={obj.id} className={styles.cartItem}>
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
                <b>{totalPrice} руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>{Math.round(totalPrice / 100 * 5)} руб.</b>
              </li>
            </ul>
            <button disabled={isLoading} onClick={onClickOrder} className={styles.cartBtn}>Оформить заказ</button>
          </> : <Info title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"} description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} image={isOrderComplete ? "/img/order.jpg" : "/img/empty-cart.jpg"} />
        }
      </div>
    </div>
  )    
}

export default Basket