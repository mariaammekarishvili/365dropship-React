import React, {useState} from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const user = useState(localStorage.getItem('user'))
    const [IsLogin, setIsLogin] = useState(false)
    if(user){
        setIsLogin(true)
    }

    return (
        <Route {...rest} render={props => (
            (IsLogin) ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;