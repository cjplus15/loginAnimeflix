// Configuración de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Elementos de la interfaz
const loginContainer = document.getElementById("login-container");
const registerContainer = document.getElementById("register-container");

const showRegister = document.getElementById("show-register");
const showLogin = document.getElementById("show-login");

const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");

const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");

// Cambiar entre pantallas
showRegister.addEventListener("click", () => {
  loginContainer.style.display = "none";
  registerContainer.style.display = "block";
});

showLogin.addEventListener("click", () => {
  loginContainer.style.display = "block";
  registerContainer.style.display = "none";
});

// Registro
registerBtn.addEventListener("click", () => {
  const email = registerEmail.value;
  const password = registerPassword.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Usuario registrado exitosamente");
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert("Error: " + error.message);
      console.error(error);
    });
});

// Inicio de sesión
loginBtn.addEventListener("click", () => {
  const email = loginEmail.value;
  const password = loginPassword.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Inicio de sesión exitoso");
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert("Error: " + error.message);
      console.error(error);
    });
});
