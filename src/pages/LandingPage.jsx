import React from 'react';
import '../css/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ flex: 1, textAlign: 'left' }}>
                <h1 style={{ fontFamily: 'Georgia, serif' }}>Welcome to my portfolio!</h1>
                <p style={{ fontFamily: 'Verdana, sans-serif' }}>Explore the different sections to learn more about me and my work.</p>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
                <img src="./img/avatar.png" alt="Profile" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
            </div>
        </div>
    );
};

export default LandingPage;