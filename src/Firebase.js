import * as firebase from 'firebase'
// import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXA_3R-6JcxL9KHHefp-m5Iii521Nl_sY",
  authDomain: "noon-522ca.firebaseapp.com",
  databaseURL: "https://noon-522ca.firebaseio.com",
  projectId: "noon-522ca",
  storageBucket: "noon-522ca.appspot.com",
  messagingSenderId: "818869061785",
  appId: "1:818869061785:web:cbdbff9de48f0fa1c4d008",
  measurementId: "G-68ZM614SHX"
};
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
