import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {editProductAction, inputSortAction} from "../reducers/ProductReducer/ProductActions";
import {selectAllAction, selectProductIdAction, unselectAllIdAction} from "../reducers/ProductReducer/ProductActions";
import { addToCart as cartRequest} from "../API/CartAPI";
import {useHistory} from "react-router-dom";
import HeaderModal from "./HeaderModal";
import {headerModalOpenAction} from "../reducers/CommonReducers/HeaderModalActions";
import SearchBox from "./SearchBox";
import ProductEditModal from "../ProductEditModal";

const Header = ({products}) => {

    const selectedId = useSelector(state => state.products.selectedId)
    const selectedQty = useSelector(state => state.products.selectedQty)
    const selectedType = useSelector(state => state.products.selectType)
    const isAdmin = useSelector(state => state.ProfileReducer.isAdmin)
    const dispatch = useDispatch();
    const history = useHistory()

    const handleOpen = () => {
        dispatch(headerModalOpenAction(true));
    };
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
                        onClick={selectedId.length > 0 ? '' : handleOpenForEdit}>ADD PRODUCT
                </button>
                <button type="button"
                        className={'button'}
                        value={'select'}
                        onClick={selectedId.length === 1 ? handleOpenForEdit : ''}>EDIT PRODUCT
                </button>
                <ProductEditModal/>
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