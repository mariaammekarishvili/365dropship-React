import React from 'react';
import logo from '../img/dropship_logo.png';
import {Link} from "react-router-dom";

const Logo = () => {
    return(
        <>
            <Link to='/'><img className="logo" src={logo}/></Link>
        </>
    )
}

export default Logo