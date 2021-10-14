function logOut() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}   
function addRoom() {
    room_name = document.getElementById("room_name").value;     
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding_room_name"
    });
   localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       //Start code


       //End code
      });});}
      function addRoom(name) {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
  }
getData();