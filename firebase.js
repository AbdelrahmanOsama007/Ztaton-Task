const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  getDocs,
  doc,
} = require("firebase/firestore");
require("dotenv").config();

const serviceAccount = {
  apiKey: "AIzaSyDNNIraxlY0IngVpK82FUeFp549pBclBpk",
  authDomain: "images-crud-eb7a7.firebaseapp.com",
  projectId: "images-crud-eb7a7",
  storageBucket: "images-crud-eb7a7.appspot.com",
  messagingSenderId: "763727599404",
  appId: "1:763727599404:web:bbd6b941f774bf130c3e89",
};
// Initialize the Firebase app with the service account
initializeApp(serviceAccount);
// Initialize Firestore
const db = getFirestore();
const colres = collection(db, "Images");
getDocs(colres).then((snapshot) => {
  let images = [];
  snapshot.docs.forEach((doc) => {
    images.push({ ...doc.data() });
  });
  console.log(images);
});

module.exports = { db,colres};
