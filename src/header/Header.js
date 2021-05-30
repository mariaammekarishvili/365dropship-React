import SearchBox from "./SearchBox";
import Button from "../common/Button";
import React, { useState, useEffec } from 'react';





const Header = ({selectedNumber, productNumber,slectButton,input}) =>{


    const [buttChecked,setButtChecked] = useState(true)
    const [inputText, setInputText] = useState('')
    const selectAllItem = () => {
        setButtChecked(!buttChecked)
        slectButton(buttChecked)
    }
    const changeInputText = (e) => {
        setInputText(e.target.value)
    }

    const changeText = () => {
        input(inputText)
        // setInputText('')
    }

    return(

        <header className="header">

            <button type="button" className={'button'} onClick={selectAllItem}>SELECT ALL</button>

            <p className={'header__para'}>selected {selectedNumber} out of {productNumber} products </p>

{/*searchbox*/}
            <div className="search-box">
                <input onChange={changeInputText} className="search-box__input" id="search" value={inputText} on type="text"/>
                <button onClick={changeText} className="search-box__button" type="submit">O</button>
            </div>

            <Button title={'ADD TO INVENTORY'}/>
        </header>
    )
}

export default Header