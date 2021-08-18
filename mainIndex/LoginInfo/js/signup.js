const auth = firebase.auth();

const DB = firebase.database();
ref = DB.ref("users")

function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.then(function(userCredential){
        if(userCredential){
            user = userCredential.user;
            var email = user.email;
            var uid = user.uid;
            console.log(user);
            ref.child(uid).set({
                "email": user.email,
                "score": 0,
            })
        }else{
            alert("No Active User")
        }
    })
    promise.catch(e => alert(e.message));
    
    alert("Signed Up")
}

signUp();

// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       var uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });
  