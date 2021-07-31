import {Link} from "react-router-dom";
import {GoogleAuthorization} from "../GoogleAuthorization";
import {Button} from "@material-ui/core";

export const HomePageNavigation = () => {
    const profile = localStorage.getItem('user')

    return(
        <>
            <div className={'home-page__navigation'}>
                <div className={'hm-page__nav-img'}>
                    <img src={'https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/group-30.png'}/>
                </div>
                <div className={'home-page__navigation navigation__item--right'}>
                    <div>ABOUT</div>
                    <Link to={profile ? '/catalog' : '/'}>
                        <div className={'a'}
                        >CATALOG</div>
                    </Link>
                    <div>SUPPLIERS</div>
                    <div>HELP CENTER</div>
                    <div>BLOG</div>
                    <GoogleAuthorization/>
                    <div>Log In</div>
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