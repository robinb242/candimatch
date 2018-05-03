import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Nav from "./components/Nav"
import Footer from "./components/Footer"



const App = () => (
  <Router>
    <div>
      <Nav />
      
        <Route exact path="/" component={Home} />
        
      
      <Footer />
    </div>
  </Router>
);

export default App;

