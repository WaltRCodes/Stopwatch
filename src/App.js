import React from 'react';

import './App.css';
//This imports stopwatch which is later called via the Stopwatch class
//psuedocode: call the Stopwatch in the App function to display it on the webpage
import Stopwatch from './components/Stopwatch';
function App() {
  return (
    <div className="App">
      <Stopwatch />
    </div>
  );
}

export default App;
