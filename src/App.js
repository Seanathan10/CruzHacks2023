import './App.css';

import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Results from './components/Results.jsx';
import MainPage from './components/MainPage.jsx';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={ <MainPage/> }></Route>
        <Route path="/results" element={ <Results/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
