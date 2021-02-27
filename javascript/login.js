

   // Your web app's Firebase configuration
   <script>
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
  </script>
   firebase.auth.Auth.Persistence.LOCAL;
 
$("#btnlogin").click(function login(){

  var email = $("#email").val();
  var password = $("#password").val();

  if(email!= "" && password!= "")
  {
  
  var result= firebase.auth().signInwithEmailAndPassword(email, password);
  
  result.catch(function(error)
  {
  var errorCode= error.code;
  var errorMessage= error.message;
  
  console.log(errorCode);
  console.log(errorMessage);

  window.alert("Message:" , errorMessage);
});
  }

else
  {
    
    window.alert("Please fill out all fields");
  }
});

  

