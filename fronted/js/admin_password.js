document.getElementById("loginButton").addEventListener("click", function() {
    const password = document.getElementById("adminPassword").value;
    const correctPassword = "admin123";
    if (password === correctPassword) {
        window.location.href = "admin.html";
        alert("Welcome to the admin dashboard");
    } else {
        document.getElementById("errorMessage").classList.remove("hidden");
    }
});