import '../CSS/AboutPage.css'
import {AboutPageMap} from "./AboutPageMap";
import Navigation from "../common/Navigation";
import {Hidden} from "@material-ui/core";
import pic from '../img/webiz.png'
export const AboutPage = () => {
    return(
        <>
            <Hidden xsDown><Navigation/></Hidden>
            <div className={'about-page'}>
                <div className={'about-page--flex'}>
                    <div className={'about-page__text'}>
                    <h2>YOUR DIGITAL BUILDING BLOCKS IN <span>GEORGIA</span></h2>
                    <p>Webiz is a software development company, offering a wide range of software, marketing, and design related services for businesses and startups all around the globe. We are here to execute your ideas efficiently and deliver error free, high-performing, custom-crafted solutions for unique needs and demands.</p>
                    </div>
                      <img src={pic} className={'about-page__pic'}/>
                </div>
                <AboutPageMap/>
            </div>
        </>
    )
}