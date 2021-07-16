import {creatProduct, getProduct, updateProduct, updeatProduct} from "./API";
import {Form, Formik, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import './CSS/AddProduct.css'
import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Navigation from "./common/Navigation";
import {Hidden} from "@material-ui/core";
import {useSelector} from "react-redux";

const creatProductValidation = yup.object().shape({
    title:          yup.string().min(2).max(20),
    description:    yup.string().min(8).max(300),
    price:          yup.number().integer().min(20),
    imageUrl:       yup.string().url()
})

const AddProduct = () => {
    const history = useHistory()
    const isAdmin = useSelector(state => state.ProfileReducer.isAdmin)

    useEffect(() => {
        if(isAdmin === false){
            history.push('/catalog')
        }
    })

    const handleSubmit = values => {
            creatProduct(values).then(res => {
                console.log(res)
                alert('Add successfully')
            })
        history.push('/catalog')
    }

    return(
        <div className={'add-form'}>
            <Hidden xsDown><Navigation/></Hidden>
            <div className={'add-form__box'}>
                <p className={'add-form__title'}>
                    Add products</p>

                <Formik enableReinitialize
                    initialValues={
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