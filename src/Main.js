import Header from "./header/Header";
import SortSection from "./catalog/SortSection";
import CatalogItem from "./catalog/CatalogItem";
import {useEffect, useState} from "react";


const Main = () => {


    const [numbOfSelected,setNumbOfSelected] = useState(0)
    const [information, setInformation] = useState([])
    // const [inputText, setInputText] = useState('')


    const connectAPI = async () => {
        const request = await fetch(`https://fakestoreapi.com/products`)
        return await request.json()
    }

    useEffect(() => {
        connectAPI().then(iformationData => {
            setInformation(iformationData)
        })
    },[])

    const selectCount = (action) => {
        setNumbOfSelected(numbOfSelected + action)
        console.log(numbOfSelected)
    }


    // const changeInputText = (e) => {
    //     setInputText(e.target.value)
    // }


    // console.log(information)

        return(
        <main className="main">

            {/*<Header bfunction={changetTitle} mfunction = {changeInputText} ivalue = {inputText}/>*/}
            <Header selectedNumber={numbOfSelected} productNumber={information.length}/>
            {/*<SortSection />*/}
            {/*<div className="sort-section">*/}
            {/*    <select id="sort">*/}
            {/*        <option value="priceAsc" onClick={Sort}>Price: High To Low</option>*/}
            {/*        <option value="priceDesc" onClick={Sort}>Price: Low To High</option>*/}
            {/*        <option value="profitAsc" onClick={Sort}>Profit: High To Low</option>*/}
            {/*        <option value="profitDesc" onClick={Sort}>Profit: Low To High</option>*/}
            {/*    </select>*/}
            {/*</div>*/}
            {/*<CatalogSection/>*/}

            <div className="catalog">

                {information.map(item => {
                    return <CatalogItem title={item.title} img={item.image} price={item.price} onChange={selectCount}/>
                    })
                }

            </div>
        </main>
    )
}

export default Main