import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Nav from './Nav';


function Admin(){

let history = useHistory();



return(
<div>

<Nav />
<div className="welcome">
<h1> Welcome, Admin!</h1>
</div>

  <button className="logoutAdmin" onClick={() =>{history.push('/')}} > LOGOUT </button>
    </div>


);


}

export default Admin;