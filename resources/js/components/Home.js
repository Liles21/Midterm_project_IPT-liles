import React from 'react';

export default function Home() {
  return React.createElement(
    'div',
    { className: 'home' },
    React.createElement('h1', null, 'Welcome to the Home Page'),
    React.createElement('p', null, 'This is the homepage content.')
  );
}
