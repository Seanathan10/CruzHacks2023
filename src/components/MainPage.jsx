import React from 'react'
import { useState } from 'react';

import "../components/MainPage.jsx";

import { Button } from '@mui/material';
import { TextField } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import "../App.css";

function MainPage() {
  const nav = useNavigate();
  const [ Amount, SetAmount ] = useState();

  return (
    <div className='background'>
      <div className="container">

        <div className='title'>
          <p className='title_text'>Slug Points Budgeting</p>
        </div>


        <div className='content'>
          <p className='PointsLabel'>Enter the amount of slug points you have:</p>

          <div className='s3'>
              <TextField
                onChange={ (event) => { SetAmount( event.target.value ) } }
                className="text"
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                style={ { color: "#EEC643" } }
                sx={ { margin: 1 } }/>
              
              <button onClick={ () => console.log( Amount ) }>print</button>
              
              <Button onClick={ () => nav( "results", { state: Amount } ) } variant='contained' className='MUIButton' style={{ backgroundColor: "#0D21A1", fontFamily: "Roboto", margin: 0 }}>Calculate</Button>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default MainPage
