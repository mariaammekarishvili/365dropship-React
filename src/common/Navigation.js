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
            
            <Link to={'/dashboard'}>
                <NavigationItem img={dashboard}/>
            </Link>

            <Link to={'/catalog'}>
                <NavigationItem img={catalog}/>
            </Link>

            <NavigationItem img={inventory}/>

            <Link to={'/cart'}>
                <NavigationItem img={cart}/>
            </Link>

            <Link to={'/about'}>
                <NavigationItem img={orders}/>
            </Link>

            <NavigationItem img={transaction}/>

            <Link to={'/users'}>
                <NavigationItem img={stores}/>
            </Link>

        </nav>
    )
}

export default Navigation