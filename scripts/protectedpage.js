window.onload = function () {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("submitBtn");
    var input = document.getElementById("pwd");

    // Show the modal
    modal.style.display = "block";

    // When user submits the password
    btn.onclick = function () {
        var userPassword = input.value;
        if (btoa(userPassword) === 'd2VibWFzdGVy') { // 'webmaster' encoded in Base64
            // Save logged in status
            sessionStorage.setItem('isLoggedIn', 'true');
            // Hide the modal
            modal.style.display = "none";
        } else {
            alert('Incorrect password');
            window.location.href = 'lockedpage';
        }
    }

    // Check logged in status
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
        alert('You are not logged in');
        window.location.href = 'personal/homepage';
    }
}