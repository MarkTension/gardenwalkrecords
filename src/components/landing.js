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
    font-size: 1.7em;
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
        <div id="landing" style = {{marginTop:"2%",height:"100vh"}} >
            <Hoverr>
            Garden Walk Records
            </Hoverr>
            <HoverLinks style={{right:"12%",cursor:"pointer"}}>
              bandcamp
            </HoverLinks>
            <HoverLinks style={{top:"18%",right:"8%",cursor:"pointer"}}>
              instagram
            </HoverLinks>
            <HoverLinks style={{top:"26%",cursor:"pointer"}}>
              spotify
            </HoverLinks>

            <img src={gardenImage} style={{marginRight:"10%"}} className="label-logo" alt="logo"/>

            <Item>
              This is a label. Experimental ventures into danceable and non-danceable states of being.
            </Item>
        </div>

        
        );
  };
  export default Landing