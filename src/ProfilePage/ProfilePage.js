import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Hidden, Typography} from "@material-ui/core";
import LogOut from "./LogOut";
import Navigation from "../common/Navigation";
import '../CSS/Profile.css'
import '../CSS/AddProduct.css'
import {useDispatch, useSelector} from "react-redux";
import {getUserInformation, userInformation} from "../API/UserAPI";
import {adminInformationAction, fetchFullInfoAction, openEditAction} from "../reducers/ProfileReducer/ProfileActions";
import {RatingStars} from "./RatingStars";
import {UserStatus} from "./UserStatus";
import {About} from "./About";
import {Link} from "react-router-dom";
import {ProfileEditButton} from "./ProfileEditButton";
import ProfileModal from "./ProfileModal";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
const ProfilePage = () => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const [value, setValue] = React.useState('Controlled');
    const userId = useSelector(state => state.ProfileReducer.id)
    const userInformation = useSelector(state => state.ProfileReducer.fullInformation)
    const products = useSelector( state => state.products.productList)
    const isOpen = useSelector( state => state.ProfileReducer.modalOpen)
    const refresh = useSelector(state => state.products.needRefresh)
    const infoFromLocStore = JSON.parse((localStorage.getItem('user')))

    useEffect(() => {
        dispatch(adminInformationAction(infoFromLocStore))
    },[refresh])


    useEffect(() => {
        getUserInformation(infoFromLocStore.id).then(r => {
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
                    <div className={'profile__picture'}></div>
                    <p className={'description'}>Registration Information</p>
                    <span className={'service__type'}>Active from : </span>
                    <span className={'information'}>{userInformation.createdAt}</span>
                    <p className={'description'}>Service Information</p>
                    <div className={'service_box'}>
                        <span className={'service__type'}>Product In Catalog : <br/><span className={'information'}>{products.length} items</span></span>
                        <Link to={'/catalog'}><button className={'button profile__but'}>See Catalog</button></Link>
                    </div>

                </div>
                <div className={'profile-information'}>
                    <h3 className={'user__name'}>{userInformation.firstName}  {userInformation.lastName}</h3>
                    <p className={'status'}>Dropship User</p>
                    <p className={'rating__title'}>rating</p>
                    <RatingStars/>
                    <UserStatus/>
                    <About/>
                    <p className={'rating__title'}>personal information</p>
                    <p className={'about_title'}>First Name: <span className={'about_informt'}>{userInformation.firstName}</span> </p>
                    <p className={'about_title'}>Last Name:  <span className={'about_informt'}>{userInformation.lastName}</span></p>
                    <p className={'about_title'}>Update At:       <span className={'information'}>   {userInformation.updatedAt}</span></p>
                    <p className={'about_title'}>Phone:  <span className={'about_informt'}> </span></p>
                    <p className={'about_title'}>E-mail:  <span className={'about_informt'}>{userInformation.email}</span></p>
                    <p className={'about_title'}>ID:  <span className={'information'}>{userInformation.id}</span></p>



                </div>
            </div>
              <div className={'profile__header--butt'}>

                <LogOut/>
              </div>
        </div>
    )
}

export default ProfilePage;