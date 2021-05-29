import Header from "./header/Header";
import SortSection from "./catalog/SortSection";
import CatalogItem from "./catalog/CatalogItem";
import {useEffect, useState} from "react";


const Main = () => {


    const [numbOfSelected,setNumbOfSelected] = useState(0)
    const [information, setInformation] = useState([])
    const [selectAllProducts,setSelectAllProducts] = useState(false)
    const [arr,setArr] = useState([])


    const connectAPI = async () => {
        const request = await fetch(`https://fakestoreapi.com/products`)
        return await request.json()
    }


    const sortType = (value) => {
        setArr([...information])
        if (value === "priceAsc") {
            setArr(arr.sort((a, b) => a.price - b.price))

        } else if (value === "priceDesc") {
            setArr(arr.sort((a, b) => b.price - a.price))

        } else if (value === "profitAsc") {
            setArr(arr.sort((a, b) => {
                if (a.title < b.title) return -1;
                else if (a.title > b.title) return 1;
                else return 0;
            }))
        } else if (value === "profitDesc") {
            setArr(arr.sort((a, b) => {
                    if (a.title > b.title) return -1;
                    else if (a.title < b.title) return 1;
                    else return 0;
                })
            )
        }    console.log(arr)}

    console.log(arr)

    useEffect(() => {
        connectAPI().then(iformationData => {
            setInformation(iformationData)
        })
    },[])

    const selectCount = (action) => {
        setNumbOfSelected(numbOfSelected + action)
    }

    const selectProducts = (click) => {
       return  setSelectAllProducts(click)
    }




        return(
        <main className="main">

            <Header selectedNumber={numbOfSelected} productNumber={information.length} slectButton={selectProducts} />

            <SortSection onChange={sortType}/>

            <div className="catalog">

                {arr.map(item => {
                    return <CatalogItem title={item.title} img={item.image} price={item.price} description={item.description} onChange={selectCount} selectAll={selectAllProducts}  />
                    })
                }

            </div>


        </main>
    )
}

export default Main