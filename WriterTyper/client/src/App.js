import React from 'react'
import { Route } from 'react-router-dom'
import Main from './screens/Main/Main'
import Upload from './screens/Upload/Upload'
import Read from './screens/Read/Read'
import Type from './screens/Type/Type'
import TextEdit from './screens/TextEdit/Edit'
import AuthorEdit from './screens/AuthorEdit/AuthorEdit'
import Layout from './components/SHARED/Layout'
import About from './screens/About/About'
import './App.css';

function App(props) {
  return (
    <Layout>
      <Route path='/' exact>
        <Main />
      </Route>
      <Route path='/upload'>
        <Upload />
      </Route>
      <Route path='/read'>
        <Read />
      </Route>
      <Route path='/edit/:authorId/:textId'>
        <TextEdit />
      </Route>
      <Route path='/author/:authorId/'>
        <AuthorEdit />
      </Route>
      <Route path='/type/:authorId/:textId'>
        <Type />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
    </Layout>
  );
}

export default App;
