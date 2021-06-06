import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAywSqFOMtwMjNV-QpifhweUHRxGlQRABU",
  authDomain: "chartproject-ff4df.firebaseapp.com",
  projectId: "chartproject-ff4df",
  storageBucket: "chartproject-ff4df.appspot.com",
  messagingSenderId: "821659094474",
  appId: "1:821659094474:web:b3e1ca1c21289f21d5d333",
  measurementId: "G-LLPYS86G68",
};

//for storing userdata in firestore

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get(); //for snapshot of userRef
  console.log(snapShot);
  if (!snapShot.exists) {
    //if user dont exist
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        //use to create userdata in firestore
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error Creating User", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //for google authentication
provider.setCustomParameters({ prompt: "select_account" }); //use for trigering selecet account whenever we try to sign in with google
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
