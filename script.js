document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = '';
    errorMessage.style.color = 'red'; 

    if (name === '') {
        errorMessage.textContent = 'Please enter your name.';
        return;
    }

    if (/\d/.test(name)) {
        errorMessage.textContent = 'Name cannot contain numbers!!!!!';
        errorMessage.style.color = 'red'; 
        return;
    }

    if (email === '') {
        errorMessage.textContent = 'Please enter your email.';
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    if (message === '') {
        errorMessage.textContent = 'Please enter your message.';
        return;
    }

    alert('Form submitted successfully!');

});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
