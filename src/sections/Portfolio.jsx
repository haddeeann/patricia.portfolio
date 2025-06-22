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
        link: "https://dancing-centaur-tile-game.netlify.app/",
        image: tile_game,
    },
    {
        title: "Note Taking App",
        description: "A basic note taking app with Firebase login and register.",
        link: "https://illustrious-biscochitos-cdd8ac.netlify.app/auth",
        image: take_note,
    },
    {
        title: "Flexbox CSS Demo",
        description: "A visual demo of all the major CSS Flexbox properties.",
        link: "https://foxycss.netlify.app/",
        image: flex_box,
    },
    {
        title: "Distraction-Free Learning",
        description: "A YouTube-based study site using Supabase for storage.",
        link: "https://distractionfree.netlify.app/",
        image: distraction_free,
    },
    {
        title: "Data Frog",
        description: "My writing and notes while learning data science.",
        link: "https://data-frog.netlify.app/numpy/1_create_array/",
        image: data_frog,
    },
    {
        title: "Adventure Dog",
        description: "Dog blog with markdown-powered articles. Just for fun.",
        link: "https://adventure-dog.netlify.app/",
        image: adventure_dog,
    },
];

const Portfolio = () => {
    return (
        <section className="py-8 px-4" id="portfolio">
            <div className="max-w-6xl">
                <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
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
