import Header from "./header/Header";
import SortSection from "./catalog/SortSection";
import CatalogItem from "./catalog/CatalogItem";
import {useEffect, useState} from "react";


const Main = () => {

    const [information, setInformation] = useState([])
    const [numbOfSelected,setNumbOfSelected] = useState(0)
    const [selectAllProducts,setSelectAllProducts] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [sortState, setSortState] = useState('default')

    const connectAPI = async () => {
        const request = await fetch(`https://fakestoreapi.com/products`)
        return await request.json()
    }

    useEffect(() => {
        connectAPI().then(iformationData => {
            setInformation(iformationData)
        })
    },[])

    const sortType = (products, sortState) => {
        if(sortState == "priceDesc"){
           return [ ...products.sort((a, b) => (a.price < b.price) ? 1 : -1)]
        }
        else if(sortState == "priceAsc"){
           return [...products.sort((a, b) => (a.price > b.price) ? 1 : -1)]
        }
        else if(sortState == "profitDesc"){
           return [ ...products.sort((a, b) => (a.title > b.title) ? 1 : -1)]
        }
        else if(sortState == "profitAsc"){
           return [ ...products.sort((a, b) => (a.title < b.title) ? 1 : -1)]
        }else
        return [...products]
    }

    const filteredProducts = information.filter((value) => {
        return value.title.toLowerCase().includes(searchValue.toLowerCase())
    })

    const sortedProduct = sortType(filteredProducts, sortState)

    const selectCount = (action) => {
        setNumbOfSelected(numbOfSelected + action)
    }

    useEffect( () => {
           if(selectAllProducts){
             setNumbOfSelected(sortedProduct.length )
           }else if(!selectAllProducts){
             setNumbOfSelected(0 )
           }else {
               setNumbOfSelected(setNumbOfSelected)
           }
    },[selectAllProducts])

    const selectProducts = (click) => {
       return  setSelectAllProducts(click)
    }

        return(

        <main className="main">

            <Header selectedNumber={numbOfSelected} productNumber={sortedProduct.length} input={setSearchValue} slectButton={selectProducts} />

            <SortSection onChange={setSortState}/>

            <div className="catalog">

                {(sortedProduct).map(item => {
                    return <CatalogItem title={item.title} img={item.image} price={item.price} description={item.description}  onChange={selectCount} selectAll={selectAllProducts}  />
                    })
                }

            </div>

        </main>


    )
}

export default Main