import React, { useState } from 'react';
import './App.css';
import Interval from './components/Interval'
import Media from './components/Media'
import Sum from './components/Sum'
import Choose from './components/Choose'

function App() {

  const [min, setMin] = useState(10)
  const [max, setMax] = useState(20)

  return (
    <div className="App">
      <h3>React Redux</h3>
      <div className="line">
        <Interval 
        min={min} 
        max={max}
        onMinChange={setMin}
        onMaxChange={setMax}
        >
        </Interval>
      </div>
      <div className="line">
        <Media min={min} max={max}></Media>
        <Sum min={min} max={max}></Sum>
        <Choose min={min} max={max}></Choose>
      </div>
    </div>
  );
}

export default App;
