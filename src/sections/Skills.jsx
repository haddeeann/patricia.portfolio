import React from "react";
import SkillCard from "../components/SkillCard";

const skills = [
    {
        title: "Programming Languages",
        description: "I focus on Python and JavaScript as my main programming languages.",
        link: "#",
        badge: "code",
    },
    {
        title: "Data Analysis",
        description: "I'm learning more about machine learning through online courses.",
        link: "https://data-frog.netlify.app/",
        badge: "cogs",
    },
    {
        title: "Algorithms",
        description: "I work on problems in Leetcode to build my skills in solving algorithms.",
        link: "#",
        badge: "blender-phone",
    },
];

const Skills = () => {
    return (
        <section className="py-8 px-4" id="skills">
            <div className="max-w-6xl">
                <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill) => (
                        <SkillCard key={skill.title} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
