import React from 'react';
import './App.css';
import Interval from './components/Interval'
import Media from './components/Media'
import Sum from './components/Sum'
import Choose from './components/Choose'

function App() {
  return (
    <div className="App">
      <h3>React Redux</h3>
      <div className="line">
        <Interval>

        </Interval>
      </div>
      <div className="line">
        <Media>Card</Media>
        <Sum>Card</Sum>
        <Choose>Card</Choose>
      </div>
    </div>
  );
}

export default App;
