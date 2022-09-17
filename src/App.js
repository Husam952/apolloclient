import logo from './logo.svg';
import './App.css';

import { StateCensus } from './components/StateCensus'
import SearchFunction from './components/SelectState'
import  FormPractice  from './components/FormPractice'
import { useState } from 'react';
import { Capstone } from './components/Capstone';


function App() {
  
  
  const [text, setText] = useState("")
  //
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>US Census Data by State</h1>
          
         
          <SearchFunction  />
          <StateCensus ></StateCensus>

        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
