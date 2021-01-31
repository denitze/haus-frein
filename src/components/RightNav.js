import React from 'react'
import { Link} from "react-router-dom";

const RightNav = (props) => {
    let BGID = ['UL-NavBar']
    
    
    if(props.show) {
      BGID = ['UL-NavBar open']
      
      
    }

    return ( 

        <ul className={BGID}>
        <li>
          <Link to="/events">EVENTS</Link>
        </li>
        <li>
          <Link to="/kegelbahn">KEGELBAHN</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>


     );
}
 
export default RightNav;