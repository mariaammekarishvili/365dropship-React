import {creatProduct, getProduct, updateProduct, updeatProduct} from "./API";
import {Form, Formik, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import './CSS/AddProduct.css'
import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Navigation from "./common/Navigation";
import {Hidden} from "@material-ui/core";

const creatProductValidation = yup.object().shape({
    title:          yup.string().min(2).max(20),
    description:    yup.string().min(8).max(300),
    price:          yup.number().integer().min(20),
    imageUrl:       yup.string().url()
})

const AddProduct = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState({})
    const history = useHistory()

    useEffect(() => {
        if(productId){
            getProduct(productId).then(res => {
                setProduct(res)
            })
        }
    },[productId])

    const handleSubmit = values => {
        if(productId){
            updateProduct(productId,values).then(res => {
                alert('Update Successful!')
                history.push('/addProduct')
            }).catch(err => alert(err.message))
        } else {
            creatProduct(values).then(res => {
                console.log(res)
                alert('Add successfully')
            })
        }
    }

    return(
        <div className={'add-form'}>
            <Hidden xsDown><Navigation/></Hidden>
            <div className={'add-form__box'}>
                <p className={'add-form__title'}>
                    {productId ? 'Edit' : 'Add'} products</p>

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
                    <Form className={'add-form__Form'} >
                        <p>Product Title:</p>
                        <Field placeholder='Title'
                               name='title'
                               className={'add-form__input'}
                        />
                        <ErrorMessage name={'title'}
                                      className={'ErrorMessage'}
                                      component={'div'}/>

                        <p>Product Description:</p>
                        <Field placeholder='Description'
                               component='textarea'
                                name='description'
                               className={'add-form__input'}

                        />
                        <ErrorMessage name={'description'}
                                      className={'ErrorMessage'}
                                      component={'div'}/>

                        <p>Enter price $:</p>
                        <Field placeholder='Price'
                               name='price'
                               className={'add-form__input'}

                        />
                        <ErrorMessage name={'price'}
                                      className={'ErrorMessage'}
                                      component={'div'}/>

                        <p>Add Picture URL:</p>
                        <Field placeholder='Image URL'
                               name='imageUrl'
                               className={'add-form__input'}

                        />
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
        </div>
    )
}

export default AddProduct