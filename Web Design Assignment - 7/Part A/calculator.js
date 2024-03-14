$(document).ready(function() {
    // Get username from localStorage and display it
    const username = localStorage.getItem('username');
    $('#username').text(username);

    // Error messages
    const errors = {
        number1: "Please enter a valid number for Number 1.",
        number2: "Please enter a valid number for Number 2.",
        infinite: "Result is infinite. Please check your input."
    };

    // Check if input is a valid number
    function isValidNumber(input) {
        return !isNaN(input) && isFinite(input);
    }

    // Perform calculation based on operator
    function calculate(operator, number1, number2) {
        switch (operator) {
            case 'add':
                return number1 + number2;
            case 'subtract':
                return number1 - number2;
            case 'multiply':
                return number1 * number2;
            case 'divide':
                return number2 !== 0 ? number1 / number2 : Infinity;
            default:
                return NaN;
        }
    }

    // Update result display
    function updateResult(result) {
        $('#resultValue').text(result);
    }

    // Handle calculation button click
    $('.calculation-button').click(function() {
        const operator = $(this).attr('id');
        const number1 = parseFloat($('#number1').val());
        const number2 = parseFloat($('#number2').val());

        if (!isValidNumber(number1)) {
            $('#number1Error').text(errors.number1);
            return;
        }
        $('#number1Error').text('');

        if (!isValidNumber(number2)) {
            $('#number2Error').text(errors.number2);
            return;
        }
        $('#number2Error').text('');

        const result = calculate(operator, number1, number2);

        if (!isFinite(result)) {
            $('#number2Error').text(errors.infinite);
            return;
        }

        updateResult(result);
    });

    // Handle logout button click
    $('#logoutButton').click(function() {
        localStorage.removeItem('username');
        window.location.href = 'index.html';
    });
});
