
let body = document.querySelector('body');

let mainDiv = document.createElement('div');
body.appendChild(mainDiv);

let userProfile = document.createElement('div');
mainDiv.appendChild(userProfile);

const user = firebase.auth().currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  let userEmail = document.createElement('div');
  userEmail.innerHTML = email;
  mainDiv.appendChild(userEmail);

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;

  user.getToken(uid);
  console.log(uid);
}

