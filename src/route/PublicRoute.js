import React, {useState} from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const user = useState(localStorage.getItem('user'))
    const [IsLogin, setIsLogin] = useState(false)
    if(user){
        setIsLogin(true)
    }

    return (
        <Route {...rest} render={props => (
           (IsLogin) && restricted ?
                <Redirect to="/catalog" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;