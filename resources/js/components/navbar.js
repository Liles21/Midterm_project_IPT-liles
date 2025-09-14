import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../sass/Navbar.scss';

export default function Navbar() {
    const location = useLocation();

    const links = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' }
    ];

    const navChildren = links.map(link =>
        React.createElement(
            Link,
            {
                key: link.path,
                to: link.path,
                className: location.pathname === link.path ? 'active' : ''
            },
            link.label
        )
    );

    return React.createElement('nav', { className: 'navbar' }, ...navChildren);
}
