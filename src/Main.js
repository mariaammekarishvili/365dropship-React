import Header from "./header/Header";
import SortSection from "./catalog/SortSection";
import CatalogItem from "./catalog/CatalogItem";
import {useEffect, useState} from "react";
import {useHistory, useParams} from 'react-router-dom'
import Modal from './catalog/Modal'
import axios from "axios";
import {Link} from "react-router-dom";
import {Box, Grid, Hidden} from "@material-ui/core";
import {products as productsData, updateProduct} from "./API";
import Navigation from "./common/Navigation";
import AsideBar from "./asideBar/AsideBar";
import {addToCart as cartRequest} from './API'


const Main = () => {

    const [products, setProducts] = useState([])
    const [productsList, setProductsList] = useState([])
    const [selectedProductId, setSelectedProductId] = useState([])
    const [selectedProductQty, setSelectedProductQty] = useState([])
    const [markType, setMarkType] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [sortState, setSortState] = useState('default')
    const [numbOfSelected, setNumbOfSelected] = useState(selectedProductId.length)

    const {id} = useParams();
    const {category} = useParams()


    useEffect(() => {
        productsData().then(result =>{
        setProducts(result)})
    },[])



    useEffect(() => {
            setProductsList(sortType(products.filter((value) => {
                return value.title.toLowerCase().includes(searchValue.toLowerCase())
            }), sortState))
        }, [sortState, searchValue,category,products])



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


    const selectedIds = (id) => {
        setSelectedProductId([...selectedProductId,id])
    }
    const selectedQty = (qty) => {
        let add = (qty > 0 ? qty : 1)
        setSelectedProductQty([...selectedProductQty,add])
    }

    const markProducts = (click) => {
        return setMarkType(click)
    }

    // console.log(selectedProductQty)

    const addToCart = (req) => {
        if (req === 'add'){
            for(let i =0 ;i < selectedProductQty.length;i++){
                cartRequest(selectedProductId[i], selectedProductQty[i])
                    .then(res => {
                        alert('Add Successfully')
                    }).catch(err => alert(err.message))
            }
        }
    }


    useEffect(() => {
        setNumbOfSelected(selectedProductQty.length)
        if (markType === 'select') {
            setNumbOfSelected(products.length)
        } else if (markType === 'clear') {
            setNumbOfSelected(0)
            setSelectedProductQty([])
            setSelectedProductId([])
            setMarkType('')
        } else {
            setNumbOfSelected(setNumbOfSelected)
        }
    }, [markType,selectedProductQty])

    console.log(selectedProductId, selectedProductQty)


    return (
        <>
     <Hidden xsDown><Navigation/></Hidden>
     <Hidden smDown><AsideBar/></Hidden>


        <main className="main">


            <Header selectedNumber={numbOfSelected}
                    productNumber={products.length}
                    input={setSearchValue}
                    slectButton={markProducts}
                    clearButton={numbOfSelected}
                    cartReq = {addToCart}
                    />

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
                                                 selectId={selectedIds}
                                                 selectQty={selectedQty}
                                                 select={markType}
                                                 id={item.id}
                                                 category={category}
                                                 catalog
                                                    />
                           {/*</Link>*/}
                           {/* {setSelectedProductId(markType === 'select' ? [...selectedProductId,item.id] : (selectedProductId))}*/}
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