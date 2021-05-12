import './App.css';
import Navigation from "./Navigation";
import AsideBar from "./AsideBar";
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
