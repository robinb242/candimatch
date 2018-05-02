import React from 'react'
import { Divider, Button, Header, Image} from 'semantic-ui-react'

const Footer = () => (
<div>
	<Divider />
    <div className = "ui container">
        <div className = "ui green inverted message">
          <div className = "header">
            Register To Vote
          </div>
          <Image src='https://cdn4.iconfinder.com/data/icons/democracy/500/Political_2-512.png' href='https://www.sos.state.mn.us/elections-voting/register-to-vote'/>
            <p>Find your polling place.</p>
        </div>
 	</div>
</div>
);
export default Footer;