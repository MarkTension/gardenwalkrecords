import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar.js";
import Home from "./components/home.js";
import Listenings from "./components/listenings.js";
import Blog from "./components/blog.js";

import './stylesheets/sidebar.css'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { isBrowser } from 'react-device-detect';
import { HashRouter, Route, Link, Switch } from "react-router-dom";

function SidebarIfBrowser() {

  if (isBrowser) {
    return <Sidebar />
  }
  else {
    return null
  }
}



function App() {

  return (

    <div className="App" >

      <header className="App-header" width="100%" >
        <div id="home" width="100%" style={{ marginLeft: isBrowser ? "15%" : "0%", marginRight: "0%", padding: "0%"}}>

            <Switch>

              <Route path='/' component={Home} exact/>
              <Route  path='/listenings' component={Listenings} />
              <Route path='/blog' component={Blog} />

            </Switch>

        </div>

      </header>
    </div>
  );
}

export default App;
