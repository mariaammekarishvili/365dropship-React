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
import BackdropLoader from "./BackdropLoader";

function App() {
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
                  <Main/>
              </Route>

              <Route path='/cart'>
                 <Cart/>
              </Route>

            <Route path='/profile'>
               <ProfilePage/>
            </Route>
              <Route path='/m'>
                  <BackdropLoader/>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
