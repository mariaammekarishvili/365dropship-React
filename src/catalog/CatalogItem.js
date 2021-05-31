import {useEffect, useState} from "react";
import ItemTable from "./ItemTable";
import Cost from "./Cost";

const CatalogItem = ({title,price,img,onChange,selectAll,description,unselectAll}) => {

    const [itemSelected, setItemSelected] = useState(true )
    const [shown, setShown] = useState(false)

    const checkboxChainge = (event) => {
        const checked = event.target.checked
        setItemSelected(checked)
        onChange(checked ? 1 : -1)
    };
    const productClick = () => {
        setShown(!shown)
    }

    useEffect(() =>
        {
          if (selectAll){
              setItemSelected(true)
          }else {
              setItemSelected(false)
          }
        },[selectAll])

    useEffect(() =>
    {
        if (unselectAll){
            setItemSelected(false)
        }else {
            setItemSelected(false)
        }
    },[unselectAll])

    return (
        <div className={'catalog__product' + (itemSelected ? ' catalog__product--set' : '') } onClick={productClick}>
            <label className="container">
                <input
                    type="checkbox"
                    onChange={checkboxChainge}
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
                    <Cost text={'RRP'} price={price} catalog/> <Cost text={'COST'} price={Math.round(price - (price * 0.2))} catalog/> <Cost catalog price={'27%(' + Math.round(price * 0.2) + ')'} text={'PROFIT'}/>
                </div>
            </div>
            {shown && <ItemTable title={title} img={img} price={price} description={description} />}
        </div>

)
}

export default CatalogItem
