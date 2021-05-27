// const numberOfselected = () => {
//     setSelectedItemNumb(itemSelected ? selectedItemNumb + 1 : 2)
//     console.log(selectedItemNumb)
// }
//
// console.log(information)
//     const Sort = sortTipe => {
//         if (sortTipe === "priceAsc"){
//             return connectAPI().then(list =>
//                 list.sort((a,b) => a.price - b.price)
//             )
//         }else if (sortTipe === "priceDesc") {
//             return connectAPI().then(list =>
//                 list.sort((a, b) => b.price - a.price)
//             )
//         }else if  (sortTipe === "profitAsc"){
//             return connectAPI().then(list =>{
//             return list.sort((a, b) => {
//                 if (a.title < b.title) return -1;
//                 else if (a.title > b.title) return 1;
//                 else return 0;
//             })
//             });
//         }else if (sortTipe === "profitAsc"){
//             return connectAPI().then(list => {
//                 return list.sort((a, b) => {
//                     if (a.title > b.title) return -1;
//                     else if (a.title < b.title) return 1;
//                     else return 0;
//                 })
//             })
//         }
//     }