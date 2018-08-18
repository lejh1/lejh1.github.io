  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB8vlLpx6l5UEucE3lBpwfxU13sNgZgHSA",
    authDomain: "my-website-294f6.firebaseapp.com",
    databaseURL: "https://my-website-294f6.firebaseio.com",
    projectId: "my-website-294f6",
    storageBucket: "my-website-294f6.appspot.com",
    messagingSenderId: "254697882565"
  };
  firebase.initializeApp(config);

  //reference messages collections 
  var messagesRef = firebase.database().ref('messages');
// Listen for form submit 
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();
    //get values 
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    //save message
    saveMessage(name, email, message);
    //show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';

    }, 3000)

    document.getElementById('contactForm').reset();
}

//Function to get form values 
function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name : name,
        email : email,
        message : message
    })
}