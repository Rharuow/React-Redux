import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h3>React Redux</h3>
      <div className="line">
        <Card title="Card 1" red>Card</Card>
        <Card title="Card 2" blue>Card</Card>
      </div>
      <div className="line">
        <Card title="Card 3" purple>Card</Card>
        <Card title="Card 4" green>Card</Card>
      </div>
    </div>
  );
}

export default App;
