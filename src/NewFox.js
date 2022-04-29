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
        <div>
            <NavBar/>
            <UINewFox style={{ textAlign: "left"}} />
        </div>
      );
    }

export default NewFox