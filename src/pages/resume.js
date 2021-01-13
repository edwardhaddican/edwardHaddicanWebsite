import React, { useState } from "react";
import { Layout } from "../components/common";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import myResume from "../projectData/edwardHaddicanResume.pdf";

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    console.log("myresume", myResume);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <Layout>
            <div className="resume-container">
                <div>
                    <a href="https://drive.google.com/file/d/1Pdz-iXTaXjLuaHXD_bIFgRScpVoVQKcn/view?usp=sharing" className="resume-link">
                        Download Resume - add download icon!!!!!
                    </a>
                </div>

                <Document
                    file={myResume}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="resume-pdf-document"
                >
                    <Page pageNumber={pageNumber} scale={1.45} />
                </Document>
            </div>
        </Layout>
    );
};

export default Resume;
