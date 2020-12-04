import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from '../src/Home/home';
import About from '../src/About/About'
import Contact from '../src/contact/contact'
import Testcmp from '../src/functionalComponent/functionalComponent'


class App extends React.Component {

  render() {
    return (


       <BrowserRouter>
        <Route  exact  path="/" component={Home}  />
         <Route  path="/about" component={About}/> 
         <Route  path="/contact" component={Contact}/> 

       
       </BrowserRouter>

  
    )

  }


}

export default App
