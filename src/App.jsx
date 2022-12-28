import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper">
      <Drawer/>
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
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>   
      </section>
    </div>
  );
}

export default App;
