// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF9Lz7wpT6vT0ZCtexeiz5APWmK0HSezI",
  authDomain: "parham-project.firebaseapp.com",
  projectId: "parham-project",
  storageBucket: "parham-project.appspot.com",
  messagingSenderId: "726400193991",
  appId: "1:726400193991:web:96ce0f318cb2b69ce635e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

//login
const login = document.getElementById("loginb");
login.addEventListener("click", function (event) {

  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;


  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    const dt = new Date();
    update(ref(database, 'users/' + user.vid), {
      email: email,
      last_login: dt,
    })

    // ...

    alert('User logged in!');

    // Redirect to another HTML page upon successful login
    window.location.href = 'src/menu.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });

})

//signup
const register = document.getElementById("signupb");
register.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      set(ref(database, 'users/' + user.vid), {
        email: email
      })

      alert("Account created successfully!");
      window.location.reload();
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
