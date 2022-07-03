import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./context/AuthProvider";
import './assets/css/fonts.css';
import './style.scss';

import './config/axios.config'

const rootElement = document.getElementById("app");

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>,
    rootElement
);

reportWebVitals();
