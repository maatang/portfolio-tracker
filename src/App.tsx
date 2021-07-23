import React from 'react';
import logo from './logo.svg';
import './App.css';
import Linegraph from './components/Linegraph';

function App() {
  return (
    <div className="App">
      <h2>Investment Portfolio</h2>
      <div className="CenterRow">
        <div className="LineGraphContainerMed FlexCentered">
          <Linegraph/>
        </div>
      </div>
    </div>
  );
}

export default App;
