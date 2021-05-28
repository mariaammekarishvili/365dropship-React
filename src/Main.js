import Header from "./header/Header";
import SortSection from "./catalog/SortSection";
import CatalogItem from "./catalog/CatalogItem";
import {useEffect, useState} from "react";
import ItemTable from "./catalog/ItemTable";


const Main = () => {


    const [numbOfSelected,setNumbOfSelected] = useState(0)
    const [information, setInformation] = useState([])
    // const [inputText, setInputText] = useState('')
    const [selectAllProducts,setSelectAllProducts] = useState(false)
    const [arr,setArr] = useState('')
    const [isShown,setIsShown] = useState(false)

    const connectAPI = async () => {
        const request = await fetch(`https://fakestoreapi.com/products`)
        return await request.json()
    }

    const chaingShown = (click) => {
        setIsShown(click)
    }


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
    //
    // const sort = (type) => {
    //     setArr(type)
    // }
    // console.log(arr)

    console.log(information)



        return(
        <main className="main">

            {/*<Header bfunction={changetTitle} mfunction = {changeInputText} ivalue = {inputText}/>*/}
            <Header selectedNumber={numbOfSelected} productNumber={information.length} slectButton={selectProducts} />

            <SortSection/>

            <div className="catalog">

                {information.map(item => {
                    return <CatalogItem title={item.title} img={item.image} price={item.price} description={item.description} onChange={selectCount} selectAll={selectAllProducts} onClick={chaingShown} />
                    })
                }

            </div>

            {/*{isShown && <ItemTable title={item.title} img={item.image} price={item.price} description />}*/}
        </main>
    )
}

export default Main