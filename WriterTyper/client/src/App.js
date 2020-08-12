import React from 'react';
import { Route } from 'react-router-dom'
import Main from './screens/Main/Main'
import Upload from './screens/Upload/Upload'
import Read from './screens/Read/Read'
import Type from './screens/Type/Type'
import './App.css';

function App() {
  return (
    <>
      <Route path='/' exact>
        <Main />
      </Route>
      <Route path='/upload'>
        <Upload />
      </Route>
      <Route path='/read' exact>
        <Read />
      </Route>
      <Route path='/type' exact>
        <Type />
      </Route>
    </>
  );
}

export default App;
