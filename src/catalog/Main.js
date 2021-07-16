import Header from "../header/Header";
import SortSection from "./SortSection";
import CatalogItem from "./CatalogItem";
import {useEffect} from "react";
import {useParams} from 'react-router-dom'
import Modal from './Modal'
import {Box, Grid, Hidden} from "@material-ui/core";
import {products as productsData} from "../API";
import Navigation from "../common/Navigation";
import AsideBar from "../asideBar/AsideBar";
import {useDispatch, useSelector} from "react-redux";
import {getProductsAction} from "../reducers/ProductReducer/ProductDispatch";
import {sortType} from "../SortForReducer";
import {adminInformationAction} from "../reducers/ProfileReducer/ProfileDispatch";



const Main = () =>{

    const products = useSelector( state => state.products.productList)
    const sortState = useSelector(state => state.inputSort.sortState)
    const inputText = useSelector(state => state.inputSort.inputText)
    const dispatch = useDispatch();

    const {id} = useParams();
    const {category} = useParams()

    useEffect(() => {
        productsData().then(result => {
            let list = (sortType(result.filter((value) => {
                return value.title.toLowerCase().includes(inputText.toLowerCase())
            }), sortState))
            dispatch(getProductsAction(list))
        })
    }, [sortState, inputText, products])

    useEffect(() => {
            const userAdminInformation = JSON.parse((localStorage.getItem('user')))
            dispatch(adminInformationAction(userAdminInformation.isAdmin))
    },[])

    return (
        <>
         <Hidden xsDown><Navigation/></Hidden>
         <Hidden smDown><AsideBar/></Hidden>

        <main className="main">
            <Header products={products}/>

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
                    {products.map(item =>
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