// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, setDoc, doc, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyAjFHat32xqvNViM0aXDppSqnaDVd7_MQU",
    authDomain: "skill-plus-fd40d.firebaseapp.com",
    databaseURL: "https://skill-plus-fd40d-default-rtdb.firebaseio.com",
    projectId: "skill-plus-fd40d",
    storageBucket: "skill-plus-fd40d.appspot.com",
    messagingSenderId: "499271595326",
    appId: "1:499271595326:web:3a52082b5ca8b0d3dda86f",
    measurementId: "G-6WJ9XRHPPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function showMessage(message, divId) {
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function() {
        messageDiv.style.opacity = 0;
    }, 5000);
}

// firebaseauth.js

const signUp = document.getElementById('submitSignUp');
signUp.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                email: email,
                firstName: firstName,
                lastName: lastName
            };
            showMessage('Account Created Successfully', 'signUpMessage');
            const docRef = doc(db, "users", user.uid);
            setDoc(docRef, userData)
                .then(() => {
                    window.location.href = 'index.html';
                })
                .catch((error) => {
                    console.error("error writing document", error);

                });
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode == 'auth/email-already-in-use') {
                showMessage('Email Address Already Exists !!!', 'signUpMessage');
            } else {
                showMessage('unable to create User', 'signUpMessage');
            }
        })
});

const signIn = document.getElementById('submitSignIn');
signIn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            showMessage('login is successful', 'signInMessage');
            const user = userCredential.user;
            localStorage.setItem('loggedInUserId', user.uid);
            window.location.href = 'homepage.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/invalid-credential') {
                showMessage('Incorrect Email or Password', 'signInMessage');
            } else {
                showMessage('Account does not Exist', 'signInMessage');
            }
        })
});

const db = getFirestore();
const courseRef = collection(db, "courses");

const learningC = {
    title: "Learning C",
    importance: "C language's timeless importance lies in its efficiency and versatility, serving as the foundation for numerous operating systems and embedded systems.",
    requiredSkills: [
        "Deep understanding of C programming language",
        "Knowledge of data structures and algorithms",
        "Familiarity with operating systems and embedded systems"
    ],
    youtubeVideos: [{
            name: "Learning C",
            url: "https://www.youtube.com/playlist?list=PL1234567890"
        },
        {
            name: "Tutorials on C",
            url: "https://www.youtube.com/playlist?list=PL9876543210"
        },
        {
            name: "Course on C",
            url: "https://www.youtube.com/playlist?list=PL1111111111"
        }
    ],
    courses: {
        free: [{
                name: "Udemy",
                url: "https://www.udemy.com/c-programming"
            },
            {
                name: "Educative",
                url: "https://www.educative.io/c-programming"
            }
        ],
        paid: [{
            name: "Udemy",
            url: "https://www.udemy.com/c-programming-course"
        }]
    },
    skills: [
        "System-level programming",
        "Performance-critical applications",
        "Embedded systems",
        "Operating systems"
    ],
    onlinePlatforms: [
        "HackerRank",
        "Leetcode",
        "Topcoder",
        "Codecademy"
    ],
    jobOpportunities: [
        "Web Developer",
        "Machine Learning Engineer",
        "Game Developer",
        "Network Programmer"
    ]
};

addDoc(courseRef, )
    .then(() => {
        console.log("Android Development course added successfully");
    })
    .catch((error) => {
        console.error("Error adding Android Development course: ", error);
    });