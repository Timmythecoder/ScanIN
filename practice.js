var firebaseConfig = {
    apiKey: "AIzaSyA0esdbnF-COnwnIrS4cUewYnk11F5vnRA",
    authDomain: "guestidpass.firebaseapp.com",
    databaseURL: "https://guestidpass-default-rtdb.firebaseio.com",
    projectId: "guestidpass",
    storageBucket: "guestidpass.appspot.com",
    messagingSenderId: "179403832195",
    appId: "1:179403832195:web:e7b1f43fd51d9053af14b6"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
function addUser(){
    var username = document.getElementById("UserName").value;
    firebase.database().ref("/").child(username).update({
        purpose:"Checked In"
    });
}



 