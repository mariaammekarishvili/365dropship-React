import {Button} from "@material-ui/core";
import '../../assets/CSS/HomePage.css';
import {Link, } from "react-router-dom";
import {HomePageNavigation} from "./HomePageNavigation";
import {HomePageMain} from "./HomePageMain";


const HomePage= () => {
    return(
        <div className={'home-page'}>
           <HomePageNavigation/>
            <div className={'home-page--center'}>
           <HomePageMain/>


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
        </div>
    )
}

export default HomePage;