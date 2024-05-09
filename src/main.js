import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyD01gvEs0QwIsVOChtUI2v5boLM6Xn9M10",
    authDomain: "visita-ab5a6.firebaseapp.com",
    projectId: "visita-ab5a6",
    storageBucket: "visita-ab5a6.appspot.com",
    messagingSenderId: "421634140690",
    appId: "1:421634140690:web:5eb99bd5a062602ed646cb",
    measurementId: "G-4FJ5Z47GW8"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const app = createApp(App);
app.use(router);
app.use(auth); 
app.mount('#app');