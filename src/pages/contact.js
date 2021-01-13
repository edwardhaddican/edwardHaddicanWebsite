import React from "react";
import { Layout } from "../components/common";
// Styles
import "../styles/app.css";

const contactMe = () => {
    return (
        <Layout>
            <div className="container">
                <h1 style={{ textAlign: `center` }}>Contact Me</h1>
                <div>
                    <p className="contact-items">
                        <span className="contact-label">Email:</span>{" "}
                        edwardhaddican@gmail.com
                    </p>
                    <p className="contact-items">
                        <span className="contact-label">Cell:</span>{" "}
                        845-642-9834
                    </p>
                    <p className="contact-items">
                        <span className="contact-label">LinkedIn: </span>
                        <a href="https://www.linkedin.com/in/edhaddican/">
                            https://www.linkedin.com/in/edhaddican/
                        </a>
                    </p>
                    <p className="contact-items">
                        <span className="contact-label">GitHub: </span>
                        <a href="https://github.com/edwardhaddican">
                            https://github.com/edwardhaddican
                        </a>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default contactMe;
