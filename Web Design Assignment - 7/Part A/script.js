$(document).ready(function() {
    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;

    // Error messages
    const errors = {
        email: "Invalid email. Please use a Northeastern email address.",
        username: "Username must be six characters long.",
        password: "Please enter a valid password.",
        confirmPassword: "Passwords do not match."
    };

    // Check if email is valid Northeastern email
    function isValidEmail(email) {
        return emailRegex.test(email);
    }

    // Check if input is valid
    function isValidInput(input, minLength, maxLength, specialChar) {
        if (input.length < minLength || input.length > maxLength) {
            return false;
        }
        if (specialChar && /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(input)) {
            return false;
        }
        return true;
    }

    // Validate email field
    $('#email').on('input', function() {
        const email = $(this).val();
        const isValid = isValidEmail(email);
        $('#emailError').text(isValid ? '' : errors.email);
        updateLoginButton();
    });

    // Validate username field
    $('#username').on('input', function() {
        const username = $(this).val();
        const isValid = isValidInput(username, 6, 20, true);
        $('#usernameError').text(isValid ? '' : errors.username);
        updateLoginButton();
    });

    // Validate password field
    $('#password').on('input', function() {
        const password = $(this).val();
        const isValid = isValidInput(password, 6, 20, true);
        $('#passwordError').text(isValid ? '' : errors.password);
        updateLoginButton();
    });

    // Validate confirm password field
    $('#confirmPassword').on('input', function() {
        const password = $('#password').val();
        const confirmPassword = $(this).val();
        const isValid = password === confirmPassword;
        $('#confirmPasswordError').text(isValid ? '' : errors.confirmPassword);
        updateLoginButton();
    });

    // Enable/disable login button based on form validity
    function updateLoginButton() {
        const emailValid = isValidEmail($('#email').val());
        const usernameValid = isValidInput($('#username').val(), 3, 20, true);
        const passwordValid = isValidInput($('#password').val(), 6, 20, true);
        const confirmPasswordValid = $('#password').val() === $('#confirmPassword').val();

        $('#loginButton').prop('disabled', !(emailValid && usernameValid && passwordValid && confirmPasswordValid));
    }

    // Validate fields on initial load
    updateLoginButton();

    // Validate fields on form submit
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        updateLoginButton();

        if ($('#loginButton').prop('disabled')) {
            return;
        }

        // Redirect to second page
        window.location.href = 'calculator.html';
    });
}); 


