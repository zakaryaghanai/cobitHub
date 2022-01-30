import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./context/AuthProvider";
import axios from "axios";
import './assets/css/fonts.css';
import './index.scss';

if(process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://localhost:9000'
} else {
    axios.defaults.baseURL = ''
}

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
