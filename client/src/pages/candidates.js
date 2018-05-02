
import React, { Component } from 'react';
import _ from 'lodash'
import './Candidate.css';
import {
   Card, Container,  Grid, Header, Icon, Label, Image, Segment
} from 'semantic-ui-react'


const Home =() => (
	{/* CANDIDATE PORTAL */}   
   
    <Grid columns={2}>
    <Grid.Column>
      <Segment raised>

        <Label as='a' color='blue' ribbon>Tim Waltz</Label>
        <span>DFL</span>
        <br />
        <span>The former Mankato high school coach and history and social studies teacher has been serving as a Democrat in the 1st Congressional District since 2006 and is making his first bid for statewide office.</span>
        <br />
        <Image src='https://s3.amazonaws.com/data.minnpost/projects/minnpost-whos-running-2018/candidate-photos/tim-walz-head_150.jpg' ahref="http://www.walzforgovernor.org/" />

        <Label as='a' color='blue' ribbon>Rebecca Otto</Label>
        <span>DFL</span>
        <br />
        <span> A three-term state DFL state auditor, Rebecca Otto previously served a term in the Minnesota House and served on the Forest Lake Area School Board. She's touring the state doing listening sessions ahead of the campaign.</span>
        <br />
        <Image src='https://s3.amazonaws.com/data.minnpost/projects/minnpost-whos-running-2018/candidate-photos/rebecca-otto_150.jpg' href='https://www.rebeccaotto.com/' />
        <br />

        <Label as='a' color='blue' ribbon>Erin Murphy</Label>
        <span>DFL</span>
        <br />
        <span> Erin Murphy is a St. Paul DFL House representative and nurse who spent two years as the chamber’s majority leader, running campaigns for the caucus.</span>
        <br />
        <Image src='https://s3.amazonaws.com/data.minnpost/projects/minnpost-whos-running-2018/candidate-photos/erin-murphy_150.jpg' href="http://www.murphyformn.com/" />
      </Segment>

    </Grid.Column>

    <Grid.Column>
      <Segment raised>

        <Label as='a' color='red' ribbon>Tim Pawlenty</Label>
        <span>GOP</span>
        <br />
        <span>Former two-term Republican Gov. Tim Pawlenty announced in April that he plans to run for a third term in the governor's office. He announced his campaign with a video, talking about the squeezed middle class and the need to make college more affordable, cut down on health care fraud, eliminate taxes on social security benefits and go after the drug companies responsible for the opioid crisis.</span>
        <br />
        <Image src='https://s3.amazonaws.com/data.minnpost/projects/minnpost-whos-running-2018/candidate-photos/tim-pawlenty_150.jpg' href="http://www.timpawlenty.com/" />
        <br />

        <Label as='a' color='red' ribbon>Jeff Johnson</Label>
        <span>GOP</span>
        <br />
        <span>Former Minnesota House representative and current Hennepin County Commissioner Jeff Johnson ran for governor in 2014, losing to Gov. Mark Dayton. In 2018, he’s running again with a message focused on “…taking power away from government and giving it back to the people.”</span>
        <br />
        <Image src='https://s3.amazonaws.com/data.minnpost/projects/minnpost-whos-running-2018/candidate-photos/jeff-johnson_150.jpg' href="http://www.johnsonforgovernor./" />
        <br />
      

      <Label as='a' color='red' ribbon>Mary Giuliani Stephens</Label>
        <span>GOP</span>
        <br />
        <span>Mary Giuliani Stephens is the first woman to step into the Republican field for governor. She's running on her executive experience as mayor of Woodbury and changing the "culture" in the governor's office.</span>
        <br />
        <Image src='https://s3.amazonaws.com/data.minnpost/projects/minnpost-whos-running-2018/candidate-photos/mary-giuliani-stephens_150.jpg' href="https://maryformngov.com/" />
        <br />
      </Segment>
    </Grid.Column>
  </Grid>
</div>

);

export default Candidates;
