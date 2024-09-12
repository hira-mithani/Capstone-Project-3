// script.js
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Clear previous error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
  
    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    let valid = true;
  
    // Validate email
    if (!email) {
      document.getElementById('emailError').textContent = 'Email is required.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById('emailError').textContent = 'Invalid email format.';
      valid = false;
    }
  
    // Validate password
    if (!password) {
      document.getElementById('passwordError').textContent = 'Password is required.';
      valid = false;
    } else if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
      valid = false;
    }
  
    // If valid, you can submit the form or handle login logic
    if (valid) {
      // Example: alert user
      alert('Form is valid! Submitting...');
      // You can add form submission logic here
      // e.g., send data to server or redirect user
    }
  });
  