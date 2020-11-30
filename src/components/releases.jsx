import React from "react";
import styled from 'styled-components'
import m4 from "../images/m4.png";
import minorMileage from "../images/minorMileage.jpg";
import stringpaloozaImage from "../images/stringPalooza2.png";
import springwalkcollection from "../images/springwalkcollection.png";
import {Item, Hoverr, Title} from "./textConstants";
import { Box, Flex, Image } from "rebass";
import BandcampPlayer from 'react-bandcamp'
import {isBrowser} from 'react-device-detect';
import ReleaseEntry from './releaseEntry.jsx';


const releaseStylesheet = {
    marginTop: "0%",
    paddingLeft: "3%",
    paddingRight: "3%",
    height: "100%",
    borderRadius: "10px",
  };


// function DetailsIfMobile() {

//   if (isBrowser) {
//     return <Flex
//     flexWrap="wrap"
//     width="100%"
//     style={{ marginBottom: "0px",marginTop: "0px", paddingTop: "0px"}}
//     >
//       <Box p={[0]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet}>
//           <Item>
//           Minor Mileage (rerelease)
//           </Item>
//           <Item>
//           Lance Hoot
//           </Item>
//           <Item style={{fontSize:"0.8em"}}>
//           November/27/2020
//           </Item>
//       </Box>
//       <Box p={[0]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet}>
//           <Item>
//           Spring Walk Collection
//           </Item>
//           <Item>
//           Tensen Park
//           </Item>
//           <Item style={{fontSize:"0.8em"}}>
//           November/23/2020
//           </Item>
//       </Box>
//       <Box p={[0]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet}>
//           <Item>
//           String Palooza 
//           </Item>
//           <Item>
//           Lance Hoot
//           </Item>
//           <Item style={{fontSize:"0.8em"}}>
//           September/04/2020
//           </Item>
          
//       </Box>
//       <Box p={[0]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet}>
//           <Item>
//           m4
//           </Item>
        
//           <Item>
//           Lance Hoot
//           </Item>
//           <Item style={{fontSize:"0.8em"}}>
//           September/22/2018
//           </Item>
//       </Box>
//     </Flex>
//   }
//   else{
//     return null
//   }
// }



  class Releases extends React.Component {
    render() {
          function goToSpring(e) {
            e.preventDefault();
            window.open('https://open.spotify.com/album/2kkAIsp8sb5DvzggHGt4pl?si=AiscV7uLSlCIN9slzVXUkA', '_blank');
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


        <div id="releases" style = {{marginTop:"4%", background:"white"}}  >
            <Title>
            Releases
            </Title>

            <Flex
                id="team"
                flexWrap="wrap"
                width="100%"
                style={{ marginBottom: "0%", paddingBottom:"0px"}}
            >
                <Box  p={[1]} m={[0]} width={[1, 1 / 2]} style={releaseStylesheet}>
                  <ReleaseEntry title="Lance Hoot - Minor Mileage" image={minorMileage} albumCode="1759150103" albumLink="https://lancehoot.bandcamp.com/album/minor-mileage-rerelease" />
                </Box>
                <Box  p={[1]} m={[0]} width={[1, 1 / 2]} style={releaseStylesheet}>
                  <ReleaseEntry title="Tensen Park - Spring Walk Collection" image={springwalkcollection} albumCode="95223350" albumLink="'https://open.spotify.com/album/2kkAIsp8sb5DvzggHGt4pl?si=AiscV7uLSlCIN9slzVXUkA'" />
                </Box>
                <Box  p={[1]} m={[0]} width={[1, 1 / 2]} style={releaseStylesheet}>
                  <ReleaseEntry title="Lance Hoot - String Palooza" image={stringpaloozaImage} albumCode="1490171069" albumLink="https://lancehoot.bandcamp.com/album/string-palooza" />
                </Box>
                <Box  p={[1]} m={[0]} width={[1, 1 / 2]} style={releaseStylesheet}>
                  <ReleaseEntry title="Lance Hoot - m4" image={m4} albumCode="766175831" albumLink="https://lancehoot.bandcamp.com/album/m4" />
                </Box>
            </Flex>
            {/* < DetailsIfMobile /> */}
        </div>
      );
    }
  }
  
  export default Releases;