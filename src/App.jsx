import Busket from './components/Busket';
import Header from './components/Header';
import Card from './components/Card';

const arr = [
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imgURL: '/img/sneakers/1.jpg'},
  {title: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imgURL: '/img/sneakers/2.jpg'},
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8999, imgURL: '/img/sneakers/3.jpg'},
  {title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imgURL: '/img/sneakers/4.jpg'},
]

function App() {
  return (
    <div className="wrapper">
      <Busket/>
      <Header/>
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
            arr.map((obj) => (
              <Card title={obj.title} price={obj.price} imgURL={obj.imgURL} />
            ))
          }      
        </div>   
      </section>
    </div>
  );
}

export default App;
