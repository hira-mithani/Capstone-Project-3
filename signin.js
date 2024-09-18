document
  .getElementById("signInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let user = localStorage.getItem("user");
    if (!user) {
      alert("No user data found. Please sign up first.");
      return;
    }

    let parseObj = JSON.parse(user); 

    console.log(parseObj);

    let userEmail = document.getElementById("useremail").value;
    let userPassword = document.getElementById("userPassword").value;

    let messageElement = document.getElementById("message");
    if (messageElement) {
      messageElement.remove();
    }

    if (userEmail === parseObj.email && userPassword === parseObj.password) {
      alert("Login successful!");

      window.location.href = "../pages/API.html";
    } else {
      let errorMessage = document.createElement("p");
      errorMessage.id = "message"; 
      errorMessage.style.color = "red";
      errorMessage.textContent = "Error: Invalid email or password. Please try again!";
      document.getElementById("signInForm").appendChild(errorMessage);
    }
  });