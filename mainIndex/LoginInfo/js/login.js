const auth = firebase.auth();

function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Logged In as:" + " " + email.value);
}

signIn();

auth.onAuthStateChanged(function(user){

    if(user){
        var email = user.email;
        alert("Active User:" + email);
        
    }else{
        alert("No Active User");
    }


});


function signOut(){
		
    auth.signOut();
    alert("Signed Out");
    window.location.href = "../../index.html";
};
