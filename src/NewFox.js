import React, { Component } from 'react'
import { UINewFox, NavBar } from "./ui-components";
import "./App.css";

class NewFox extends Component {
    render(){
        return (<Put />);
    }
}

  function Put() {
    return (
      <div className="App"><header className="App-header">
        <NavBar/>
        <UINewFox style={{ textAlign: "left"}} />
        </header></div>
      );
    }

export default NewFox