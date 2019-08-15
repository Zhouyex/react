import React from 'react';
import Head from './components/head/Head'
import Home from './components/home/Home'
import Detailhome from './components/detail/Detailhome'

// 使用路由   先下载   npm install react-router-dom

import {HashRouter as Router,Route,Link}from "react-router-dom"

function App() {
  return (
    <div className="App">
       
        <Head></Head>  

        <Router>
          <Route exact path='/' component={Home} />
          <Route  path='/home' component={Home} />
          <Route path='/detail' component={Detailhome} />
        </Router>

    </div>
  );
}

export default App;
