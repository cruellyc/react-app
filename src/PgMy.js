import React, { Component } from 'react';
import Header from './module/Header.js';
import Floot from './module/Floot.js';
import logo from './images/logo.svg';
import './PgMy.css';

class PgMy extends Component {
  constructor(props) {
    super(props);
    this.opt=this.opt.bind(this);
  }
  opt(){
    alert(1);
  }
  render() {
    return (
      <div className="App">
        <Header title="我的" optTxt="设置" opt={this.opt}/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>欢迎来到菜鸟教程</h2>
        </div>
        <p className="App-intro">
          你可以在 <code>src/App.js</code> 文件中修改。
        </p>
        <Floot activeTool={3}/>
      </div>
    );
  }
}

export default PgMy;