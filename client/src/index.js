import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import './assets/css/fonts.css';
import './index.scss';

const rootElement = document.getElementById("app");

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    rootElement
);

reportWebVitals();
