import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyCgmkMVejpwk6SOVg_hl3qLQ71_ZOzGyxo",
  authDomain: "slack-clone-challenge-d6994.firebaseapp.com",
  projectId: "slack-clone-challenge-d6994",
  storageBucket: "slack-clone-challenge-d6994.appspot.com",
  messagingSenderId: "645148824676",
  appId: "1:645148824676:web:1baffa6735648ccb05fb71"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();



export { auth, provider }

export {db} ;
export default !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();


