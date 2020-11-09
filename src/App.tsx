import React  from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Gallery from './Screens/Gallery'
import Pastor from './Screens/PastorCorner'
import Home from './Screens/Home'
import Department from './Screens/Department'
import About from './Screens/About_Us'
import Adimn from './Screens/Admin'
import Share from './Screens/Testimonies'
import Top from './ScrollToTop'


function App() {
  return (
    <div>
      <Router >
        <Top>
          <Switch>                              
            <Route exact path="/"  component={Home} />
            <Route exact path="/gallery" component={Gallery} />   
            <Route exact path="/pastor" component={Pastor} />  
            <Route exact path="/department" component={Department} />    
            <Route exact path="/about" component={About} /> 
            <Route exact path="/share" component={Share} />  
            <Route exact path="/admin" component={Adimn} />   
            <Route exact path="/main" component={Adimn} />     
            <Route exact path="/admin_gallery" component={Adimn} /> 
            <Route exact path="/admin_corner" component={Adimn} /> 
            <Route exact path="/admin_share" component={Adimn} />   
            <Route exact path="/admin_event" component={Adimn} />                             
          </Switch>
        </Top>
      </Router>
    </div>
  );
}

export default App;

