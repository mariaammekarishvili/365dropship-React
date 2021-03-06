import AsideFilter from "./AsideFilter";
import AsideSelect from "./AsideSelect";
import Button from "../common/Button";
import {useState} from "react";
import AsideCategory from "./AsideCategory";
import {Link, useParams} from "react-router-dom";

const AsideBar = () => {

    const [category, setCategory] = useState(false)

    const showCategory = (check) => {
        setCategory(!category)
    }

    return (
        <>
            <aside className="aside-bar">
                <AsideFilter title={'Choose Niche'}/>
                <AsideFilter title={'Choose Category'} light check={showCategory}/>
                {category && <Link to='/catalog/electronics/'>
                    <AsideCategory title={'Electronics'}/>
                </Link>}
                {category && <Link to='/catalog/jewelery/'>
                    <AsideCategory title={'Jewelery'}/>
                </Link>}
                {category && <Link to="/catalog/men's%20clothing/">
                    <AsideCategory title={'Men\'s clothing'}/>
                </Link>}
                {category && <Link to="/catalog/women's%20clothing/">
                    <AsideCategory title={'women\'s clothing'}/>
                </Link>}
                <AsideSelect title={'Ship from'}/>
                <AsideSelect title={'Ship to'}/>
                <AsideSelect title={'Select supplier'}/>
                <Button title={'RESET FILTER'} big/>
            </aside>
        </>
    )
}

export default AsideBar