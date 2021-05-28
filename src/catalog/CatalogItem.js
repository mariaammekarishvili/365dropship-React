import picture4 from '../img/girl.jpg';
import {useState} from "react";
import ItemTable from "./ItemTable";


const CatalogItem = ({title,price,img,onChange,selectAll,onClick,description}) => {
    const [itemSelected, setItemSelected] = useState(selectAll)
    const [shown, setShown] = useState(false)
    const checkboxChainge = (event) => {
        const checked = event.target.checked
        // setItemSelected(event.target.checked)
        setItemSelected(checked)
        onChange(checked ? 1 : -1)
    };
    const productClick = () => {
        setShown(!shown)
        onClick(shown)
    }





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
