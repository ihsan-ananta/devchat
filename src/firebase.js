import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyCH_X9ldNlGQIQEQBXgp0xtDXqiSjnwKbU',
  authDomain: 'devchat-557e3.firebaseapp.com',
  databaseURL: 'https://devchat-557e3.firebaseio.com',
  projectId: 'devchat-557e3',
  storageBucket: 'devchat-557e3.appspot.com',
  messagingSenderId: '400954567410',
  appId: '1:400954567410:web:40c6025ef57f5a77'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
