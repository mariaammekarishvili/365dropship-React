import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Hidden} from "@material-ui/core";
import LogOut from "./LogOut";
import Navigation from "../common/Navigation";
import '../CSS/Profile.css'
import '../CSS/AddProduct.css'
import {useDispatch, useSelector} from "react-redux";
import {getUserInformation} from "../API/UserAPI";
import {adminInformationAction, fetchFullInfoAction} from "../reducers/ProfileReducer/ProfileActions";
import {RatingStars} from "./RatingStars";
import {UserStatus} from "./UserStatus";
import {About} from "./About";
import {Link} from "react-router-dom";
import {ProfileEditButton} from "./ProfileEditButton";
import ProfileModal from "./ProfileModal";
import ProfPic from "../img/profile.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
const ProfilePage = () => {

    const dispatch = useDispatch()
    const userInformation = useSelector(state => state.ProfileReducer.fullInformation)
    const products = useSelector( state => state.products.productList)
    const refresh = useSelector(state => state.products.needRefresh)
    const user = JSON.parse((localStorage.getItem('user')))
    useEffect(() => {
        if(user.imageUrl){
            dispatch(fetchFullInfoAction({
                    firstName: user.givenName,
                    lastName: user.familyName,
                    email: user.email,
                    img: user.imageUrl,
                    id: user.googleId
                }
            ))
        }else{
            dispatch(adminInformationAction(user))
        }
    },[refresh])


    useEffect(() => {
        getUserInformation(user.id).then(r => {
            dispatch(fetchFullInfoAction(r))
        })
    },[refresh])


    return (
        <div className={"profile-page add-form__box"}>
            <Hidden xsDown><Navigation/></Hidden>
            <div className={'card__header'}>
                <h2>Profile Page</h2>
            </div>
            <ProfileEditButton/>
            <ProfileModal/>
            <div className={'profile__box'}>
                <div className={'Service-information'}>
                    <div className={''}>
                        {userInformation.img ?
                            <img className={'profile__picture'} src={userInformation.img}/>
                            : <img className={'profile__picture'} src={ProfPic}/>}

                    </div>
                    <p className={'description'}>Registration Information</p>
                    <span className={'service__type'}>Active from : </span>
                    <span className={'information'}>{userInformation.createdAt}</span>
                    <p className={'description'}>Service Information</p>
                    <div className={'service_box'}>
                        <span className={'service__type'}>Product In Catalog :
                            <br/>
                            <span className={'information'}>{products.length} items</span>
                        </span>
                        <Link to={'/catalog'}>
                            <button className={'button profile__but'}>See Catalog</button>
                        </Link>
                    </div>
                </div>
                <div className={'profile-information'}>
                    <h3 className={'user__name'}>{userInformation.firstName}  {userInformation.lastName}</h3>
                    <p className={'status'}>{user.imageUrl ? 'Gmail User' : 'Dropship User'}</p>
                    <p className={'rating__title'}>rating</p>
                    <RatingStars/>
                    <UserStatus/>
                    <About/>
                    <p className={'rating__title'}>personal information</p>
                    <p className={'about_title'}>First Name:
                        <span className={'about_informt'}>{userInformation.firstName}</span>
                    </p>
                    <p className={'about_title'}>Last Name:
                        <span className={'about_informt'}>{userInformation.lastName}</span>
                    </p>
                    <p className={'about_title'}>Update At:
                        <span className={'information'}>   {userInformation.updatedAt}</span>
                    </p>
                    <p className={'about_title'}>Phone:
                        <span className={'about_informt'}> </span>
                    </p>
                    <p className={'about_title'}>E-mail:
                        <span className={'about_informt'}>{userInformation.email}</span>
                    </p>
                    <p className={'about_title'}>ID:
                        <span className={'information'}>{userInformation.id}127</span>
                    </p>

                </div>
            </div>
              <div className={'profile__header--butt'}>

                <LogOut/>
              </div>
        </div>
    )
}

export default ProfilePage;