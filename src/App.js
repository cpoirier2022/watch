import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {NavBar, UIAllFox} from "./ui-components";
import { Routes, Route } from 'react-router-dom'
import NewFox from './NewFox'
import EditFox from './EditFox';
class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
      <Routes>
        <Route exact path='/' element={<div><NavBar/><UIAllFox/></div>} />
        <Route exact path='/new' element={<NewFox/>} />
        <Route exact path='/edit/:cid' element={<EditFox/>} />
      </Routes>
      </header></div>
    );
}
}

export default withAuthenticator(App);