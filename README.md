<p align="center">
<img src="https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/Screen%20Shot%202020-09-13%20at%203.46.23%20PM.png?raw=true" />
</p>

<hr>
	
- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview
  
You have crash landed on an alien planet! You have managed to fix the ship and lift off, but the crash has caused the software to malfunction! Type in the embedded code editor and solve javaScript based questions to gain altitude and escape the global object!!

The front end of ETGO is built in React using functional components. The back end is a RESTful api built with Ruby on Rails. There are two main parts of the game, the embedded code editor, and the visualization of the spaceship flying through the planets atmosphere. Players have a limited amount of time to answer questions, and if they miss **just one** their ship blows up! No second chances here! The answers they input are tested with Jest, and the total time of their run is recorded. The recorded time of user's runs is the metric that is used to populate the leaderboard.  

<br>

## MVP

* User Authentication - Users can save their high scores and try to get on the leaderboard.
* Full CRUD 
	* Create - User Creation/Timed Runs
	* Read - High Score List/Retrieve users high-score
	* Update - High Score List/Users high-score
	* Delete - User Deletion
* 10 questions -  The users answers are evaluated with [Jest](https://jestjs.io/). 
* Code editor using [Ace - The High Performance Code Editor for the Web](https://ace.c9.io/#nav=about) 
* HTML Canvas element that is animated and changes based on the users answers. 

<br>

### Goals

* Deploy a full-stack Ruby on Rails project with a React front end.
* Learn how to test software, in this case with Jest. 
* Create a fun animated visual with pure HTML/CSS.
* Show ability to integrate user authentication. 

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | A javascript library used to build the front end of this project |
|   React Router   | A package that simulates a routing on the front end |
| Axios | Quick and easy API calls to the backend |
|    Ruby on Rails      | A web development frame work built on top of the ruby programming language |
|  Active Record  | An easy to use ORM(Object Relational Mapping) that enables connection to the PostgreSQL database  |

<br>

#### Wireframes and Design
<hr>

<p align="center">Desktop Landing</p>

![Desktop Landing](https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/wire-frames/Screen%20Shot%202020-09-13%20at%202.24.48%20PM.png?raw=true)

<p align="center">Desktop Game Play Screen</p>

![Desktop Game Play Screen](https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/wire-frames/Screen%20Shot%202020-09-13%20at%202.58.21%20PM.png?raw=true)

<p align="center">Desktop High Scores Screen</p>

![Desktop High Scores](https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/wire-frames/Screen%20Shot%202020-09-13%20at%203.26.32%20PM.png?raw=true)

<p align="center">Color Palette</p>

![Color Palette](https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/Escape%20The%20Global%20Object%20Alternative.png?raw=true)

<p align="center">Font Choices</p>

##### Title: 
Bowlby - <code>@import url('https://fonts.googleapis.com/css2?family=Bowlby+One+SC&display=swap');</code>

![Title](https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/Screen%20Shot%202020-09-13%20at%203.46.23%20PM.png?raw=true)

 ##### Text: 
 Roboto - <code>@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');</code> 

![Text](https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/Screen%20Shot%202020-09-13%20at%203.51.38%20PM.png?raw=true)

<hr>

#### Component Tree

<p align="center">
<img src="https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/Screen%20Shot%202020-09-13%20at%206.18.44%20PM.png?raw=true"/>
</p>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>


#### ERD Model

<p align="center">
<img src="https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/Screen%20Shot%202020-09-13%20at%201.47.40%20PM.png?raw=true" />
<p>

<br>

***

## Post-MVP

* Difficulty level selection
* 50 total questions
* Avatar Creation
* Music 
* Settings page - toggle music, delete account, change name. 
* Mobile view switches to multiple choice questions. 


## Code Showcase

> TBD

## Code Issues & Resolutions

> TBD
