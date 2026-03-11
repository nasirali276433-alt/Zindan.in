// 1. Password Security Key (Secret)
const SECURITY_KEY = "MTIzLnJlZU0="; 

// 2. Login Logic
function handleLogin() {
    const emailInput = document.getElementById('email').value;
    const passInput = document.getElementById('password').value;

    // Password ko check karne ka formula
    const encodedInput = btoa(passInput.split('').reverse().join(''));

    if (emailInput === "admin@zindan.in" && encodedInput === SECURITY_KEY) {
        alert("Login Successful! Welcome Admin.");
    } else {
        alert("Ghalat Email ya Password!");
    }
}

// 3. Modal & Tab Logic (Is se Account button chalega)
let isSignupMode = false;

function toggleAuth(mode) {
    isSignupMode = (mode === 'signup');
    document.getElementById("loginTab").className = isSignupMode ? "" : "active";
    document.getElementById("signupTab").className = isSignupMode ? "active" : "";
}

// "Account" button click karne par modal kholna
document.getElementById("authBtn").onclick = function() {
    document.getElementById("authModal").style.display = "flex";
};

// Modal band karne ka button (X)
document.querySelector(".close-modal").onclick = function() {
    document.getElementById("authModal").style.display = "none";
};

