import React from "react";
import styled from 'styled-components'
import m4 from "../images/m4.png";
import {Item, Hoverr, Title} from "./textConstants";
import { Box, Flex, Image } from "rebass";
import BandcampPlayer from 'react-bandcamp'
import {isBrowser} from 'react-device-detect';
import ReactGA from 'react-ga';


const releaseStylesheet = {
    marginTop: "0%",
    paddingLeft: "3%",
    paddingRight: "3%",
    height: "100%",
    borderRadius: "10px",
    cursor: "pointer"
  };

  class Releases extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
      console.log("artistname is " + this.props.artistName)
    }

    
    render() 
    {
      function goToLink(e) {
        e.preventDefault();
        window.open(this.props.albumLink, '_blank');

        ReactGA.event({
          category: 'Viewer',
          action: 'Clicked on album' + this.props.title
        });
      }
          
      return (
        <div  >
          <Item style={{fontSize:"1em"}}>
            {this.props.title}
          </Item>
          <Image src={this.props.image} width="70%" onClick={goToLink.bind(this)} style={{cursor:"pointer"}}/>
          {this.props.albumCode != "None" ? 
          <BandcampPlayer tyle={{paddingBottom:"0%"}} album={this.props.albumCode} size="small" linkcol="FF8484" bgcol="black"/> 
          : null}
          {/* FFD99B */}
          
        </div>
      );
    }
  }
  
  export default Releases;