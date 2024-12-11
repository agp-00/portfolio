import React from 'react';

const About = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '20px' }}>
            <h1>About Me</h1>
            <p>Hello! My name is [Your Name].</p>
            <p>I am a [Your Profession] with a passion for [Your Interests].</p>
            <p>In my free time, I enjoy [Your Hobbies].</p>
            <p>Feel free to reach out to me at [Your Email] or connect with me on [Your Social Media].</p>
        </div>
    );
};

export default About;