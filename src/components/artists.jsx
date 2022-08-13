import React from "react";
import styled from 'styled-components'
import {Item, Title, Button} from "./textConstants";
import Feature from "./featureDescriptor"
import hootIm from "../images/lanceHoot.JPG";
import tensenIm from "../images/tensenParkArtist.jpg";
import ReactGA from 'react-ga';



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

var imDict = {
  "Lance Hoot": hootIm,
  "Tensen Park": tensenIm,
  "Lion's Den": tensenIm,
};
var imArray = [hootIm, tensenIm]
var counter = 0

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNames: true,
      nameActive: 0,
      round: this.props.round,
      artistName: "none",
      image: imDict["Lance Hoot"]
    };
    
  }

  tick() {
    if (this.state.showNames == true) {
      this.setState({
        image: imArray[counter%2]
      });
      counter+=1
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  ProcessClick(event){
    const id = event.target.id;
    var image = imDict[id]
    this.setState({showNames: false, artistName:id, image: image})

    ReactGA.event({
      category: 'Viewer',
      action: 'Clicked on artist ' + id
    });

  }

  CloseArtist(event){
    this.setState({showNames: true})
  }


  render() {
    return (
      <div id="artists" style = {{height:"100vh"}}>
        <section  style={{backgroundImage: "url(" + this.state.image + ")",height:"100vh",marginLeft:"0%",backgroundSize: "100%"}}>

          <Title>
            Artists
          </Title>
          {this.state.showNames ? 
          <div>
            <HoverText id="Tensen Park" onClick={this.ProcessClick.bind(this)} style={{marginLeft:"-40%",paddingLeft:"0%",cursor:"pointer"}}> Tensen Park</HoverText>
            <HoverText id="Lance Hoot" onClick={this.ProcessClick.bind(this)} style={{marginLeft:"0%",paddingLeft:"0%",cursor:"pointer"}}> Lance Hoot </HoverText>
            <HoverText id="Lion's Den" onClick={this.ProcessClick.bind(this)} style={{marginLeft:"40%",paddingLeft:"0%",cursor:"pointer"}}> Lion's Den </HoverText>
          </div> 
          :
          <div>
          < Feature artistName={this.state.artistName}  />
          <Button onClick={this.CloseArtist.bind(this)}>back</Button>

          </div> }
            
          <Item>Click to learn more</Item>

         </section>
      </div>
    );
  }
}
export default Artists