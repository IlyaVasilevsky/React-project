import React from 'react';
import Card from '../components/Card';

function Home({searchValue, onChangeSearchValue, items, onFavorite, onAddToCart, isLoading}) {

    const renderItems = () => {
        const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        return (isLoading ? [...Array(10)] : filtredItems)
        .map((item, index) => (
            <Card key={index} onFavorite={(obj) => onFavorite(obj)} onPlus={(obj) => onAddToCart(obj)} loading={isLoading} {...item}/>
        ))
    }

    return (
        <section className='content'>
            <div className='title-block'>
                <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кросовки'}</h1>
                <div className='search'>
                    <img src="img/search.svg" alt="Search" />
                    <input onChange={onChangeSearchValue} value={searchValue} placeholder="Поиск..." />
                </div>
            </div>
            <div className='cards-wrapper'>{renderItems()}</div>
        </section>
    )
}

export default Home