document.getElementById('btnSignIn').addEventListener('click', function() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-message');

    if (usernameInput.trim() === "" || passwordInput.trim() === "") {
        errorMsg.innerText = "Username atau Password tidak boleh kosong.";
        errorMsg.style.display = "block";
    } else {
        errorMsg.style.display = "none";
        window.open("https://www.instagram.com/dimaslul/", "_blank");
    }   
});