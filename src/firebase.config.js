import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBnl7MWeTywrcHCUIS3-ThSbvyGDR_dkHs",
    authDomain: "restaurantapp-52491.firebaseapp.com",
    databaseURL: "https://restaurantapp-52491-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-52491",
    storageBucket: "restaurantapp-52491.appspot.com",
    messagingSenderId: "961239028765",
    appId: "1:961239028765:web:2ace3914228ccaa512e2f4"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore= getFirestore(app);
const storage = getStorage(app);

export {app,firestore,storage};