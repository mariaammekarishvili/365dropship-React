import Logo from "./Logo";
import profile from '../img/profile.jpg'
import dashboard from '../img/dashboard.svg'
import catalog from '../img/catalog.svg'
import inventory from '../img/inventory.svg'
import cart from '../img/cart.svg'
import orders from '../img/orders.svg'
import transaction from '../img/transactions.svg'
import stores from '../img/storesList.svg'
import NavigationItem from "./NavigationItem";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navigation">
            <Logo/>
            <Link to={'/profile'}>
                <NavigationItem img={profile} round/>
            </Link>

            <NavigationItem img={dashboard}/>

            <Link to={'/catalog'}>
                <NavigationItem img={catalog}/>
            </Link>

            <NavigationItem img={inventory}/>

            <Link to={'/cart'}>
                <NavigationItem img={cart}/>
            </Link>

            <NavigationItem img={orders}/>

            <NavigationItem img={transaction}/>

            <Link to={'/addProduct'}>
                <NavigationItem img={stores}/>
            </Link>

        </nav>
    )
}

export default Navigation