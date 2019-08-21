  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAVmvAQDI4y0BqnTuyKcc27hp5GlK8i_V8",
    authDomain: "gwans-mario-plan.firebaseapp.com",
    databaseURL: "https://gwans-mario-plan.firebaseio.com",
    projectId: "gwans-mario-plan",
    storageBucket: "",
    messagingSenderId: "1041577212523",
    appId: "1:1041577212523:web:16f6d7e4d412d989"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;