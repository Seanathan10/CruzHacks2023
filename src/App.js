import logo from './logo.svg';
import './App.css';

import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <div className='App2'>
        Hello
      </div>

      <button>Test Standard</button>

      <Button variant='contained' className='MUIButton' style={{ backgroundColor: "red", fontFamily: "Comic Sans MS" }}>MUI Test</Button>
    </div>
  );
}

export default App;
