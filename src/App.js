import './App.css';
import Navigation from "./common/Navigation";
import AsideBar from "./asideBar/AsideBar";
import Main from "./Main";
import {Route, Switch} from "react-router-dom";
import Modal from "./catalog/Modal";
import {Hidden} from "@material-ui/core";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";

function App() {
  return (
      <div className="content">


          <Switch>

            <Route exact path='/' >
                <HomePage/>
            </Route>

              <Hidden xsDown><Navigation/></Hidden>
              <Hidden smDown><AsideBar/></Hidden>

            <Route path='/:catalog/:category?/:id?'>
                 <Main/>
            </Route>

            <Route path='/profile'>
                <ProfilePage/>
            </Route>
          </Switch>
      </div>
  );
}

export default App;
