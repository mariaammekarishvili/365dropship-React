import './App.css';
import Navigation from "./common/Navigation";
import AsideBar from "./asideBar/AsideBar";
import Main from "./Main";
import {Route, Switch} from "react-router-dom";
import Modal from "./catalog/Modal";
import {Hidden} from "@material-ui/core";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import TestCatalog from "./TestCatalog";
import Cart from "./Cart";

function App() {
  return (
      <div className="content">


          <Switch>

            <Route exact path='/' >
                <HomePage/>
            </Route>


              <Route path='/catalog'>
                  <Main/>
              </Route>

              <Route path='/cart'>
                  <Cart/>
              </Route>

            <Route path='/profile'>
                <ProfilePage/>
            </Route>
          </Switch>
      </div>
  );
}

export default App;
