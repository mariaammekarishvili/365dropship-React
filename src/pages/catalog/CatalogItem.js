import {useEffect, useState} from "react";
import Cost from "./Cost";
import {Link,useHistory} from "react-router-dom";
import cart from '../../assets/img/grocery-cart.png'
import more from '../../assets/img/more.png'
import {addToCart, removeFromCart} from "../../API/CartAPI";
import {useDispatch, useSelector} from "react-redux";
import '../../assets/CSS/CatalogItem.css'
import {
    editProductAction,
    selectProductIdAction,
    selectProductQtyAction,
    unselectProductIdAction,
} from "../../reducers/ProductReducer/ProductActions";
import {failedMessageAction, successMessageAction} from "../../reducers/CommonReducers/CommonAction";

const CatalogItem = ({title,price,img,id,catalog,products}) => {
    const selectType = useSelector(state => state.products.selectType)
    const selectedId = useSelector(state => state.products.selectedId)
    const isAdmin = useSelector(state => state.ProfileReducer.isAdmin)
    const refresh = useSelector(state => state.products.needRefresh)
    const [itemSelected, setItemSelected] = useState(false)
    const [qtyNumb, setQtyNumb] = useState(1)
    const dispatch = useDispatch()

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
        }else if(selectedId.length === 0){
            setItemSelected(false)
        } else {
            setItemSelected(itemSelected)
        }
    }, [selectType,selectedId,refresh])

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

            <div className={'catalog__item--butts'}>
                {isAdmin &&
                <img src={more}
                     className={'catalog__item-butt--icon more-icon'}
                     onClick={() => {
                         dispatch(editProductAction(true))
                         dispatch(selectProductIdAction(id))
                     }}/>
                }


            <button className={'add-iv'}>
                <img className={'catalog__item-butt--icon'} src={cart}
                          onClick={() => {
                addToCart(id, qtyNumb).then(r => dispatch(successMessageAction(true)))
                    .catch(err => dispatch(failedMessageAction(true)))
            }}/>
            </button>

            </div>
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
