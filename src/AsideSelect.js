import AsideSelectOption from "./AsideSelectOption";


const AsideSelect = (props) => {
    return(
        <>
            <select name="asideSelect" id="asideSelect" className={'aside__Select'}>
                <AsideSelectOption title = 'Ship From' />
                <AsideSelectOption title = 'Ship From' />
                <AsideSelectOption title = 'Ship From' />
                <AsideSelectOption title = 'Ship From' />
                <AsideSelectOption title = 'Ship From' />
                <AsideSelectOption title = 'Ship From' />
                <AsideSelectOption title = 'Ship From' />
            </select>
        </>
    )
}

export default AsideSelect