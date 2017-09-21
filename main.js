class Main {
  // This function is used to initialize everything
  constructor() {
    this.account = new Account();
  }
  searchSessions() {
    // Searches through database of sessions
  }
}
class Session {
  constructor() {
    // Creates new session
    this.user;
    this.time;
    this.room;
    this.verify;
    this.subject;
    this.grade;
    this.sat;
    this.accepted;
  }
  viewProfile() {
    // Views profile of the tutor
  }
  acceptTutoring() {
    // Accepts the session and contacts tutor
  }
  cancelTutoring() {
    // If tutoring accepted, cancel it
  }
  removeTutoring() {
    // If you are the owner of the tutoring session
    // Then remove the tutoring session
    // Remove the session from the student if a student already accepted
  }
}
class Account {
  constructor() {
    // Creates account
    this.name;
    this.verify;
    this.timesLearned;
    this.timesTutored;
  }
  signUp() {
    // Gets info from sign up form and creates on server
    // Updates the account
  }
  rememberMe(saveUser,savePass) {
    // On sign in, the data is saved in variables
    localStorage.savedUsername = saveUser;
    localStorage.savedPassword = savePass;
  }
  forgetMe() {
    // Dump out saved data
    localStorage.removeItem(savedUsername);
    localStorage.removeItem(savedPassword)
  }
}
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}
