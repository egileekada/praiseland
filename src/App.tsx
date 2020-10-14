import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Gallery from './Screens/Gallery'
import Pastor from './Screens/PastorCorner'
import Home from './Screens/Home'
import Department from './Screens/Department'
import About from './Screens/About_Us'
import Adimn from './Screens/Admin'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path="/gallery" component={Gallery} />   
          <Route exact path="/pastor" component={Pastor} />  
          <Route exact path="/department" component={Department} />    
          <Route exact path="/about" component={About} /> 
          <Route exact path="/about" component={Adimn} />                             
        </Switch>
      </Router>
    </div>
  );
}

export default App;
