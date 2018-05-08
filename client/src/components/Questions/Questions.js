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
    <Segment stacked>
      <h3>Access to abortions should be a state decision.</h3>

  
        <Form>
       
        <Form.Field>
          <Checkbox
            type = 'radio'
            label='Strongly Disagree'
            name='checkboxRadioGroup'
            value= '1'
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            type = 'radio'
            label='Disagree'
            name='checkboxRadioGroup'
            value='2'
            onChange={this.handleChange}
          />
        </Form.Field>
         <Form.Field>
          <Checkbox
            type = 'radio'
            label='Somewhat Disagree'
            name='checkboxRadioGroup'
            value='3'
            onChange={this.handleChange}
          />
          </Form.Field>
          <Form.Field>
          <Checkbox
            type = 'radio'
            label='No Opinion'
            name='checkboxRadioGroup'
            value= '4'
            onChange={this.handleChange}
          />
        </Form.Field>
         <Form.Field>
          <Checkbox
            type = 'radio'
            label='Somewhat Agree'
            name='checkboxRadioGroup'
            value='5'
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            type = 'radio'
            label='Agree'
            name='checkboxRadioGroup'
            value='6'
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            type = 'radio'
            label='Strongly Agree'
            name='checkboxRadioGroup'
            value='7'
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    </Segment>

  </div>
)
}
}



export default Questions;