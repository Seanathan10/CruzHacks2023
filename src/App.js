import './App.css';

import { Button } from '@mui/material';
import { TextField } from '@mui/material';

function App() {

  return (
    <div className='background'>
      <div className="container">

        <div className='title'>
          <p className='title_text'>Slug Points Budgeting</p>
        </div>


        <div className='content'>
          <p className='PointsLabel'>Enter the amount of slug points you have:</p>

          <div className='s3'>
              <TextField className="text" id="outlined-basic" label="Outlined" variant="outlined" style={ { color: "#EEC643" } } sx={ { margin: 1 } }/>
              <Button onClick={ alert } variant='contained' className='MUIButton' style={{ backgroundColor: "#0D21A1", fontFamily: "Roboto", margin: 0 }}>Calculate</Button>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default App;
