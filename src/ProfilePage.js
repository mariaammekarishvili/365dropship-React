import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Hidden, Typography} from "@material-ui/core";
import LogOut from "./common/LogOut";
import Navigation from "./common/Navigation";
import './CSS/Profile.css'
import './CSS/AddProduct.css'
import {useDispatch, useSelector} from "react-redux";
import {getUserInformation, userInformation} from "./API/UserAPI";
import {adminInformationAction, fetchFullInfoAction} from "./reducers/ProfileReducer/ProfileActions";

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
            <p className={'add-form__title'}>Profile Page</p>
            <div className={'profile__box add-form__Form'}>
                <div className={'profile__picture'}></div>

                <p>First Name: <span>{userInformation.firstName}</span> </p>
                <p>Last Name:  <span>{userInformation.lastName}</span></p>
                <p>E-mail:  <span>{userInformation.email}</span></p>
                <p>Admin Status:  <span>{userInformation.isAdmin ? 'Yes' : 'No'}</span></p>
                <p>Active From:  <span>{userInformation.createdAt}</span></p>


                <button className={'button'}> Edit Profile</button>
                <LogOut/>
            </div>



        </div>
    )
}

export default ProfilePage;