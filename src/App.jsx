import React from 'react';
import {Route, Routes} from "react-router-dom";
import axios from 'axios'
import Basket from './components/Basket';
import Header from './components/Header';
import Home from './pages/Home'
import Favorite from './pages/Favorite'


function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')
  const [favorites, setFavorites] = React.useState([])

  React.useEffect(() => {
    axios.get('https://63af1796649c73f572b525fe.mockapi.io/items').then((res) => {
      setItems(res.data)
    })
    axios.get('https://63af1796649c73f572b525fe.mockapi.io/cart').then((res) => {
      setCartItems(res.data)
    })
    axios.get('https://63af1796649c73f572b525fe.mockapi.io/favorite').then((res) => {
      setFavorites(res.data)
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://63af1796649c73f572b525fe.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://63af1796649c73f572b525fe.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://63af1796649c73f572b525fe.mockapi.io/favorite/${obj.id}`)
      } else {
        const {data} = await axios.post('https://63af1796649c73f572b525fe.mockapi.io/favorite', obj)
        setFavorites((prev) => [...prev, data])
      } 
    } catch (error) {
      alert('Не удолось добавить в фавориты!')
    } 
  }

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }
 
  return (
    <div className="wrapper">
      {cartOpened && <Basket items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      
      <Routes>
        <Route path="/" element={<Home searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} items={items} onFavorite={onFavorite} onAddToCart={onAddToCart}/>} />
        <Route path="/favorite" element={<Favorite onFavorite={onFavorite} items={favorites}  /> } />
      </Routes>
 
    </div>
  );
}

export default App;
