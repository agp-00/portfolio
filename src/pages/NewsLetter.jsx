import React, { useEffect } from 'react';
import ButtonLink from '../components/ButtonLink';

const NewsLetter = () => {
    useEffect(() => {
        if (!sessionStorage.getItem('newsletterAlertShown')) {
            alert('¡Gracias por suscribirte al Newsletter!');
            sessionStorage.setItem('newsletterAlertShown', 'true');
        }
    }, []);

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem',  marginBottom: '20px' }}>¡Gracias por suscribirte al Newsletter!</h2>
            <p><br/>Te mantendremos informado con nuestras últimas noticias y actualizaciones.</p>
            <div style={{ textAlign: 'left', marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
                <h3 style={{ display: 'inline-block', borderBottom: '3px solid #007bff' }}>Última Noticia</h3>
                <div style={{ marginBottom: '20px' }}>
                    <h4>Nueva proyecto de React lanzado</h4>
                    <p>Haz click en el enlace para ver sobre qué trata el proyecto.</p>
                    <a href="https://classroom.google.com/u/0/c/Njg1NzgwNzU0ODI2/a/Njg1NzgwNzU0ODc1/details" >Leer más</a>
                </div>
            </div>
            <ButtonLink to="/" className="button-link-home">Volver a la Página Principal</ButtonLink>
        </div>
    );
};

export default NewsLetter;