// script.js
document.addEventListener('DOMContentLoaded', function () {
    const loginContainer = document.querySelector('.login-container');
    const registrationContainer = document.getElementById('registration-container');
    const signupLink = document.getElementById('signup-link');
    const loginLink = document.getElementById('login-link');

    // Toggle between login and registration forms
    signupLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginContainer.style.display = 'none';
        registrationContainer.style.display = 'block';
    });

    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        registrationContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    // Handle login form submission
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message === 'Login successful!') {
                    alert('Login successful!');
                    // Redirect to another page (e.g., dashboard)
                    // window.location.href = 'dashboard.html';
                } else {
                    alert('Invalid email or password');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
    });

    // Handle registration form submission
    document.getElementById('registration-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('reg-confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message === 'Registration successful!') {
                    alert('Registration successful! Please login.');
                    registrationContainer.style.display = 'none';
                    loginContainer.style.display = 'block';
                } else {
                    alert(data.message || 'Registration failed. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
    });
});