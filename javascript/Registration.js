
 // Your web app's Firebase configuration

 var firebaseConfig = {
  apiKey: "AIzaSyAL27YAZYAYZja5oqkJbL4J-ow17YOQ6a0",
  authDomain: "form2-ec61e.firebaseapp.com",
  databaseURL: "https://form2-ec61e.firebaseio.com",
  projectId: "form2-ec61e",
  storageBucket: "form2-ec61e.appspot.com",
  messagingSenderId: "1002040361804",
  appId: "1:1002040361804:web:dcc4401d662d99199dc5e9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth= firebase.auth();
function register() { 
    var firstname=document.getElementById("fname").value;
    var lastname=document.getElementById("lname").value;
    var address=document.getElementById("add").value;
    var number=document.getElementById("contact").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("psw").value;
    var rpass=document.getElementById("Rpass").value;

    const promise = auth.createUserWithpassAndrpass(pass.value, rpass.value);
        promise.catch(e => alert(e.message));
    if(pass==rpass)
    {
      alert("register successful");

    }
    else
    {
      alert("Password does'nt match. Try again!!!");

    }
    
  }