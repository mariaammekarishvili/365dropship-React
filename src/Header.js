import SearchBox from "./SearchBox";
import Button from "./Button";
import Paragraph from "./Paragraph";

const Header = () =>{
    return(
        <header className="header">
            <Button title={'SELECT ALL'}/>
            <Paragraph text={'selected 50 out of 270.872 products'} class={'header__para'}/>
            <SearchBox/>
            <Button title={'ADD TO INVENTORY'}/>
        </header>
    )
}

export default Header