import React from 'react';
import logo from './logo.svg';
import './App.css';
import Func from './func'

function App() {
  return (
    <div>
      <div  style={{color:'white',background:'#042e15',padding:'15px'}}>
      <h2 className="container">My first React Application</h2>
      </div>
      <Func/>
    </div>
  );
}

export default App;
