import './App.css';
import Navigation from "./Navigation";
import AsideBar from "./AsideBar";

function App() {
  return (
      <div className="content">
        <Navigation/>

        <AsideBar/>

        <main className="main">
          <header className="main__header">
            <div className="main__search-box">
              <input className="main__input" id="search" type="text"/>
              <button id="search-button" type="submit">🔎</button>
            </div>
          </header>
          <div className="main__sort">
            <select id="sort">
              <option value="asc">Ascoding</option>
              <option value="desc">DEsscoding</option>
            </select>
          </div>

          <section className="main__catalog">


          </section>

        </main>

      </div>
  );
}

export default App;
