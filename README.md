<p align="center">
<img src="https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/Screen%20Shot%202020-09-13%20at%203.46.23%20PM.png?raw=true" />
</p>

<hr>
	
- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes and Design](#Wireframes-and-Design)
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

You have crash landed on an alien planet! You have managed to fix the ship and lift off, but the crash has caused the software to malfunction! Type in the embedded code editor and solve JavaScript based questions to gain altitude and escape the global object!!

The front end of ETGO is built in React using functional components. The back end is a RESTful api built with Ruby on Rails and using PostgreSQL for the database. There are two main parts of the game, the embedded code editor, and the visualization of the spaceship flying through the planets atmosphere. Players have a limited amount of time to answer questions, and if they miss **just one** their ship blows up! No second chances here! The answers they input are tested with Jest, and the total time of their run is recorded. The recorded time of user's runs is the metric that is used to populate the leaderboard.

<br>

## MVP

- User Authentication - Users can save their high scores and try to get on the leaderboard.
- Full CRUD
  - Create - Timed Runs/User Submitted Questions
  - Read - High Score List/Retrieve users high-score/Questions
  - Update - Users high-score
  - Delete - Delete Submitted Questions
- 10 questions - The users answers are evaluated with [Jest](https://jestjs.io/).
- Code editor using [Ace - The High Performance Code Editor for the Web](https://ace.c9.io/#nav=about)
- HTML Canvas element that is animated and changes based on the users answers.

<br>

## Goals

- Deploy a full-stack Ruby on Rails project with a React front end.
- Use Jest to test users answers.
- Create a fun animated visual with pure HTML/CSS.
- Integrate user authentication.

<br>

## Libraries and Dependencies

|     Library     | Description                                                                                            |
| :-------------: | :----------------------------------------------------------------------------------------------------- |
|      React      | A JavaScript library used to build the front end of this project                                       |
| React Bootstrap | I know, I know Bootstap...They just make it so easy! Used mostly for navbar, inputs, and submit button |
|  React Router   | A package that simulates page routing on the front end                                                 |
|      Axios      | Quick and easy API calls to the backend                                                                |
|  Ruby on Rails  | A web development frame work built on top of the ruby programming language                             |
|  Active Record  | An easy to use ORM(Object Relational Mapping) that enables connection to the PostgreSQL database       |
|   Bycrpt/JWT    | These two packages are used for user authentication                                                    |

<br>

## Wireframes and Design

<p align="center">Desktop Landing</p>

![Desktop Landing](https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/wire-frames/Screen%20Shot%202020-09-13%20at%202.24.48%20PM.png?raw=true)

<p align="center">Desktop Game Play Screen</p>

![Desktop Game Play Screen](https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/wire-frames/Screen%20Shot%202020-09-13%20at%202.58.21%20PM.png?raw=true)

<p align="center">Desktop High Scores Screen</p>

![Desktop High Scores](https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/wire-frames/Screen%20Shot%202020-09-13%20at%203.26.32%20PM.png?raw=true)

<center>

|                                                                Mobile Game Play Screen                                                                |                                                                        Mobile High Scores                                                                        |                                                                               Mobile Login                                                                                |
| :---------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![MGPS](https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/Screen%20Shot%202020-09-13%20at%208.37.45%20PM.png?raw=true) | ![MHS](https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/wire-frames/Screen%20Shot%202020-09-14%20at%207.32.31%20PM.png?raw=true) | ![Mobile Login](https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/wire-frames/Screen%20Shot%202020-09-14%20at%207.52.23%20PM.png?raw=true) |

</center>

<p align="center">Color Palette</p>

![Color Palette](https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/Escape%20The%20Global%20Object%20Alternative.png?raw=true)

<p align="center">Font Choices</p>

### Title:

Bowlby - <code>@import url('https://fonts.googleapis.com/css2?family=Bowlby+One+SC&display=swap');</code>

![Title](https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/Screen%20Shot%202020-09-13%20at%203.46.23%20PM.png?raw=true)

### Text:

Roboto - <code>@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');</code>

![Text](https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/Screen%20Shot%202020-09-13%20at%203.51.38%20PM.png?raw=true)

<br>

## Component Tree

<p align="center">
<img src="https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/Screen%20Shot%202020-09-13%20at%206.18.44%20PM.png?raw=true"/>
</p>

<br>

## Component Hierarchy

```structure

src
|__Conatiners/
      |__ MainContianer
|__ Screens/
      |__ LoginSignup
      |__ GamePlay
      |__ HighScores
      |__ QuestionsSubmit
|__ Components/
      |__ Login
      |__ Signup
      |__ QuestionBoxEditor
      |__ AnimationContainer
      |__ PlayerScore
      |__ HighScore
|__ Layouts/
      |__ Layout
|__ services/
      |__api-config

```

<br>

## Component Breakdown

|     Component      |    Type    | state | props | Description                                                                                |
| :----------------: | :--------: | :---: | :---: | :----------------------------------------------------------------------------------------- |
|   Main Container   | functional |   Y   |   N   | _Main logic will happen here and pass data into the components that require it._           |
|       Layout       | functional |   N   |   N   | _This will contain the responsive navigation bar._                                         |
|       Login        | functional |   Y   |   N   | _Will collect user input and send via services to backend for login verification._         |
|       Signup       | functional |   Y   |   N   | _Will collect user input and send via services to create a new user profile._              |
| QuestionBoxEditor  | functional |   Y   |   Y   | _Contains the questions and code editor - Exact logic of game is TBD._                     |
| AnimationContainer | functional |   Y   |   Y   | _Will render a rocket ship lifting off from the ground and sky changing based on answers._ |
|    PlayerScore     | functional |   Y   |   Y   | _Will show users their previous recorded scores._                                          |
|     HighScore      | functional |   Y   |   Y   | _Will show users the global high scores from all players._                                 |

<br>

## Time Estimates

| Task                                     | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Models, Controllers, Routes       |    H     |     1 hrs      |    27 Mins    |     TBD     |
| Build out CRUD methods in Controllers    |    H     |     2 hrs      |    51 mins    |     TBD     |
| Add user authentication                  |    M     |     3 hrs      |   8.5 Mins    |     TBD     |
| Build Layout                             |    L     |     .5 hrs     |      TBD      |     TBD     |
| Login/Signup                             |    M     |     2 hrs      |      TBD      |     TBD     |
| QuestionBoxEditor                        |    H     |     5 hrs      |      TBD      |     TBD     |
| Jest Testing Implementation & Game Logic |    H     |     5 hrs      |      TBD      |     TBD     |
| AnimationContainer                       |    H     |     5 hrs      |      TBD      |     TBD     |
| PlayerScore                              |    L     |     1 hrs      |      TBD      |     TBD     |
| HighScore                                |    L     |     1 hrs      |      TBD      |     TBD     |
| Styling                                  |    L     |     5 hrs      |      TBD      |     TBD     |
| TOTAL                                    |          |    30.5 hrs    |      TBD      |     TBD     |

<br>

## ERD Model

<p align="center">
<img src="https://github.com/Henry-Cook/Escape-The-Global-Object/blob/master/readme-assets/Screen%20Shot%202020-09-15%20at%2012.22.14%20PM.png?raw=true"/>
<p>

<br>

## Post-MVP

- Difficulty level selection
- 50 total questions/Move questions into DB
- Avatar Creation
- Music
- Settings page - toggle music, delete account, change name.
- Mobile view switches to multiple choice questions.

<br>

## Code Showcase

> TBD
> <br>

## Code Issues & Resolutions

> TBD
