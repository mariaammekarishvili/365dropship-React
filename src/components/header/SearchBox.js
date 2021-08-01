import {inputSortAction} from "../../reducers/ProductReducer/ProductActions";
import {useDispatch, useSelector} from "react-redux";
import search from '../../assets/img/search.png'

const SearchBox = () => {
    const inputText = useSelector(state => state.products.inputText);
    const dispatch = useDispatch()

    const changeInputText = (e) => {
        dispatch(inputSortAction(e.target.value))
    }

    return(
        <div className="search-box">
            <input className="search-box__input"
                   onChange={changeInputText}
                   id="search" type="text"
                   value={inputText}
                   type="text"/>
            <button className="search-box__button"
                    type="submit">
                <img className={'search__icon'}
                     src={search}/>
            </button>
        </div>
    )
}

export default SearchBox