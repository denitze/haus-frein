import { NavLink} from "react-router-dom";
import Burger from "./Burger";

const Navigation = () => {
    return ( 
        <nav id="navBar">
            <NavLink to="/" exact activeStyle={{color: '#deb307'}}>FREIN LOGO</NavLink>
            <Burger />
            <ul className="normalNav">
                <li>
                    <NavLink to="/events" activeStyle={{color: '#deb307'}}>EVENTS</NavLink>
                </li>
                <li>
                    <NavLink to="/kegelbahn" activeStyle={{color: '#deb307'}}>KEGELBAHN</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeStyle={{color: '#deb307'}}>CONTACT</NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;