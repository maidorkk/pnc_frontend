import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Cashier from './Cashier';
import Admin from './Admin';

function Check() {

const adminUser = {
        email: ("cashier@cashier.com","maiden@cashier.com", "maiden@admin.com"),
        password: "admin123"

     }

     const [user, setUser] = useState({name: "", email: ""});
     const [error, setError] = useState("");

     const Login = details => {
        console.log(details);

        if (details.email === "maiden@admin.com" && details.password === adminUser.password ){
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            });
        }
        else if (details.email === "cashier@cashier.com" && details.password === adminUser.password){
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            });
        }
        else if (details.email === "maiden@cashier.com" && details.password === adminUser.password){
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            });
        }
        else{
            console.log("Details do not match");
            setError("Details do not match");
        }
     }

     const Logout = () => {
        console.log("Logout");
        setUser({name: "", email: ""});
     }

      return (

        <div className="App">{


               (user.email.indexOf('admin')> -1) ?
                (
                <Admin />
             ):(user.email.indexOf('cashier')> -1)?
               (<div>
               <Cashier />
                <h1> Welcome, Cashier <span>{user.name}!</span></h1>

                    <button class= "logoutbtn" onClick={Logout}>Logout</button>
                </div>):(

                    <LoginForm Login={Login} error={error}/>

              )


    }
        </div>

    );

}


export default Check;