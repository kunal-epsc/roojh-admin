import { FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { firebaseConfig as config } from "../env/firebase-config";

const firebaseConfig: FirebaseOptions = {
  apiKey: config.apiKey,
  appId: config.appId,
  databaseURL: config.databaseURL,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const db = getFirestore(app);
