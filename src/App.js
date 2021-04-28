import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Check from './components/Check';
import Admin from './components/Admin';
import Cashier from './components/Cashier';
import CreateStudent from './pages/CreateStudent';
import SearchStudent from './pages/SearchStudent';
import {GlobalProvider} from './components/GlobalState';



function App() {



  return (


<GlobalProvider>

  <Router>

<main>

    <Switch>


        <Route exact path="/" component={Check} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/create" component={CreateStudent} />
        <Route exact path="/search" component={SearchStudent} />

    </Switch>
</main>



  </Router>
   </GlobalProvider>


  );
}

export default App;
