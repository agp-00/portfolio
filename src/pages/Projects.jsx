import React from 'react';
import ButtonLink from '../components/ButtonLink';

const Projects = () => {
    const projects = [
        {
            id: 1,
            imageUrl: './img/netflix.png',
        },
        {
            id: 2,
            imageUrl: './img/movies.png',
        },
        {
            id: 3,
            imageUrl: './img/weather.png',
        },
        {
            id: 4,
            imageUrl: './img/crypto.png',
        },
    ];
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '20px' }}>
            <h1>My Projects</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', width: '100%', maxWidth: '600px' }}>
                {projects.map((project) => (
                    <div key={project.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={project.imageUrl} alt={`Project ${project.id}`} style={{ width: '400px', height: '400px' }} />
                    </div>
                ))}
            </div>
            <ButtonLink to="/" className="button-link-home">Volver a la Página Principal</ButtonLink>
        </div>
    );
};

export default Projects;