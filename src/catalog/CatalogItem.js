import {useEffect, useState} from "react";
import Cost from "./Cost";
import {useParams, Link,useHistory} from "react-router-dom";
import {Grid, Button} from "@material-ui/core";
import {addToCart, removeFromCart} from "../API/CartAPI";
import {useDispatch, useSelector} from "react-redux";
import {
    selectProductIdAction,
    selectProductQtyAction,
    unselectProductIdAction,
} from "../reducers/ProductReducer/ProductActions";
import {failedMessageAction} from "../reducers/CommonReducers/SnackbarActions";

const CatalogItem = ({title,price,img,id,catalog,products}) => {
    const selectType = useSelector(state => state.products.selectType)
    const selectedId = useSelector(state => state.products.selectedId)
    const dispatch = useDispatch()

    const [itemSelected, setItemSelected] = useState(false)
    const [qtyNumb, setQtyNumb] = useState(1)
    const history = useHistory()


    const checkboxChange = (event) => {
        const checked = event.target.checked
        setItemSelected(checked)

        if(checked){
            dispatch(selectProductIdAction(id))
            dispatch(selectProductQtyAction(qtyNumb))
        }else{
            dispatch(unselectProductIdAction(id))
        }
    }

    useEffect(() => {
        if (selectType === 'select') {
            setItemSelected(true)
        } else if (selectType === 'clear' && selectedId.length === 0) {
            setItemSelected(false)
        } else {
            setItemSelected(itemSelected)
        }
    }, [selectType,selectedId])

    const qtyNumberSelect = (e) => {
        if (e.target.value === 'plus') {
            setQtyNumb(qtyNumb + 1)
        } else if (e.target.value === 'minus') {
            if(qtyNumb > 1){
                setQtyNumb(qtyNumb - 1)
            }
        }
    }

    return (

        <div className={'catalog__product' + (itemSelected ? ' catalog__product--set' : '')} key={id}>

            <label className="container">
                <input
                    type="checkbox"
                    onChange={checkboxChange}
                    checked={itemSelected}/>
                <span className="checkmark"></span>
            </label>

            <Button className={'add-iv'}
                    size={"small"}
                    fullWidth={50}

                    onClick={() => {
                        addToCart(id, qtyNumb).then(r => dispatch(selectProductIdAction(true)))
                            .catch(err => dispatch(failedMessageAction(true)))
                    }}
                    variant="contained"
                    color="primary">{catalog ? 'ADD TO INVENTORY' : 'REMOVE'}
            </Button>

            <Link to={`/catalog/${id}`}>
                <div className="catalog__photo">
                    <img src={img}/>
                </div>

                 <div className={'qty'}>
                        <button className={'qty__plus'}
                                value={'plus'}
                                onClick={qtyNumberSelect}> +
                        </button>
                        <div className={'qty__number'}>{qtyNumb}</div>
                        <button className={'qty__minus'}
                            onClick={qtyNumberSelect}
                                value={'minus'}> -
                        </button>
                 </div>

                <div className="catalog__title">
                    {title}
                </div>

                <div className="catalog__price">
                    <div className={'catalog__item--cost item__cost'}>
                        <Cost text={'RRP'} price={price} catalog/>
                        <Cost text={'COST'} price={Math.round(price - (price * 0.2))} catalog/>
                        <Cost catalog price={'27%(' + Math.round(price * 0.2) + ')'} text={'PROFIT'}/>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default CatalogItem
