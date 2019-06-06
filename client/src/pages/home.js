import React from "react";
import VertMenu from '../components/VertMenu';
import { Grid, Container, Divider, Image, } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import "./home.css";

{/* MAIN BODY*/}  

class Home extends React.Component {
  handleClick = (event) => {
    console.log ("handlePageLoad function");
  };

  render() {
    return <div>
     <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <Container textAlign='center'>

              <Image id="capitolImage" src={require('../assets/images/MNstateCapitol.jpg')} fluid />
              <b>Find a Candidate for Minnesota Governor in 2018 whose platform matches your values</b>
                  
              <Divider />

                  <p>After two terms in the governor’s office, Democrat Mark Dayton is stepping down, leaving a wide open field that has plenty of candidates clamoring to get in. On the DFL side, that includes a tight race for the endorsement between a U.S. representative, the current state auditor and a legislator from St. Paul. On the Republican side, a crowded field of candidates have emerged, including a former party chairman, a suburban mayor, a county commissioner and plenty of rank-and-file activists. But the entrance of a former governor into the race suggests a possible Republican primary race ahead.</p>
               
                  <h4>Click on the button below to take our quiz to see which candidate's platform most closely reflects your values</h4>
               
              <br />

                <div className ="ui inverted light grey segment">
                  <Link
                  to="/survey"
                    onClick={this.handleClick}
                     // onClick= "console.log ("insde home.js click")"
                    className="ui inverted huge button fluid">Find My Candidate!
                  </Link>
                </div>
            </Container> 
          </Grid.Column>

          <Grid.Column width={4}>
          
            <VertMenu />

          </Grid.Column>
        </Grid.Row>
      </Grid>
     </Container>
    </div>


  }
}

export default Home;

