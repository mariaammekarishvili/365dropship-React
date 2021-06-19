import Header from "./header/Header";
import SortSection from "./catalog/SortSection";
import CatalogItem from "./catalog/CatalogItem";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import Modal from './catalog/Modal'
import axios from "axios";
import {Link} from "react-router-dom";
import {Box, Grid} from "@material-ui/core";


const Main = (props) => {

    const [products, setProducts] = useState([])
    const [numbOfSelected, setNumbOfSelected] = useState(0)
    const [markType, setMarkType] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [sortState, setSortState] = useState('default')

    const {id} = useParams();


    useEffect(() => {
        axios
            .get("http://fakestoreapi.com/products/category/women's%20clothing")
            .then(res => {
                localStorage.setItem('womenCloth', JSON.stringify(res.data));
            })
        axios
            .get('https://fakestoreapi.com/products/category/jewelery')
            .then(res => {
                localStorage.setItem('jewelery', JSON.stringify(res.data));
            })
        axios
            .get('https://fakestoreapi.com/products/category/electronics')
            .then(res => {
                localStorage.setItem('electronics', JSON.stringify(res.data));
            })
        axios
            .get('https://fakestoreapi.com/products/category/men\'s%20clothing')
            .then(res => {
                localStorage.setItem('menCloth', JSON.stringify(res.data));
            })
        axios
            .get('https://fakestoreapi.com/products')
            .then(res => {
                localStorage.setItem('products', JSON.stringify(res.data));
            })
    }, [])


    useEffect(() => {
        if (localStorage.getItem(`${props.category}`)) {
            const productsList = JSON.parse(localStorage.getItem(`${props.category}`));
            setProducts(sortType(productsList.filter((value) => {
                return value.title.toLowerCase().includes(searchValue.toLowerCase())
            }), sortState))
        }
    }, [sortState, searchValue, props.category])

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
                        >

                    {(products).map(item =>
                        <Grid item xs={12} sm={6}md={5} lg={4}  xl={3} wrap={"wrap"}>
                           <Link to={`/catalog/${item.id}`}>
                                    <CatalogItem title={item.title}
                                                 img={item.image} price={item.price}
                                                 description={item.description}
                                                 onChange={selectCount}
                                                 select={markType}
                                                 id={item.id}/>
                           </Link>


                        </Grid>
                    )}
                    <Modal openId={id}/>
                </Grid>
            </Box>
        </main>
    )
}

export default Main