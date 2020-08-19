# writertyper

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

_**writertyper** is an app for writers to practice their typing skills, learn the rhythms and language patterns of some histories greats, and analyze their own work._

<br>

## MVP

_**WriterTyper's** _ MVP will allow a user to practice their typing with any short text from any writer. The inspiration for this app came from Hunter S. Thompson, who as a youg writer typed The Great Gatsby multiple times just to get "the feeling". I believe that this not only helps a writer learn to type faster and more effeicently, but better understand language patterns and the rythym of communication. Those within the visual arts often recreate a "master's" work and this app seeks to help wirters do just that. Our data (the text) comes from Project Gutenberg an open-source project that compiles pubilically availible text. PMVP goals are to allow the app to report anyalitics in realtime such as words per minute, accuracy, and approximate writing time it would take the user to complete typing the work themselves.  

<br>

### Goals

- _The ability to type (word for word) any text uploaded to our rails database_
- _a 'ruby on rails' database seeded with data from Project Gutenberg_
- _a reactapp with at least 8 rendered componenets and three 'screens' using react router_

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front-end framework|
|   React Router   | Allows React to have multiple 'screens' |
|     Rails      | back-end framework |
| Typeitjs | allows for animation on mainpage|

### Client (Front End)

#### Wireframes

https://xd.adobe.com/view/5e5f3b27-baf0-4a43-b6e2-d679036453f6-0b0c/screen/215de92e-28cd-457f-9a27-39eb40ac2d77
(Desktop Wireframe 7 screens)

#### Component Tree

https://whimsical.com/Y78CfuqSobwwAEbMcMh8KC

#### Component Hierarchy

``` structure
src
|__ assets/
    |__ fonts
|__ components/
    |__ SHARED
        |__Header
            |__Header.js
            |__Header.css
        |__Footer
            |__Footer.js
            |__Footer.css
        |__Main
            |__Main.js
            |__Main.css
        |__Layout
            |__Layout.js
            |__Layout.css
        |__TitleAndAuthor
            |__TitleAndAuthor.js
            |__TitleAndAuthor.css
        |__SubmitButton
            |__SubmitButton.js
            |__SubmitButton.css  
        |__Text
            |__Text.js
            |__Text.css 
    |__ MAIN
        |__StartButon
            |__StartButton.js
            |__StartButton.css
        |__Introduction
            |__Introduction.js
            |__Introduction.css
    |__ TYPE
         |__WordPerMinute
            |__WordPerMinute.js
            |__WordPerMinute.css
         |__Accuracy
            |__Accuracy.js
            |__Accuracy.css
         |__Esitmate
            |__Estimate.js
            |__Estimate.css           
         |__Indicator
            |__Indicator.js
            |__Indicator.css           
     |__ READ
         |__UpdateTextInput
            |__UpdateTextInput.js
            |__UpdateTextInput.css
         |__EditButton
            |__EditButton.js
            |__EditButton.css        
         |__DeleteButton
            |__DeleteButton.js
            |__DeleteButton.css        
         |__Modal
            |__Modal.js
            |__Modal.css         
     |__UPLOAD
        |__UploadForm
            |__UploadForm.js
            |__UploadForm.css
     |__ services/
        |__ApiConfig.js
        |__Text.js
 |__screens
     |__Main
        |__Main.js
        |__Main.css
     |__Type
        |__Type.js
        |__Type.css 
     |__Read
        |__Read.js
        |__Read.css
     |__Upload
        |__Upload.js
        |__Upload.css
__App.js
__App.css
__Index.js
```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
| Header    | functional |   n   |   n   | The header will contain the navigation and logo|
| Footer |   functional   |   n   |   n   | Just a footer |
| Main | functional |   n   |   n   | provides the main component that all other components will be rendered on |
| TitleAndAuthor| class | n |   p   | renders title and author on read and type screens|
| SubmitButton   | class |   n   |   n   | submit button on update and upload screens|
| StartButton | functional |   n   |   n   | routes user to type screen|
| Introduction | functional |   n   |   n   | text on main page|
| WordPerMinute  | class |   y   |   y   | counts the speed of the users typing on type screen|
| Accuracy   | class |   y   |   y   | provides a percentage of accurate characters typed by user|
| Estimate| class | y |   y   | estimates the time it would take the user to finish the document based on wpm|
| UpdateTextInput| class |   Y   |   Y   | editable text input field|
| EditButton | functional |   n   |   y   | allows user to access UpdateTextInput |
| DeleteButton | functional |   y   |   y   | deletes the text from Database|
| modal  | class |   y   |   y   | deletes the text from Database |
| UploadForm  | class |   y   |   y   | form that creates text in database|

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create File Structure|    H     |     3 hrs      |     2hrs   | 2hrs |
| Create database migration	|    H    |     1 hrs      | 1hr       |    1hr  |
| Create database models	|    H    |     1 hrs      |     2hrs    |     2hrs  |
| Create Seed file	|    H    |     2 hrs    |      4hrs   |     4hrs  |
| Rails Controllers	|    H    |     3 hrs      |     2hrs     |    2hrs   |
| Test Api and Debug	|    H    |     2 hrs      |   4hrs        |     4hrs   |
| Header Component	|    H    |     1 hrs      |    1.5hrs     |   1.5hrs   |
| Footer Component	|    H    |     1 hrs      |    1 hrs      |    1 hrs   |
| Main Component	|    H    |     1 hrs      |    1 hrs       |  1 hrs     |
| Layout Component	|    H    |     1 hrs      |   1 hrs      |  1 hrs     |
| SubmitButton Component	|    H    |     2 hrs      |    1 hrs      |   1 hrs     |
| StartButton Component	|    H    |     1 hrs      |   1hrs      |  1hrs     |
| Introduction	|    H    |     1 hrs      |   2hrs      |  2hrs    |
| UpdateTextInput Component	|    H    |     2 hrs      |  4hrs       |  4hrs      |
| DeleteButton Component	|    H    |     1 hrs      |   1 hrs       |   1 hrs     |
| UploadForm	|    H    |     1 hrs      |    4hrs      |    4hrs    |
| ApiConfig	|    H    |     1 hrs      |     1 hrs     |   1 hrs    |
| Main Screen	|    H    |     4 hrs      |    3hrs     |   3hrs  |
| Type Screen	|    H    |     3 hrs      |    8hrs    |   8hrs    |
| Read Screen	|    H    |     2 hrs      |   2hrs      |   2hrs   |
| Upload Screen	|    H    |     3 hrs      |   3hrs      | 3hrs     |
| App.js|    H    |     2 hrs      |      1hr   |    1hr  |
| index.js|    H    |     1 hrs      |     1 hrs      |      1 hrs  |
| Css|    H    |     10 hrs      |     8hrs    |   8hrs   |
| MVP Contingency|    H    |  7 hrs  |   :---------:       |  :---------:     |
| Total|:---------:       |  57 hrs  |  59.5hrs       |  59.5hrs     |

### Server (Back End)

#### ERD Model

https://whimsical.com/Q56Mz28NmJdP7ELfKHjXzE

<br>

***

## Post-MVP

Post-MVP goals include:
-adding a user functionality.
-auth
-adding more texts to seed file
-adding author bio page
-about page
-finding a way to integreate Project GutenBergs Api into databse



***

## Code Showcase
The code below shows the prototype for how the typing function works. Using state to dynamically keep track of three different arrays.
```
  handleType = (e) => {
    const userInput = e.target.value
    const char = this.state.currentChar
    if (userInput === char) {
      const newCompleted = this.state.completed
      const newUpcoming = this.state.upcoming
      const nextChar = newUpcoming.shift()
      newCompleted.push(userInput)
      this.setState({
        upcoming: newUpcoming,
        completed: newCompleted,
        currentChar: nextChar
      })
      e.target.value = ''
    }
  }
  render() {
    const completeRender = this.state.completed.join('')
    const upcomingRender = this.state.upcoming.join('')
    return (
      <>
        {this.state.completed ?
          <div
            className='typeCont'>
            <p>
              <span
                className='completedText'>
                {completeRender}
              </span>
              <mark
                className='currentChar'>
                {this.state.currentChar}
              </mark>
              <span
                className='upcomingText'>
                {upcomingRender}
              </span>
            </p>
            <textarea
              className='userInput'
              onKeyUp={this.handleType}>
            </textarea>
          </div>
          :
          <>
            <textarea
              value={this.state.currentChar}
              disabled='disabled'
            ></textarea>
            <textarea
              onKeyUp={this.handleType}
            ></textarea>
          </>
        }
```
## Code Issues & Resolutions

1. The biggest challenge with this project was finding a way to get the typing function to operate. I started off with one letter at a time. This relied on an array created from the text. While working with this array I realized that I could create multiple and in a way keep track of the user's progress. In the future I'd like to make this more sophistacted to better handle wrong answers as well as give users metrics like words per minute.

2. Another challenge I am currently working to resolve is formatting the text. Especially for poems, punctuation and spacing matters. Some characters don't translate well. I am currently working on an algoirithim so when you upload and edit text some of the problematic characters are automatically changed to ones the program can handle better.
