import React, { Component } from 'react';
import Header from './module/Header.js';
import Floot from './module/Floot.js';
import logo from './images/logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.back=this.back.bind(this);
    this.opt=this.opt.bind(this);
  }
  back(){
    alert(1);
  }
  opt(){

  }
  render() {
    return (
      <div className="App">
        <Header back={this.back} backTit="" title="主页" optTxt="" opt={this.opt}/>
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
