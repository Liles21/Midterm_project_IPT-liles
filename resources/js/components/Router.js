import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './contact.us';
import Navbar from './navbar';

export default function AppRouter() {
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(Navbar, null),
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: "/", element: React.createElement(Home) }),
      React.createElement(Route, { path: "/about", element: React.createElement(About) }),
      React.createElement(Route, { path: "/contact", element: React.createElement(Contact) }),
      React.createElement(Route, { path: "*", element: React.createElement(Navigate, { to: "/" }) })
    )
  );
}
