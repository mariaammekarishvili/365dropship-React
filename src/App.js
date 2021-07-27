import './CSS/App.css';
import './CSS/Responsive.css'
import Main from "./Main";
import {Route, Switch} from "react-router-dom";
import ProfilePage from "./ProfilePage/ProfilePage";
import HomePage from "./HomePage";
import Cart from "./Cart/Cart";
import LogIn from "./common/LogIn";
import SignUp from "./common/SignUp";
import {Messages} from "./Messages";

function App() {
    const token = localStorage.getItem('token')
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
                  {token ? <Main/> :  <HomePage/>}
              </Route>

              <Route path='/cart'>
                  {token ? <Cart/> :  <HomePage/>}
              </Route>

            <Route path='/profile'>
                {token ? <ProfilePage/> :  <HomePage/>}
            </Route>
              <Route path='/m'>
                  <Messages/>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
