import React, { Component } from 'react';
import Mailchimp from "react-mailchimp-form"
import { Item, Title } from "./textConstants"
import '../App.css';

const postUrl = `https://gardenwalkrecords.us2.list-manage.com/subscribe/post?u=2043cd10b1ea2297247a16792&id=414272f153`;

const MailchimpForms = props => {
    return (
        <div id="signup-form" height="100vh" style={{ marginTop: "4%"}} >
            <Item>
            {props.text}
            </Item>
            < Mailchimp
                className="MailchimpStyle"
                action={postUrl}
                fields={
                    [
                        {
                            name: 'EMAIL',
                            placeholder: "Email",
                            type: 'email',
                            required: true
                        },
                    ]}
            />
        </div>
    );
}
export default MailchimpForms;