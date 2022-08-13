import React from "react";
import { Item, Title } from "./textConstants"
import SidebarBack from "./sidebarBack";
import { Route } from "react-router-dom/cjs/react-router-dom";
import posts from '../markdowns/index.json';
import AllPosts from './allposts.js';
import OnePost from './onepost.js';


console.log(posts.files)

const Blog = props => {
    
    return (<div id="albumlistenings" style={{ alignContent: "left" }}>    
        <Title>
            Blog
        </Title>

        <Route component={AllPosts} path="/blog" exact />
        <Route component={OnePost} path={"/blog/:slug"} />
        {/* <Route component={OnePost} path={"/lionsden"} />
        <Route component={OnePost} path={"/helloworld"} /> */}

        <SidebarBack />
    </div>
    );
};
export default Blog