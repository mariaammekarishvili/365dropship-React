import '../CSS/DashboardPage.css'
import Navigation from "../common/Navigation";
import {Hidden} from "@material-ui/core";
import {useSelector} from "react-redux";
import map from'../img/map.PNG'
export const DashboardPage = () => {
    const userInformation = useSelector(state => state.ProfileReducer.fullInformation)

    return(
        <>

            <div className={'dashboard-page'}>
                <Hidden xsDown><Navigation/></Hidden>
                <hr/>
                <div className={'dashboard__first-section'}>
                    <h3>{userInformation.firstName}  {userInformation.lastName}</h3>
                    <div className={'dashboard__first-section-1th'}>
                        <img src={'https://app.365dropship.com/assets/images/svg/wizard1.svg'}/>
                        <img src={'https://app.365dropship.com/assets/images/svg/wizard2.svg'}/>
                        <img src={'https://app.365dropship.com/assets/images/svg/wizard3.svg'}/>
                        <img src={'https://app.365dropship.com/assets/images/svg/wizard4.svg'}/>

                    </div>
                    <div className={'dashboard__first-section-1th dashboard__numb'}>
                        <p>1.</p>
                        <p>2.</p>
                        <p>3.</p>
                        <p>4.</p>
                    </div>
                </div>
               <Hidden xsDown><img className={'dashboard__map dashboard__first-section'} src={map}/></Hidden>
            </div>

        </>
    )
}