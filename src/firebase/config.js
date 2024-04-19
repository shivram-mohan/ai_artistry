
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
apiKey: "AIzaSyBh5ARYj_SLXtiSMUzKySX4K5O0qPQ9D6Y",
  authDomain: "aiartistry-52f7f.firebaseapp.com",
  projectId: "aiartistry-52f7f",
  storageBucket: "aiartistry-52f7f.appspot.com",
  messagingSenderId: "349844928003",
  appId: "1:349844928003:web:eca7f4c82a85ced3884036"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth