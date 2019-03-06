import React, { Component } from 'react';

import Login from './Component/Login';
import './App.css';



class App extends Component {
  render(){
    return (
      <div className = "App_Container">
        <Login />
      </div>
    )
  }
}

export default App;