import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig=({
    apiKey: import.meta.env.VITE_FIRE_API_KEY,
    authDomain:import.meta.env.VITE_FIRE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIRE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIRE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIRE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIRE_APP_ID,
})

const app=initializeApp(firebaseConfig)
export const db=getFirestore(app)
export const auth=getAuth(app)