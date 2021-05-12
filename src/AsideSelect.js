import AsideSelectOption from "./AsideSelectOption";


const AsideSelect = (props) => {
    return(
        <>
            <select name="asideSelect" id="asideSelect" className={'aside__Select'}>
                <AsideSelectOption title = {props.title} />
                <AsideSelectOption title ={props.title} />
            </select>
        </>
    )
}

export default AsideSelect