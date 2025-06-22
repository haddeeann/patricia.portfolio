import React from "react";
import {
    faLaptopCode,
    faBriefcase,
    faCodeBranch,
    faIndustry,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const timelineData = [
    {
        title: "Fullstack Developer",
        company: "Daxtra",
        time: "Februrary 2022 to Present",
        description: "We help recruiters reach the right candidates at fast speeds.",
        link: "https://pivotcx.io/",
        icon: faLaptopCode,
    },
    {
        title: "Software Developer",
        company: "Yellow Umbrella Creators",
        time: "January 2021 to Present",
        description: "Yellow Umbrella Creators is my personal project company.",
        icon: faBriefcase,
    },
    {
        title: "Software Developer",
        company: "SharpSpring / Constant Contact",
        time: "March 2020 to January 2021",
        description:
            "Constant Contact helps achieve automation in communicating with customers and marketing.",
        link: "https://www.constantcontact.com/",
        icon: faCodeBranch,
    },
    {
        title: "Software Developer",
        company: "Altavian / Teledyne FLIR",
        time: "Sept 2017 to Feb 2020",
        description:
            "Teledyne FLIR is a global leader in the design and marketing of thermal imaging infrared cameras.",
        link: "https://www.flir.com/",
        icon: faIndustry,
    },
];

const Timeline = () => {
    return (
        <section id="timeline" className="py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 text-center">Professional Timeline</h2>
                <div className="relative border-l border-gray-300 pl-6">
                    {timelineData.map((item, index) => (
                        <div key={index} className="mb-10 relative pt-4">
                            <div className="absolute -left-3 top-0">
                <span className="bg-white border border-gray-300 text-primary rounded-full p-2">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <h4 className="text-md font-medium text-gray-600">{item.company}</h4>
                                <p className="text-sm text-gray-500 mb-2">{item.time}</p>
                                <p className="text-gray-700">{item.description}</p>
                                {item.link && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-500 underline text-sm mt-2 inline-block"
                                    >
                                        Visit Site
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
