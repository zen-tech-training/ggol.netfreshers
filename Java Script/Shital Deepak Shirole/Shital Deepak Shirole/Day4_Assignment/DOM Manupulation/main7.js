
function validateForm() {
    var email = document.getElementById('email').value;
    var messageElement = document.getElementById('message');
    var isValid = true;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        messageElement.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        messageElement.textContent = '';
    }

    return isValid;
}
