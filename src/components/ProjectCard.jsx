// src/components/ProjectCard.jsx
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare, faHeart, faMugHot} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ image, title, description, siteLink, githubLink }) => {
    return (
        <div
            className="block group overflow-hidden rounded-xl border bg-white shadow-sm hover:scale-105 transition duration-200"
        >
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="h-48 w-full object-cover"
                />
                <div className="absolute bottom-0 w-full flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={githubLink} rel="noreferrer" target="_blank"><FontAwesomeIcon  icon={faGithub} size="2x" className="text-gray-600 hover:scale-110 mx-1 hover:cursor-pointer transition duration-200" /></a>
                    <a href={siteLink}  rel="noreferrer" target="_blank"><FontAwesomeIcon size="2x" icon={faArrowUpRightFromSquare} className="text-gray-600 hover:scale-110 mx-1 hover:cursor-pointer transition duration-200" /></a>
                </div>
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
