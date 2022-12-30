import React from 'react';
import Basket from './components/Basket';
import Header from './components/Header';
import Card from './components/Card';

function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://63af1796649c73f572b525fe.mockapi.io/items').then((res) => {
      return res.json()
    }).then((json) => {
      setItems(json)
    }) 
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }
 
  return (
    <div className="wrapper">
      {cartOpened && <Basket items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <section className="content">
        <div className="title-block">
          <h1>Все кроссовки</h1>
          <div className="search">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="cards-wrapper">
          {
            items.map((obj) => (
              <Card title={obj.title} price={obj.price} imgURL={obj.imgURL} onPlus={(obj) => onAddToCart(obj)} />
            ))
          }      
        </div>   
      </section>
    </div>
  );
}

export default App;
