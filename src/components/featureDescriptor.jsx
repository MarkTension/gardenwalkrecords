import React from "react";
import styled from 'styled-components'
import {Item, Title, ItemSmall} from "./textConstants";
import { SocialIcon } from 'react-social-icons';
import hootIm from "../images/lanceHoot.JPG";
import tensenIm from "../images/springwalkcollection.png";


// const HoverText = styled.h3`
//     position: relative;
//     font-style: italic;
//     font-weight: 100;
//     top: 5%;
//     font-size: 2.4em;
//     text-align: center;
//     color: #FF8484;
//     z-index: 100;
// `;


var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { hootIm } + ")"
};

const textStyle = {
  textAlign:"left",
  width:"60%",
  marginLeft:"5%",
}

const tensenParkContent1 = "Tensen Park is an ambient music research project. We're using computational methods combined with old audio equipment to explore the generation and organification of texture, rhythm and melody." 
const tensenParkContent2 = "Our goal is making a series of meditations in sound, and great ambient music."

const lanceHootContent1 = "Lance Hoot is Casper van der Lans."
const lanceHootContent2 = "Working as an audio-engineer and music producer Casper encounters many ideas of ways things could or sometimes should sound. Music by Lance Hoot is the product of both sonic and conceptual experiments, more than often incorporating (at times broken) taperecorders and old Musique Concrète techniques - though not necessarily old-fashioned sounding. His music also embodies an antidote against some aspects of producing music for others: where one would work in a non-destructive way and take a lot of time, sometimes the momentum gets lost. Lance Hoot is destructive, cumbersome and in the moment "
const lanceHootContent3 = "Lance Hoot is destructive, cumbersome and in the moment "
const socialLinksPark = 
<div><SocialIcon url="http://instagram.com/tensen.park" bgColor="white"/>
<SocialIcon url="http://marktension.nl" bgColor="white"/>
<SocialIcon url="https://github.com/MarkTension" bgColor="white"/>
</div>
const socialLinksHoot = 
<div><SocialIcon url="https://lancehoot.bandcamp.com/" bgColor="white"/>
<SocialIcon url="https://www.facebook.com/Lance-Hoot-368858230172955/" bgColor="white"/>
</div>

class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistName: this.props.artistName,
      nameActive: 0,
    };
  }


  render() {
    return (
        <div>
           
            {this.props.artistName == "Tensen Park" ? 
            <div style={{  background: "rgba(0,0,0,0.5)"}}> 
               <Title style={{fontSize:"2em",marginTop:"5%",textAlign:"left",marginLeft:"5%"}}>
                  {this.props.artistName} 
                </Title>
                <ItemSmall style={textStyle}>
                  {tensenParkContent1}
                </ItemSmall>
                <ItemSmall style={textStyle}>
                  {tensenParkContent2}
                </ItemSmall>            
                <ItemSmall style={textStyle}>
                  {socialLinksPark}
                </ItemSmall>
              
             </div>
             : 
             <div style={{  background: "rgba(0,0,0,0.5)" }}> 
               <Title style={{fontSize:"2em",background:"none",marginTop:"5%",textAlign:"left",marginLeft:"5%"}}>
                  {this.props.artistName} 
                </Title>
                <ItemSmall style={textStyle}>
                  {lanceHootContent1}
                </ItemSmall>
                <ItemSmall style={textStyle}>
                  {lanceHootContent2}
                </ItemSmall>
                <ItemSmall style={textStyle}>
                  {lanceHootContent3}
                </ItemSmall>
                <ItemSmall style={textStyle}>
                  {socialLinksHoot}
                </ItemSmall>
              </div> 
            }            
        </div>
    );
  }
}
export default Feature