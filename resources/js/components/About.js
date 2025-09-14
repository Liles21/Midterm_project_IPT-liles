import React from 'react';

export default function About() {
  return React.createElement(
    'div',
    { className: 'about' },
    React.createElement('h1', null, 'About Us'),
    React.createElement('p', null, 'This is the about page where you describe your application.')
  );
}
