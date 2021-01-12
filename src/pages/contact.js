import React from "react";
import { Layout } from "../components/common";
// Styles
import "../styles/app.css";

const ContactMe = () => {
    return (
        <Layout>
            <div className="contact-main-container">
                <h1>Contact Me</h1>
                <p>Email: edwardhaddican@gmail.com</p>
                <p>Cell: 845-642-9834</p>
                <p>
                    <span>LinkedIn: </span>
                    <a href="https://www.linkedin.com/in/edhaddican/">
                        https://www.linkedin.com/in/edhaddican/
                    </a>
                </p>
                <p>
                    <span>GitHub: </span>
                    <a href="https://github.com/edwardhaddican">
                        https://github.com/edwardhaddican
                    </a>
                </p>
            </div>
        </Layout>
    );
};

export default ContactMe;
