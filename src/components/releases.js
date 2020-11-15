import React from "react";
import styled from 'styled-components'
import m4 from "../images/m4.png";
import stringpaloozaImage from "../images/stringPalooza2.png";
import springwalkcollection from "../images/springwalkcollection.png";
import {Item, Hoverr, Title} from "./textConstants";
import { Box, Flex, Image } from "rebass";
import { Link } from 'react-router-dom';



const releaseStylesheet = {
    marginTop: "0%",
    paddingLeft: "3%",
    paddingRight: "3%",
    height: "100%",
    borderRadius: "10px",
    cursor: "pointer"
  };

const Button = styled.button`
  font-size: 0.7em;
  text-align: center;
  background-color: white;
  border:none;
  border-radius: "10px";
  padding: 5px;
  color: #FF8484;
  font-weight:200;
`;



  class Releases extends React.Component {

    

    render() {
        function goToSpring(e) {
            e.preventDefault();
            window.open('https://tensenpark.bandcamp.com/releases', '_blank');

          }
          function goToPalooza(e) {
            e.preventDefault();
            window.open('https://lancehoot.bandcamp.com/album/string-palooza', '_blank');

          }
          function goTom4(e) {
            e.preventDefault();
            window.open('https://lancehoot.bandcamp.com/album/m4', '_blank');

          }
          
      return (
        <div id="releases" style = {{marginTop:"4%"}}  >
            <Title>
            Releases
            </Title>
            <Flex
                id="team"
                flexWrap="wrap"
                width="100%"
                style={{ marginBottom: "0%", paddingBottom:"0px"}}
            >

                <Box href={"google.com"} p={[1]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet} onClick={goToSpring}>
                    <Image src={springwalkcollection} width="100%" />
                    
                </Box>
                <Box p={[1]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet} onClick={goToPalooza}>
                    <Image src={stringpaloozaImage} width="100%" />
                    
                </Box>
                <Box p={[1]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet} onClick={goTom4}>
                    <Image src={m4} width="100%" />
                    
                </Box>
            </Flex>
            <Flex
                flexWrap="wrap"
                width="100%"
                style={{ marginBottom: "0px",marginTop: "0px", paddingTop: "0px"}}
            >
                <Box p={[0]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet}>
                    <Item>
                    Spring Walk Collection
                    </Item>
                    <Item>
                    Tensen Park
                    </Item>
                    <Item style={{fontSize:"0.8em"}}>
                    November/23/2020
                    </Item>
                    {/* <Button > .zip</Button> <Button> spotify </Button> */}
                </Box>
                <Box p={[0]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet}>
                    <Item>
                    String Palooza 
                    </Item>
                    <Item>
                    Lance Hoot
                    </Item>
                    <Item style={{fontSize:"0.8em"}}>
                    September/04/2020
                    </Item>
                    {/* <Button > .zip</Button> <Button> spotify </Button> */}
                    
                </Box>
                <Box p={[0]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet}>
                    <Item>
                    m4
                    </Item>
                   
                    <Item>
                    Lance Hoot
                    </Item>
                    <Item style={{fontSize:"0.8em"}}>
                    September/22/2018
                    </Item>
                    {/* <Button > .zip</Button> <Button> spotify </Button> */}
                </Box>
            </Flex>


        </div>
      );
    }
  }
  
  export default Releases;