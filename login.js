// IMPORTANT: PASTE YOUR firebaseConfig OBJECT FROM THE FIREBASE CONSOLE HERE
const firebaseConfig = {
  apiKey: "AIzaSyYOUR_API_KEY_HERE", // REPLACE
  authDomain: "your-project-id.firebaseapp.com", // REPLACE
  projectId: "your-project-id", // REPLACE
  storageBucket: "your-project-id.appspot.com", // REPLACE
  messagingSenderId: "YOUR_SENDER_ID", // REPLACE
  appId: "YOUR_APP_ID" // REPLACE
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const googleSignInButton = document.getElementById('google-signin-button');
const loginMessage = document.getElementById('login-message');

// Check if user is already signed in (e.g., if they refresh login page while signed in)
auth.onAuthStateChanged(user => {
    if (user) {
        loginMessage.textContent = `PROCESS: Already logged in as ${user.displayName}. Redirecting...`;
        loginMessage.style.color = "var(--color-text-main)";
        setTimeout(() => {
            window.location.href = 'index.html'; // Redirect to main page
        }, 2000);
    } else {
        loginMessage.textContent = "Awaiting authentication protocol...";
    }
});

if (googleSignInButton) {
    googleSignInButton.addEventListener('click', () => {
        loginMessage.textContent = "Initiating Google Sign-In protocol...";
        loginMessage.style.color = "var(--color-accent-warning)";

        auth.signInWithPopup(provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = result.credential;
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                loginMessage.textContent = `SUCCESS: Authenticated as ${user.displayName}. Welcome, Operative! Redirecting...`;
                loginMessage.style.color = "var(--color-text-main)";

                // You could store some user info in localStorage if needed for non-sensitive display
                // localStorage.setItem('synergyUser', JSON.stringify({displayName: user.displayName, email: user.email}));

                setTimeout(() => {
                    window.location.href = 'index.html'; // Redirect to main page after successful login
                }, 2000);

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                const credential = error.credential;

                console.error("Google Sign-In Error:", errorCode, errorMessage);
                loginMessage.textContent = `ERROR: Authentication failed. ${errorMessage}. Please retry.`;
                loginMessage.style.color = "var(--color-accent-primary)";
            });
    });
}
