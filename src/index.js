import React from 'react';
import ReactDOM from 'react-dom/client';

import "./styles/index.css"
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1XDRtZkH0xpvNHRvNzDP1ZWd7KfSRpPA",
  authDomain: "coderhouse-ecommerce-fabian.firebaseapp.com",
  projectId: "coderhouse-ecommerce-fabian",
  storageBucket: "coderhouse-ecommerce-fabian.appspot.com",
  messagingSenderId: "460467362705",
  appId: "1:460467362705:web:907ecfcf1b7e9eb1ce9830",
  measurementId: "G-0WNCBQRG8C"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
