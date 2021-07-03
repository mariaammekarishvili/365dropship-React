import {useEffect, useState} from "react";
import Modal from "./Modal";
import Cost from "./Cost";
import {useParams, Link,useHistory} from "react-router-dom";
import {Grid, Button} from "@material-ui/core";
import {addToCart, removeFromCart} from "../API";

const CatalogItem = ({title,price,img,selectId,select,description,selectQty,category,id,catalog,getQtyNumb }) => {

    const [itemSelected, setItemSelected] = useState(false)
    const [shown, setShown] = useState(false)
    const [qtyNumb, setQtyNumb] = useState(0)
    const [ids, setIds] = useState([])
    const history = useHistory()


    const checkboxChange = (event) => {
        const checked = event.target.checked
        setItemSelected(checked)
        selectId(id)
        selectQty(qtyNumb)
    }

    const productClick = () => {
        setShown(!shown)
    }

    const onClick = () => {
        history.push(`/catalog/${category}/${id}`)
    }

    useEffect(() => {
        if (select === 'select') {
            setItemSelected(true)
            selectId(id)
            selectQty(qtyNumb)
        } else if (select === 'clear') {
            setItemSelected(false)
        } else {
            setItemSelected(itemSelected)
        }
    }, [select])

    const qtyNumberSelect = (e) => {
        if (e.target.value === 'plus') {
            setQtyNumb(qtyNumb + 1)
        } else if (e.target.value === 'minus') {
            setQtyNumb(qtyNumb - 1)
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
                        {
                            catalog ?
                                addToCart(id, qtyNumb) : removeFromCart(id)
                        }
                    }}
                    variant="contained"
                    color="primary">{catalog ? 'ADD TO INVENTORY' : 'REMOVE'}</Button>

            <Link to={`/catalog/${category}/${id}`}>
                <div className="catalog__photo">
                    <img src={img}/>
                </div>

                {catalog ? <div className={'qty'}>
                        <button className={'qty__plus'}
                                value={'plus'}
                                onClick={qtyNumberSelect}> +
                        </button>
                        <div className={'qty__number'}>{qtyNumb}</div>
                        <button className={'qty__minus'}
                            onClick={qtyNumb > 0 ? qtyNumberSelect : ''}
                                value={'minus'}> -
                        </button>
                    </div>
                    : <div className={'qty'}>
                        <div className={'qty__number get_qty'}>{getQtyNumb}</div>
                    </div>}

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
