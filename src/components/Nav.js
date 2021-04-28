import React from 'react';
import {Link, useHistory} from 'react-router-dom';

function Nav(){


return(

    <nav className="navAdmin">
        <h3>PNC</h3>
        <ul className="navLinkAdmin">
        <div>
        <Link to='/create'>
            <li>Create</li>
        </Link >
        </div>
        <div>
        <Link to='/search' >
            <li>Search</li>
        </Link>
        </div>
        </ul>
        </nav>

);

}

export default Nav;