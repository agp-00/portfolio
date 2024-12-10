import React from 'react';
import { FaGithub, FaLinkedin, FaSpotify, FaSteam } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ padding: '20px', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
            <div className="container">
                <p>&copy; 2024 Gómez. Todos los derechos reservados.</p>
                <div className="social-media" style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                    <a href="https://github.com/agp-00" style={{ color: 'white', margin: '0 10px' }}><FaGithub size={24} /></a>
                    <a href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo" style={{ color: 'white', margin: '0 10px' }}><FaLinkedin size={24} /></a>
                    <a href="https://open.spotify.com/user/31dzgvqwsco475hlgulb65ylpyja?si=CWoNOouVSM2_3DdoQFiauw" style={{ color: 'white', margin: '0 10px' }}><FaSpotify size={24} /></a>
                    <a href="https://steamcommunity.com/profiles/76561198175630414" style={{ color: 'white', margin: '0 10px' }}><FaSteam size={24} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;