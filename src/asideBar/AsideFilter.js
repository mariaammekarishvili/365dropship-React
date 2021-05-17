
const AsideFilter = (props) => {
    return(
        <>
            <div className={"aside-bar__filter" + (props.light ? " aside-bar__filter--light" : '' )} >
                {props.color} <h2>{props.title}</h2> <i className="material-icons">&#xe5cf;</i>
            </div>
        </>
    )

}
export default AsideFilter