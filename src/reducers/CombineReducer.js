import {combineReducers} from "redux";
import {ProductReducer} from "./ProductReducer/ProductReducer";
import {GetCartReducer} from "./CartReducer/GetCartReducer";
import {SortReducer} from "./SortReducer/SortReducer";
import {SelectReducer} from "./SelectReducer/SelectReducer";
import {HeaderModalReducer} from "./CommonReducers/HeaderModalReducer";
import {ProfileReducer} from "./ProfileReducer/ProfileReducer";

export const combineReducer = combineReducers({
    products: ProductReducer,
    getCart: GetCartReducer,
    inputSort: SortReducer,
    select: SelectReducer,
    headerModal: HeaderModalReducer,
    ProfileReducer: ProfileReducer,
})