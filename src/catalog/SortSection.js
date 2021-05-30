import {useState} from "react";


const SortSection = ({onChange}) => {

    return(
    <div className="sort-section">
        <select onChange={(e) => onChange(e.target.value)} id="sort">
            <option  value="priceAsc">Price: Low To High</option>
            <option  value="priceDesc">Price: High To Low</option>
            <option  value="profitAsc">Profit: High To Low</option>
            <option  value="profitDesc">Profit: Low To High</option>
        </select>
    </div>
    )
}

export default SortSection