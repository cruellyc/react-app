import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Floot.css';

import img1 from '../images/robot.png'
import img2 from '../images/batctl.png'
import img3 from '../images/msg.png'
import img4 from '../images/my.png'
const links = [
  {cls: 'aTool', to: './',       img: img1, txt: '机器人'},
  {cls:'aTool', to: './batctl', img: img2, txt: '批量控制' },
  {cls:'aTool', to: './msg',    img: img3, txt: '消息中心' },
  {cls:'aTool', to: './my',     img: img4, txt: '我的' }
];

class FlootBtn extends Component{
    render(){
        let cls="flootBtn"+this.props.n+" "+this.props.link.cls;
        return(
            <Link className={cls} to={this.props.link.to}>
              <div className="btnImg">
                    <img src={this.props.link.img}/>
                </div>
                <div className="btnTxt">
                    {this.props.link.txt}
                </div>
            </Link>
        );
    }
}

class Floot extends Component{
    render(){
        let n=links.length;
        let elinks = links.map((link, index)=>{
            link.cls = (index===this.props.activeTool ? 'aTool_hl' : 'aTool');
            return <FlootBtn link={link} key={index} n={n}/>
        })
        return(
            <div className="floot">{elinks}</div>
        );
    }
}

export default Floot;