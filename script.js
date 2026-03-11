const ADMIN_EMAIL = "Nasirsingabad.123";
const ADMIN_PASS = "Meer.321";
let currentUser = null;
let activeCategory = 'actress';
let isSignupMode = false;

// Create Fullscreen Overlay
const fsOverlay = document.createElement('div');
fsOverlay.className = "fullscreen-bg";
fsOverlay.innerHTML = `<span class="close-fullscreen">&times;</span><div id="fullScreenContent"></div>`;
document.body.appendChild(fsOverlay);

function toggleAuth(mode) {
    isSignupMode = mode === 'signup';
    document.getElementById("loginTab").className = isSignupMode ? "" : "active";
    document.getElementById("signupTab").className = isSignupMode ? "active" : "";
}

document.getElementById("authBtn").onclick = () => document.getElementById("authModal").style.display = "flex";
document.querySelector(".close-modal").onclick = () => document.getElementById("authModal").style.display = "none";

document.getElementById("submitAuth").onclick = function() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("authMsg");

    if (isSignupMode) {
        let users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push({ email, pass });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Sign Up Success! Now Login.");
        toggleAuth('login');
    } else {
        if (email === ADMIN_EMAIL && pass === ADMIN_PASS) {
            currentUser = "admin";
            document.getElementById("adminPanel").style.display = "block";
            document.getElementById("authModal").style.display = "none";
            loadContent();
        } else {
            let users = JSON.parse(localStorage.getItem("users") || "[]");
            if (users.find(u => u.email === email && u.pass === pass)) {
                currentUser = "customer";
                document.getElementById("authModal").style.display = "none";
                loadContent();
            } else { msg.innerText = "Invalid Login!"; }
        }
    }
};

function showCategory(cat) {
    activeCategory = cat;
    document.getElementById("currentCategoryText").innerText = cat;
    loadContent();
}

function handleUpload() {
    const linkInput = document.getElementById("linkInput").value;
    if (!linkInput) return;
    let gallery = JSON.parse(localStorage.getItem("gallery") || "[]");
    let finalLink = linkInput;
    let type = "image";

    // Detect YouTube
    if (linkInput.includes("youtube.com") || linkInput.includes("youtu.be")) {
        let id = linkInput.includes("v=") ? linkInput.split('v=')[1].split('&')[0] : linkInput.split('/').pop();
        finalLink = `https://www.youtube.com/embed/${id}`;
        type = "video";
    } 
    // Detect Google Drive
    else if (linkInput.includes("drive.google.com")) {
        finalLink = linkInput.replace("/view", "/preview").replace("usp=sharing", "");
        type = "drive";
    }

    gallery.push({ id: Date.now(), category: activeCategory, src: finalLink, type: type });
    localStorage.setItem("gallery", JSON.stringify(gallery));
    document.getElementById("linkInput").value = "";
    loadContent();
}

function loadContent() {
    const grid = document.getElementById("displayGrid");
    grid.innerHTML = "";
    let gallery = JSON.parse(localStorage.getItem("gallery") || "[]");
    gallery.filter(item => item.category === activeCategory).forEach(item => {
        const div = document.createElement("div");
        div.className = "media-item";
        let media = (item.type === "video" || item.type === "drive") 
            ? `<iframe src="${item.src}" frameborder="0" allowfullscreen onclick="openFS('${item.src}')"></iframe>`
            : `<img src="${item.src}" onclick="openFS('${item.src}')">`;
        
        let del = (currentUser === "admin") ? `<button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button>` : "";
        div.innerHTML = media + del;
        grid.appendChild(div);
    });
}

function openFS(src) {
    document.getElementById("fullScreenContent").innerHTML = `<iframe src="${src}" frameborder="0" allowfullscreen></iframe>`;
    fsOverlay.style.display = "flex";
}

document.querySelector(".close-fullscreen").onclick = () => {
    fsOverlay.style.display = "none";
    document.getElementById("fullScreenContent").innerHTML = "";
};

function deleteItem(id) {
    let gallery = JSON.parse(localStorage.getItem("gallery") || "[]");
    localStorage.setItem("gallery", JSON.stringify(gallery.filter(i => i.id !== id)));
    loadContent();
}

function logout() { location.reload(); }
loadContent();
function toggleAuth(mode) {
    isSignupMode = mode === 'signup';
    const title = document.getElementById("formTitle");
    const subtitle = document.getElementById("formSubtitle");
    
    title.innerText = isSignupMode ? "Create Account" : "Welcome Back";
    subtitle.innerText = isSignupMode ? "Join Zindan.in community today" : "Please enter your details to continue";
    
    document.getElementById("loginTab").className = isSignupMode ? "" : "active";
    document.getElementById("signupTab").className = isSignupMode ? "active" : "";
}
