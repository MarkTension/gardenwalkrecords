import React from "react";
import styled from 'styled-components'
import gardenImage from "../images/subconsciousGarden.png";
import {Item, Hoverr, HoverText} from "./textConstants";
// import { Box, Flex, Image } from "rebass";


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
        <div id="landing" style = {{marginTop:"2%",height:"100vh",align:"right"}} >
            <Hoverr>
            Garden Walk Records
            </Hoverr>
            <HoverLinks style={{right:"12%",cursor:"pointer"}}>
              <a href="https://tensenpark.bandcamp.com/releases">Tensen Park release</a>
            </HoverLinks>
            <HoverLinks style={{top:"18%",right:"8%",cursor:"pointer"}}>
            <a href="https://www.facebook.com/MRFrecordings/"> MRF recordings </a>

            </HoverLinks>
            <HoverLinks style={{top:"26%",cursor:"pointer"}}>
            <a href="mailto:tensen.mark@gmail.com">contact us</a>

            </HoverLinks>

            <img src={gardenImage} style={{marginRight:"10%"}} className="label-logo" alt="logo"/>

            <Item style={{width:"80%",alignContent:"right"}}>
              Garden Walk Records is an Amsterdam-based label, presenting explorations of balancing chaos and order using new computational methods, and old analog equipment.
            </Item>
             <Item style={{width:"80%",justifyContent:"right"}}>
              For info, inquiries or licensing, please <a href="mailto:tensen.mark@gmail.com"> contact us</a>
            </Item>
        </div>

        
        );
  };
  export default Landing