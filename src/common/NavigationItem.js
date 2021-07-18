import {useDispatch} from "react-redux";
import {clearProductsAction} from "../reducers/ProductReducer/ProductDispatch";

const NavigationItem = ({img,round}) => {
    const dispatch = useDispatch()

    const clearList = () => {
        dispatch(clearProductsAction([]))
    }
    return (
        <img
            className={'Navigation-item__img' + (round ? ' Navigation-item__img--round' : '')}
            src={img}/>
    )
}

export default NavigationItem