import React from 'react'
import { useState } from 'react';

import "../components/MainPage.jsx";

import { Button } from '@mui/material';
import { styled } from '@mui/material';
import { TextField } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import "../App.css";


const StyledField = styled ( TextField ) ( {
  // color of the text being entered
  '& input': {
      color: 'black',
  },

  // colour of the text when not focused
  '& label': {
      color: '#000000',
  },

  // colour of the text that moves to the top
  '& label.Mui-focused': {
    color: 'black',
  },

  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },

  '& .MuiOutlinedInput-root': {
      // outline colour when nothing is happening
    '& fieldset': {
      borderColor: 'black',
    },
      // outline colour when hovering
    '&:hover fieldset': {
      borderColor: 'red',
    },
    // outline colour when focused
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});



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
              <StyledField
                onChange={ (event) => { SetAmount( event.target.value ) } }
                className="text"
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                style={ { color: "#EEC643" } }
                sx={ { margin: 1 } }/>
              
              {/* <button onClick={ () => console.log( Amount ) }>print</button> */}
              
              <Button onClick={ () => nav( "results", { state: Amount } ) } variant='contained' className='MUIButton' style={{ backgroundColor: "#0D21A1", fontFamily: "Roboto", margin: 0 }}>Calculate</Button>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default MainPage
