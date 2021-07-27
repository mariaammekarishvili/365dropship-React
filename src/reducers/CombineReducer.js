import {combineReducers} from "redux";
import {ProductReducer} from "./ProductReducer/ProductReducer";
import {GetCartReducer} from "./CartReducer/GetCartReducer";
import {HeaderModalReducer} from "./CommonReducers/HeaderModalReducer";
import {ProfileReducer} from "./ProfileReducer/ProfileReducer";
import {SnackbarReducer} from "./CommonReducers/SnackbarReducer";


export const combineReducer = combineReducers({
    products: ProductReducer,
    getCart: GetCartReducer,
    headerModal: HeaderModalReducer,
    ProfileReducer: ProfileReducer,
    Messages: SnackbarReducer,
})