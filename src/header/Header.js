import SearchBox from "./SearchBox";
import Button from "../common/Button";
import Paragraph from "./Paragraph";
import CatalogItem from "../catalog/CatalogItem";

const Header = () =>{
    return(

        <header className="header">
            <Button title={'SELECT ALL'}/>
            <Paragraph text={'selected out of 270.872 products'} class={'header__para'}/>
            <SearchBox/>
            <Button title={'ADD TO INVENTORY'}/>
        </header>
    )
}

export default Header