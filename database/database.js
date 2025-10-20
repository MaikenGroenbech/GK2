import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRTIdVXehXvFrZpHXL9dDxXvqcZeoefNY",
  authDomain: "authgk2.firebaseapp.com",
  projectId: "authgk2",
  storageBucket: "authgk2.firebasestorage.app",
  messagingSenderId: "957263000005",
  appId: "1:957263000005:web:fe6b6f88cb0000d2921bac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };