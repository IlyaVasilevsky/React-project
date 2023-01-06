import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';

function Favorite() {
    const { favorites, onFavorite } = React.useContext(AppContext)
    return (
        <section className='content'>
            <div className="title-block">
                <h1>Мои закладки</h1>
            </div>
            <div className="cards-wrapper">
                {
                    favorites
                    .map((obj, index) => (
                        <Card key={index} favorited={true} onFavorite={onFavorite} {...obj}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Favorite