// JavaScript for handling form validation and dynamic behavior

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('loginForm');
    
    // Function to validate form inputs
    function validateForm() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!email || !password) {
            alert('Both email and password are required.');
            return false;
        }
        
        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        
        return true;
    }

    // Handle form submission
    form.addEventListener('submit', (event) => {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form from submitting if validation fails
        } else {
            alert('Form submitted successfully!');
            // Here you can handle form submission via AJAX if needed
        }
    });

    // Google Sign-In button handling (placeholder)
    const googleButton = document.querySelector('.google');
    googleButton.addEventListener('click', () => {
        alert('Google Sign-In is not yet integrated.');
        // Replace this with actual Google Sign-In integration code
    });
});
