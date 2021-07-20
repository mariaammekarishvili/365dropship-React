import {useEffect, useState} from "react";
import {products as productsData} from "./API/URL";


const TestCatalog = () => {

    const [products, setProducts] = useState([])



    useEffect(() => {
        productsData().then(result =>{
            setProducts(result)
        })
    },[])

    return(
        <div>

            {products.map(item =>
                <p>{item.title}</p>
            )}
        </div>
    )
}

export default TestCatalog