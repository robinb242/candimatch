import React from 'react'
import { Divider, Container, Button, Header, Image, Segment} from 'semantic-ui-react'
import "./Footer.css";

const Footer = () => (
	<Container>
  <div className="ui inverted vertical footer segment">
        <div class="ui center aligned container">
            <h5 id="footerTitle" className="ui inverted header">&copy; Copyright 2018 | All rights reserved | CandiMatch</h5>
            <h6 className="ui inverted header">&copy; Created By: Max Adams, Robin Bertuccelli, LeAnn Sawatzky and Chris Yourk </h6>
            <a href="https://www.facebook.com/"><i class="facebook square icon big"></i></a>
            <a href="https://twitter.com/"><i class="twitter square icon big"></i></a>
            <a href="https://www.linkedin.com/company/c"><i class="linkedin square icon big"></i></a>
        </div>
    </div>
   </Container>
);
export default Footer;
 