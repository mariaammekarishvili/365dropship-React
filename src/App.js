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
import Cart from "./pages/Cart/Cart";
import LogIn from "./components/common/LogIn";
import SignUp from "./components/common/SignUp";
import {Messages} from "./components/Messages";
import UsersInformationPage from "./pages/UsersPage/UsersInformationPage";
import {useState} from "react";
import {AboutPage} from "./pages/AboutPage/AboutPage";
import {DashboardPage, dashboardPage} from "./pages/DashboardPage/DashboardPage";
import PublicRoute from "./route/PublicRoute";
import PrivateRoute from "./route/PrivateRoute";

function App() {
    const profile = useState(localStorage.getItem('user'))
    const history = useHistory()

    return (
      <div className="content">
          <Messages/>

          <Switch>
              <PublicRoute restricted={false} component={HomePage} path="/" exact />
              <PublicRoute restricted={true} component={LogIn} path="/login" exact />
              <PublicRoute restricted={true} component={SignUp} path="/signup" exact />
              <PrivateRoute component={Main} path="/catalog/:id?" exact />
              <PrivateRoute component={Cart} path="/cart" exact />
              <PrivateRoute component={ProfilePage} path="/profile" exact />
              <PrivateRoute component={UsersInformationPage} path="/users" exact />
              <PrivateRoute component={AboutPage} path="/about" exact />
              <PrivateRoute component={DashboardPage} path="/dashboard" exact />
          </Switch>
      </div>
  );
}

export default App;
