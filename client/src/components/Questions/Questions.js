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
     
        </Grid.Column>
      </Form>

       <Form>
        <Grid.Column width={10}>
        
          <h3>QUESTION A-2</h3>
        
          <Grid.Column width={6}>
           <Form.Group widths='equal'>
            <Form.Field>
              <label>Strongly Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-A2'
                value= '1'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Disagree</label>
              <Checkbox
                type = 'radio'
                name='Ans-A2'
                value='2'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-A2'
                value='3'
                onChange={this.handleChange}
              />
              </Form.Field>
              <Form.Field>
                <label>No Opinion</label> 
                <Checkbox
                type = 'radio'
                name='Ans-A2'
                value= '4'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-A2'
                value='5'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Agree</label>
              <Checkbox
                type = 'radio'
                nname='Ans-A2'
                value='6'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Strongly Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-A2'
                value='7'
                onChange={this.handleChange}
              />
            </Form.Field>
            </Form.Group>
            </Grid.Column>
     
        </Grid.Column>
      </Form>

       <Form>
        <Grid.Column width={10}>
        
          <h3>QUESTION A-3</h3>
        
          <Grid.Column width={6}>
           <Form.Group widths='equal'>
            <Form.Field>
              <label>Strongly Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-A3'
                value= '1'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Disagree</label>
              <Checkbox
                type = 'radio'
                name='Ans-A3'
                value='2'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-A3'
                value='3'
                onChange={this.handleChange}
              />
              </Form.Field>
              <Form.Field>
                <label>No Opinion</label> 
                <Checkbox
                type = 'radio'
                name='Ans-A3'
                value= '4'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-A3'
                value='5'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Agree</label>
              <Checkbox
                type = 'radio'
                nname='Ans-A3'
                value='6'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Strongly Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-A3'
                value='7'
                onChange={this.handleChange}
              />
            </Form.Field>
            </Form.Group>
            </Grid.Column>
     
        </Grid.Column>
      </Form>
    </Segment>

     <Segment stacked>
      <h2>ISSUE 'B'</h2>
  
        <Form>
        <Grid.Column width={10}>
        
          <h3>QUESTION B-1</h3>
        
          <Grid.Column width={6}>
           <Form.Group widths='equal'>
            <Form.Field>
              <label>Strongly Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-B1'
                value= '1'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Disagree</label>
              <Checkbox
                type = 'radio'
                name='Ans-B1'
                value='2'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-B1'
                value='3'
                onChange={this.handleChange}
              />
              </Form.Field>
              <Form.Field>
                <label>No Opinion</label> 
                <Checkbox
                type = 'radio'
                name='Ans-B1'
                value= '4'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-B1'
                value='5'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Agree</label>
              <Checkbox
                type = 'radio'
                nname='Ans-B1'
                value='6'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Strongly Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-B1'
                value='7'
                onChange={this.handleChange}
              />
            </Form.Field>
            </Form.Group>
            </Grid.Column>
     
        </Grid.Column>
      </Form>

       <Form>
        <Grid.Column width={10}>
        
          <h3>QUESTION B-2</h3>
        
          <Grid.Column width={6}>
           <Form.Group widths='equal'>
            <Form.Field>
              <label>Strongly Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-B2'
                value= '1'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Disagree</label>
              <Checkbox
                type = 'radio'
                name='Ans-B2'
                value='2'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-B2'
                value='3'
                onChange={this.handleChange}
              />
              </Form.Field>
              <Form.Field>
                <label>No Opinion</label> 
                <Checkbox
                type = 'radio'
                name='Ans-B2'
                value= '4'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-B2'
                value='5'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Agree</label>
              <Checkbox
                type = 'radio'
                nname='Ans-B2'
                value='6'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Strongly Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-B2'
                value='7'
                onChange={this.handleChange}
              />
            </Form.Field>
            </Form.Group>
            </Grid.Column>
     
        </Grid.Column>
      </Form>

       <Form>
        <Grid.Column width={10}>
        
          <h3>QUESTION A-3</h3>
        
          <Grid.Column width={6}>
           <Form.Group widths='equal'>
            <Form.Field>
              <label>Strongly Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-B3'
                value= '1'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Disagree</label>
              <Checkbox
                type = 'radio'
                name='Ans-B3'
                value='2'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-B3'
                value='3'
                onChange={this.handleChange}
              />
              </Form.Field>
              <Form.Field>
                <label>No Opinion</label> 
                <Checkbox
                type = 'radio'
                name='Ans-B3'
                value= '4'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-B3'
                value='5'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Agree</label>
              <Checkbox
                type = 'radio'
                nname='Ans-B3'
                value='6'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Strongly Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-B3'
                value='7'
                onChange={this.handleChange}
              />
            </Form.Field>
            </Form.Group>
            </Grid.Column>
     
        </Grid.Column>
      </Form>
    </Segment>

     <Segment stacked>
      <h2>ISSUE 'C'</h2>
  
        <Form>
        <Grid.Column width={10}>
        
          <h3>QUESTION C-1</h3>
        
          <Grid.Column width={6}>
           <Form.Group widths='equal'>
            <Form.Field>
              <label>Strongly Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-C1'
                value= '1'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Disagree</label>
              <Checkbox
                type = 'radio'
                name='Ans-C1'
                value='2'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-C1'
                value='3'
                onChange={this.handleChange}
              />
              </Form.Field>
              <Form.Field>
                <label>No Opinion</label> 
                <Checkbox
                type = 'radio'
                name='Ans-C1'
                value= '4'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-C1'
                value='5'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Agree</label>
              <Checkbox
                type = 'radio'
                nname='Ans-C1'
                value='6'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Strongly Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-C1'
                value='7'
                onChange={this.handleChange}
              />
            </Form.Field>
            </Form.Group>
            </Grid.Column>
     
        </Grid.Column>
      </Form>

       <Form>
        <Grid.Column width={10}>
        
          <h3>QUESTION C-2</h3>
        
          <Grid.Column width={6}>
           <Form.Group widths='equal'>
            <Form.Field>
              <label>Strongly Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-C2'
                value= '1'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Disagree</label>
              <Checkbox
                type = 'radio'
                name='Ans-C2'
                value='2'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-C2'
                value='3'
                onChange={this.handleChange}
              />
              </Form.Field>
              <Form.Field>
                <label>No Opinion</label> 
                <Checkbox
                type = 'radio'
                name='Ans-C2'
                value= '4'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-C2'
                value='5'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Agree</label>
              <Checkbox
                type = 'radio'
                nname='Ans-C2'
                value='6'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Strongly Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-C2'
                value='7'
                onChange={this.handleChange}
              />
            </Form.Field>
            </Form.Group>
            </Grid.Column>
     
        </Grid.Column>
      </Form>

       <Form>
        <Grid.Column width={10}>
        
          <h3>QUESTION C-3</h3>
        
          <Grid.Column width={6}>
           <Form.Group widths='equal'>
            <Form.Field>
              <label>Strongly Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-C3'
                value= '1'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Disagree</label>
              <Checkbox
                type = 'radio'
                name='Ans-C3'
                value='2'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Disagree</label> 
              <Checkbox
                type = 'radio'
                name='Ans-C3'
                value='3'
                onChange={this.handleChange}
              />
              </Form.Field>
              <Form.Field>
                <label>No Opinion</label> 
                <Checkbox
                type = 'radio'
                name='Ans-C3'
                value= '4'
                onChange={this.handleChange}
              />
            </Form.Field>
             <Form.Field>
              <label>Somewhat Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-C3'
                value='5'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Agree</label>
              <Checkbox
                type = 'radio'
                nname='Ans-C3'
                value='6'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Strongly Agree</label>
              <Checkbox
                type = 'radio'
                name='Ans-C3'
                value='7'
                onChange={this.handleChange}
              />
            </Form.Field>
            </Form.Group>
            </Grid.Column>
     
        </Grid.Column>
      </Form>
    </Segment>
    </Grid.Column>

  </div>
)
}
}



export default Questions;