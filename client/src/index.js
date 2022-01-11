import React from 'react';
import ReactDOM from 'react-dom';
import App from './Pages/App/App';
import reportWebVitals from './reportWebVitals';

import './assets/css/fonts.css';
import './index.scss';
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById("app");

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);

reportWebVitals();
