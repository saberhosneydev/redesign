// SignUp
$("button#up").click(function(){
	var email  = document.getElementById('email');
	var password  = document.getElementById('password');
  var name  = document.getElementById('name');
  var photo  = document.getElementById('photo');
	firebase.auth().createUserWithEmailAndPassword(email.value, password.value).catch(function(error)
  { // catch error and send them to console
  console.log(error.code);
  console.log(error.message);
 }).then(function()
 { // add the user name and user photo using updateprofile
  var user = firebase.auth().currentUser;
  user.updateProfile({displayName: name.value,photoURL: photo.value}).then(
  function() { // display the errors  if exist or succ.
  console.log("successfully updated");
}, function(error) {
  console.log("error updating");
});
 user.sendEmailVerification().then(function() {
  console.log("email sent");
}, function(error) {
  console.log(error.message);
}); 
});
});
// SignIn
$("button#in").click(function(){
var email  = document.getElementById('logemail');
var password  = document.getElementById('logpassword');
firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
   console.log(error.code);
   console.log(error.message);
}).then(function(){
  location.reload();
});
});
// SignOut
$("button#out").click(function(){
firebase.auth().signOut().then(function() {
   console.log("Logged out!")
   location.reload();
}, function(error) {
   console.log(error.code);
   console.log(error.message);
});
});

// Delete user
$("button#delete").click(function(){
  var user = firebase.auth().currentUser;
  var pw = prompt("Confirm your password .");
  var credential = firebase.auth.EmailAuthProvider.credential(
  user.email,
  pw
);
// Prompt the user to re-provide their sign-in credentials
user.reauthenticate(credential).then(function(){
    if (confirm("Are you sure ?") == true) {
    user.delete().then(function(){
    firebase.auth().signOut().then(function() {
    alert("success");
    location.reload();
    });
  }), function(error){
      console.log(error.code);
  };
  }else {

  }
});
});

// Update Password
$("button#updtp").click(function(){
  var newpass = document.getElementById('password');
  var user = firebase.auth().currentUser;
  var pw = prompt("Confirm your old password .");
  var credential = firebase.auth.EmailAuthProvider.credential(
  user.email,
  pw
);
  if (newpass.value == "") {
    alert("enter the new password first");
  } else {
// Prompt the user to re-provide their sign-in credentials
user.reauthenticate(credential).then(function(){
  if (confirm("Are you sure ?") == true ) {
          user.updatePassword(newpass.value).then(function(){
    firebase.auth().signOut().then(function() {
    alert("success");
    location.reload();
    });
  }), function(error){
      console.log(error);
  };
  } else {
    alert("password not changed");
  }

}), function(error){
  console.log("error");
};
  }
});

// Update Email
$("button#updte").click(function(){
 var newemail = document.getElementById('useremail');
  var user = firebase.auth().currentUser;
  var pw = prompt("Confirm your password .");
  var credential = firebase.auth.EmailAuthProvider.credential(
  user.email,
  pw
);
  if (newemail.value == user.email) {
    alert("looks like the same email");
  } else {
// Prompt the user to re-provide their sign-in credentials
user.reauthenticate(credential).then(function(){
  if (confirm("Are you sure ?") == true ) {
          user.updateEmail(newemail.value).then(function(){
    firebase.auth().signOut().then(function() {
    alert("success");
    location.reload();
    });
  }), function(error){
      console.log(error);
  };
  } else {
    alert("Error , email not changed");
  }

}), function(error){
  console.log("error");
};
}
});

// Update Name and Image
$("button#updtni").click(function(){

});