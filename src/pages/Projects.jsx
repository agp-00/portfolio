import React from 'react';
import ButtonLink from '../components/ButtonLink';
import Footer from '../components/Footer';

const Projects = () => {
    const projects = [
        {
            id: 1,
            imageUrl: 'https://via.placeholder.com/300x200.png?text=Project+1',
        },
        {
            id: 2,
            imageUrl: 'https://via.placeholder.com/300x200.png?text=Project+2',
        },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '20px' }}>
            <h1>My Projects</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {projects.map((project) => (
                    <div key={project.id}>
                        <img src={project.imageUrl} alt={`Project ${project.id}`} />
                    </div>
                ))}
            </div>
            <ButtonLink to="/" className="button-link-home">Volver a la Página Principal</ButtonLink>
        </div>
    );
};

export default Projects;