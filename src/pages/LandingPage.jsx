import React from 'react';
import '../css/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ flex: 1, textAlign: 'left' }}>
                <h1 style={{ fontFamily: 'Georgia, serif' }}>Bienvenido a mi Portafolio</h1>
                <p style={{ fontFamily: 'Verdana, sans-serif' }}>Explora las diferentes secciones para conocer más sobre mí y mi trabajo.</p>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
                <img src="./img/avatar.png" alt="Profile" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
            </div>
        </div>
    );
};

export default LandingPage;