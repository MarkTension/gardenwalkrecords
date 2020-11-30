import React from "react";
import {Item, Title} from "./textConstants"
import { SocialIcon } from 'react-social-icons';



const About = props => {
    return (<div id="about">
            <Title>
            About
            </Title>
        
            <div id="about" style = {{height:"100vh",width:"50vw",marginLeft:"10%"}}>
                <Item style={{fontSize: "1.2em",textAlign:"left"}}>
                We release experiments in sound. This can be from coding endeavors, to glitching old analog equipment.</Item>
                <Item style={{fontSize: "1.2em",textAlign:"left"}}>
                This label provides artists with a platform to keep a record of research, and further integrate and cultivate these into beautiful music.
                </Item> 
                <Item style={{fontSize: "1.2em",textAlign:"left"}}>
                Much like plants in a garden, we display our releases, and hopefully polinate and cross-over into new directions. </Item>      
                <Item style={{fontSize: "1.2em",textAlign:"left"}}>
                Aside from experimenting, this is about making beautiful music. The vision and approach is what unites the artists
                </Item> 
                <SocialIcon url="https://www.instagram.com/gardenwalk.records/" bgColor="white"/>
        
            </div>
        </div>
        );
  };
  export default About