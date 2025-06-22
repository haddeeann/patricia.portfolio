// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ image, title, description, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="block overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md transition duration-200"
        >
            <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
        </a>
    );
};

export default ProjectCard;
