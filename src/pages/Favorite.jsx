import Card from '../components/Card';

function Favorite({items, onFavorite}) {
    return (
        <section className='content'>
            <div className="title-block">
                <h1>Мои закладки</h1>
            </div>
            <div className="cards-wrapper">
                {
                    items
                    .map((obj, index) => (
                        <Card key={index} favorited={true} onFavorite={onFavorite} {...obj}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Favorite