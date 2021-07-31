import '../CSS/AboutPage.css'
import {AboutPageMap} from "./AboutPageMap";
import Navigation from "../common/Navigation";
import {Hidden} from "@material-ui/core";

export const AboutPage = () => {
    return(
        <>
            <Hidden xsDown><Navigation/></Hidden>
            <div className={'about-page'}>

                <AboutPageMap/>
            </div>

        </>
    )
}