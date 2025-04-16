import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
        <ToastContainer />
    </>

);



