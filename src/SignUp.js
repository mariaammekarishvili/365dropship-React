import {useState} from "react";
import {signUp} from "./API";
import {useHistory} from "react-router-dom";

const SignUp = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const history = useHistory()

    const singUpAction = (e) => {
        e.preventDefault()
        signUp(firstName, lastName, email , password, passwordConfirmation)
            .then(result => {
               alert('successes')
                history.push('/')
            })
            .catch(err=>{
                alert('Username or Password is incorrect')
            })
    }



    return (
        <form onSubmit={singUpAction} className={'log-in--flex'}>
            <h2 className={'log-in__header'}>Sign Up</h2>


            <input type={'text'} name={'firstName'}
                   placeholder={'firstName'}
                   className={'log-in__input'}
                   value={firstName}
                   onChange={(e) => setFirstName(e.target.value)}/>

            <input type={'text'}
                   name={'lastName'}
                   placeholder={'lastName'}
                   className={'log-in__input'}
                   value={lastName}
                   onChange={(e) => setLastName(e.target.value)}/>

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
            <input type={'passwordConfirmation'}
                   name={'passwordConfirmation'}
                   placeholder={'passwordConfirmation'}
                   className={'log-in__input'}
                   value={passwordConfirmation}
                   onChange={(e) => setPasswordConfirmation(e.target.value)}/>


            <form><input type="checkbox"/>
                <label htmlFor="vehicle1">Subscribe to Newslette</label>
            </form>
            <input className={'log-in__input log-in__button'}
                   type={'submit'}/>
        </form>
    )
}

export default SignUp