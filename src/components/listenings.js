import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import SidebarBack from "./sidebarBack";
import gardenImage from "../images/subconsciousGarden.png";
import {Item, Title} from "./textConstants"
import { Switch } from "react-router-dom";

import Markdown from "markdown-to-jsx";



const Listenings = props => {

  const [postContent, setPostContent] = useState("");

  useEffect(() => {
      import("../markdowns/listenings.md")
          .then(res => {
              fetch(res.default)
                  .then(response => response.text())
                  .then(response => setPostContent(response))
                  .catch(err => console.log(err))
          })
  }, [])



  return (
    <div id="listenings" style={{ marginTop: "2%",  alignContent: "right", background:"white" }} >
      <Title style={{ width: "90%", textAlign: "center"}}>
        Listenings
      </Title>

      <Markdown
                style={{textAlign: "left", marginLeft:"15%", marginRight:"15%", fontFamily: 'Josefin Sans', fontSize:'0.8em' }}
            >
                {postContent}
            </Markdown>
      <SidebarBack />

    </div>



  );
};
export default Listenings