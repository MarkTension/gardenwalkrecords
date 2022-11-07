import React, { useEffect, useState } from "react";
import SidebarBack from "./sidebarBack";
import {Item, Title, Text} from "./textConstants"
import Markdown from "markdown-to-jsx";
import { isBrowser } from 'react-device-detect';
// import MailchimpForms from "./signupform.js";
import { ReactMailchimpEmailSignupForm } from 'react-mailchimp-email-signup-form';
// import 'react-mailchimp-email-signup-form/dist/esm/index.css';
import gardenImage from "../images/cactii.png";


const Listenings = props => {

  const [postContent, setPostContent] = useState("");

  useEffect(() => {
      import("../markdowns/listenings.md")
          .then(res => {
              fetch(res.default)
                  .then(response => response.text())
                  .then(response => setPostContent(response))
                  .catch(err => console.log(err))
          })
  }, [])
  const mailchimpUrl = "https://gardenwalkrecords.us2.list-manage.com/subscribe/post?u=" + `${process.env.REACT_APP_MAILCHIMP_U}` + "&id=" + `${process.env.REACT_APP_MAILCHIMP_ID}`
  return (
    <div id="listenings" style={{width: isBrowser ? "80vw" : "100vw", marginTop: isBrowser ? "2%" : "19%",  alignContent: "right", background:"white" }} >
      <Title style={{ width: "100%", textAlign: "center"}}>
        Listenings
      </Title>
      <img src={gardenImage}  style={{width:"20vw", height:"20vw" }} className="label-logo" alt="logo" />

      <Markdown
                style={{textAlign: "left",  marginLeft:"15%", marginRight:"15%", fontFamily: 'Josefin Sans', fontSize:'0.8em' }}
            >
                {postContent}
            </Markdown>
      <SidebarBack />

      {/* <MailchimpForms style={{ height: "100vh"}} text = "signup here!" />  */}

      <Item style={{color: "black"}}>Subscribe here to our bi-weekly album picks:</Item>
      <ReactMailchimpEmailSignupForm
        elementId="first-email-signup-form"
        url= {mailchimpUrl}
        // subtitle="We take privacy seriously and we'll never spam or sell your information."
      />

      <div style={{paddingBottom:"4%"}}></div>
      <div style={{paddingBottom:"10%"}}></div>
    </div>

  );
};
export default Listenings