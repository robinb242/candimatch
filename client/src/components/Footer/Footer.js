import React from 'react'
import { Divider, Container, Button, Header, Image, Segment} from 'semantic-ui-react'
import "./Footer.css";

const Footer = () => (
	<Container>
  <div className="ui inverted green vertical footer segment">
        <div class="ui center aligned container">
            <h4 className="ui inverted header">&copy; Copyright 2017 | All rights reserved | Blahhh</h4>
            <a href="https://www.facebook.com/"><i class="facebook square icon big"></i></a>
            <a href="https://twitter.com/"><i class="twitter square icon big"></i></a>
            <a href="https://www.linkedin.com/company/c"><i class="linkedin square icon big"></i></a>
        </div>
    </div>
   </Container>
);
export default Footer;
 