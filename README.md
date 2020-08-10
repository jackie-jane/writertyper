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

_**WriterTyper's** _ MVP will allow a user to practice their typing with the text of a short story by F. Scott Fitzgerald. The inspiration for this app came from Hunter S. Thompson, who as a youg writer typed The Great Gatsby multiple times just to get "the feeling". I believe that this not only helps a writer learn to type faster and more effeicently, but better understand language patterns and the rythym of communication. Those within the visual arts often recreate a "master's" work and this app seeks to help wirters do just that. The MVP will be responsive to 3 differen screen sizes, however it will not support mobile as the practice of writing anything of significant length should not be done on a mobile device if possible. (The point of this app is to work witha full size keyboard). Our data (the text) comes from Project Gutenberg an open-source project that compiles pubilically availible text. The app will also report anyalitics in realtime such as words per minute, accuracy, and approximate writing time it would take the user to complete typing the work themselves.  

<br>

### Goals

- _The ability to type (word for word) F. Scott Fitzgerald's short story, The Romantic Egotist_
- _Three Screen Sizes not including mobile_
- _Anyalytics that include WPM, Accuracy, and total typing time_
- _a 'ruby on rails' database seeded with data from Project Gutenberg_
- _a react with at least 8 rendered componenets and three 'screens' using react router_

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front-end framework|
|   React Router   | Allows React to have multiple 'screens' |
|     Rails      | back-end framework |

### Data Sources 
|     Data         |Source                                       | Data Description                            | Source Description |
| :--------------: | :-----------------------------------------: | :-----------------------------------------: | :----------------------------------------- |
| The Romantic Egotist | The Gutenberg Project      | Short Story from F. Scott Fitzgeral's Paradise Lost | "a library of over 60,000 free eBooks." |
 
<br>

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
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
