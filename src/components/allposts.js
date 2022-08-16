import React, { useEffect, useState } from "react";
import { Item, Title } from "./textConstants"
import { SocialIcon } from 'react-social-icons';
import Markdown from "markdown-to-jsx";
import SidebarBack from "./sidebarBack";
import { Route, Link } from "react-router-dom/cjs/react-router-dom";
import posts from '../markdowns/index.json';
import { Flex, Box } from "rebass";
import { isBrowser } from 'react-device-detect';

const postStyle = {
    alignContent: "left",
    marginTop: "3%",
    marginLeft:"5%",
    // paddingLeft: "5em",
    // paddingRight: "5em",
    background: "white",

    height: "100%",
};


const linkStyle = {
    fontSize: "2em",
    background: "white",
    alignText: "left",
    textDecoration: "none"
}

const boxStyle = {
    alignContent: "right"
}


console.log(posts.files)

const AllPosts = props => {


    return (<div id="albumlistenings" style={{ width:isBrowser?"80vw" : "100vw", alignContent: "right", background: "white", paddingTop:"4%", marginLeft:isBrowser?"10%" : "0%" }}>
        {posts.files.map((post, index) => (
            <div style={postStyle}>

                <Link to={"/blog/" + post[0]} key={post} style={linkStyle}>

                    <Flex
                        id="team"
                        flexWrap="wrap"
                        width="100%"
                        style={{ marginBottom: "0%", paddingBottom: "0px" }}
                    >
                        <Box p={[1]} m={[0]} width={[1, 1 / 2]} style={boxStyle}>
                            <img src={post[1]} width="80%" />
                        </Box>
                        
                        <Box p={[1]} m={[0]} width={[1, 1 / 2]} style={boxStyle}>

                            <Item style={{ color: "black", fontSize: "0.8em", alignText: "right" , textDecoration: "underline", textDecorationColor: "#FF8484"}} >{post[0]}</Item>
                            <Item style={{ color: "black", fontSize: "0.4em", fontStyle: 'italic', alignText: "right"}} >
                                {post[3]}
                            </Item>
                            <Item style={{ color: "black", fontSize: "0.3em", fontStyle: 'italic', alignText: "right" }} >
                                {post[2]}
                            </Item>

                        </Box>

                    </Flex>
                </Link>

                <div>

                </div>


            </div>
        ))}
        <SidebarBack />
    </div>
    );
};
export default AllPosts