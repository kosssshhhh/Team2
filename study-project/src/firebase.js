// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.TEAM2_apiKey,
	authDomain: process.env.TEAM2_authDomain,
	projectId: process.env.TEAM2_projectId,
	storageBucket: process.env.TEAM2_storageBucket,
	messagingSenderId: process.env.TEAM2_messagingSenderId,
	appId: process.env.TEAM2_appId,
	measurementId: process.env.measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
