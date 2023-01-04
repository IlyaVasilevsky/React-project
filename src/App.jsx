import React from 'react';
import Basket from './components/Basket';
import Header from './components/Header';
import Card from './components/Card';

function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')

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

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }
 
  return (
    <div className="wrapper">
      {cartOpened && <Basket items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <section className="content">
        <div className="title-block">
          <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кросовки'}</h1>
          <div className="search">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && <img className='clear' onClick={() => setSearchValue('')} src="/img/cross.svg" alt="clear" />}
            <input onChange={onChangeSearchValue} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>
        <div className="cards-wrapper">
          {
            items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj, index) => (
              <Card key={index} title={obj.title} price={obj.price} imgURL={obj.imgURL} onPlus={(obj) => onAddToCart(obj)} />
            ))
          }      
        </div>   
      </section>
    </div>
  );
}

export default App;
