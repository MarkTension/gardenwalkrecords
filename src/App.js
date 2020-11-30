import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import Sidebar from "./components/sidebar.js";
import Landing from "./components/landing.js";
import Releases from "./components/releases.jsx";
import Artists from "./components/artists.jsx";
import About from "./components/about.js";
import './stylesheets/sidebar.css'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import {isBrowser} from 'react-device-detect';

function SidebarIfBrowser() {

  if (isBrowser) {
    return <Sidebar />
  }
  else{
    return null
  }
}



function App() {
  
  return (
    
    <div className="App" >
      
      <header className="App-header" width="100%" >
        <div id="home" width="100%" style={{marginLeft: isBrowser ? "15%" : "0%" ,marginRight:"0%",padding:"0%"}}>
          <Landing style={{height:"100vh"}} />
          <Releases style = {{height:"100vh"}}  />
          <Artists style = {{height:"100vh"}}/>
          <About  />
          
        </div>
        
        <SidebarIfBrowser />

      </header>
    </div>
  );
}

export default App;
