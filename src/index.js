import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style' //引入全局样式  去除默认样式
import './static/bootstrap/css/bootstrap.css'
import store from './store/store'
import {Provider} from 'react-redux'


ReactDOM.render(
    
    <Provider store={store}>
       
            <App />
        
    </Provider>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

