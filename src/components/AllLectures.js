import React from "react";
import { SingleLecture } from "./index";
import { allLectureData } from "../projectData/index";

const AllLectures = () => {
    return (
        <section className="post-feed">
            {allLectureData.map((lecture) => (
                <SingleLecture key={lecture.id} lecture={lecture} />
            ))}
        </section>
    );
};

export default AllLectures;
