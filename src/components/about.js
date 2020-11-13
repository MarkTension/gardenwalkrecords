import React from "react";
import styled from 'styled-components'
import gardenImage from "../images/subconsciousGarden.png";
import {Item, Title} from "./textConstants"


const About = props => {
    return (<div id="about" style = {{height:"100vh"}}>
        
            <Title>
            About
            </Title>
        <div id="about" style = {{height:"100vh",width:"50vw"}}>

            <Item style={{fontSize: "1.2em",textAlign:"left"}}>
            This is an Amsterdam based label.</Item>
            <Item style={{fontSize: "1.2em",textAlign:"left"}}>
            Park House Records was born to express a deep, feeling that does not describe a particular scene or place, but something of our own inner scenery. 
            </Item>
            <Item style={{fontSize: "1.2em",textAlign:"left"}}>
                This platform has allowed myself and the label’s artists to create imagery through music and sound, affecting our audience in the most subliminal way.
            </Item>      
            <Item style={{fontSize: "1.2em",textAlign:"left"}}>
    
                We like to juxtapose the subtle exloration of more deep-listening / ambient works with other works that purue similar ideas, but in a sprinkling manner, staying within the framework of popular music.

            </Item>           
        </div></div>
        );
  };
  export default About