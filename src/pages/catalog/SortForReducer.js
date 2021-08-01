export const sortType = (result, sortState) => {
    if (sortState == "priceDesc") {
        return [...result.sort((a, b) => (a.price < b.price) ? 1 : -1)]
    } else if (sortState == "priceAsc") {
        return [...result.sort((a, b) => (a.price > b.price) ? 1 : -1)]
    } else if (sortState == "profitDesc") {
        return [...result.sort((a, b) => (a.title > b.title) ? 1 : -1)]
    } else if (sortState == "profitAsc") {
        return [...result.sort((a, b) => (a.title < b.title) ? 1 : -1)]
    } else
        return [...result]
}