import React from 'react';
import '../css/Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            imageUrl: './img/netflix.png',
            title: 'Project Netflix',
        },
        {
            id: 2,
            imageUrl: './img/movies.png',
            title: 'Movies App',
        },
        {
            id: 3,
            imageUrl: './img/weather.png',
            title: 'Weather App',
        },
        {
            id: 4,
            imageUrl: './img/crypto.png',
            title: 'CryptoBros',
        },
    ];
    return (
        <div className="projects-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '20px' }}>
            <h1>My Projects</h1>
            <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', width: '100%', maxWidth: '800px', justifyContent: 'center' }}>
                {projects.map((project) => (
                    <div key={project.id} className="project-container">
                        <img src={project.imageUrl} alt={`Project ${project.id}`} className="project-image" />
                        <div className="hover-line"></div>
                        <div className="hover-text">
                            <span>{project.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;