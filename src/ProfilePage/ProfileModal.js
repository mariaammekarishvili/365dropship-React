import {Fade} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {Form, Formik, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import '../CSS/AddProduct.css'
import {useHistory} from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import {useStyles} from "../CSS/ModalStyle";
import Modal from "@material-ui/core/Modal";
import {openEditAction} from "../reducers/ProfileReducer/ProfileActions";
import {editUserInformation} from "../API/UserAPI";
import {refreshStateAction} from "../reducers/ProductReducer/ProductActions";
import mail from '../img/email.png';
import name from '../img/name.png'
import pass from '../img/key.png'
import {failedMessageAction, successMessageAction} from "../reducers/CommonReducers/CommonAction";

const editProfileValidation = yup.object().shape({
    firstName:          yup.string().min(4).max(20),
    lastName:    yup.string().min(4).max(20),
    email:          yup.string().email(),
    password:       yup.string().min(6),
})

const ProductEditModal = () => {
    const userInformation = useSelector(state => state.ProfileReducer.fullInformation)
    const open = useSelector( state => state.ProfileReducer.modalOpen)
    const userId = useSelector(state => state.ProfileReducer.id)
    const refresh = useSelector(state => state.products.needRefresh)
    const classes = useStyles();
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(openEditAction(false))
    }

    const handleSubmit = async values => {
        await editUserInformation(userId,values.firstName,values.lastName,values.email,values.password).then(r =>
        dispatch(successMessageAction(true))).catch(err => dispatch(failedMessageAction(true)))
        dispatch(refreshStateAction(!refresh))
        handleClose()
    }

    return(
        <div className={''}>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>

                        <p className={'add-form__title'}>
                            Profile Edit</p>
                        <hr className={'modal__hr'}/>

                        <Formik enableReinitialize
                                initialValues={
                                    {
                                        firstName: userInformation.firstName,
                                        lastName: userInformation.lastName,
                                        email: userInformation.email,
                                        password: '',
                                    }
                                }
                                onSubmit={handleSubmit}
                                validationSchema={editProfileValidation}
                        >
                            <Form className={'add-pr__form'} >
                                <p>First Name:</p>
                                <div>
                                    <Field placeholder='First Name'
                                           name='firstName'
                                           className={'add-form__input'}
                                    />
                                    <img className={'icon'}  src={name}/>
                                </div>
                                <ErrorMessage name={'firstName'}
                                              className={'ErrorMessage'}
                                              component={'div'}/>

                                <p>Last Name:</p>
                                <Field placeholder='Last Name'
                                       name='lastName'
                                       className={'add-form__input'}
                                />
                                <ErrorMessage name={'lastName'}
                                              className={'ErrorMessage'}
                                              component={'div'}/>

                                <p>E-mail:</p>
                                <div>
                                    <Field placeholder='E-male'
                                           name='email'
                                           className={'add-form__input'}
                                    />
                                    <img className={'icon'}  src={mail} />
                                </div>
                                <ErrorMessage name={'email'}
                                              className={'ErrorMessage'}
                                              component={'div'}/>

                                <p>Password:</p>
                                <div>
                                    <Field placeholder='Password'
                                           type={'password'}
                                           name='password'
                                           className={'add-form__input'}
                                    />
                                    <img className={'icon passw_icon'} src={pass} />
                                </div>
                                <ErrorMessage name={'password'}
                                              className={'ErrorMessage'}
                                              component={'div'}/>

                                <button type={'submit'}
                                        className={'form__button add-form__button'}
                                >
                                    Save
                                </button>
                            </Form>
                        </Formik>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
export default ProductEditModal