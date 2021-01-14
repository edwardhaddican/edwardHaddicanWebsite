import React from "react";
import { AllLectures } from "../components/index";
import { Layout } from "../components/common";

const lectures = () => {
    return (
        <Layout>
            <div className="container">
                <div className="content" style={{ textAlign: `center` }}>
                    <h1 className="content-title">Lectures</h1>
                    <AllLectures/>
                </div>
            </div>
        </Layout>
    );
};

export default lectures;
