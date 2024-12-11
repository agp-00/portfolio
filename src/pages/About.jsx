import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const About = () => {
    const carouselItems = [
        { id: 1, imageUrl: './img/php.png', content: 'PHP' },
        { id: 2, imageUrl: './img/java.png', content: 'Java' },
        { id: 3, imageUrl: './img/react.png', content: 'React' },
        { id: 4, imageUrl: './img/javascript-symbol.png', content: 'JavaScript' },
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '20px', marginTop: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <img src="./img/avatar.png" alt="Profile" style={{ width: '200px', height: '200px', marginRight: '20px' }} />
                <div style={{ textAlign: 'left' }}>
                    <h1>About Me</h1>
                    <h3>Hello! My name is Adrián.</h3>
                    <p>I'm a DAW developer who is learning about programming.</p>
                    <p>I have an interest in problem solving and trying to reflect my ideas into new projects.</p>
                </div>
            </div>
            <div style={{ marginTop: '50px', textAlign: 'center', width: '100%', fontSize: '20px' }}>
                <h2>Abilities</h2>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px', width: '100%' }}>
                    <div style={{ flex: 1 }}>
                        <p><strong>• Problem solving</strong></p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <p><strong>• DSA</strong></p>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px', width: '100%' }}>
                    <div style={{ flex: 1 }}>
                        <p><strong>• Machine learning</strong></p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <p><strong>• Web development</strong></p>
                    </div>
                </div>
            </div>
            
            <div style={{ marginTop: '50px', width: '100%' }}>
                <h2>Knowledge</h2>
                <Carousel responsive={responsive} infinite={true}>
                    {carouselItems.map(item => (
                        <div key={item.id} style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', textAlign: 'center', width: '450px', height: '300px', marginBottom: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <img src={item.imageUrl} alt={item.content} style={{ width: '100%', height: '200px', objectFit: 'scale-down', borderRadius: '10px' }} />
                            <p style={{ marginTop: '10px', flexShrink: 0 }}>{item.content}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default About;