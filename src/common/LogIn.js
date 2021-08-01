import '../assets/CSS/LogIn-SignUp.css'
import {Button, makeStyles, TextField} from "@material-ui/core";
import {login} from '../API/AuthAPI'
import {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import {failedMessageAction, successMessageAction} from "../reducers/CommonReducers/CommonAction";
import {useDispatch} from "react-redux";
import {adminInformationAction} from "../reducers/ProfileReducer/ProfileActions";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

function Form(props) {
    return null;
}

Form.propTypes = {children: PropTypes.node};
const LogIn = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginAction = (e) => {
        e.preventDefault()
        login(email,password)
            .then(result => {
                loggedIn()
            })
            .catch(err=>{
                dispatch(failedMessageAction(true))
                })
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) loggedIn()
    },[loginAction])

    const loggedIn = () => {
        history.push('/catalog')
        const userAdminInformation = JSON.parse((localStorage.getItem('user')))
        dispatch(adminInformationAction(userAdminInformation))
    }

    return(
        <div className={'log-in form--background'}>
        <form onSubmit={loginAction} className={'log-in--flex'}>
           <h2 className={'log-in__header'}>Log In</h2>
           <input type={'text'} name={'email'}
                  placeholder={'E-mail'}
                  className={'log-in__input'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>

           <input type={'password'}
                  name={'password'}
                  placeholder={'Password'}
                  className={'log-in__input'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>

           <p className={'log-in__permeation'}>
               By creating an account, you agree with the Terms & Conditions and Privacy Policy</p>
           <Form>
               <input type="checkbox"/>
               <label htmlFor="vehicle1">Subscribe to Newslette</label>
           </Form>
           <input className={'log-in__input form__button'}
                  type={'submit'}/>
        </form>
        </div>
    )
}

export default LogIn