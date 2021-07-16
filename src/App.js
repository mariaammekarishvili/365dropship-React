import './CSS/App.css';
import Navigation from "./common/Navigation";
import AsideBar from "./asideBar/AsideBar";
import Main from "./catalog/Main";
import {Route, Switch} from "react-router-dom";
import Modal from "./catalog/Modal";
import {Hidden} from "@material-ui/core";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import TestCatalog from "./TestCatalog";
import Cart from "./Cart/Cart";
import AddProduct from "./AddProduct";
import LogIn from "./common/LogIn";
import SignUp from "./common/SignUp";
import EditProduct from "./EditProduct";

function App() {
    const token = localStorage.getItem('token')
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
                  {token ? <Main/> :  <HomePage/>}
              </Route>

              <Route path='/cart'>
                  {token ? <Cart/> :  <HomePage/>}
              </Route>

            <Route path='/profile'>
                {token ? <ProfilePage/> :  <HomePage/>}
            </Route>

            <Route path='/addProduct'>
                <AddProduct/>
            </Route>
            <Route path='/editProduct/:id?'>
                  <EditProduct/>
            </Route>
          </Switch>
      </div>
  );
}

export default App;
