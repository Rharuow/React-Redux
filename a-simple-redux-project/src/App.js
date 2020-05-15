import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h3>React Redux</h3>
      <div className="line">
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
      </div>
    </div>
  );
}

export default App;
