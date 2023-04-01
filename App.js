import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Comp from './comp1';
Om = "0"
function App() {
  return (
    <div className='window'>
      <div className='heading'>
         Next Big Chat app
      </div>
      <div className="comp1">
        <Comp/>
      </div>
      <div className="comp2"></div>
    </div>
  );
}

export default App;
