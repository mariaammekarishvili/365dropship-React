

const SortSection = () => {
    return(
    <div className="sort-section">
        <select id="sort">
            <option value="priceAsc">Price: High To Low</option>
            <option value="priceDesc">Price: Low To High</option>
            <option value="profitAsc">Profit: High To Low</option>
            <option value="profitDesc">Profit: Low To High</option>
        </select>
    </div>
    )
}

export default SortSection