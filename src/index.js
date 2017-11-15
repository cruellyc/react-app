import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';//路由
import './index.css';
import App from './App';
import PgMy from './PgMy';
import PgLogin from './PgLogin';
import registerServiceWorker from './registerServiceWorker';


//判断是否登录 未登录跳转到登录页面
const PrivRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        1===1? (
            <Component {...props}/>
        ):(
            <Redirect to='/login'/>
        )
    )}/>
)
ReactDOM.render((
    <Router>
        <div>
            <PrivRoute exact path='/' component={App} />
            <PrivRoute path='/my' component={PgMy} />
            <Route path='/login' component={PgLogin} />
        </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
