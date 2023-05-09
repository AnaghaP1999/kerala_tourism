function validate() {
    
    var fname =  document.getElementById("name").value; 
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone").value;
    var password = document.getElementById("pswd").value;
    var passwordstrength = document.getElementById("passwordstrength");
      
 
    var regPhone = /^(\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (fname == "") {
        alert("Please enter your name");
        fname.focus();
        return false;
    }

    if (email == "") {
        alert("Please enter an e-mail address.");
        email.focus();
        return false;
    }

    if (password.length < 8) {
        alert("Please enter atleast 8 characters.");
        email.focus();
        return false;
    }

    if (!passwordRegex.test(password)) {
        passwordstrength.innerText = "Poor";
        passwordstrength.className = "poor";
        return false;
    }

    if (password.length > 8 && /\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {
        passwordstrength.innerText = "Strong";
        passwordstrength.className = "strong";
      } else if (password.length == 8 && (/\d/.test(password) || /[a-z]/.test(password) || /[A-Z]/.test(password))) {
        passwordstrength.innerText = "Medium";
        passwordstrength.className = "medium";
      } else {
        passwordstrength.innerText = "Poor";
        passwordstrength.className = "poor";
      }

    if (phoneNumber == '') {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }

    if (!regPhone.test(phoneNumber)) {
        alert("Please enter valid phone number.");
        phoneNumber.focus();
        return false;
    }
}

function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pswd").value;

    if (email == "") {
        alert("Please enter an email address.");
        email.focus();
        return false;
    }

    if (password == "") {
        alert("Please enter the password.");
        password.focus();
        return false;
    }
}