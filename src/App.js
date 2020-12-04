import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from '../src/Home/home';
import About from '../src/About/About'
import Contact from '../src/contact/contact'
 import Login from '../src/Home/Header/login/login'
 import Signup from '../src/Home/Header/signup/signup'



class App extends React.Component {

  render() {
    return (


       <BrowserRouter>
        <Route  exact  path="/" component={Home}  />
         <Route  path="/about" component={About}/> 
         <Route  path="/contact" component={Contact}/> 
         <Route  path="/SignUP" component={Signup}/> 
         <Route  path="/login" component={Login}/> 
       
       </BrowserRouter>

  
    )

  }


}

export default App
