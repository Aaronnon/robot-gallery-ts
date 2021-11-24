import React from 'react';
import './App.css';
import robots from './mockdata/robots.json'
import Robot from './components/Robot';

function App() {
  return (
    <ul>
      {robots.map(item => <Robot id={item.id} email={item.email} name={item.name} />)}
    </ul>
  );
}

export default App;
