 import React from 'react';
 import {
  Form, Checkbox, Button, Card, Statistic, Container, Rail, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Sticky, Step, Table, Divider, Dropdown
} from 'semantic-ui-react'

 const Home = props => {
  return (

    <Grid.Column width={13}>
            <Container textAlign='center'>
             <b>Find a Candidate for Minnesota Governor in 2018 whose platform matches your values</b>
              <Divider />

              <p>After two terms in the governor’s office, Democrat Mark Dayton is stepping down, leaving a wide open field that has plenty of candidates clamoring to get in. On the DFL side, that includes a tight race for the endorsement between a U.S. representative, the current state auditor and a legislator from St. Paul. On the Republican side, a crowded field of candidates have emerged, including a former party chairman, a suburban mayor, a county commissioner and plenty of rank-and-file activists. But the entrance of a former governor into the race suggests a possible Republican primary race ahead.</p>
              <p>No matter what happens, 2018 will be a banner year in Minnesota politics.An open seat in the Minnesota governor’s office has already attracted more than a dozen candidates in both parties, which has in turn created a vacuum that’s left other state offices with open — and suddenly competitive — races.</p>
             <h4>Click on the button below to take our quiz to see which candidate's platform most closely reflects your values</h4>
             <br />
              

            <div className ="ui inverted segment">
              <button className="ui inverted green huge button fluid">Find Your Candidate!</button>
            </div>
            </Container> 
          </Grid.Column>
          )
        }
        
        export default Home;