import React from 'react';
import ButtonLink from '../components/ButtonLink';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '20px' }}>
            <h1>About Me</h1>
            <p>Hello! My name is [Your Name].</p>
            <p>I am a [Your Profession] with a passion for [Your Interests].</p>
            <p>In my free time, I enjoy [Your Hobbies].</p>
            <p>Feel free to reach out to me at [Your Email] or connect with me on [Your Social Media].</p>
            <ButtonLink to="/" className="button-link-home">Volver a la Página Principal</ButtonLink>
        </div>
    );
};

export default About;