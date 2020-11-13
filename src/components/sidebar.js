import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import '../stylesheets/sidebar.css'
import styled from 'styled-components'
import animateScrollTo from "animated-scroll-to";



const Item = styled.h3`

  font-size: 0.8em;
  text-align: center;
  color: black;
  cursor: pointer;
  transition: transform 100ms ease-in-out;
  &:hover {
    transform: scale(1.2);
    /* font-weight: 200; */
    /* text-decoration: underline; */
  }
`;




const Sidebar = props => {
    return (
        <>
            <Nav className="col-md-12 sidebar"
            >
                <div className="sidebar-content" >
                    <Nav.Item>
                        <Nav.Link onClick={() => {
                            animateScrollTo(document.querySelector("#home"));}} 
                            ><Item>O'howdy</Item></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => {
                            animateScrollTo(document.querySelector("#releases"));}} 
                            ><Item>Releases</Item></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                        onClick={() => {animateScrollTo(document.querySelector("#artists"));}} 
                        ><Item>Artists</Item></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                        onClick={() => {animateScrollTo(document.querySelector("#about"));}} 
                        ><Item>About</Item></Nav.Link>
                    </Nav.Item>
                    
                    
                </div>
            </Nav>

        </>
        );
  };
  export default Sidebar