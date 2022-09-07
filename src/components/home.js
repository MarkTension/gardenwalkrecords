import React from 'react';
import '../App.css';
import ReactGA from 'react-ga';
import Sidebar from "./sidebar.js";
import Blog from "./blog";
import Landing from "./landing.js";
import Releases from "./releases.jsx";
import Artists from "./artists.jsx";
import MailchimpForms from "./signupform.js";
import About from "./about.js";
import '../stylesheets/sidebar.css'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { isBrowser } from 'react-device-detect';
import {  } from "react-router-dom";

function SidebarIfBrowser() {

  return <Sidebar />

  // if (isBrowser) {
  //   return <Sidebar />
  // }
  // else {
  //   return null
  // }
}




function Home() {

  return (

    <div className="App" >

        <div id="home" width="100%" style={{ marginLeft: isBrowser ? "15%" : "0%", marginRight: "0%", padding: "0%" }}>
          <Landing  />
          <Blog  />
          <MailchimpForms  style={{ height: "100vh" }} /> 

          <Artists style={{ height: "100vh" }} />

          <Releases style={{ height: "100vh" }} />
          <About />

        </div>
        <SidebarIfBrowser />
    </div>
  );
}

export default Home;
