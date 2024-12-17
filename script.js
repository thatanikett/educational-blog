// Global variables
let username = localStorage.getItem("username");
let password = localStorage.getItem("password");

// Function to update login status
function updateLoginStatus() {
    const statusElement = document.getElementById("status");
    const loginContainer = document.querySelector(".login-container");
    if (username && password) {
        statusElement.innerText = `Logged in as ${username}`;
        loginContainer.innerHTML += `<button id="logoutBtn">Log Out</button>`;
        document.getElementById("logoutBtn").addEventListener("click", logOut);
    }
}

// Sign-in functionality
document.getElementById("loginBtn")?.addEventListener("click", () => {
    const inputName = document.getElementById("username").value.trim();
    const inputPassword = document.getElementById("password").value.trim();
    if (inputName && inputPassword) {
        username = inputName;
        password = inputPassword;
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        updateLoginStatus();
        alert(`Welcome, ${username}!`);
    } else {
        alert("Please enter both username and password.");
    }
});

// Log out functionality
function logOut() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    alert("You have been logged out.");
    window.location.reload();
}

// Prevent blog access without sign-in
document.querySelectorAll(".blog-link").forEach(link => {
    link.addEventListener("click", (e) => {
        if (!username || !password) {
            e.preventDefault();
            alert("You need to sign in first to view this blog.");
        }
    });
});

// Comment functionality
document.getElementById("commentBtn")?.addEventListener("click", () => {
    const comment = document.getElementById("comment").value.trim();
    if (comment) {
        const commentSection = document.getElementById("comments");
        const newComment = document.createElement("p");
        newComment.textContent = comment;
        alert("new comment added to the blog.");
        commentSection.appendChild(newComment);
        document.getElementById("comment").value = "";
    } else {
        alert("Please enter a comment.");
    }
});

// Initialize status on page load
updateLoginStatus();
