import React, { Component } from 'react';
import './Header.css';


class HeaderBack extends Component{
    render(){
        return <div className="backBtn" onClick={this.props.back}>{this.props.backTit}</div>;
    };
}
class HeaderTit extends Component{
    render(){
        return <div className="tit">{this.props.title}</div>;
    };
}
class HeaderOpt extends Component{
    render(){
        return <div className="opt" onClick={this.props.opt}>{this.props.optTxt}</div>;
    };
}
class Header extends Component{
    render(){
        return <div className="header">
            <HeaderBack back={this.props.back} backTit={this.props.backTit}/>
            <HeaderTit title={this.props.title}/>
            <HeaderOpt optTxt={this.props.optTxt} opt={this.props.opt}/>
        </div>;
    };
}
export default Header;