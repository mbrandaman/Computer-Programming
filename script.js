let userMessage = document.getElementById("user-message");
userMessage.innerHTML = "Welcome";

function logIn() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        if(username === "" || password === "") {
            alert("No username or password has been entered");
        } else {
            window.location.href = "index.html";
        }
};   