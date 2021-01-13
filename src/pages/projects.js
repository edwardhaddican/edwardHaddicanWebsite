import React from "react";
import { Layout } from "../components/common";
import { AllProjects } from "../components/index";

const projects = () => {
    return (
        <Layout>
            <div className="container">
                <div className="content" style={{ textAlign: `center` }}>
                    <h1 className="content-title">Project Page</h1>
                    <AllProjects />
                </div>
            </div>
        </Layout>
    );
};

export default projects;
