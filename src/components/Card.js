function Card() {
    return (
        <div className="card">
            <div className="favorite">
              <img src="/img/heart.svg" alt="heart" />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
            <h5 className="card-title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card-item">
              <div className="card-price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="card-btn">
                <img src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
    )
}

export default Card