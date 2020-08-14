import React from 'react'
import { Route } from 'react-router-dom'
import Main from './screens/Main/Main'
import Upload from './screens/Upload/Upload'
import Read from './screens/Read/Read'
import Type from './screens/Type/Type'
import Edit from './screens/Edit/Edit'
import Layout from './components/SHARED/Layout/Layout'
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
        <Edit />
      </Route>
      <Route path='/type'>
        <Type />
      </Route>
    </Layout>
  );
}

export default App;
