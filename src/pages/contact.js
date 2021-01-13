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
                    <p>
                        <span className="contact_label">Email:</span>{" "}
                        edwardhaddican@gmail.com
                    </p>
                    <p>
                        <span className="contact_label">Cell:</span>{" "}
                        845-642-9834
                    </p>
                    <p>
                        <span className="contact_label">LinkedIn: </span>
                        <a href="https://www.linkedin.com/in/edhaddican/">
                            https://www.linkedin.com/in/edhaddican/
                        </a>
                    </p>
                    <p>
                        <span className="contact_label">GitHub: </span>
                        <a href="https://github.com/edwardhaddican">
                            https://github.com/edwardhaddican
                        </a>
                    </p>
                </div>
            </div>
        </Layout>

        // <Layout>
        //     <div className="container">
        //         <div className="content" style={{ textAlign: `center` }}>
        //             <h1 className="content-title">Contact Me</h1>
        //             <p>Email: edwardhaddican@gmail.com</p>
        //             <p>Cell: 845-642-9834</p>
        //             <p>
        //                 <span>LinkedIn: </span>
        //                 <a href="https://www.linkedin.com/in/edhaddican/">
        //                     https://www.linkedin.com/in/edhaddican/
        //                 </a>
        //             </p>
        //             <p>
        //                 <span>GitHub: </span>
        //                 <a href="https://github.com/edwardhaddican">
        //                     https://github.com/edwardhaddican
        //                 </a>
        //             </p>
        //         </div>
        //     </div>
        // </Layout>
    );
};

export default contactMe;
