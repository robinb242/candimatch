import React, { Component } from 'react';
import _ from 'lodash'
import logo from './logo.svg';
import './App.css';
import {AnswerOptions} from './components/AnswerOptions';
import {
  Form, Checkbox, Button, Card, Statistic, Container, Rail, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Sticky, Step, Table, Divider, Dropdown
} from 'semantic-ui-react'

export default class App extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    
    <div className = "ui container">
    {/* MENU BAR*/}
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
          <Menu.Item name='news' active={activeItem === 'news'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu> 
      </div>
    
    {/* MAIN HEADER*/}
    <div classname="ui grid">
      <div className="row">
        <div className="column ten wide">
          <div className = "ui container">
            <Container textAlign='center'>
               <b>Find a Candidate for Minnesota Governor in 2018 whose platform matches your values</b>
                <Divider />

                <p>After two terms in the governor’s office, Democrat Mark Dayton is stepping down, leaving a wide open field that has plenty of candidates clamoring to get in. On the DFL side, that includes a tight race for the endorsement between a U.S. representative, the current state auditor and a legislator from St. Paul. On the Republican side, a crowded field of candidates have emerged, including a former party chairman, a suburban mayor, a county commissioner and plenty of rank-and-file activists. But the entrance of a former governor into the race suggests a possible Republican primary race ahead.</p>
                <p>No matter what happens, 2018 will be a banner year in Minnesota politics.An open seat in the Minnesota governor’s office has already attracted more than a dozen candidates in both parties, which has in turn created a vacuum that’s left other state offices with open — and suddenly competitive — races.</p>
               <h4>Click on the button below to take our quiz to see which candidate's platform most closely relects your values</h4>
            </Container>
          </div>
        </div>


{/*Side Menu*/}
        <div className="column six wide">
          <Menu vertical>
            <Menu.Item>
            <Menu.Header>My Voting Booth</Menu.Header>
            <Menu.Menu>
              <Menu.Item name='enterprise' active={activeItem === 'enterprise'} onClick={this.handleItemClick} />
              <Menu.Item name='consumer' active={activeItem === 'consumer'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Research Issues</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='rails' active={activeItem === 'rails'} onClick={this.handleItemClick} />
              <Menu.Item name='python' active={activeItem === 'python'} onClick={this.handleItemClick} />
              <Menu.Item name='php' active={activeItem === 'php'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Research Candidates</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='shared' active={activeItem === 'shared'} onClick={this.handleItemClick} />
              <Menu.Item name='dedicated' active={activeItem === 'dedicated'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Support</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='email' active={activeItem === 'email'} onClick={this.handleItemClick}>
                E-mail Support
              </Menu.Item>

              <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick}>
                FAQs
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </div> 
    </div>
    
    {/*FIND YOUR CANDIDATE BUTTON, CLICK TO START QUIZ*/}

          <div className ="ui inverted segment">
          <button className="ui inverted green basic button">Find Your Candidate!</button>
          </div>

      <div>
        <menu vertical>
         <Button animated = 'fade'>
          <Button.Content visible>Take Survey</Button.Content>
           <Button.Content hidden>
            <Icon name='edit' />
           </Button.Content>
           </Button>

          <Button animated = 'fade'>
           <Button.Content visible>Research Issues</Button.Content>
            <Button.Content hidden>
            <Icon name='shop' />
           </Button.Content>
          </Button>

          <Button animated='fade'>
            <Button.Content visible>Research Candidates
            </Button.Content>
            <Button.Content hidden>
              $12.99 a month
            </Button.Content>
          </Button>
        </menu>
        </div>
    
    <br />

    <div class="ui two column doubling stackable grid container">
      <div class="column">
        <p>Test</p>
        <p>one</p>
      </div>
      <div class="column">
        <p>two</p>
        <p>three</p>
      </div>
    </div>
  

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
      

    <Segment stacked>
      <h3>Access to abortions should be a state decision..</h3>

  
        <Form>
        <Form.Field>
          Choose how you feel about the question: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            label='Strongly Disagree'
            name='checkboxRadioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Disagree'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
         <Form.Field>
          <Checkbox
            radio
            label='Somewhat Disagree'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
         <Form.Field>
          <Checkbox
            radio
            label='Somewhat Agree'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Agree'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    </Segment>


    <Segment stacked>
      <h3>Gun ownership is a 2nd Amendment right and should not be regulated.</h3>

  
        <Form>
        <Form.Field>
          Choose how you feel about the question: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Strongly Disagree'
            name='checkboxRadioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Disagree'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
         <Form.Field>
          <Checkbox
            radio
            label='Somewhat Disagree'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
         <Form.Field>
          <Checkbox
            radio
            label='Somewhat Agree'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Agree'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    </Segment>

    <Segment stacked>
      <h3>Development of renewable energy (e.g. solar, wind, thermal) should be supported by government funding.</h3>

  
        <Form>
        <Form.Field>
          Choose how you feel about the question: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Strongly Disagree'
            name='checkboxRadioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Disagree'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
         <Form.Field>
          <Checkbox
            radio
            label='Somewhat Disagree'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
         <Form.Field>
          <Checkbox
            radio
            label='Somewhat Agree'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Agree'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    </Segment>

    </div>

      <div className = "ui container">
        <div className = "ui green inverted message">
          <div className = "header">
            Register To Vote
          </div>
            <p>Find your polling place.</p>
        </div>
        <hr />
{/* Grids */}
   

      </div>
                
    </div>
    
     
  
    )
  }
}

