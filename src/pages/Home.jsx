import Card from '../components/Card';

function Home({searchValue, onChangeSearchValue, items, onFavorite, onAddToCart}) {
    return (
        <section className='content'>
            <div className="title-block">
                <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кросовки'}</h1>
                <div className="search">
                    <img src="/img/search.svg" alt="Search" />
                    <input onChange={onChangeSearchValue} value={searchValue} placeholder="Поиск..." />
                </div>
            </div>
            <div className="cards-wrapper">
                {
                    items
                    .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((obj, index) => (
                        <Card key={index} title={obj.title} price={obj.price} imgURL={obj.imgURL} onFavorite={(obj) => onFavorite(obj)} onPlus={(obj) => onAddToCart(obj)}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Home