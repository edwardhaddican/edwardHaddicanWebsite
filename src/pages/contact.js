import React from "react";
import { Layout } from "../components/common";

const ContactMe = () => {
    return (
        <Layout>
            <div>
                <h1>Contact Me</h1>
                <p>Email: edwardhaddican@gmail.com</p>
                <p>Cell: 845-642-9834</p>
                <div>
                    <p>LinkedIn: </p>
                    <a href="https://www.linkedin.com/in/edhaddican/">
                        https://www.linkedin.com/in/edhaddican/
                    </a>
                </div>
                <div>
                    <p>GitHub: </p>
                    <a href="https://github.com/edwardhaddican">
                        https://github.com/edwardhaddican
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default ContactMe;
