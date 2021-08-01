import {useState} from "react";

const AsideCategory = (props) => {

    return(
        <>
            <div onClick={props.check} className={"aside-bar__filter aside-bar__category"} >
                 <h2>{props.title}</h2>
            </div>
        </>
    )

}

export default AsideCategory