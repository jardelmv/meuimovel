import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from './firebase.js';

const dbimoveis = firebase.database().ref().child('15It5bkFZYLtvwo7Scrl6QbaPOgd5iWSSmy9Wed_0uk0');

dbimoveis.once("value", snap => {
    var imoveis = snap.val();     
    ReactDOM.render(
        <div>
        <App lista={imoveis}/>
        </div>
        , document.getElementById('root')
    );
})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
