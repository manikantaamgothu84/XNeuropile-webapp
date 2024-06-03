document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageElement = document.getElementById('message');

    // Clear previous messages
    messageElement.textContent = '';

    // Validation conditions
    if (!username) {
        messageElement.textContent = 'Username or Email is required';
        highlightInput('username');
    } else if (!password) {
        messageElement.textContent = 'Password is required';
        highlightInput('password');
    } else if (!/^[a-zA-Z0-9@.]+$/.test(username)) {
        messageElement.textContent = 'Username or Email can only contain letters, numbers, and @.';
        highlightInput('username');
    } else if (!/^[a-zA-Z0-9!@#$%^&*]+$/.test(password)) {
        messageElement.textContent = 'Password can only contain letters, numbers, and !@#$%^&*';
        highlightInput('password');
    } else if (username === 'admin' && password === 'password123') {
        messageElement.textContent = 'Sign in successful!';
        messageElement.style.color = 'green';

        // Clear input fields
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

        // Redirect to success page after a short delay
        setTimeout(() => {
            window.location.href = 'success.html'; // Redirect to success page
        }, 1000);
    } else {
        messageElement.textContent = 'Invalid username or password';
        highlightInput('username');
        highlightInput('password');
    }
});

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

function highlightInput(inputId) {
    const inputElement = document.getElementById(inputId);
    inputElement.style.borderColor = 'red';
    setTimeout(() => {
        inputElement.style.borderColor = '#ccc';
    }, 3000);
}
/*let Urname, Pword;
document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageElement = document.getElementById('message');

    // Clear previous messages
    messageElement.textContent = '';

    // Validation conditions
    if (!username) {
        messageElement.textContent = 'Username or Email is required';
        highlightInput('username');
        Urname = false;
    } else if (!password) {
        messageElement.textContent = 'Password is required';
        highlightInput('password');
        Pword = false;
    } else if (!/^[a-zA-Z0-9@.]+$/.test(username)) {
        messageElement.textContent = 'Username or Email can only contain letters, numbers, and @.';
        highlightInput('username');
        Urname = true;
    } else if (!/^[a-zA-Z0-9!@#$%^&*]+$/.test(password)) {
        messageElement.textContent = 'Password can only contain letters, numbers, and !@#$%^&*';
        highlightInput('password');
        Pword = true;
    } else if (username === 'admin' && password === 'password123') {
        messageElement.textContent = 'Sign in successful!';
        messageElement.style.color = 'green';

        // Clear input fields
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

        // Redirect to success page after a short delay
        setTimeout(() => {
            window.location.href = 'success.html'; // Redirect to success page
        }, 1000);
    } else {
        messageElement.textContent = 'Invalid username or password';
        highlightInput('username');
        highlightInput('password');
    }
});

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

function highlightInput(inputId) {
    const inputElement = document.getElementById(inputId);
    inputElement.style.borderColor = 'red';
    setTimeout(() => {
        inputElement.style.borderColor = '#ccc';
    }, 3000);
}*/