function validateForm() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    const messageElement = document.getElementById('message');

    if (emailValue === '') {
        messageElement.textContent = 'Please enter an email address.';
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailValue)) {
        messageElement.textContent = 'Please enter a valid email address.';
        return false;
    }

    messageElement.textContent = 'Email address is valid.';
    return true;
}