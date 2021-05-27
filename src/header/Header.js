import SearchBox from "./SearchBox";
import Button from "../common/Button";
import React, { useState, useEffect } from 'react';





const Header = ({selectedNumber, productNumber}) =>{
    return(

        <header className="header">
            <Button title={'SELECT ALL'}/>
            <p className={'header__para'}>selected {selectedNumber} out of {productNumber} products </p>
            {/*<SearchBox/>*/}
            <div className="search-box">
                <input className="search-box__input" id="search" type="text"/>
                <button className="search-box__button" type="submit">O</button>
            </div>

            <Button title={'ADD TO INVENTORY'}/>
        </header>
    )
}

export default Header