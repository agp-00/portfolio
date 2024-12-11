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
        <>
            <h1>Find us here</h1>
            <div style={{ display: 'flex', marginTop: '20px', width: '100%', height: '400px' }}>
                <div style={{ flex: 1 }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.0864873153!2d2.6327533111697425!3d39.58426952144219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129793f4f4b4b4b4%3A0x4b4b4b4b4b4b4b4b!2sCarrer%20de%20la%20Beata%20Francinaina%20Cirer%2C%202%2C%2007011%20Palma%2C%20Illes%20Balears%2C%20Spain!5e0!3m2!1sen!2ses!4v1633072871234!5m2!1sen!2ses"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Maps"
                    ></iframe>
                </div>
                <div style={{ flex: 1, padding: '20px', textAlign: 'left'}}>
                    <h2>Address</h2>
                    <p>We are a little bussiness in a shared building with other bussiness.</p>
                    <p>Address: Carrer de la Beata Francinaina Cirer, 2, Class 3-1, Ponent, 07011 Palma, Illes Balears, Spain</p>
                    <p>Phone: +34 555 555 555</p>
                    <p>Email: agp00@iesemilidarder.com</p>
                </div>
            </div>

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
        </>
    );
};

export default Contact;