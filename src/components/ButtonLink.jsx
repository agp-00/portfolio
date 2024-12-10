import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ to, children, className }) => {
    return (
        <Link to={to} className={`button-link ${className}`}>
            {children}
        </Link>
    );
};

export default ButtonLink;