import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AnswerOptions} from './components/AnswerOptions';
import {
  Form, Checkbox, Button, Card, Statistic, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Sticky, Step, Table, Divider, Dropdown
} from 'semantic-ui-react'

export default class App extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    
    <div className = "ui container ">
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>

      <div className = "ui container">
      <Container textAlign='center'>
         <b>Find a Candidate for Minnesota Governor in 2018 whose platform matches your values</b>
          <Divider />

          <p>After two terms in the governor’s office, Democrat Mark Dayton is stepping down, leaving a wide open field that has plenty of candidates clamoring to get in. On the DFL side, that includes a tight race for the endorsement between a U.S. representative, the current state auditor and a legislator from St. Paul. On the Republican side, a crowded field of candidates have emerged, including a former party chairman, a suburban mayor, a county commissioner and plenty of rank-and-file activists. But the entrance of a former governor into the race suggests a possible Republican primary race ahead.</p>
          <p>No matter what happens, 2018 will be a banner year in Minnesota politics.An open seat in the Minnesota governor’s office has already attracted more than a dozen candidates in both parties, which has in turn created a vacuum that’s left other state offices with open — and suddenly competitive — races.</p>
         <h4>Click on the button below to take our quiz to see which candidate's platform most closely relects your values</h4>

          <div className ="ui inverted segment">
          <button className="ui inverted green basic button">Find Your Candidate!</button>
          </div>

          

    
      <div>
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
        </div>
    </Container>
  

    //GRIDS
    _____________________________________________________________________

    <Grid columns={2}>
    <Grid.Column>
      <Segment raised>
        <Label as='a' color='red' ribbon>Tim Waltz</Label>
        <span>DFL</span>

        <Image src='https://s3.amazonaws.com/data.minnpost/projects/minnpost-whos-running-2018/candidate-photos/tim-walz-head_150.jpg' ahref="http://www.walzforgovernor.org/" />

        <Label as='a' color='blue' ribbon>Community</Label>
        <span>User Reviews</span>

        <Image src='http://via.placeholder.com/150x150' />
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <Label as='a' color='orange' ribbon='right'>Specs</Label>
        <Image src='http://via.placeholder.com/150x150' />

        <Label as='a' color='teal' ribbon='right'>Reviews</Label>
        <Image src='http://via.placeholder.com/150x150' />
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

      </div>
                
    </div>

    )
  }
}

