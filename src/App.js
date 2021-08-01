import './assets/CSS/App.css';
import './assets/CSS/Responsive.css'
import './assets/CSS/AsideBar.css'
import './assets/CSS/Catalog.css'
import './assets/CSS/Navigation.css'
import './assets/CSS/cart.css'

import Main from "./Main";
import {Route, Switch, useHistory} from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import HomePage from "./pages/HomePage/HomePage";
import Cart from "./Cart/Cart";
import LogIn from "./components/common/LogIn";
import SignUp from "./components/common/SignUp";
import {Messages} from "./Messages";
import UsersInformationPage from "./pages/UsersPage/UsersInformationPage";
import {useState} from "react";
import {AboutPage} from "./pages/AboutPage/AboutPage";
import {DashboardPage, dashboardPage} from "./pages/DashboardPage/DashboardPage";

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

              <Route path='/about'>
                  <AboutPage/>
              </Route>
              <Route path='/dashboard'>
                  <DashboardPage/>
              </Route>

          </Switch>
      </div>
  );
}

export default App;
