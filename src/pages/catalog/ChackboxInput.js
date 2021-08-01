import {useState} from "react";


const ChackboxInput = ({selected}) => {

    const[ itemSelected, setItemSelected] = useState(false)

    const checkbocChainge = (event) => {
        setItemSelected(event.target.checked)
    };

    return(
        <label className="container">
            <input
                type="checkbox"
                onChange={checkbocChainge}
                checked = {itemSelected}/>
                <span className="checkmark"></span>
        </label>
    )
}

export default ChackboxInput