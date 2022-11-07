import React from 'react';
import '../App.css';
import Sidebar from "./sidebar.js";
import Blog from "./blog";
import Landing from "./landing.js";
import Releases from "./releases.jsx";
import Artists from "./artists.jsx";
import {Item, Title, Text} from "./textConstants"

// import MailchimpForms from "./signupform.js";
import About from "./about.js";
import '../stylesheets/sidebar.css'
import { isBrowser } from 'react-device-detect';
import { } from "react-router-dom";
import { ReactMailchimpEmailSignupForm } from 'react-mailchimp-email-signup-form';

function Home() {
  const mailchimpUrl = "https://gardenwalkrecords.us2.list-manage.com/subscribe/post?u=" + `${process.env.REACT_APP_MAILCHIMP_U}` + "&id=" + `${process.env.REACT_APP_MAILCHIMP_ID}`
  return (
    <div className="App" >

      <div id="home" width="100%" style={{ marginLeft: isBrowser ? "15%" : "0%", marginRight: "0%", padding: "0%" }}>
        <Landing />
        <Blog />
        {/* <MailchimpForms  style={{ height: "100vh" }} text = "... or join our mailing-list" />  */}
        
        <Text style={{fontSize:"0.6em"}}>Subscribe here to our bi-weekly album listenings</Text>
        <ReactMailchimpEmailSignupForm
          elementId="first-email-signup-form"
          url= {mailchimpUrl}
        // title="Subscribe to the Newsletter"
        // subtitle="We take privacy seriously and we'll never spam or sell your information."
        />
        <Artists style={{ height: "100vh" }} />
        <Releases style={{ height: "100vh" }} />
        <About />

      </div>
      <Sidebar />
    </div>
  );
}

export default Home;
