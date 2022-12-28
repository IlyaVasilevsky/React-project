

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="header-logo">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div className="header-logo_text">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="header-right">
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </header>

      <section className="content">
        <h1>Все кроссовки</h1>
        <div className="cards-wrapper">
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
            <h5 className="card-title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card-item">
              <div className="card-price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="card-btn">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers" />
            <h5 className="card-title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card-item">
              <div className="card-price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="card-btn">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers" />
            <h5 className="card-title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card-item">
              <div className="card-price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="card-btn">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" />
            <h5 className="card-title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card-item">
              <div className="card-price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="card-btn">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>   
      </section>
    </div>
  );
}

export default App;
