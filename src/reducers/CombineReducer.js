import {combineReducers} from "redux";
import {ProductReducer} from "./ProductReducer/ProductReducer";
import {GetCartReducer} from "./CartReducer/GetCartReducer";
import {SortReducer} from "./SortReducer/SortReducer";
import {SelectReducer} from "./SelectReducer/SelectReducer";

export const combineReducer = combineReducers({
    products: ProductReducer,
    getCart: GetCartReducer,
    inputSort: SortReducer,
    select: SelectReducer,

})