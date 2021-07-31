import './CSS/App.css';
import './CSS/Responsive.css'
import './CSS/AsideBar.css'
import './CSS/Catalog.css'
import './CSS/Navigation.css'
import './CSS/cart.css'

import Main from "./Main";
import {Route, Switch, useHistory} from "react-router-dom";
import ProfilePage from "./ProfilePage/ProfilePage";
import HomePage from "./HomePage/HomePage";
import Cart from "./Cart/Cart";
import LogIn from "./common/LogIn";
import SignUp from "./common/SignUp";
import {Messages} from "./Messages";
import UsersInformationPage from "./UsersPage/UsersInformationPage";
import {useState} from "react";

function App() {
    const profile = useState(localStorage.getItem('user'))
    const history = useHistory()

    return (
      <div className="content">
          <Messages/>

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
                  {profile ? <Main/> : history.push('/')}
              </Route>

              <Route path='/cart'>
                  {profile ? <Cart/> : history.push('/')}
              </Route>

            <Route path='/profile'>
                {profile ? <ProfilePage/> : history.push('/')}
            </Route>
              <Route path='/users'>
                  <UsersInformationPage/>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
