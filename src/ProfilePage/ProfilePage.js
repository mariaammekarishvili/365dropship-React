import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Hidden, Typography} from "@material-ui/core";
import LogOut from "../common/LogOut";
import Navigation from "../common/Navigation";
import '../CSS/Profile.css'
import '../CSS/AddProduct.css'
import {useDispatch, useSelector} from "react-redux";
import {getUserInformation, userInformation} from "../API/UserAPI";
import {adminInformationAction, fetchFullInfoAction} from "../reducers/ProfileReducer/ProfileActions";
import {RatingStars} from "./RatingStars";
import {UserStatus} from "./UserStatus";
import {About} from "./About";
import {Link} from "react-router-dom";

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
    // const userInformation = JSON.parse((localStorage.getItem('user')))

    useEffect(() => {
        const userAdminInformation = JSON.parse((localStorage.getItem('user')))
        dispatch(adminInformationAction(userAdminInformation))
    },[])

    useEffect(() => {
        getUserInformation(userId).then(r => {
            dispatch(fetchFullInfoAction(r))
        })
    },[])
    console.log(userInformation)

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={"profile-page add-form__box"}>
            <Hidden xsDown><Navigation/></Hidden>
            <div className={'card__header'}>
                <h2>Profile Page</h2>
            </div>
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
            {/*<div className={'profile__box add-form__Form'}>*/}
            {/*    <div className={'profile__picture'}></div>*/}

            {/*    <p>First Name: <span>{userInformation.firstName}</span> </p>*/}
            {/*    <p>Last Name:  <span>{userInformation.lastName}</span></p>*/}
            {/*    <p>E-mail:  <span>{userInformation.email}</span></p>*/}
            {/*    <p>Admin Status:  <span>{userInformation.isAdmin ? 'Yes' : 'No'}</span></p>*/}
            {/*    <p>Active From:  <span>{userInformation.createdAt}</span></p>*/}


            {/*    <button className={'button'}> Edit Profile</button>*/}
                <LogOut/>
            {/*</div>*/}



        </div>
    )
}

export default ProfilePage;