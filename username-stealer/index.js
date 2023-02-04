function submit(e) {
    e.preventDefault()
    var username = document.getElementById("username").value; 

    document.getElementById("error-msg").innerText = "Looks like a user with the username \"" + username + "\" already exists."
    document.getElementById("signup").style.display = "none";
    document.getElementById("error").style.display = "block";
}

document.getElementById("signup").addEventListener("submit", submit);

function take() {
    var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var newUsername = "";
    while (newUsername.length < 5) {
        var charIndex = Math.floor(Math.random() * characters.length);
        newUsername += characters.substring(charIndex, charIndex +1);
    }
    document.getElementById("new-username").innerText = "The user whose username you took now has the following username: \"" + newUsername + "\".";
    document.getElementById("error").style.display = "none";
    document.getElementById("success").style.display = "block";
}

function leave() {
    document.getElementById("error").style.display = "none";
    document.getElementById("signup").style.display = "block";
}