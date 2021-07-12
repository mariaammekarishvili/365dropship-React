import React, {useState, useEffec, useEffect} from 'react';
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {SortReducer} from "../reducers/SortReducer/SortReducer";
import {inputSortAction} from "../reducers/SortReducer/SortDispatch";
import {MARK_TYPE_CHANGE} from "../reducers/Actions";
import {selectAllAction, selectProductIdAction, unselectAllIdAction} from "../reducers/SelectReducer/SelectDispatch";
import {addToCart, addToCart as cartRequest} from "../API";

const Header = ({products}) =>{

    const inputText = useSelector( state => state.inputSort.inputText);
    const selectedId = useSelector(state => state.select.selectedId)
    const selectedQty = useSelector(state => state.select.selectedQty)
    const dispatch = useDispatch();

    const changeInputText = (e) => {
        dispatch(inputSortAction(e.target.value))
    }

    const selectTypeChange = (e) => {
        if(e.target.value === 'select') {
            dispatch(selectAllAction('select'))
            for(let i = 0 ; i < products.length; i++) {
                dispatch(selectProductIdAction(products[i].id))
            }
        }else if(e.target.value === 'clear'){
            dispatch(selectAllAction('clear'))
            dispatch(unselectAllIdAction([]))
        }else{

        }
    }

    const addToCart = () => {
       for(let i =0 ;i < selectedId.length;i++){
           cartRequest(selectedId[i], selectedQty[i])
               .then(res => {
                   alert('Add Successfully')
           }).catch(err => alert(err.message))
                }
    }

    return(
        <header className="header">

            <button type="button"
                    className={'button'}
                    value={'select'}
                    onClick={selectTypeChange}>SELECT ALL</button>

            <p className={'header__para'}>selected {selectedId.length} out of {products.length} products </p>

            {(selectedId.length > 0 ) && <button type="button"
                                          className={'button'}
                                          value={'clear'}
                                          onClick={selectTypeChange}
                                          > CLEAR </button>}

{/*searchbox*/}
            <div className="search-box">
                <input onChange={changeInputText}
                       className="search-box__input"
                       id="search"
                       value={inputText}
                       type="text"/>
                <button
                        className="search-box__button"
                        type="submit">🔍</button>
            </div>
            <Button color={'primary'}
                    onClick={selectedId.length > 0 ? addToCart : ''}>ADD TO INVENTORY</Button>
        </header>
    )
}

export default Header