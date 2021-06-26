import {Button, Grid, Modal, Paper} from "@material-ui/core";
import './HomePage.css';
import Logo from "./common/Logo";
import {Link} from "react-router-dom";
import {useState} from "react";
import LogIn from "./LogIn";


const HomePage= () => {
    const [openLogIn, setOpenLogIn] = useState(false);

    const handleOpen = () => {
        setOpenLogIn(true);
    };

    const handleClose = () => {
        setOpenLogIn(false);
    };

    return(
        <div className={'home-page'}>
            <div className={'home-page__navigation'}>
                <div className={'hm-page__nav-img'}><img src={'https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/group-30.png'}/></div>
                <div>ABOUT</div>
                <Link to={'/catalog'}> <div className={'a'}>CATALOG</div> </Link>
                <div>PRICING</div>
                <div>SUPPLIERS</div>
                <div>HELP CENTER</div>
                <div>BLOG</div>
                <div className={'hm-page__nav-button'}><Button variant="outlined" color="primary">
                    Sign Up Now
                </Button></div>
                <div>Log In</div>
                {/*<Paper><FacebookIcon/></Paper>*/}
            </div>
            <div className={'home-page__tabla'}>
                <h1>
                    DROPSHIP
                </h1>
                <h1>KNOWLEDGE BASE</h1>
                <h3>EVERYTHING YOU NEED TO KNOW IN ONE PLACE</h3>
            </div>
            <div className={'home-page_butt-container'}>
                <Button   variant="contained" size="large"  color="inherit" disableElevation>
                    Sign Up Now
                </Button>
                <Button onClick={handleOpen} variant="outlined" size="large"  color="primary">
                    Log In
                </Button>
            </div>
            <Modal
                open={openLogIn}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <LogIn/>
            </Modal>

        </div>
    )
}

export default HomePage;