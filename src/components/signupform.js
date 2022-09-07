import React, { Component } from 'react';
import Mailchimp from "react-mailchimp-form"
import { Item, Title } from "./textConstants"
import '../App.css';


const postUrl = `https://gardenwalkrecords.us2.list-manage.com/subscribe/post?u=2043cd10b1ea2297247a16792&id=414272f153`;


const MailchimpForms = props => {



    // const postUrl = `https://gardenwalkrecords.us2.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;


    return (
        <div id="signup-form" height="100vh" style={{ marginTop: "4%"}} >
            <Item>
                ... or join our mailing-list
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


// const CustomForm = ({ status, message, onValidated }) => {

//     const [email, setEmail] = useState('');
//     const [firstName, setFirstName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         email &&
//             firstName &&
//             email.indexOf("@") > -1 &&
//             onValidated({
//                 EMAIL: email,
//                 MERGE1: firstName,
//             });
//     }


//     return (
//         <form className="mc__form"
//             onSubmit={(e) => handleSubmit(e)}>
//             <h3 className="mc__title">Join our email list for future updates.</h3>
//             <div className="mc__field-container">


//                 <InputField
//                     label="firstName"
//                     onChangeHandler={setFirstName}
//                     type="text"
//                     value={firstName}
//                     placeholder="Nic Cage"
//                     isRequired
//                 />

//                 <InputField
//                     label="Email"
//                     onChangeHandler={setEmail}
//                     type="email"
//                     value={email}
//                     placeholder="your@email.com"
//                     isRequired
//                 />

//             </div>

//             <InputField
//                 label="subscribe"
//                 type="submit"
//                 formValues={[email, firstName]}
//             />
//         </form>
//     );
// };



// const MailchimpFormContainer = props => {

//     const postUrl = `https://gardenwalkrecords.us2.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

//     return (
//         <div className="mc__form-container">
//             <MailchimpSubscribe
//                 url={postUrl}
//                 render={({ subscribe, status, message }) => (
//                     <CustomForm
//                         status={status}
//                         message={message}
//                         onValidated={formData => subscribe(formData)}
//                     />
//                 )}
//             />
//         </div>
//     );
// };

// export default MailchimpFormContainer;
