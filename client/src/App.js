import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

// import Navbar from "./components/navbar.component";
import Login from "./components/login.component";
import Signup from "./components/register.component";
import welcome from "./components/welcome.component";


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
   
      {/* <Login /> */}
      <br/>
      <br/>
      <Route path = "/user/register" component = {Signup}/>
      <Route path = "/" exact component = {Login}/>
      <Route path = "/user/welcome" exact component = {welcome}/> 
    </Router>
 
  );
}

export default App;
