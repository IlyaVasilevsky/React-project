import React from 'react';
import {Route, Routes} from "react-router-dom";
import axios from 'axios'
import Basket from './components/Basket';
import Header from './components/Header';
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import Orders from './pages/Orders'
import AppContext from './context'

function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')
  const [favorites, setFavorites] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  
  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([axios.get('https://63af1796649c73f572b525fe.mockapi.io/cart'), axios.get('https://63af1796649c73f572b525fe.mockapi.io/favorite'), axios.get('https://63af1796649c73f572b525fe.mockapi.io/items')])
     
        setIsLoading(false)
        setCartItems(cartResponse.data)
        setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data) 
      } catch (error) {
        alert('ERROR')
      }
    }
    fetchData()
  }, [])

  
  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id))) 
        await axios.delete(`https://63af1796649c73f572b525fe.mockapi.io/cart/${findItem.id}`)
      }else {
        const {data} = await axios.post('https://63af1796649c73f572b525fe.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, data])
      }  
    } catch (error) {
      alert('Ошибка при добавлении в корзину')
    }
  }

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://63af1796649c73f572b525fe.mockapi.io/cart/${id}`)
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
    } catch (error) {
      alert('Ошибка при удалении из корзины')
    }
  }

  const onFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://63af1796649c73f572b525fe.mockapi.io/favorite/${obj.id}`)
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
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

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.parentId) === Number(id))
  }
 
  return (
    <AppContext.Provider value={{items, cartItems, favorites, onFavorite, isItemAdded, setCartOpened, setCartItems, onAddToCart}} >
      <div className="wrapper">
        {cartOpened && <Basket items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route path="" element={<Home cartItems={cartItems} searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} items={items} onFavorite={onFavorite} onAddToCart={onAddToCart} isLoading={isLoading}/>} />
          <Route path="favorite" element={<Favorite /> } />
          <Route path="orders" element={<Orders /> } />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
