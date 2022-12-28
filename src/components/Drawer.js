function Drawer() {
    return (
        <div className="cover">
        <div className="drawer">
          <h2>Корзина <img className="remove" src="/img/cross.svg" alt="remove" /></h2>

          <div className="items">
            <div className="cart-item">
              <img className="cart-img" width={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers" />
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove" src="/img/cross.svg" alt="remove" />
            </div>

            <div className="cart-item">
              <img className="cart-img" width={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers" />
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove" src="/img/cross.svg" alt="remove" />
            </div>   
          </div>

          <ul className="total-price">
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
          <button className="order-btn">Оформить заказ</button>
        </div>
      </div>
    )
}

export default Drawer