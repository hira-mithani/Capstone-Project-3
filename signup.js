document
    .getElementById("signupForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        // Getting email and password values
        let userEmail = document.getElementById('userEmail').value;
        let userPassword = document.getElementById('userPassword').value;

        console.log(userEmail, userPassword); // Log userEmail and userPassword

        // Check if both fields are filled
        if (userEmail && userPassword) {
            let userDetails = {
                email: userEmail,
                password: userPassword,
            };

            // Store the details in localStorage
            let stringifyObj = JSON.stringify(userDetails);
            localStorage.setItem("user", stringifyObj);
           
            // Redirect to the index page
            window.location.href = "../index.html";
        } else {
            alert("Please fill in all fields.");
        }
    });
