import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar.js";
import Landing from "./components/landing.js";
import Releases from "./components/releases.js";
import Artists from "./components/artists.jsx";
import About from "./components/about.js";
import './stylesheets/sidebar.css'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";


// const SideBar = props => {
//   return (
//       <>
//        <Container fluid>
//               <Row>
//                   <Col xs={2} id="sidebar-wrapper">      
//                     <Sidebar />
//                   </Col>
//               </Row>
//           </Container>
//       </>
//       );
// };

function App() {
  return (
    <div className="App" >
      
      <header className="App-header">
        <div id="home" style={{marginLeft:"15%"}}>
          <Landing style={{height:"100vh"}} />
          <Releases tyle = {{height:"100vh"}}  />
          <Artists tyle = {{height:"100vh"}}/>
          <About style={{height:"100vh"}}  />
        </div>
        <Sidebar />

      </header>
    </div>
  );
}

export default App;
