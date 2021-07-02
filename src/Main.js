import Header from "./header/Header";
import SortSection from "./catalog/SortSection";
import CatalogItem from "./catalog/CatalogItem";
import {useEffect, useState} from "react";
import {useHistory, useParams} from 'react-router-dom'
import Modal from './catalog/Modal'
import axios from "axios";
import {Link} from "react-router-dom";
import {Box, Grid, Hidden} from "@material-ui/core";
import {products as productsData} from "./API";
import Navigation from "./common/Navigation";
import AsideBar from "./asideBar/AsideBar";

const Main = () => {

    const [products, setProducts] = useState([])
    const [productsList, setProductsList] = useState([])
    const [numbOfSelected, setNumbOfSelected] = useState(0)
    const [markType, setMarkType] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [sortState, setSortState] = useState('default')

    const {id} = useParams();
    const {category} = useParams()


    useEffect(() => {
        productsData().then(result =>{
        setProducts(result)})
    },[])


    // useEffect(() => {
    //     if(category){
    //     fetch(`https://fakestoreapi.com/products/category/${category}`)
    //         .then(res => res.json())
    //         .then(res => {
    //             setProducts(res)
    //         })}
    //     else {
    //         fetch(`https://fakestoreapi.com/products`)
    //             .then(res => res.json())
    //             .then(res => {
    //                 setProducts(res)
    //             })}
    // },[category])



    useEffect(() => {
            setProductsList(sortType(products.filter((value) => {
                return value.title.toLowerCase().includes(searchValue.toLowerCase())
            }), sortState))
        }, [sortState, searchValue,category,products])

    console.log(sortState)

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

    const selectCount = (action) => {
        setNumbOfSelected(numbOfSelected + action)
    }
    const markProducts = (click) => {
        return setMarkType(click)
    }
    useEffect(() => {
        if (markType === 'select') {
            setNumbOfSelected(products.length)
        } else if (markType === 'clear') {
            setNumbOfSelected(0)
            setMarkType('')
        } else {
            setNumbOfSelected(setNumbOfSelected)
        }
    }, [markType])



    return (
        <>
     <Hidden xsDown><Navigation/></Hidden>
     <Hidden smDown><AsideBar/></Hidden>


        <main className="main">


            <Header selectedNumber={numbOfSelected}
                    productNumber={products.length}
                    input={setSearchValue}
                    slectButton={markProducts}
                    clearButton={numbOfSelected}/>

            <SortSection onChange={setSortState}/>

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
                              spacing={1}  >
                           {/*<Link to={`/catalog/${category}/${item.id}`}>*/}

                                    <CatalogItem title={item.title}
                                                 key = {item.id}
                                                 img={item.imageUrl} price={item.price}
                                                 description={item.description}
                                                 onChange={selectCount}
                                                 select={markType}
                                                 id={item.id}
                                                 category={category}/>
                           {/*</Link>*/}

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