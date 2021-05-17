import picture4 from './img/girl.jpg';
import {useState} from "react";

const CatalogItem = ({title,price,img}) => {
    const [itemSelected, setItemSelected] = useState(false)

    const checkboxChainge = (event) => {
        setItemSelected(event.target.checked)
    };
    const [selectedItemNumb, setSelectedItemNumb] = useState(0)
    const numberOfselected = () => {
        setItemSelected(itemSelected ? selectedItemNumb + 1 : selectedItemNumb)
        console.log(selectedItemNumb)
    }


    return (
        <div className={'catalog__product' + (itemSelected ? ' catalog__product--set' : '') }>
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
        </div>
    )
}

export default CatalogItem
