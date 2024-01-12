// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyBUXVGo9jgCYfrPX9F6f-H2OKG42SO_g4k",
  authDomain: "cloudstrydb.firebaseapp.com",
  databaseURL: "https://cloudstrydb-default-rtdb.firebaseio.com",
  projectId: "cloudstrydb",
  storageBucket: "cloudstrydb.appspot.com",
  messagingSenderId: "900990854729",
  appId: "1:900990854729:web:2a779c0c5a24250512c198",
  measurementId: "G-9Q2ZCT1626"
    

  };

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');
   

  // Save message
  saveMessage(name, email, subject, message);

  // Show alert
  // document.querySelector('.alert').style.display = 'block';


  // setTimeout(function(){
  //   document.querySelector('.alert').style.display = 'none';
  // },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, subject, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    subject:subject,
    message:message
    
  });
}