import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Tags } from "@tryghost/helpers-gatsby";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";

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
                {/* {post.tags && (
                    <div className="post-card-tags">
                        {" "}
                        <Tags
                            post={post}
                            visibility="public"
                            autolink={false}
                        />
                    </div>
                )}
                {post.featured && <span>Featured</span>} */}
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

// PostCard.propTypes = {
//     post: PropTypes.shape({
//         slug: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//         feature_image: PropTypes.string,
//         featured: PropTypes.bool,
//         tags: PropTypes.arrayOf(
//             PropTypes.shape({
//                 name: PropTypes.string,
//             })
//         ),
//         excerpt: PropTypes.string.isRequired,
//         primary_author: PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             profile_image: PropTypes.string,
//         }).isRequired,
//     }).isRequired,
// }

export default PostCard;
