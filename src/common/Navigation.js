import Logo from "./Logo";
import dashboard from '../img/spid.png'
import catalog from '../img/section.png'
import inventory from '../img/cub.png'
import cart from '../img/bascet.png'
import orders from '../img/selected.png'
import transaction from '../img/transactions.png'
import stores from '../img/store.png'
import NavigationItem from "./NavigationItem";

const Navigation = () => {
    return (
        <nav className="navigation">
            <Logo/>
            <hr/>
            <NavigationItem img={dashboard}/>
            <NavigationItem img={catalog}/>
            <NavigationItem img={inventory}/>
            <NavigationItem img={cart}/>
            <NavigationItem img={orders}/>
            <NavigationItem img={transaction}/>
            <NavigationItem img={stores}/>

        </nav>
    )
}

export default Navigation