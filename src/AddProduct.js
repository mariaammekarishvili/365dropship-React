import {creatProduct, getProduct, updateProduct, updeatProduct} from "./API";
import {Form, Formik, Field} from 'formik'
import * as yup from 'yup'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const creatProductValidation = yup.object().shape({
    title:          yup.string().min(2).max(20),
    description:    yup.string().min(10).max(300),
    price:          yup.number().integer().max(20),
    imageUrl:       yup.string().url()
})

const AddProduct = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState({})

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
            }).catch(err => alert(err.message))
        } else {
            creatProduct(values).then(res => {
                console.log(res)
                alert('Add successfully')
            })
        }
    }


    return(
        <div>
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
                onSubmit={values => {
                    creatProduct(values)
                }}
                    validationSchema={creatProductValidation}
            >
                <Form onSubmit={handleSubmit}>
                    <Field placeholder='Title'
                           name='title'
                    />
                    <Field placeholder='Description'
                           component='textarea'
                            name='description'
                    />
                    <Field placeholder='Price'
                           name='price'
                    />
                    <Field placeholder='Image URL'
                           name='imageUrl'
                    />
                    <input type={'submit'}
                           value={'Save'}
                           />
                </Form>
            </Formik>

        </div>
    )
}

export default AddProduct