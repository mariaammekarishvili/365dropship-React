import './App.css';
import Navigation from "./common/Navigation";
import AsideBar from "./asideBar/AsideBar";
import Main from "./Main";

function App() {
  return (

      <div className="content">
        <Navigation/>
        <AsideBar/>
        <Main/>
      </div>

  );
}

export default App;
