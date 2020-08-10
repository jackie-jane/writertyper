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
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
|     Rails      | _Lorem ipsum dolor sit amet, consectetur._ |

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

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

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
