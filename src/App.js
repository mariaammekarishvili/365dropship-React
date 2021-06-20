import './App.css';
import Navigation from "./common/Navigation";
import AsideBar from "./asideBar/AsideBar";
import Main from "./Main";
import {Route, Switch} from "react-router-dom";
import Modal from "./catalog/Modal";
import {Hidden} from "@material-ui/core";
import ProfilePage from "./ProfilePage";

function App() {
  return (
      <div className="content">
        <Hidden xsDown><Navigation/></Hidden>
        <Hidden smDown><AsideBar/></Hidden>

          <Switch>
            <Route exact path='/:catalog?/:category?/:id?'>
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
