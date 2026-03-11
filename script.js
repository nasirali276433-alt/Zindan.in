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
// Sidebar categories ko handle karne ka function
function showCategory(category) {
    console.log("Category selected: " + category);
    
    // Purani active category se highlight khatam karen
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Jis par click kiya usay highlight karen (agar element maujood ho)
    const activeLink = event.currentTarget;
    if(activeLink) activeLink.classList.add('active');

    // Yahan aap apna image display logic likh sakte hain
    if(category === 'actress') {
        alert("Upload Pic option yahan open hoga!");
        // Upload logic code yahan aayega
    }
}

