import React from "react";
import { Nav } from "react-bootstrap";
import '../stylesheets/sidebar.css'
import styled from 'styled-components'
import animateScrollTo from "animated-scroll-to";
import { Link, useHistory } from "react-router-dom";



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




const SidebarBack = props => {

    const history = useHistory();

    return (
        <>

            <Nav className="col-md-12 sidebar"
            >
                <div className="sidebar-content" >
                    <Nav.Item>
                        
                        <Nav.Link
                            onClick={ history.goBack}
                        ><Item>Go Back</Item></Nav.Link>

                    </Nav.Item>


                </div>
            </Nav>

        </>
    );
};
export default SidebarBack