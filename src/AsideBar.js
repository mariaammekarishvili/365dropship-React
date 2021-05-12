import AsideFilter from "./AsideFilter";
import AsideSelect from "./AsideSelect";

const AsideBar = () => {
    return (
        <>
            <aside className="aside-bar">
                <AsideFilter title={'Choose Niche'}/>
                <AsideFilter title={'Choose Category'} light />
                <AsideSelect/>
            </aside>
        </>
    )
}

export default AsideBar