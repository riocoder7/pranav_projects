const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5050;

app.use(express.static(path.join(__dirname, "../fronted/html")));


// Middleware to parse form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../fronted/html/index.html"));
    
});

app.get("/sineup", (req, res) => {
    res.sendFile(path.join(__dirname, "../fronted/html/signup.html"));
});
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../fronted/html/login.html"));
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log("email is :", email,"\n", "password is :", password);

    

    res.json({"email is :": email, "password is :": password});
});


app.post("/register", (req, res) => {
    const { firstName,lastName,email, password,ConfirmPassword } = req.body;
    console.log("Registration Attempt:", email, password);

    if (!email || !password) {
        return res.status(400).send("Email and password are required.");
    }
    if (password !== ConfirmPassword) {
        return res.status(400).send("Passwords do not match.");
    }

    res.json({
        "firstName is :": firstName,
        "lastName is :": lastName,
        "email is :": email,
        "password is :": password,
        "ConfirmPassword is :": ConfirmPassword,
    });
});

app.get("/admin-panel", (req, res) => {   

    res.sendFile(path.join(__dirname, "../fronted/html/admin.html"));
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
