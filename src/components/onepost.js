import React, { useEffect, useState } from "react";
import { Item, Title } from "./textConstants"
import Markdown from "markdown-to-jsx";
import SidebarBack from "./sidebarBack";
import { useParams } from "react-router-dom/cjs/react-router-dom";

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

    return (<div id="onepost" style={{ background: "white", paddingBottom: '5em', paddingTop:'2em' }}>

        <Title>
            {slug}
        </Title>
        

        <Markdown

            style={{ textAlign: "left", margin: "5em" }}
        >
            {postContent}
        </Markdown>

        <SidebarBack />
    </div>
    );
};
export default OnePost