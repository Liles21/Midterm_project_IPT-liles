import React from 'react';

export default function Contact() {
  return React.createElement(
    'div',
    { className: 'contact' },
    React.createElement('h1', null, 'Contact Us'),
    React.createElement('p', null, 'Email: info@school.com'),
    React.createElement('p', null, 'Phone: +123 456 7890')
  );
}
