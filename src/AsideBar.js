import AsideFilter from "./AsideFilter";
import AsideSelect from "./AsideSelect";
import AsideSelectOption from "./AsideSelectOption";
import AsideRangeSlider from "./AsideRangeSlider";

const AsideBar = () => {
    return (
        <>
            <aside className="aside-bar">
                <AsideFilter title={'Choose Niche'}/>
                <AsideFilter title={'Choose Category'} light/>
                <AsideSelect title={'Ship from'}/>
                <AsideSelect title={'Ship to'}/>
                <AsideSelect title={'Select supplier'}/>



            </aside>
        </>
    )
}

export default AsideBar