// ------ Setting up Elastic --------
const AppSearchClient = require('@elastic/app-search-node');
const hostIdentfier = process.env.HOST_IDENTIFIER;
const apiKey = process.env.API_KEY;
const client = new AppSearchClient(hostIdentfier, apiKey);
const engineName = "ewe-search";

// ------ Setting up firebase ------
import * as firebase from 'firebase';
import * as admin from 'firebase-admin';
const firebaseConfig = {
    apiKey: "AIzaSyAidtyO1QHi6ALPqXiCnRqp3jpYUAvYvEo",
    authDomain: "elastic-ewe.firebaseapp.com",
    databaseURL: "https://elastic-ewe.firebaseio.com",
    projectId: "elastic-ewe",
    storageBucket: "elastic-ewe.appspot.com",
    messagingSenderId: "842121705987",
    appId: "1:842121705987:web:7da2409c6108e8ac2b2c36"
  };
firebase.initializeApp(firebaseConfig);
const db = admin.firestore;

let dataRef = db.collection('posts').doc('aOO4vmGveqs3oYLqjWm3');

client
    .indexDocuments(engineName, documents)
    .then(response => console.log(response))
    .catch(error => console.log(error));
