import {useDispatch, useSelector} from "react-redux";
import {editProductAction, inputSortAction, refreshStateAction} from "../reducers/ProductReducer/ProductActions";
import {selectAllAction, selectProductIdAction, unselectAllIdAction} from "../reducers/ProductReducer/ProductActions";
import { addToCart as cartRequest} from "../API/CartAPI";
import {useHistory} from "react-router-dom";
import ItemRemoveModal from "../ProdactChangesModals/ItemRemoveModal";
import SearchBox from "./SearchBox";
import ProductEditModal from "../ProdactChangesModals/ProductEditModal";
import {failedMessageAction, successMessageAction} from "../reducers/CommonReducers/CommonAction";

const Header = ({products}) => {
    const selectedId = useSelector(state => state.products.selectedId)
    const selectedQty = useSelector(state => state.products.selectedQty)
    const selectedType = useSelector(state => state.products.selectType)
    const isAdmin = useSelector(state => state.ProfileReducer.isAdmin)
    const refresh = useSelector(state => state.products.needRefresh)
    const dispatch = useDispatch();

    const handleOpenForEdit = () => {
        dispatch(editProductAction(true));
    };

    const selectTypeChange = (e) => {
        if (e.target.value === 'select' && products.listing !== selectedId.length) {
            dispatch(selectAllAction('select'))
            dispatch(unselectAllIdAction([]))
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
                dispatch(successMessageAction(true))
                dispatch(selectAllAction('clear'))
            }
        } else {
            for (let i = 0; i < selectedId.length; i++) {
                const response = await cartRequest(selectedId[i], selectedQty[i])
                    .then(res => {
                        dispatch(successMessageAction(true))
                        dispatch(selectAllAction('clear'))
                    }).catch(err => dispatch(failedMessageAction(true)))
            }
        }
        dispatch(unselectAllIdAction([]))
        dispatch(refreshStateAction(!refresh))
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
                        onClick={handleOpenForEdit}>ADD PRODUCT
                </button>
                <ProductEditModal/>
                <ItemRemoveModal/>
            </>
            }
            {/*searchbox*/}
            <SearchBox/>
            <button className={'button'}
                    onClick={selectedId.length > 0 && addToCart}>ADD TO INVENTORY</button>
        </header>
    )
}

export default Header