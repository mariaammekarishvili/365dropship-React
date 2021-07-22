import {useEffect, useState} from "react";
import Navigation from "./common/Navigation";
import {Fade, Hidden} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {creatProduct, getProduct, updateProduct} from "./API/ProductAPI";
import {Form, Formik, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import './CSS/AddProduct.css'
import {useHistory, useParams} from "react-router-dom";
import {headerModalOpenAction} from "./reducers/CommonReducers/HeaderModalActions";
import Backdrop from "@material-ui/core/Backdrop";
import {useStyles} from "./CSS/ModalStyle";
import Modal from "@material-ui/core/Modal";
import {editProductAction, refreshStateAction, unselectAllIdAction} from "./reducers/ProductReducer/ProductActions";
import price from '../src/img/price-tag.png'
import title from '../src/img/title.png'
import link from '../src/img/link.png'

const creatProductValidation = yup.object().shape({
    title:          yup.string().min(2).max(20),
    description:    yup.string().min(8).max(300),
    price:          yup.number().integer().min(20),
    imageUrl:       yup.string().url()
})
const ProductEditModal = () => {
    const classes = useStyles();
    const [product, setProduct] = useState({})
    const history = useHistory()
    const dispatch = useDispatch()
    const open = useSelector(state => state.products.editProductMode)
    const isAdmin = useSelector(state => state.ProfileReducer.isAdmin)
    const productId = useSelector(state => state.products.selectedId[0])
    const refresh = useSelector(state => state.products.needRefresh)


    console.log(open)
    const handleClose = () => {
        dispatch(editProductAction(false))
    }


    useEffect(() => {
            if(productId){
                getProduct(productId).then(res => {
                    setProduct(res)
                })
                if(isAdmin === false){
                    history.push('/catalog')
                }
            }},[productId])

    const handleSubmit = values => {
        if(productId){
            updateProduct(productId,values).then(res => {
                alert('Update Successful!')
                dispatch(refreshStateAction(!refresh))
                dispatch(editProductAction(false))
            }).catch(err => alert(err.message))
        } else {
            creatProduct(values).then(res => {
                console.log(res)
                alert('Add successfully')
                dispatch(refreshStateAction(!refresh))
                dispatch(editProductAction(false))
            })
        }
        history.push('/catalog')
        dispatch(unselectAllIdAction([]))
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
                        {productId ? 'Edit' : 'Add'} products</p>
                    <hr className={'modal__hr'}/>

            <Formik enableReinitialize
                    initialValues={productId ?
                        {
                            title: product.title,
                            description: product.description,
                            price: product.price,
                            imageUrl: product.imageUrl
                        } :
                    {
                        title: '',
                        description: '',
                        price: '',
                        imageUrl: ''
                    }}
                        onSubmit={handleSubmit}
                        validationSchema={creatProductValidation}
            >
               <Form className={'add-pr__form'} >
                        <p>Title:</p>
                   <div>
                        <Field placeholder='Title'
                        name='title'
                        className={'add-form__input'}
                        />
                       <img className={'icon title-icon'} src={title}/>
                   </div>
                        <ErrorMessage name={'title'}
                        className={'ErrorMessage'}
                        component={'div'}/>

                        <p>Description:</p>
                        <Field placeholder='Description'
                        component='textarea'
                        name='description'
                        className={'add-form__input textarea'}
                        />
                        <ErrorMessage name={'description'}
                        className={'ErrorMessage'}
                        component={'div'}/>

                        <p>price $:</p>
                   <div>
                        <Field placeholder='Price'
                        name='price'
                        className={'add-form__input'}
                        />
                        <img className={'icon'} src={price} />
                   </div>
                        <ErrorMessage name={'price'}
                        className={'ErrorMessage'}
                        component={'div'}/>

                        <p>Picture URL:</p>
                   <div>
                        <Field placeholder='Image URL'
                        name='imageUrl'
                        className={'add-form__input'}
                        />
                        <img className={'icon'} src={link}/>
                   </div>
                        <ErrorMessage name={'imageUrl'}
                        className={'ErrorMessage'}
                        component={'div'}/>

                        <button type={'submit'}
                        className={'form__button add-form__button'}>
                        Submit
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