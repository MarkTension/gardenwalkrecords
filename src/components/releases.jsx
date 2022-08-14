import React from "react";
import m4 from "../images/m4.png";
import onbestemming from "../images/onbestemming.jpg";
import minorMileage from "../images/minorMileage.png";
import kaarsvet from "../images/kaarsvet.png";
import mostlyAngels from "../images/mostlyAngels.jpg";
import inTune from "../images/inTune.png";
import stringpaloozaImage from "../images/stringPalooza2.png";
import springwalkcollection from "../images/springwalkcollection.png";
import {  Title } from "./textConstants";
import { Box, Flex } from "rebass";
import ReleaseEntry from './releaseEntry.jsx';


const releaseStylesheet = {
  marginTop: "0%",
  paddingLeft: "3%",
  paddingRight: "3%",
  height: "100%",
  borderRadius: "10px",
};




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


      <div id="releases" style={{ marginTop: "4%", background: "white" }}  >
        <Title>
          Releases
        </Title>

        <Flex
          id="team"
          flexWrap="wrap"
          width="100%"
          style={{ marginBottom: "0%", paddingBottom: "0px" }}
        >
          <Box p={[1]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet}>
            <ReleaseEntry title="lmnop - 'onbestemming'" image={onbestemming} albumCode="2164684031" albumLink="https://lancehoot.bandcamp.com/album/minor-mileage-rerelease" />
          </Box>
          <Box p={[1]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet}>
            <ReleaseEntry title="Lion's Den - In Tune" image={inTune} albumCode="None" />
          </Box>
          <Box p={[1]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet}>
            <ReleaseEntry title="Tensen Park - Mostly Angels" image={mostlyAngels} albumCode="1460412314" albumLink="'https://open.spotify.com/album/2kkAIsp8sb5DvzggHGt4pl?si=AiscV7uLSlCIN9slzVXUkA'" />
          </Box>
          <Box p={[1]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet}>
            <ReleaseEntry title="lmnop - Kaarsvet" image={kaarsvet} albumCode="4219540432" albumLink="https://lancehoot.bandcamp.com/album/minor-mileage-rerelease" />
          </Box><Box p={[1]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet}>
            <ReleaseEntry title="lmnop - Minor Mileage" image={minorMileage} albumCode="1759150103" albumLink="https://lancehoot.bandcamp.com/album/minor-mileage-rerelease" />
          </Box>
          <Box p={[1]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet}>
            <ReleaseEntry title="Tensen Park - Spring Walk Collection" image={springwalkcollection} albumCode="95223350" albumLink="'https://open.spotify.com/album/2kkAIsp8sb5DvzggHGt4pl?si=AiscV7uLSlCIN9slzVXUkA'" />
          </Box>
          <Box p={[1]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet}>
            <ReleaseEntry title="lmnop - String Palooza" image={stringpaloozaImage} albumCode="1490171069" albumLink="https://lancehoot.bandcamp.com/album/string-palooza" />
          </Box>
          <Box p={[1]} m={[0]} width={[1, 1 / 3]} style={releaseStylesheet}>
            <ReleaseEntry title="lmnop - m4" image={m4} albumCode="766175831" albumLink="https://lancehoot.bandcamp.com/album/m4" />
          </Box>
        </Flex>
        {/* < DetailsIfMobile /> */}
      </div>
    );
  }
}

export default Releases;