import {useEffect, useState} from "react";
import ItemTable from "./ItemTable";

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
                {price}
            </div>
            {shown && <ItemTable title={title} img={img} price={price} description={description} />}
        </div>

)
}

export default CatalogItem
