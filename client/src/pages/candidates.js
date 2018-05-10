
import React, { Component } from 'react';
import _ from 'lodash'
// import './Candidate.css';
import {
   Card, Container,  Grid, Header, Icon, Label, Image, Segment, Divider
} from 'semantic-ui-react';
import "./candidates.css";

const Candidates =() => (
	
<Container>
    <div>
  <Grid columns={2}>
    <Grid.Column>
      <Segment raised>

        <Label as='a' color='blue' href="http://www.walzforgovernor.org/" target="_blank" ribbon>Tim Waltz</Label>
        <span>DFL</span>
        <br />

        <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                   <Image src={require('../assets/images/candidateImages/tim_waltz_150.jpg')} size="tiny" href="http://www.walzforgovernor.org/" target="_blank" />
                </Grid.Column>
                <Grid.Column width={12}>
                     <span>The former Mankato high school coach and history and social studies teacher has been serving as a Democrat in the 1st Congressional 
                    District since 2006 and is making his first bid for statewide office.
                </span>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
        <br />

        <Label as='a' color='blue' href='https://www.rebeccaotto.com/' target="_blank" ribbon>Rebecca Otto</Label>
        <span>DFL</span>
        <br />
         <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                   <Image src={require('../assets/images/candidateImages/rebecca-otto_150.jpg')} size="tiny" href='https://www.rebeccaotto.com/'  target="_blank" />
                </Grid.Column>
                <Grid.Column width={12}>
                     <span> A three-term state DFL state auditor, Rebecca Otto previously served a term in the Minnesota House and served on the Forest Lake Area School Board. She's touring the state doing listening sessions ahead of the campaign.</span>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
        <br />

        <Label as='a' color='blue' href="http://www.murphyformn.com/" target="_blank" ribbon>Erin Murphy</Label>
        <span>DFL</span>
        <br />
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                   <Image src={require('../assets/images/candidateImages/erin-murphy_150.jpg')} size="tiny" href="http://www.murphyformn.com/"  target="_blank" />
                </Grid.Column>
                <Grid.Column width={12}>
                     <span> Erin Murphy is a St. Paul DFL House representative and nurse who spent two years as the chamber’s majority leader, running campaigns for the caucus.</span>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
       <br />

     <Label as='a' color='orange' href="https://www.facebook.com/jennylrhoades/" target="_blank" ribbon>Jenny Rhoades</Label>
        <span>Independence</span>
        <br />
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                   <Image src={require('../assets/images/candidateImages/jenny-rhoades.jpg')} size="tiny" href="https://www.facebook.com/jennylrhoades/"  target="_blank" />
                </Grid.Column>
                <Grid.Column width={12}>
                    <span> "I'm running for governor to make Minnesota a better place. I am not here to let people involve me in their biased agendas, I dont care who you are. I dont like games and will not tolerate it."</span>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
       <br />

     <Label as='a' color='orange' href="https://www.votejames4gov.com/" target="_blank" ribbon>James Everett</Label>
        <span>Independence</span>
    <br />
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                   <Image src={require('../assets/images/candidateImages/james-everett.png')} size="tiny" href="https://www.votejames4gov.com/"  target="_blank" />
                </Grid.Column>
                <Grid.Column width={12}>
                    <span> "I am James Everett and I am running for Governor of Minnesota. I am a creative visionary who utilizes my influencing skills to connect intersecting concepts with real life results. I have over 20 years experience navigating the political pathways of local politics and community needs."</span>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
       <br />


     <Label as='a' color='green' href="https://www.votewright.org/" target="_blank" ribbon>Chris Wright</Label>
        <span>Independence</span>
    <br />
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                   <Image src={require('../assets/images/candidateImages/chris-wright_150.jpg')} size="tiny" href="https://www.votewright.org/"  target="_blank" />
                </Grid.Column>
                <Grid.Column width={12}>
                    <span>Chris Wright is running for governor as a Grassroots party candidate. His platform includes the legalization of marijuana.</span>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
       <br />

     <Label as='a' color='purple' href="http://www.lesliedavis.org/" target="_blank" ribbon>Leslie Davis</Label>
        <span>Independence</span>
        <br />
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                   <Image src={require('../assets/images/candidateImages/leslie-davis_150.jpg')} size="tiny" href="http://www.lesliedavis.org/"  target="_blank" />
                </Grid.Column>
                <Grid.Column width={12}>
                   <span>Leslie Davis is a perennial candidate who is running for under the "earth protector" brand.</span>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
       <br />
    </Segment>

    </Grid.Column>

    <Grid.Column>
      <Segment raised>

        <Label as='a' color='red' href="http://www.timpawlenty.com/" target="_blank" ribbon>Tim Pawlenty</Label>
        <span>GOP</span>
        <br />
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                   <Image src={require('../assets/images/candidateImages/tim-pawlenty_150.jpg')} size="tiny" href="http://www.timpawlenty.com/"   target="_blank" />
                </Grid.Column>
                <Grid.Column width={12}>
                  <span>Former two-term Republican Gov. Tim Pawlenty announced in April that he plans to run for a third term in the governor's office. He announced his campaign with a video, talking about the squeezed middle class and the need to make college more affordable, cut down on health care fraud, eliminate taxes on social security benefits and go after the drug companies responsible for the opioid crisis.</span>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
        <br />

        <Label as='a' color='red' href="http://www.johnsonforgovernor./" target="_blank" ribbon>Jeff Johnson</Label>
        <span>GOP</span>
        <br />
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                   <Image src={require('../assets/images/candidateImages/jeff-johnson_150.jpg')} size="tiny" href="http://www.johnsonforgovernor./"   target="_blank" />
                </Grid.Column>
                <Grid.Column width={12}>
                 <span>Former Minnesota House representative and current Hennepin County Commissioner Jeff Johnson ran for governor in 2014, losing to Gov. Mark Dayton. In 2018, he’s running again with a message focused on “…taking power away from government and giving it back to the people.”</span>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
        <br />

      <Label as='a' color='red' href="https://maryformngov.com/" target="_blank" ribbon>Mary Giuliani Stephens</Label>
        <span>GOP</span>

         <br />
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                   <Image src={require('../assets/images/candidateImages/mary-giuliani-stephens_150.jpg')} size="tiny" href="https://maryformngov.com/"   target="_blank" />
                </Grid.Column>
                <Grid.Column width={12}>
                  <span>Mary Giuliani Stephens is the first woman to step into the Republican field for governor. She's running on her executive experience as mayor of Woodbury and changing the "culture" in the governor's office.</span>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
        <br />

     <Label as='a' color='red' href="https://www.facebook.com/whartonforminnesota2018/" target="_blank" ribbon>Jeffrey Ryan Wharton</Label>
        <span>GOP</span>

           <br />
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                   <Image src={require('../assets/images/candidateImages/jeffrey-ryan-wharton.jpg')} size="tiny" href="https://www.facebook.com/whartonforminnesota2018/" target="_blank" />
                </Grid.Column>
                <Grid.Column width={12}>
                 <span>"Just know I may have officially left the race but I will be submitting as a write in candidate for the office of Governor of Minnesota....We need change and we will strive to make history, We need accountability and I have heard enough garbage from these other candidates to make me seriously puke."</span>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
        <br />

      <Label as='a' color='red' href="https://parrish4mn.com/" target="_blank" ribbon>Phillip Parish</Label>
        <span>GOP</span>
        <br />
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                   <Image src={require('../assets/images/candidateImages/phillip-parrish.jpg')} size="tiny" href="https://parrish4mn.com/" target="_blank" />
                </Grid.Column>
                <Grid.Column width={12}>
                <span>"A school teacher, Parish is focusing on constitutional issues."</span>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
        <br />

     <Label as='a' color='red' href="https://ballotpedia.org/Nikolay_Nikolayevich_Bey" target="_blank" ribbon>Nickolay Bey</Label>
        <span>GOP</span>
        <br />
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                   <Image src={require('../assets/images/candidateImages/nickolay-bey.jpg')} size="tiny" href="https://ballotpedia.org/Nikolay_Nikolayevich_Bey" target="_blank" />
                </Grid.Column>
                <Grid.Column width={12}>
                <span>"A Woodbury native, Nikolay Bey is listed as being self-employed. He previously entered the 2014 congressional race as a candidate. "</span>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
        <br />

      <Label as='a' color='red' href="http://www.votebobagain.com/" target="_blank" ribbon>Bob Carney</Label>
        <span>GOP</span>

        <br />
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                   <Image src={require('../assets/images/candidateImages/bob-carney_150.jpg')} size="tiny" href="http://www.votebobagain.com/" target="_blank" />
                </Grid.Column>
                <Grid.Column width={12}>
                <span>"A perennial candidate for office with a focus on transportation issues, Bob "Again" Carney, Jr. recently suspended a campaign for mayor of Minneapolis to join the growing field for Governor.</span>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
        <br />
        

      <Label as='a' color='red' href="https://lancejohnson4governor2018.com/" target="_blank" ribbon>Lance Johnson</Label>
        <span>GOP</span>

        <br />
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                   <Image src={require('../assets/images/candidateImages/lance-johnson.jpg')} size="tiny" href="https://lancejohnson4governor2018.com/" target="_blank" />
                </Grid.Column>
                <Grid.Column width={12}>
               <span>"Lance Johnson is an attorney who previously served as head of the Minnesota Department of Commerce under Gov. Harold LeVander in the 1960s.</span>
                 </Grid.Column>
            </Grid.Row>
        </Grid>
        <br />
      </Segment>
    </Grid.Column>
  </Grid>
</div>
</Container>

);

export default Candidates;
