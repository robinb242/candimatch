
import React, { Component } from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Candidates from './pages/candidates';
import Home from './pages/home';
import Survey from './pages/survey';
import "./App.css";


const App = () => (
<Router>
    <div>
    	<Nav />
      	<Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/pages/survey" component={Survey} />
          <Route path ="/pages/candidates" component={Candidates} /> 
  		</Switch>
  		<Footer />
  	</div>
 </Router>

);

export default App;