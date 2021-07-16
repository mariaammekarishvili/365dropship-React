import {Button, Grid, Modal, Paper} from "@material-ui/core";
import './CSS/HomePage.css';
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {adminInformationAction} from "./reducers/ProfileReducer/ProfileDispatch";

const HomePage= () => {

    return(
        <div className={'home-page'}>
            <div className={'home-page__navigation'}>
                <div className={'hm-page__nav-img'}>
                    <img src={'https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/group-30.png'}/>
                </div>
                <div>ABOUT</div>
                <Link to={'/catalog'}> <div className={'a'}>CATALOG</div> </Link>
                <div>PRICING</div>
                <div>SUPPLIERS</div>
                <div>HELP CENTER</div>
                <div>BLOG</div>
                <div className={'hm-page__nav-button'}>
                    <Button variant="outlined" color="primary">
                    Sign Up Now
                    </Button>
                </div>
                <div>Log In</div>
            </div>

            <div className={'home-page__tabla'}>
                <h1>DROPSHIP</h1>
                <h1>KNOWLEDGE BASE</h1>
                <h3>EVERYTHING YOU NEED TO KNOW IN ONE PLACE</h3>
            </div>
            <div className={'home-page_butt-container'}>
                <Link to={'/signup'}>
                    <Button  variant="contained"
                             size="large"
                             color="inherit"
                             disableElevation>
                    Sign Up Now
                    </Button><span> </span>
                </Link>
                <Link to={'/login'}>
                    <Button variant="outlined"
                            size="large"
                            color="primary">
                        Log In
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;