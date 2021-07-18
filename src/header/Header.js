import React, {useState, useEffec, useEffect} from 'react';
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {SortReducer} from "../reducers/SortReducer/SortReducer";
import {inputSortAction} from "../reducers/SortReducer/SortDispatch";
import {MARK_TYPE_CHANGE} from "../reducers/Actions";
import {selectAllAction, selectProductIdAction, unselectAllIdAction} from "../reducers/SelectReducer/SelectDispatch";
import {addToCart, addToCart as cartRequest} from "../API";
import {getProductsAction} from "../reducers/ProductReducer/ProductDispatch";
import {useHistory} from "react-router-dom";
import HeaderModal from "./HeaderModal";
import {headerModalOpenAction} from "../reducers/CommonReducers/HeaderModalDispatch";
import SearchBox from "./SearchBox";

const Header = ({products}) => {

    const selectedId = useSelector(state => state.select.selectedId)
    const selectedQty = useSelector(state => state.select.selectedQty)
    const selectedType = useSelector(state => state.select.selectType)
    const isAdmin = useSelector(state => state.ProfileReducer.isAdmin)
    const dispatch = useDispatch();
    const history = useHistory()

    const handleOpen = () => {
        dispatch(headerModalOpenAction(true));
    };

    const changeInputText = (e) => {
        dispatch(inputSortAction(e.target.value))
    }

    const selectTypeChange = (e) => {
        if (e.target.value === 'select') {
            dispatch(selectAllAction('select'))
            for (let i = 0; i < products.length; i++) {
                dispatch(selectProductIdAction(products[i].id))
            }
        } else if (e.target.value === 'clear') {
            dispatch(selectAllAction('clear'))
            dispatch(unselectAllIdAction([]))
        } else {

        }
    }

    const addToCart = async () => {
        if (selectedType === 'select') {
            for (let i = 0; i < selectedId.length; i++) {
                const response = await cartRequest(selectedId[i], 1)
            }
        } else {
            for (let i = 0; i < selectedId.length; i++) {
                const response = await cartRequest(selectedId[i], selectedQty[i])
                    .then(res => {
                        alert('Add Successfully')
                    }).catch(err => alert(err.message))
            }
        }
        dispatch(unselectAllIdAction([]))
    }

    const editProduct = () => {
        if (selectedId.length === 1) {
            history.push(`/editProduct/${selectedId[0]}`)
        }
    }


    return (
        <header className="header">

            <button type="button"
                    className={'button'}
                    value={'select'}
                    onClick={selectTypeChange}>SELECT ALL
            </button>

            <p className={'header__para'}>selected {selectedId.length} out of {products.length} products </p>

            {(selectedId.length > 0) && <button type="button"
                                                className={'button'}
                                                value={'clear'}
                                                onClick={selectTypeChange}
            > CLEAR </button>}

            {isAdmin &&
            <>
                <button type="button"
                        className={'button'}
                        value={'select'}
                        onClick={selectedId.length === 1 ? editProduct : ''}>EDIT PRODUCT
                </button>

                <button type="button"
                        className={'button'}
                        value={'select'}
                        onClick={selectedId.length > 0 ? handleOpen : ''}>REMOVE
                </button>
                <HeaderModal/>
            </>
            }
            {/*searchbox*/}

            <SearchBox/>
            <Button color={'primary'}
                    onClick={selectedId.length > 0 ? addToCart : ''}>ADD TO INVENTORY</Button>
        </header>
    )
}

export default Header