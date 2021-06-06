import {useEffect, useState} from "react";
import Modal from "./Modal";
import Cost from "./Cost";

const CatalogItem = ({title,price,img,onChange,select,description}) => {

    const [itemSelected, setItemSelected] = useState(false )
    const [shown, setShown] = useState(false)

    const checkboxChange = (event) => {
        const checked = event.target.checked
        setItemSelected(checked)
        onChange(checked ? 1 : -1)
    }

    const productClick = () => {
        setShown(!shown)
    }

    useEffect(() => {
        if(select === 'select'){
            setItemSelected(true)
        }else if (select === 'clear'){
            setItemSelected(false)
        }else {
            setItemSelected(itemSelected)
        }},[select])

    return (
        <div className={'catalog__product' + (itemSelected ? ' catalog__product--set' : '') }
             onClick={productClick}>

            <label className="container">
                <input
                    type="checkbox"
                    onChange={checkboxChange}
                    checked = {itemSelected}/>
                <span className="checkmark"></span>
            </label>

            <div className="catalog__photo">
                <img src={img}/>
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
            {shown && <Modal title={title} img={img} price={price} description={description} />}
        </div>

)
}

export default CatalogItem
