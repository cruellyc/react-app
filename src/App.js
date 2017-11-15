import React, { Component } from 'react';
import Header from './module/Header.js';
import Floot from './module/Floot.js';
import logo from './images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>欢迎来到菜鸟教程</h2>
        </div>
        <p className="App-intro">
          你可以在 <code>src/App.js</code> 文件中修改。
        </p>
        <Floot activeTool={0}/>
      </div>
    );
  }
}

export default App;
