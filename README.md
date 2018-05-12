
# CandiMatch
<p>CandiMatch is a full stack, MERN application that connects voters with candidates running for Governor of Minnesota. With this application, you can do the following:</p>
<ul>
	<li>Take a political values questionaire to see which candidate's platform most closely matches you political position.</li>
	<li>Research Candidates</li>
	<li>Research Issues</li>
	<li>Register to Vote</li>
	<li>Find you local polling place</li>

## Table of contents
  * [Live](#live)
  * [Screenshots](#screenshots)
  * [About this project](#about-this-project)
  * [Contributors](#contributors)
  * [Getting started](#getting-started)
  * [Structure of the project](#structure-of-project)
  * [Technologies used to create app](#technologies-used)
  	* [Backend technologies](#Backend)
  	* [Frontend technologies](#Frontend)
    * [About the Petfinder API](#petfinder)
  * [Design improvements](#design-improvements)
  * [Issues](#Issues)

## <a name="live"></a>Live
https://pet-match-app.herokuapp.com/

## <a name="screenshots"></a> Screenshots

### Home page
<img src="readMeImages/home.png">

### Candidate Research
<img src="readMeImages/candidates.png">


### CandiMatch Survey Page
<img src="">

## <a name="about-this-project"></a> About this project

  * [How the app works](#how-app-works)
  * [How the app is built](#how-the-app-is-built)
 
### <a name="how-app-works"></a> How the app works
This project is a full stack application that helps the user match their poitical values with a candidate's platform. This application focuses on the 2018 Minnesota Governors Race. 

When you first start using the app, you will be taken to the home screen. When you get to the home screen of the app, you are presented with several options you may take the quiz, which attempts to match you with a candidate that most closely matches your political vales based on how the user answers the questionaire. After you take the quiz, you will get your results back, with three candidates that whose platform's most closely match your values.  

If you don't want to take an assessment, or would like to do a bit more research first. You can skip the quiz and choose a link on the right vertical menu. You can choose to Research Issues, Research Candidates, Register To Vote, and Find your Polling Place.

### <a name="how-the-app-is-built"></a> How the app is built
This project uses React, Node.js, Express, React Router, MongoDB, and Semantic UI. Node and MongoDB are used to query and route data in the application. Express is the backend web framework used for this application. Semantic UI React is a CSS framework that is used to design and build the front end part of the site. 

## <a name="contributors"></a> Contributors
* Back End Developer: Max Adams
* Back End Developer: Chris Young 
* Front End Developer: Robin Bertuccelli
* Front End Developer/Project Manager: LeAnn Sawatzky

## <a name="getting-started"></a> Getting started
The following section will take you through the steps of setting up this application and getting it running locally on your computer.

If you don't want to set up this project locally and just want to see the deployed application, go to  https://candiMatch.herokuapp.com/

To set up this application locally on your computer, perform the following steps:
1. [Clone the repository](#clone-repository)
2. [Install the dependencies](#dependencies)
3. [Start the server](#start-server)

### <a name="clone-repository"></a> 1. Clone the repository
The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:
<pre>
  git clone https://github.com/robinb242/candiMatch.git
  cd candiMatch
</pre>

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

Start MongoDB server: Open a new terminal window and type the following command.

```
mongod

```
Go back to the terminal window open to the candiMatch directory and run.
```
yarn install
cd client
yarn install
cd ../
```
After both installations complete, run the following command in your terminal:

```
yarn start
```
That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.
</pre>
<p>"yarn start" will concurrently run "nodemon server.js" and "npm run client" </p>
<p>A browser window will automatically open and either display your app, or show an error message pointing the way to the problem./p>

## <a name="technologies-used"></a> Technologies used to build app
* [Backend technologies](#Backend)
* [Frontend technologies](#Frontend)

### <a name ="Backend"></a> Backend technologies
* Node.js (https://nodejs.org/en/)
* MongoDB (https://www.mongodb.com/)
* Express (http://expressjs.com/)
* Mongoose ODM (http://mongoosejs.com/)
* Javascript
* Passport.js Authentication for Node.js(http://www.passportjs.org/)

### <a name="Frontend"></a> Frontend technologies
* HTML
* CSS
* Semantic UI React (https://semantic-ui.com/)
* Javascript
* React (https://reactjs.org/)
* JSX notation (https://reactjs.org/docs/introducing-jsx.html)
* ES6 ()

### <a name="New Technologies"></a> New Technologies
* Semantic-UI-React - New CSS library
* ESLink - ES6 and Javascript Linter plugin utility for Sublime Text 

## <a name="design-improvements"></a> Design improvements
* Add more research options links and provide more content on candidates platforms. 
* Scale to other political races and locations

## <a name ="Issues"></a> Issues
<p>If you find an issue while using the app or have a request, <a href="https://github.com/robinb242/candiMatch/issues" target="_blank">log the issue or request here</a>. These issues will be addressed in a future code update.</p>

