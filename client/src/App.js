
import React, { Component } from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Candidates from './pages/candidates';
import Home from './pages/home';

const App = () => (
  <div> 
    <Nav />

    <Router>
      <Route exact path = "/" component = {Home} />
      
    </Router>

  </div>




  );


export default App;