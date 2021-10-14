const firebaseConfig = {
  apiKey: "AIzaSyDvYi5M3dIl1kTsKSjo_o5lUxLfr-MdAcQ",
  authDomain: "kwitter-eb3fb.firebaseapp.com",
  databaseURL: "https://kwitter-eb3fb-default-rtdb.firebaseio.com",
  projectId: "kwitter-eb3fb",
  storageBucket: "kwitter-eb3fb.appspot.com",
  messagingSenderId: "509330995999",
  appId: "1:509330995999:web:ae2c721cc9eb14a1a8ce2a",
  measurementId: "G-5NRZTJFTD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();


function send() {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
});
document.getElementById("msg").innerHTML = "";
}
function logOut() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}   