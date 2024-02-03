import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCv6cLaIp_XEZMaJo78zBQVCPEIiU1Qw2M",
    authDomain: "vue-sites-51612.firebaseapp.com",
    projectId: "vue-sites-51612",
    storageBucket: "vue-sites-51612.appspot.com",
    messagingSenderId: "447814642503",
    appId: "1:447814642503:web:269a6d15102ace6d5e3a62"
};

//init firebase

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestapm = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestapm }