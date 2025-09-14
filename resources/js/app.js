import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './components/Router';

if (document.getElementById('example')) {
    const root = ReactDOM.createRoot(document.getElementById('example'));
    root.render(
        <React.StrictMode>
            <AppRouter />
        </React.StrictMode>
    );
}
