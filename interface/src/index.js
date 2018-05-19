import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase/app';


var config = {
    apiKey: "AIzaSyApnR_BwdtI_kK_IUSUX6w5xc_PX7wtlM0",
    authDomain: "schniffer-b635a.firebaseapp.com",
    databaseURL: "https://schniffer-b635a.firebaseio.com",
    projectId: "schniffer-b635a",
    storageBucket: "",
    messagingSenderId: "1032559053424"
  };
  firebase.initializeApp(config);

  ReactDOM.render(<App />, document.getElementById('root'));

  registerServiceWorker();
