// Initialize Firebase (ADD YOUR OWN DATA)
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAfE1ZGXOkv9fCFsbg1h0U4L0RNgPUKBdg",
    authDomain: "poll-pro.firebaseapp.com",
    databaseURL: "https://poll-pro.firebaseio.com",
    projectId: "poll-pro",
    storageBucket: "poll-pro.appspot.com",
    messagingSenderId: "11658306443",
    appId: "1:11658306443:web:e49f53643dc19f78c9458e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('voteform').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('user-email');
    var company = getInputVal('FormControlSelect1');
    var q1 = getInputVal('FormControlSelect2');
    var q2 = getInputVal('FormControlSelect3');
    var q3 = getInputVal('FormControlSelect4');
    var comment = getInputVal('FormControlTextarea1');
  
    // Save message
    saveMessage(name, company, q1, q2, q3, comment);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('voteform').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, q1, q2, q3, comment){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      q1:q1,
      q2:q2,
      q3:q3,
      comment : comment
    });
  }