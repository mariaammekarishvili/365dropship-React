import './App.css';
import Navigation from "./common/Navigation";
import AsideBar from "./asideBar/AsideBar";
import Main from "./Main";
import {Route, Switch} from "react-router-dom";
import Modal from "./catalog/Modal";

function App() {
  return (
      <div className="content">
        <Navigation/>
        <AsideBar/>
          <Switch>
            <Route exact path='/catalog/:id?'>
                 <Main category={'products'}/>
            </Route>
            <Route path='/electronics'>
                <Main category={'electronics'}/>
            </Route>
            <Route path='/menCloth'>
                <Main category={'menCloth'}/>
            </Route>
            <Route path='/womenCloth'>
                <Main category={'womenCloth'}/>
            </Route>
            <Route path='/jewelery'>
                <Main category={'jewelery'}/>
            </Route>
          </Switch>
      </div>
  );
}

export default App;
