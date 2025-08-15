import React from "react";
import ProjectCard from "../components/ProjectCard";
import data_frog from "../images/data_frog_web_page.png";
import adventure_dog from "../images/adventure_dog_web_page.png";
import distraction_free from "../images/distractionfree_web_page.png";
import flex_box from "../images/flex_box_web_page.png";
import take_note from "../images/take_note.png";
import tile_game from "../images/tile_game.png";

const projects = [
    {
        title: "Tile Game",
        description: "A cozy game of placing tiles.",
        siteLink: "https://dancing-centaur-tile-game.netlify.app/",
        githubLink: "https://github.com/haddeeann/tile-game",
        image: tile_game,
        tags: ["HTMLElement", "CSS", "JavaScript"]
    },
    {
        title: "Note Taking App",
        description: "A basic note taking app with Firebase login and register.",
        siteLink: "https://illustrious-biscochitos-cdd8ac.netlify.app/auth",
        githubLink: "https://github.com/haddeeann/take-note",
        image: take_note,
        tags: ["Firebase", "Vue 3", "CSS", "JavaScript"]
    },
    {
        title: "Flexbox CSS Demo",
        description: "A visual demo of all the major CSS Flexbox properties.",
        siteLink: "https://foxycss.netlify.app/",
        githubLink: "https://github.com/haddeeann/cssgarden",
        image: flex_box,
        tags: ["React", "CSS"]
    },
    {
        title: "Blog created with Django and Vue 3",
        description: "A blog created with Django and Vue 3.",
        siteLink: "https://tinywordsmith.netlify.app/",
        githubLink: "https://github.com/haddeeann/marketing-inkwell-ui",
        image: distraction_free,
        tags: ["Django", "Vue 3", "Sass", "JavaScript"]
    },
    {
        title: "Data Frog",
        description: "My writing and notes while learning data science.",
        siteLink: "https://data-frog.netlify.app/numpy/1_create_array/",
        githubLink: "https://github.com/haddeeann/data_frog",
        image: data_frog,
        tags: ["Eleventy", "CSS", "Markdown"]
    },
    {
        title: "Adventure Dog",
        description: "Dog blog with markdown-powered articles. Just for fun.",
        siteLink: "https://adventure-dog.netlify.app/",
        githubLink: "https://github.com/haddeeann/adventuredog",
        image: adventure_dog,
        tags: ["Gatsby", "CSS", "Markdown"]
    },
];

const Portfolio = () => {
    return (
        <section className="py-8 px-4" id="portfolio">
            <div className="max-w-6xl">
                <h2 className="text-3xl font-bold mb-6">Projects</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
