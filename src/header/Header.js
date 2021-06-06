import Button from "../common/Button";
import React, { useState, useEffec } from 'react';

const Header = ({selectedNumber, productNumber,slectButton,input,clearButton}) =>{

    const [inputText, setInputText] = useState('')

    const selectOrClearAllItem = (e) => {
        slectButton (e.target.value)
    }

    const changeInputText = (e) => {
        setInputText(e.target.value)
    }
    const changeText = () => {
        input(inputText)
    }

    return(
        <header className="header">

            <button type="button"
                    className={'button'}
                    value={'select'}
                    onClick={selectOrClearAllItem}>SELECT ALL</button>

            <p className={'header__para'}>selected {selectedNumber} out of {productNumber} products </p>

            {(clearButton > 0) && <button type="button"
                                          className={'button'}
                                          value={'clear'}
                                          onClick={selectOrClearAllItem}> CLEAR </button>}

{/*searchbox*/}
            <div className="search-box">
                <input onChange={changeInputText}
                       className="search-box__input"
                       id="search"
                       value={inputText}
                       type="text"/>
                <button onClick={changeText}
                        className="search-box__button"
                        type="submit">🔍</button>
            </div>
            <Button title={'ADD TO INVENTORY'}/>
        </header>
    )
}

export default Header