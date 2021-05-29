import SearchBox from "./SearchBox";
import Button from "../common/Button";
import React, { useState, useEffect } from 'react';





const Header = ({selectedNumber, productNumber,slectButton}) =>{


    const [buttChecked,setButtChecked] = useState(true)
    const selectAllItem = () => {
        setButtChecked(!buttChecked)
        slectButton(buttChecked)
    }
    return(

        <header className="header">

            <button type="button" className={'button'} onClick={selectAllItem}>SELECT ALL</button>

            <p className={'header__para'}>selected {buttChecked ? selectedNumber: productNumber} out of {productNumber} products </p>

{/*searchbox*/}
            <div className="search-box">
                <input className="search-box__input" id="search" type="text"/>
                <button className="search-box__button" type="submit">O</button>
            </div>

            <Button title={'ADD TO INVENTORY'}/>
        </header>
    )
}

export default Header