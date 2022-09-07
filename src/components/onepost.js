import React, { useEffect, useState } from "react";
import { Item, Title } from "./textConstants"
import Markdown from "markdown-to-jsx";
import SidebarBack from "./sidebarBack";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { isBrowser } from 'react-device-detect';

const OnePost = props => {

    const { slug } = useParams();
    console.log(slug)
    const [postContent, setPostContent] = useState("");

    useEffect(() => {
        import("../markdowns/".concat(slug, ".md")) // "../markdowns/lionsden.md"
            .then(res => {
                fetch(res.default)
                    .then(response => response.text())
                    .then(response => setPostContent(response))
                    .catch(err => console.log(err))
            })
    }, [])

    return (<div id="onepost" style={{ background: "white", width: isBrowser?"80vw" : "100vw", paddingBottom: '5em', paddingTop:'2em' }}>

        <Title>
            {slug}
        </Title>
        

        <Markdown

            style={{ textAlign: "left", margin: isBrowser?"5em%" : "2em" }}
        >
            {postContent}
        </Markdown>

        <SidebarBack />
    </div>
    );
};
export default OnePost