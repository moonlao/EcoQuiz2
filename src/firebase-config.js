const config ={
  apiKey: "AIzaSyBAqblfHEg1LIvFihvalGDTewvnGLbm4kU",
  authDomain: "ecoquiz2.firebaseapp.com",
  databaseURL: "https://ecoquiz2-default-rtdb.firebaseio.com",
  projectId: "ecoquiz2",
  storageBucket: "ecoquiz2.appspot.com",
  messagingSenderId: "860887787866",
  appId: "1:860887787866:web:cd48ff2c95c561530c6b63",
  measurementId: "G-6SELEQS09E"
};

export function getFirebaseConfig(){
    if (!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    }else {
        return firebaseConfig;
    }
}