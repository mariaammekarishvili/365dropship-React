import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Hidden, Typography} from "@material-ui/core";
import LogOut from "./common/LogOut";
import Navigation from "./common/Navigation";
import './CSS/Profile.css'
import './CSS/AddProduct.css'

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
    const [value, setValue] = React.useState('Controlled');
    const userInformation = JSON.parse(localStorage.getItem('user'))

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
                <p>Active From:  <span>{userInformation.createdAt}</span></p>



                <LogOut/>
            </div>



        </div>
    )
}

export default ProfilePage;