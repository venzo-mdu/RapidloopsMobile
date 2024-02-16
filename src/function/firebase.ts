// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// export const firebaseConfig = {
//   apiKey: 'AIzaSyCtuynX5akCa2vTL5bICPtunvNK0maH0tM',
//   authDomain: 'turf-booking-4d092.firebaseapp.com',
//   projectId: 'turf-booking-4d092',
//   storageBucket: 'turf-booking-4d092.appspot.com',
//   messagingSenderId: '966560453293',
//   appId: '1:966560453293:web:32d78ade007c75284a2c24',
// };

// export const firebaseConfig = {
//   apiKey: 'AIzaSyBgX3bu-3BVy9pu7l1t6cMHhB7hpJagGRk',
//   authDomain: 'hadron-platform.firebaseapp.com',
//   projectId: 'hadron-platform',
//   storageBucket: 'hadron-platform.appspot.com',
//   messagingSenderId: '165725349050',
//   appId: '1:165725349050:web:1217d12e758f6ff8'
// };

export const firebaseConfig = {
  apiKey: "AIzaSyC_3DBws-LQ3ev76UACh96a88x4cbsfCEs",
  authDomain: 'hadron-platform.firebaseapp.com',
  projectId: "hadron-platform",
  storageBucket: "hadron-platform.appspot.com",
  messagingSenderId: "165725349050",
  appId: "1:165725349050:android:ce9f50bf96d5bb1d748e83",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
export const storage = getStorage(app);