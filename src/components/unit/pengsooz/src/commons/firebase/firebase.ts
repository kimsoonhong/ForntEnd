import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// 프로젝트 공용 (JH)
const clientCredentials = {
  apiKey: "AIzaSyDUode-3Ahyy5698hB0usCiM23KRpW2gNo",
  authDomain: "pensooz-fire.firebaseapp.com",
  projectId: "pensooz-fire",
  storageBucket: "pensooz-fire.appspot.com",
  messagingSenderId: "1080768406589",
  appId: "1:1080768406589:web:9c7768048dc368a4c1f654",
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
export const dbservice = firebase.firestore();
