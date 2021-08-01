import {Link} from "react-router-dom";
import  "../../components/GoogleAuthorization";
import {Button} from "@material-ui/core";
import {render} from 'react-router-dom';
import GoogleAuthorization from "../../components/GoogleAuthorization";

export const HomePageNavigation = () => {
    const profile = localStorage.getItem('user')

    return(
        <>
            <div className={'home-page__navigation'}>
                <div className={'hm-page__nav-img'}>
                    <img src={'https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/group-30.png'}/>
                </div>
                <div className={'home-page__navigation navigation__item--right'}>
                    <Link to={'/about'}>
                        <div>ABOUT</div>
                    </Link>
                    <Link to={'/catalog'}>
                        <div className={'a'}
                        >CATALOG</div>
                    </Link>
                    <Link to={'/catalog'}>
                        <div>SUPPLIERS</div>
                    </Link>
                    <div>HELP CENTER</div>
                    <Link to={'/dashboard'}>
                         <div>BLOG</div>
                    </Link>
                    <GoogleAuthorization/>
                    <Link to={'/login'}>
                         <div>Log In</div>
                    </Link>
                    <div className={'hm-page__nav-button'}>
                        <Button variant="outlined" color="primary">
                            Sign Up Now
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )
}