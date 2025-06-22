// src/components/SkillCard.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faCogs,
    faRobot,
} from "@fortawesome/free-solid-svg-icons"; // You can extend this as needed

const iconMap = {
    code: faCode,
    cogs: faCogs,
    "blender-phone": faRobot, // Custom fallback
};

const SkillCard = ({ link, badge, title, description }) => {
    const icon = iconMap[badge] || faRobot;

    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl border bg-white shadow-sm hover:shadow-md transition duration-200 p-6"
        >
            <div className="flex items-center gap-4">
                <div className="text-primary bg-gray-100 p-4 rounded-full">
                    <FontAwesomeIcon icon={icon} size="2x" />
                </div>
                <div>
                    <h4 className="text-lg font-semibold">{title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{description}</p>
                </div>
            </div>
        </a>
    );
};

export default SkillCard;
