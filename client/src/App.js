
import React, { Component } from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Candidates from './pages/candidates';
import Home from './pages/home';


const App = () => (
<<<<<<< HEAD
    <div>
      <Nav />
      <Router>

        <Route exact path="/" component={Home} />
  		</Router>
  	<Footer />
  	</div>
=======
  <div> 
    <Nav />

    <Router>
      <Route exact path = "/" component = {Home} />
      
    </Router>

   

  </div>

>>>>>>> 0a9f6529807e960374232904cbee0533015c55aa
);

export default App;