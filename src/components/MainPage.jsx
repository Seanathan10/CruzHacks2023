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
          {/* <img src="https://cdn.discordapp.com/attachments/1068431730815553546/1071553350664982558/SDS_UCSantaCruz_RedwoodSlug_WhiteGround.png" alt="" width={ 200 }/> */}
          {/* <img src="data:image/jpeg;base64,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" alt="" width={ 200 }/> */}
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_XAOlW6X8H-8jCvOYxx5vcpt2i7SJAvLSJGCng9ZMQQ&s" alt="" width={ 200 } /> */}
          <img src="https://i1.sndcdn.com/artworks-IUWDeJvtphzO8m4O-ba1BDw-t500x500.jpg" alt="" width={ 200 } />
          {/* <img src="data:image/jpeg;base64,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" alt="" width={ 200 }/> */}
        </div>


        <div className='description'>
          {/* <p className='PointsLabel'>This will be the description of the website</p> */}
          <p className='title_text'>秉持零</p>
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
