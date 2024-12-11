import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (name && email && message) {
            if (emailPattern.test(email)) {
                navigate('/NewsLetter');
            } else {
                alert('Por favor, introduce un correo electrónico válido.');
            }
        } else {
            alert('Por favor, completa todos los campos antes de continuar.');
        }
    };

    return (
        <div id="contacto" className="contact-container" style={{ maxWidth: '1200px', margin: '50px auto', padding: '20px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                <h1 className="c-l-heading" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <font style={{ borderBottom: '3px solid #1ED98B' }}>Write us</font>
                </h1>
                <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
                    <div className="contact-form" style={{ flex: 1 }}>
                        <div className="name">
                            <font style={{ textAlign: 'left', display: 'block' }}>Name</font>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', margin: '10px 0', fontSize: '16px' }}
                            />
                        </div>
                        <div className="email">
                            <font style={{ textAlign: 'left', display: 'block' }}>Email</font>
                            <input
                                type="email"
                                name="email"
                                placeholder="Example@gmail.com"
                                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                title="Por favor, introduce un correo electrónico válido."
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', margin: '10px 0', fontSize: '16px' }}
                            />
                        </div>
                    </div>
                    <div className="contact-form textarea" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className="message">
                            <font style={{ textAlign: 'left', display: 'block', marginLeft: '15px' }}>Message</font>
                            <textarea
                                name="message"
                                placeholder="Write Message..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={{ width: '90%', padding: '10px', margin: '10px 0', fontSize: '16px', resize: 'none', height: '100px' }} /* Adjust height */
                            ></textarea>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn" style={{ padding: '10px 20px', fontSize: '16px' }} onClick={handleButtonClick}>Suscribirse al Newsletter</button>
            </form>
        </div>
    );
};

export default Contact;