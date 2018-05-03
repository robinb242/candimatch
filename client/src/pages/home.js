import React from "react";
import { Menu, Grid, Container, Divider, Image, Button } from 'semantic-ui-react'

{/* MAIN BODY*/}  
const Home =() => ( 
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={13}>
            <Container textAlign='center'>
             <b>Find a Candidate for Minnesota Governor in 2018 whose platform matches your values</b>
              <Divider />

              <p>After two terms in the governor’s office, Democrat Mark Dayton is stepping down, leaving a wide open field that has plenty of candidates clamoring to get in. On the DFL side, that includes a tight race for the endorsement between a U.S. representative, the current state auditor and a legislator from St. Paul. On the Republican side, a crowded field of candidates have emerged, including a former party chairman, a suburban mayor, a county commissioner and plenty of rank-and-file activists. But the entrance of a former governor into the race suggests a possible Republican primary race ahead.</p>
              <p>No matter what happens, 2018 will be a banner year in Minnesota politics.An open seat in the Minnesota governor’s office has already attracted more than a dozen candidates in both parties, which has in turn created a vacuum that’s left other state offices with open — and suddenly competitive — races.</p>
             <h4>Click on the button below to take our quiz to see which candidate's platform most closely reflects your values</h4>
             <br />
              
{/*FIND YOUR CANDIDATE BUTTON, CLICK TO START QUIZ*/}
            <div>
              <Button inverted color='green' size='massive'>Find Your Candidate</Button>
            </div>
            </Container> 
          </Grid.Column>


    {/* EXPERIMENTING WITH Vertical menu bar */}   
      
        <Grid.Column width={3}>
          <Menu vertical>
            <Menu.Item id="vertMenuItem" active={activeItem === 'faq'} onClick={this.handleItemClick}>
            <Menu.Header>My Voting Booth</Menu.Header>
            <Menu.Menu>
              <Image id="vertMenuIcon" height="60" src='https://cdn4.iconfinder.com/data/icons/democracy/500/Political_2-512.png'/>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item id="vertMenuItem" active={activeItem === 'faq'} onClick={this.handleItemClick}>
            <Menu.Header>Research Issues</Menu.Header>

            <Menu.Menu>
              <Image id="vertMenuIcon" height="60" src='https://cdn4.iconfinder.com/data/icons/democracy/500/Political_3-512.png'  />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item id="vertMenuItem" onClick={this.handleItemClick}>
            <Menu.Header>Research Candidates</Menu.Header>

            <Menu.Menu>
                 <Image id="vertMenuIcon" height="60" src='https://cdn3.iconfinder.com/data/icons/gray-user-toolbar/512/reporter-512.png' />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Support</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick}>
                FAQs
              </Menu.Item>
              <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}>
                Contact
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </Grid.Column>
  </Grid.Row>
</Grid>

</div>


);

export default Home;



