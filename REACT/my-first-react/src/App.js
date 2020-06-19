import React from 'react';
import logo from './logo.svg';
import './App.css';
import Func from './func'
import Class1 from './class1';
import Prop from './exprop'
import Card from './card'

function App() {
  const empdata=['shivangi','sirisha',"mohsin"]
  return (
    <div>
      <div  style={{color:'white',background:'#042e15',padding:'15px'}}>
      <h2 className="container">My first React Application</h2>
      </div>
      
      <Card></Card>
      
      <Func name='Student Data'></Func>
      <Class1 name="****student details****"></Class1>
        {empdata.map((value,index)=>(
          <Prop name={value} key1={index}></Prop>
        ))}
      
    </div>
  );
}

export default App;
