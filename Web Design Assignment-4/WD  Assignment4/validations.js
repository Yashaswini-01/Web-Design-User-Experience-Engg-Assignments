//  Event listeners for keyup events to validate input fields
document.getElementById('firstName').addEventListener('keyup', validateForm);
document.getElementById('lastName').addEventListener('keyup', validateForm);
document.getElementById('emailId').addEventListener('keyup', validateForm);
document.getElementById('phoneNumber').addEventListener('keyup', validateForm);
document.getElementById('Street Address1').addEventListener('keyup', validateForm);
document.getElementById('City').addEventListener('keyup', validateForm);
document.getElementById('zipcode').addEventListener('keyup', validateForm);
document.getElementById('adInfo').addEventListener('keyup', validateForm);
document.getElementById('comments').addEventListener('keyup', validateForm);



//  Event listener for form submission
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

function validateForm() {
    var isValid = true;
    // Validate first name
    var firstName = document.getElementById('firstName').value.trim();
    var firstNameError = document.getElementById('firstNameError');
    if (firstName === '') {
        firstNameError.textContent = 'First name is required.';
        isValid = false;
    } else if (firstName.length < 2 || firstName.length > 30) {
        firstNameError.textContent = 'First name must be between 2 and 30 characters.';
        isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(firstName)) {
        firstNameError.textContent = 'First name should contain only alphabets.';
        isValid = false;
    } else {
        firstNameError.textContent = '';
    }

    // Validate last name
    var lastName = document.getElementById('lastName').value.trim();
    var lastNameError = document.getElementById('lastNameError');
    if (lastName === '') {
        lastNameError.textContent = 'Last name is required.';
        isValid = false;
    } else if (lastName.length < 2 || lastName.length > 30) {
        lastNameError.textContent = 'Last name must be between 2 and 30 characters.';
        isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(lastName)) {
        lastNameError.textContent = 'Last name should contain only alphabets.';
        isValid = false;
    } else {
        lastNameError.textContent = '';
    }

    // Validate email
    var email = document.getElementById('emailId').value.trim();
    var emailError = document.getElementById('emailError');
    if (email === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email address (@northeasetrn.edu).';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Validate phone number
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    var phoneNumberError = document.getElementById('phoneNumberError');
    if (phoneNumber === '') {
        phoneNumberError.textContent = 'Phone number is required.';
        isValid = false;
    } else if (!/^\d{3}-\d{3}-\d{4}$/.test(phoneNumber)) {
        phoneNumberError.textContent = 'Please enter a valid phone number in the format xxx-xxx-xxxx.';
        isValid = false;
    } else {
        phoneNumberError.textContent = '';
    }

    // Validation for street address1
    var streetAddress1 = document.getElementById('Street Address1').value.trim();
    var streetAddress1Error = document.getElementById('StreetAddress1Error');
    if (streetAddress1 === '') {
        streetAddress1Error.textContent = 'Street Address1 is required.';
        formIsValid = false;
    } else {
        streetAddress1Error.textContent = ''; 
    }

    // Validation for city
    var city = document.getElementById('City').value.trim();
    var cityError = document.getElementById('CityError');
    if (city === '') {
        cityError.textContent = 'City is required.';
        formIsValid = false;
    } else {
        cityError.textContent = ''; 
    }


    // Validate zipcode
    var zipcode = document.getElementById('zipcode').value.trim();
    var zipcodeError = document.getElementById('zipcodeError');
    if (zipcode === '') {
        zipcodeError.textContent = 'Zipcode is required.';
        isValid = false;
    } else if (!/^\d{6}$/.test(zipcode)) {
        zipcodeError.textContent = 'Zipcode should be 6 digits long.';
        isValid = false;
    } else {
        zipcodeError.textContent = '';
    }

    // Validation for additional customisations
    var additionalInfo = document.getElementById('adInfo').value.trim();
    var additionalInfoError = document.getElementById('adInfoError');
    if (additionalInfo === '') {
        additionalInfoError.textContent = 'Additional customisations are required.';
        formIsValid = false;
    } else {
        additionalInfoError.textContent = ''; 
    }

    // Validate comments
    var comments = document.getElementById('comments').value.trim();
    var commentsError = document.getElementById('commentsError');
    if (comments === '') {
        commentsError.textContent = 'Comments are required.';
        isValid = false;
    } else if (comments.length > 200) {
        commentsError.textContent = 'Comments cannot exceed 200 characters.';
        isValid = false;
    } else {
        commentsError.textContent = '';
    }

    // Enable or disable submit button based on form validity
    var submitButton = document.querySelector('input[type="submit"]');
    submitButton.disabled = !isValid;

    return isValid;
}

// Function to validate email
function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
    return emailRegex.test(email);
}


drinkSelect = "NA";
function dropDown() {
  var drinks = document.getElementById("drinks").value;
  if (drinks == "Espresso") {
    document.getElementById("dropdown1").style.display = "block";
    document.getElementById("dropdown2").style.display = "none";
    document.getElementById("dropdown3").style.display = "none";
    document.getElementById("dropdown4").style.display = "none";
    document.getElementById("dropdown5").style.display = "none";
    drinkSelect = drinks;
  } else if (drinks == "Double Espresso") {
    document.getElementById("dropdown1").style.display = "none";
    document.getElementById("dropdown2").style.display = "block";
    document.getElementById("dropdown3").style.display = "none";
    document.getElementById("dropdown4").style.display = "none";
    document.getElementById("dropdown5").style.display = "none";
    drinkSelect = drinks;

  } else if (drinks == "Americano") {
    document.getElementById("dropdown1").style.display = "none";
    document.getElementById("dropdown2").style.display = "none";
    document.getElementById("dropdown3").style.display = "block";
    document.getElementById("dropdown4").style.display = "none";
    document.getElementById("dropdown5").style.display = "none";
    drinkSelect = drinks;
  } else if (drinks == "Cappuccino") {
    document.getElementById("dropdown1").style.display = "none";
    document.getElementById("dropdown2").style.display = "none";
    document.getElementById("dropdown3").style.display = "none";
    document.getElementById("dropdown4").style.display = "block";
    document.getElementById("dropdown5").style.display = "none";
    drinkSelect = drinks;
  } else if (drinks == "Latte") {
    document.getElementById("dropdown1").style.display = "none";
    document.getElementById("dropdown2").style.display = "none";
    document.getElementById("dropdown3").style.display = "none";
    document.getElementById("dropdown4").style.display = "none";
    document.getElementById("dropdown5").style.display = "block";
    drinkSelect = drinks;
  }
}

function ondropDown(dropDownselect) {
  var textField = document.getElementById("additionalInfo");
  if (dropDownselect.checked) {
    textField.style.display = "block";
  } else {
    textField.style.display = "none";
  }
}

function formSubmit(event) {
    event.preventDefault(); // Prevent the default form submission 
    console.log("Submit button clicked");
    alert("Details Filled successfully");

    let table = document.getElementById("tableData");
    let title = getTitleValue();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let emailId = document.getElementById("emailId").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let streetAddress1 = document.getElementById("Street Address1").value;
    let streetAddress2 = document.getElementById("Street Address2").value;
    let city = document.getElementById("City").value;
    let zipCode = document.getElementById("zipcode").value;
    let howdidyouhear = gethowDidYouHear();
    let comments = document.getElementById("comments").value;
    let drinks = document.getElementById("drinks").value;
    let customizations = document.getElementById("adInfo").value;

    let newArray = [title, firstName, lastName, emailId, phoneNumber, streetAddress1, streetAddress2,city, zipCode, howdidyouhear, drinks, customizations, comments];

    const tr = document.createElement("tr");
    newArray.forEach(item => {
        const td = document.createElement("td");
        td.textContent = item;
        tr.appendChild(td);
    });

    table.querySelector('tbody').appendChild(tr);
    document.getElementById("tableData").style.display = "table"; 
    document.getElementById("feedbackForm").reset(); 
}

function getTitleValue() {
    var titleInputs = document.getElementsByName('title');
    for (var i = 0; i < titleInputs.length; i++) {
        if (titleInputs[i].checked) {
            return titleInputs[i].value;
        }
    }
    return ""; // Default value if no title is selected
}

function gethowDidYouHear() {
    var sources = document.getElementsByName('source');
    var selectedSources = [];

    for (var i = 0; i < sources.length; i++) {
        if (sources[i].checked) {
            selectedSources.push(sources[i].value);
        }
    }

    return selectedSources;
}
