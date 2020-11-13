import React from "react";
import styled from 'styled-components'
import gardenImage from "../images/subconsciousGarden.png";
import {Item, Title} from "./textConstants";
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6


// const HoverText = styled.h3`
//     position: relative;
//     font-style: italic;
//     font-weight: 100;
//     top: 5%;
//     font-size: 2.4em;
//     text-align: center;
//     color: #FF8484;
//     z-index: 100;
// `;





class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistName: this.props.artistName,
      nameActive: 0,
    };
    console.log("artistname is " + this.props.artistName)
  }

  ProcessClick(event){
    const id = event.target.id;
    console.log("click processed " + id)
    this.setState({showNames: false})
  }

  render() {

    return (
        <div style = {{height:"100vh"}}>
            
            <Item>
              This is {this.props.artistName}
            </Item>
          
        </div>
    );
  }
}
export default Feature