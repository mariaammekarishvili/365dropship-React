import {combineReducers} from "redux";
import {ProductReducer} from "./ProductReducer/ProductReducer";
import {GetCartReducer} from "./CartReducer/GetCartReducer";
import {ProfileReducer} from "./ProfileReducer/ProfileReducer";
import {CommonReducer} from "./CommonReducers/CommonReducer";
import {UserReducer} from "./UsersReducer/UsersReducer";



export const combineReducer = combineReducers({
    products: ProductReducer,
    getCart: GetCartReducer,
    headerModal: CommonReducer,
    ProfileReducer: ProfileReducer,
    Messages: CommonReducer,
    Common: CommonReducer,
    users: UserReducer,
})