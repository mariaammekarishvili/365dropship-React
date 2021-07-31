import '../CSS/LogIn-SignUp.css'
import {signUp} from "../API/AuthAPI";
import {useHistory} from "react-router-dom";
import {Form, Formik, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import {useDispatch} from "react-redux";
import {failedMessageAction, successMessageAction} from "../reducers/CommonReducers/CommonAction";

const signUpValidation = yup.object().shape({
    firstName:          yup.string().min(4).max(20),
    lastName:    yup.string().min(4).max(20),
    email:          yup.string().email(),
    password:       yup.string().min(6),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'The characters are different')
})

const SignUp = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const singUpAction = values => {
            signUp(values)
            .then(result => {
               dispatch(successMessageAction(true))
                history.push('/')
            })
            .catch(err=>{
                dispatch(failedMessageAction(true))
            })
    }

    return (
      <div className={'form--background'}>
          <div className={'log-in--flex'}>
          <h2 className={'log-in__header'}>Sign Up</h2>
          <Formik enableReinitialize
                   className={'log-in--flex'}
                   initialValues={
                       {
                           firstName: '',
                           lastName: '',
                           email: '',
                           password: '',
                           passwordConfirmation: ''
                       }

                  }
          onSubmit={singUpAction}
          validationSchema={signUpValidation}
          >
              <Form>
                  <Field placeholder= 'First Name'
                         name = 'firstName'
                         className={'log-in__input'}/>
                  <ErrorMessage name={'firstName'}
                                className={'ErrorMessage'}
                                component={'div'}/>

                  <Field placeholder='Last Name'
                         name='lastName'
                         className={'log-in__input'}
                  />
                  <ErrorMessage name={'lastName'}
                                className={'ErrorMessage'}
                                component={'div'}/>

                  <Field placeholder='E-mail'
                         name='email'
                         className={'log-in__input'}
                  />
                  <ErrorMessage name={'email'}
                                className={'ErrorMessage'}
                                component={'div'}/>

                  <Field placeholder='Password'
                         type={'password'}
                         name='password'
                         className={'log-in__input'}
                  />
                  <ErrorMessage name={'password'}
                                className={'ErrorMessage'}
                                component={'div'}/>

                  <Field placeholder='Confirm Password'
                         type={'password'}
                         name='passwordConfirmation'
                         className={'log-in__input'}
                  />
                  <ErrorMessage name={'passwordConfirmation'}
                                component={'div'}
                                className={'ErrorMessage'}/>

                   <br/>
                  <button type={'submit'}
                          className={'log-in__input form__button'}>
                          Submit
                  </button>
              </Form>
          </Formik>
          </div>
      </div>
    )
}

export default SignUp