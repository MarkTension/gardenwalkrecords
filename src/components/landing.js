import React from "react";
import styled from 'styled-components'
// import gardenImage from "../images/landing.jpeg";
import gardenImage from "../images/cactii.png";
import { Item, Hoverr, HoverText, Text } from "./textConstants";
// import { Box, Flex, Image } from "rebass";
import BandcampPlayer from 'react-bandcamp'
import { isBrowser } from 'react-device-detect';


const HoverLinks = styled.h3`
    position: absolute;
    font-style: italic;
    font-weight: 100;
    top: 10%;
    right: 5%;
    font-size: 1.5em;
    text-align: center;
    color: #FF8484;
    z-index: 100;
    background: white;
    transition: transform 100ms ease-in-out;
    &:hover {
      transform: scale(1.2);
      /* font-weight: 200; */
      /* text-decoration: underline; */
    }
`;



const Landing = props => {
  return (
    <div id="landing" style={{ marginTop: "2%", height: "100vh", maxWidth: "100vw", alignContent: "right" }} >

      <Hoverr>
        Garden Walk Records
      </Hoverr>

      <HoverLinks style={{ right: "12%", cursor: "pointer" }}>
        <a href="https://www.instagram.com/gardenwalk.records/"> Follow us on Instagram </a>
      </HoverLinks>
      <HoverLinks style={{ top: "18%", right: "8%", cursor: "pointer" }}>
        <a href="https://www.facebook.com/MRFrecordings/"> MRF recordings </a>
      </HoverLinks>

      <HoverLinks style={{ top: "26%", cursor: "pointer" }}>
        <a href="mailto:tensen.mark@gmail.com">contact us</a>
      </HoverLinks>

      <img src={gardenImage} height="100%" style={{ marginRight: isBrowser ? "0%" : "0%" }} className="label-logo" alt="logo" />

      <Item style={{ width: "90%", textAlign: "right", fontSize: "0.9em" }}>
        O'Howdy! We're an Amsterdam-based experimental music label.
      </Item>
      <Item style={{ width: "90%", textAlign: "right", fontSize: "0.9em" }}>
        We release experiments exploring: 'What is peak-aliveness of sound?''
      </Item>

      <Item style={{ width: "90%", textAlign: "right", fontSize: "0.9em" }}>
        Stay updated on our releases via <a href="https://www.instagram.com/gardenwalk.records/">instagram</a>.
        For info, or licensing, <a href="mailto:tensen.mark@gmail.com"> email us</a>

      </Item>

    </div>


  );
};
export default Landing