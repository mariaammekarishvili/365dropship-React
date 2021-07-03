import './CSS/App.css';
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
import AddProduct from "./AddProduct";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

function App() {
  return (
      <div className="content">


          <Switch>

            <Route exact path='/' >
                <HomePage/>
            </Route>

            <Route path={'/login'}>
                <LogIn/>
            </Route>

              <Route path={'/signup'}>
                  <SignUp/>
              </Route>

              <Route path='/catalog/:id?'>
                  <Main/>
              </Route>

              <Route path='/cart'>
                  <Cart/>
              </Route>

            <Route path='/profile'>
                <ProfilePage/>
            </Route>

            <Route path='/addProduct/:productId?'>
                <AddProduct/>
            </Route>
          </Switch>
      </div>
  );
}

export default App;
