import React from 'react'
import { Divider, Container, Button, Header, Image, Segment} from 'semantic-ui-react'
import "./Footer.css";

const Footer = () => (
<Container>	
  <div className="ui inverted vertical black footer segment" id="footer">
        <div class="ui center aligned container">
            <h5 id="footerTitle" className="ui inverted header">&copy; Copyright 2018 | All rights reserved | CandiMatch</h5>
            <h6 className="ui inverted header">&copy; Created By: Max Adams, Robin Bertuccelli, LeAnn Sawatzky and Chris Yourk </h6>
           
        </div>
    </div>
 </Container>
);
export default Footer;
 