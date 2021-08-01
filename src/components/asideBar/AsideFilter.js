import {useState} from "react";

const AsideFilter = (props) => {

    const [category, setCategory] = useState(false)

    const showCategory = () =>{
        setCategory(!category)
        props.check(category)
    }

    return(
        <>
            <div onClick={showCategory}
                 className={"aside-bar__filter" + (props.light ? " aside-bar__filter--light" : '' )} >
                {props.color}
                <h2>{props.title}</h2>
                <i className="material-icons">&#xe5cf;</i>
            </div>
        </>
    )

}
export default AsideFilter