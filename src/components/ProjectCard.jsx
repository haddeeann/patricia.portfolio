// src/components/ProjectCard.jsx
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare, faHeart, faMugHot} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Badge from "./ui/badge";

const ProjectCard = ({ image, title, description, siteLink, githubLink, tags }) => {
    return (
        <div
            className="flex flex-col h-full group overflow-hidden rounded-xl border bg-white shadow-sm hover:scale-105 transition duration-200"
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

            <div className="p-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
            <div className="px-4 mt-auto mb-4">
                {tags.map((tag, index) => <Badge className="bg-blue-400" key={index}>{tag}</Badge>)}
            </div>
        </div>
    );
};

export default ProjectCard;
