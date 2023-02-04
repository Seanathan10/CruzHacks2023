import React from 'react'
import { useState } from 'react';

import "../components/MainPage.jsx";

import { Button } from '@mui/material';
import { styled } from '@mui/material';
import { TextField } from '@mui/material';
import { Checkbox } from '@mui/material';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import "../App.css";

import { blue } from '@mui/material/colors';

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
      borderColor: '#162F65',
    },
    // outline colour when focused
    '&.Mui-focused fieldset': {
      borderColor: '#011638',
    },
  },
});



function MainPage() {
  const nav = useNavigate();
  const [ Amount, SetAmount ] = useState( false );
  const [ Porter, SetPorter ] = useState( false );
  const [ East, SetEast ] = useState( false );
  const [ West, SetWest ] = useState( false );

  function EastChange() {
    SetEast( !East );
  }

  function WestChange() {
    SetWest( !West );
  }

  function PorterChange() {
    SetPorter( !Porter );
  }


  return (
    <div className='background'>
      <div className="container">


        <div className='title'>
          <img src="https://cdn.discordapp.com/attachments/1068431730815553546/1071553350664982558/SDS_UCSantaCruz_RedwoodSlug_WhiteGround.png" alt="" width={ 200 }/>
        </div>


        <div className='description'>
          {/* <p className='PointsLabel'>This will be the description of the website</p> */}
          <p className='title_text'>Slug Points Budgeting</p>
        </div> 
        
        <div className='second_division'>

          <div className='left_box'>
          

            
            <div className='inputs'>
              <StyledField
                onChange={ (event) => { SetAmount( event.target.value ) } }
                className="text"
                id="outlined-basic"
                label="Remaining Slug Points"
                variant="outlined"
                style={ { color: "#EEC643" } }
                sx={ { margin: 1 } }
                />

            <StyledField
              onChange={ (event) => { SetAmount( event.target.value ) } }
              className="text"
              id="outlined-basic"
              label="Last day (optional)"
              variant="outlined"
              style={ { color: "#EEC643" } }
              sx={ { margin: 1 } }
              />
              
              <div className='calculate_Button'>
                <Button onClick={ () => nav( "results", { state: Amount } ) } variant='contained' className='MUIButton' style={ { backgroundColor: "#0D21A1", fontFamily: "Roboto", margin: 0 } } >Calculate</Button>
              </div>
            </div>

            {/* <button onClick={ ShowAll } >PRINT</button> */}
              
          
          </div>

          <div className='spacer'/>


          <div className='right_box'>
            <FormGroup>
            <p className='included'>Included Areas:</p>
              <FormControlLabel
                control={ <Checkbox
                onChange={ EastChange }
                              sx={{
                                color: blue[ 900 ],
                                '&.Mui-checked': {
                                    color: blue[ 900 ],
                                  },
                                }}/> } label="East Campus" >
              </FormControlLabel>

              <FormControlLabel
                control={ <Checkbox
                onChange={ WestChange }
                              sx={{
                                color: blue[ 900 ],
                                '&.Mui-checked': {
                                    color: blue[ 900 ],
                                  },
                                }}/> } label="West Campus" >
                </FormControlLabel>

              <FormControlLabel
                control={ <Checkbox
                onChange={ PorterChange }
                              sx={{
                                color: blue[ 900 ],
                                '&.Mui-checked': {
                                    color: blue[ 900 ],
                                  },
                                }}/> } label="Porter Market Haul" >
              </FormControlLabel>

            </FormGroup>

          </div>
        </div>
      
      </div>
    </div>
  )
}

export default MainPage
