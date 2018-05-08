import React from "react";
import VertMenu from '../components/VertMenu';
import { Menu, Grid, Container, Divider, Image, Button } from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Questions from '../components/Questions';


const Survey = () => (
		// console.log ("handlePageLoad function");

  <div>
    <Grid>
    	<Grid.Row>
    		<Grid.Column width={16}>

		      <Container textAlign='center'>
		      	<b>TAKE THE SURVEY TO FIND A CANDIDATE WHOSE VALUES MOST CLOSELY MATCH YOUR VALUES.</b>
		          
		        <Divider />

		        <p>Review the following statements regarding each of the issues and select the column that most closely matches your level of agreement.</p>
		        
		        <p>More Instructions.</p>

		        <div>
		        	<h1>!!The form should load here!!</h1>
		       		<Questions />
		       	</div>
		         		        		       
		       	<h4>You have finished the survey. Click the button below to find your matching candidate.</h4>
		       
		       	<br />

				<div className ="ui inverted segment">
		          <button className="ui inverted green huge button fluid">Submit Survey</button>
		        </div>


		      </Container> 
    		</Grid.Column>
    	</Grid.Row>
    </Grid>
  </div>

);
  
export default Survey;