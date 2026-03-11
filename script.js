// Password ko "Plain Text" mein mat likhen. 
// Isko "Base64" ya reverse karke rakhen taake asani se nazar na aaye.
const SECURITY_KEY = "MTIzLnJlZU0="; // Yeh "123.reeM" ka encoded version hai

function function handleLogin(inputEmail, inputPass) {
    // Input ko encode karke check karna
    const encodedInput = btoa(inputPass.split('').reverse().join(''));

    if (inputEmail === "admin@zindan.in" && encodedInput === SECURITY_KEY) {
        alert("Login Successful! Welcome Admin.");
        return true;
    } else {
        alert("Ghalat Email ya Password!");
        return false;
    }
}

// --- Yahan se naya code shuru ho raha hai (Line 17 ki jagah paste karen) ---

let currentUser = null;
let activeCategory = 'actress';
let isSignupMode = false;

function toggleAuth(mode) {
    isSignupMode = mode === 'signup';
    document.getElementById("loginTab").className = isSignupMode ? "" : "active";
    document.getElementById("signupTab").className = isSignupMode ? "active" : "";
}

// Modal ko open aur close karne ka sahi tareeqa
document.getElementById("authBtn").onclick = () => {
    document.getElementById("authModal").style.display = "flex";
};

document.querySelector(".close-modal").onclick = () => {
    document.getElementById("authModal").style.display = "none";
};

