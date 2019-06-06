import React, {Component} from "react";
import {
  Form, Checkbox, Grid, Header, Segment,
} from 'semantic-ui-react'
import "./Questions.css";

class Questions extends Component {
  state={
    total: 0
  }


handleChange= (event, data) => {
  const { name, value } = data;
  console.log(name, value);
  this.setState({
    total: this.state.total + parseInt(value)
  }, ()=>console.log(this.state))
}

  render () {
    return (

  <div>
    <Header as='h1' color='teal' textAlign='center'>
      {' '}Take the Survey
    </Header>

    <Grid.Column width={16}>

    <Segment stacked>
      <h2>ENERGY & ENVIRONMENT</h2>
  
        <Form>
        <Grid.Column width={10}>
        
          <h3>I support government funding for the development of renewable energy (e.g. solar, wind, geothermal).</h3>
        
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
        
          <h3>I support federal regulation of greenhouse gas emmissions.</h3>
        
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
        
          <h3>I support the use of hydraulic fracking to extract oil and natural gas resources.</h3>
        
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
      <h2>MARIJUANA</h2>
  
        <Form>
        <Grid.Column width={10}>
        
          <h3>I support the legalization of medical marijuana.</h3>
        
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
        
          <h3>I support the legalization of marijuana for recreational purposes.</h3>
        
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
        
          <h3>I support lower minimum sentences for non-violent drug offenders in order to reduce prison overcrowding.</h3>
        
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
      <h2>BUDGET</h2>
  
        <Form>
        <Grid.Column width={10}>
        
          <h3>I support increasing taxes if it is necessary, in order to balance the budget.</h3>
        
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
        
          <h3>I support decreasing defense spending in order to balance the budget.</h3>
        
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
        
          <h3>I support taxing the wealthiest people at a higher rate.</h3>
        
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
                name='Ans-C3'
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