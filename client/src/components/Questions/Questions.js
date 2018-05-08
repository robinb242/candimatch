import React, {Component} from "react";
import {
  Form, Checkbox, Button, Card, Statistic, Container, Rail, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Sticky, Step, Table, Divider, Dropdown
} from 'semantic-ui-react'
import "./Questions.css";

class Questions extends Component {
  state={}


handleChange= () => {}

  render () {
    return (

  <div>
    <Header as='h1' color='teal' textAlign='center'>
      {' '}Take the Survey
    </Header>

    <Grid.Column width={16}>

    <Segment stacked>
      <h2>ISSUE 'A'</h2>
  
        <Form>
        <Grid.Column width={10}>
        <Form.Group>
          <h3>QUESTION A-1</h3>
        
          <Grid.Column width={6}>
           <Form.Group widths='equal'>
            <Form.Field>
              <label>Strongly Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-A1'
                value= '1'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Disagree</label>
              <Checkbox
                type = 'radio'
                name='Ans-A1'
                value='2'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-A1'
                value='3'
                onChange={this.handleChange}
              />
              </Form.Field>
              <Form.Field>
                <label>No Opinion</label> 
                <Checkbox
                type = 'radio'
                name='Ans-A1'
                value= '4'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-A1'
                value='5'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Agree</label>
              <Checkbox
                type = 'radio'
                nname='Ans-A1'
                value='6'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Strongly Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-A1'
                value='7'
                onChange={this.handleChange}
              />
            </Form.Field>
            </Form.Group>
            </Grid.Column>
        </Form.Group>
        </Grid.Column>
      </Form>
    </Segment>
    </Grid.Column>

  </div>
)
}
}



export default Questions;