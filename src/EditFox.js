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
        console.log("This list should have one object: " + found);
        setMe("Should be the thing to edit: " + found[0]);
        console.log(found[0].name);
        }
        pullData()
      }, []) 
      return (
        <div><p>{cid}</p>
          <NavBar />
          <UIEditFox fx={cr}/>
        </div>
      );
    }

export default EditFox