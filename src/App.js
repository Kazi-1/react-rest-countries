import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Nomatch from './components/Nomatch/Nomatch';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  

  return (

    <Router>
     <Switch>
       <Route path="/home">
       <Home></Home>
       </Route>
       <Route path="/country/:countryId">
       <CountryDetail></CountryDetail>
       </Route>
       <Route exact path="/">
       <Home></Home>
       </Route>
       <Route path="*">
       <Nomatch></Nomatch>
       </Route>
     </Switch>
    </Router >
    
  );
}

export default App;
