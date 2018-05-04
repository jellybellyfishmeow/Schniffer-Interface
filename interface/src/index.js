import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyApnR_BwdtI_kK_IUSUX6w5xc_PX7wtlM0",
    authDomain: "schniffer-b635a.firebaseapp.com",
    databaseURL: "https://schniffer-b635a.firebaseio.com",
    projectId: "schniffer-b635a",
    storageBucket: "",
    messagingSenderId: "1032559053424"
  };
  firebase.initializeApp(config);

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'))
  registerServiceWorker();
