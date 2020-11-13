import React from "react";
import styled from 'styled-components'
import gardenImage from "../images/subconsciousGarden.png";
import media from "../media";


const Item = styled.h3`

    font-size: 1.0em;
    text-align: center;
    color: #FF8484;
    font-weight:100;
`;

const Hoverr = styled.h3`
    position: absolute;
    top: 65%;
    right: 5%;
    font-size: 2.8em;
    text-align: center;
    color: #FF8484;
    z-index: 100;
    ${media.small`
        font-size: 1.8em;
        top: 40%;;
    `};
`;

const HoverText = styled.h3`
    position: absolute;
    font-style: italic;
    font-weight: 100;
    top: 10%;
    right: 5%;
    font-size: 1.7em;
    text-align: center;
    color: #FF8484;
    z-index: 100;
    background: white
`;

const Title = styled.h3`
    font-size: 3.0em;
    text-align: center;
    color: #FF8484;
    background-color:white
`;

const Button = styled.button`
  font-size: 1.7em;
  text-align: center;
  background-color: white;
  border:none;
  border-radius: "10px";
  padding: 5px;
  color: #FF8484;
  font-weight:200;
  transition: transform 100ms ease-in-out;
  &:hover {
    transform: scale(1.2);
    /* font-weight: 200; */
    /* text-decoration: underline; */
  }
`;

export {Item, Hoverr, Title, HoverText, Button}