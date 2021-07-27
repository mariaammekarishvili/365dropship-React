import {combineReducers} from "redux";
import {ProductReducer} from "./ProductReducer/ProductReducer";
import {GetCartReducer} from "./CartReducer/GetCartReducer";
import {ProfileReducer} from "./ProfileReducer/ProfileReducer";
import {CommonReducer} from "./CommonReducers/CommonReducer";


export const combineReducer = combineReducers({
    products: ProductReducer,
    getCart: GetCartReducer,
    headerModal: CommonReducer,
    ProfileReducer: ProfileReducer,
    Messages: CommonReducer,
    Common: CommonReducer
})