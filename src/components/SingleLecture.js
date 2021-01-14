import React from "react";

const SingleLecture = (props) => {
    const { lecture } = props;

    return (
        <div>
            <header className="post-card-header">
                {lecture.image && (
                    <div
                        className="post-card-image"
                        style={{
                            backgroundImage: `url(${lecture.image})`,
                        }}
                    ></div>
                )}
                <h2 className="post-card-title">{lecture.title}</h2>
            </header>
            <section className="post-card-excerpt">
                <div>{lecture.description}</div>
                <div>{lecture.date}</div>
            </section>
        </div>
    );
};

export default SingleLecture;
