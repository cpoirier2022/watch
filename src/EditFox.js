import React, { Component } from 'react'
import { useParams } from "react-router-dom";
import { NavBar,UIEditFox } from "./ui-components";
import { DataStore } from "@aws-amplify/datastore";
import { Fox } from "./models";
import { useState, useEffect } from "react";
import "./App.css";

class EditFox extends Component {
    render(){
        return (<Put />);
    }
}

  function Put() {
    const { cid } = useParams();
    const [cr, setMe] = useState(0);
    useEffect(()=>{
      const pullData = async() => {
        const found = await DataStore.query(Fox, c => c.id("eq", cid));
            console.log("This s/b an array object:  ");
            console.log(found);
        setMe(found[0]);
            console.log("Look! the name field: " + found[0].name);
        }
        pullData()
      }, []) 
    return (
      <div className="App"><header className="App-header">
        <NavBar />
        <UIEditFox fx={cr}/>
        </header></div>
      );
    }

export default EditFox