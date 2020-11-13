import React from "react";
import styled from 'styled-components'
import gardenImage from "../images/subconsciousGarden.png";
import {Item, Title, Button} from "./textConstants";
import Feature from "./featureDescriptor"


const HoverText = styled.h3`
    position: relative;
    font-style: italic;
    font-weight: 100;
    top: 5%;
    font-size: 2.4em;
    text-align: center;
    color: #FF8484;
    z-index: 100;
`;


class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNames: true,
      nameActive: 0,
      round: this.props.round,
      artistName: "none"
    };
  }

  ProcessClick(event){
    const id = event.target.id;
    console.log("click processed " + id)
    this.setState({showNames: false, artistName:event.target.id})
  }

  CloseArtist(event){
    this.setState({showNames: true})
  }


  render() {
    return (

      <div id="artists" style = {{height:"100vh"}}>
          <Title>
            Artists
          </Title>
          {this.state.showNames ? 
          <div>
            <HoverText id="Tensen Park" onClick={this.ProcessClick.bind(this)} style={{marginLeft:"-40%",paddingLeft:"0%",cursor:"pointer"}}> Tensen Park</HoverText>
            <HoverText id="Lance Hoot" onClick={this.ProcessClick.bind(this)} style={{marginLeft:"0%",paddingLeft:"0%",cursor:"pointer"}}> Lance Hoot </HoverText>
          </div> 
          :
          <div>
          <Button onClick={this.CloseArtist.bind(this)} style={{marginLeft:"0%",paddingLeft:"0%",cursor:"pointer"}}> {"<--"} back </Button>
          {/* {this.makeFeature.bind(this)} */}
          < Feature artistName={this.state.artistName} />
          
          </div> }

         
        </div>
    );
  }
}
export default Artists