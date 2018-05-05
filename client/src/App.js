
import React, { Component } from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Candidates from './pages/candidates';
import Home from './pages/home';
import "./App.css";


const App = () => (

    <div>
      <Nav />
      <Router>

        <Route exact path="/" component={Home} />
      {/* <Route path ="/candidates" compoonenet={Candidates} /> */}
  		</Router>
  	<Footer />
  	</div>

);

export default App;