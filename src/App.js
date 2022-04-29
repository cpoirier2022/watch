import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {NavBar, UIAllFox} from "./ui-components";
import { Routes, Route } from 'react-router-dom'

function App({ signOut }) { 
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/><UIAllFox/>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={signOut}>Logout</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);