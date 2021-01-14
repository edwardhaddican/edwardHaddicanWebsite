import React from "react";

const PostCard = (props) => {
    const { project } = props;
    console.log("props", project);
    return (
        <div>
            <header className="post-card-header">
                {project.projectImage && (
                    <div
                        className="post-card-image"
                        style={{
                            backgroundImage: `url(${project.projectImage})`,
                        }}
                    ></div>
                )}
                <h2 className="post-card-title">{project.title}</h2>
            </header>
            <section className="post-card-excerpt">
                {project.description}
            </section>
            <footer className="post-card-footer">
                <div className="post-card-footer-left">
                    <div>
                        {project.githubLink && (
                            <a href={project.githubLink}>Github</a>
                        )}
                    </div>
                </div>

                <div className="post-card-footer-right">
                    <div>
                        {project.deployedLink && (
                            <a href={project.deployedLink}>Deployed Link</a>
                        )}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PostCard;
