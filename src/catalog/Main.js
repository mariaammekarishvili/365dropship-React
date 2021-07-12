import Header from "../header/Header";
import SortSection from "./SortSection";
import CatalogItem from "./CatalogItem";
import {useEffect, useState} from "react";
import {useHistory, useParams} from 'react-router-dom'
import Modal from './Modal'
import {Box, Grid, Hidden} from "@material-ui/core";
import {products as productsData, updateProduct} from "../API";
import Navigation from "../common/Navigation";
import AsideBar from "../asideBar/AsideBar";
import {useDispatch, useSelector} from "react-redux";
import {getProductsAction} from "../reducers/ProductReducer/ProductDispatch";


const Main = () => {
    const [productsList, setProductsList] = useState([])

    const products = useSelector( state => state.products.productList)
    const sortState = useSelector(state => state.inputSort.sortState)
    const inputText = useSelector( state => state.inputSort.inputText);
    const dispatch = useDispatch();

    const {id} = useParams();
    const {category} = useParams()
    const history = useHistory()

    useEffect(() => {
        productsData().then(result =>{
            dispatch(getProductsAction(result))
        })
    },[])

    useEffect(() => {
            setProductsList(sortType(products.filter((value) => {
                return value.title.toLowerCase().includes(inputText.toLowerCase())
            }), sortState))
        }, [sortState, inputText,category,products])

    const sortType = (products, sortState) => {
        if (sortState == "priceDesc") {
            return [...products.sort((a, b) => (a.price < b.price) ? 1 : -1)]
        } else if (sortState == "priceAsc") {
            return [...products.sort((a, b) => (a.price > b.price) ? 1 : -1)]
        } else if (sortState == "profitDesc") {
            return [...products.sort((a, b) => (a.title > b.title) ? 1 : -1)]
        } else if (sortState == "profitAsc") {
            return [...products.sort((a, b) => (a.title < b.title) ? 1 : -1)]
        } else
            return [...products]
    }

    return (
        <>
         <Hidden xsDown><Navigation/></Hidden>
         <Hidden smDown><AsideBar/></Hidden>

        <main className="main">
            <Header products={productsList}/>

            <SortSection/>

            <Box p={3}>
                <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                      wrap={"wrap"}
                      m={0}
                      spacing={2}
                        >
                    {productsList.map(item =>
                        <Grid item xs={12} sm={6} md={5} lg={4} xl={3}
                              wrap={"wrap"}
                              spacing={1}>
                                    <CatalogItem title={item.title}
                                                 key = {item.id}
                                                 img={item.imageUrl} price={item.price}
                                                 description={item.description}
                                                 id={item.id}
                                                 catalog/>
                             </Grid>
                    )}
                    <Modal openId={id}/>
                </Grid>
            </Box>
        </main>
            </>
    )
}

export default Main