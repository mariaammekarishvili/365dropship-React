import {useState} from "react";


const SortSection = ({sort}) => {

    const[sortType,setSortType] = useState('A')
    const chaingeTipe = (e) => {
        setSortType(e.currentTarget.textContent)
        sort(sortType)
    }

    console.log(sortType)

    return(
    <div className="sort-section">
        <select id="sort">
            <option onClick={chaingeTipe} value="priceAsc">Price: High To Low</option>
            <option onClick={chaingeTipe} value="priceDesc">Price: Low To High</option>
            <option onClick={chaingeTipe} value="profitAsc">Profit: High To Low</option>
            <option onClick={chaingeTipe} value="profitDesc">Profit: Low To High</option>
        </select>
    </div>
    )
}

export default SortSection