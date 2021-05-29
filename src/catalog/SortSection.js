import {useState} from "react";


const SortSection = ({sort,onChange}) => {

    const[sortType,setSortType] = useState('')

    const chaingeTipe = (e) => {
        setSortType(e.target.value)
        onChange(sortType)
    }
    console.log(sortType)

    return(
    <div className="sort-section">
        <select onChange={chaingeTipe} id="sort">
            <option  value="priceAsc">Price: High To Low</option>
            <option  value="priceDesc">Price: Low To High</option>
            <option  value="profitAsc">Profit: High To Low</option>
            <option  value="profitDesc">Profit: Low To High</option>
        </select>
    </div>
    )
}

export default SortSection