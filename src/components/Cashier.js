import React from 'react';
import {Link} from 'react-router-dom';


function Cashier(){

const navStyle ={

    color: 'white'
}


return(


    <nav className="navAdmin">
         <h3>LOGO</h3>
         <ul className="navLinkAdmin">
         <Link style={navStyle} to='/create'>
             <li>Create</li>
         </Link>
         <Link style={navStyle} to='/search' >
             <li>Search</li>
         </Link>
         </ul>
         </nav>
);


}

export default Cashier;