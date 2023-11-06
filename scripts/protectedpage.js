window.addEventListener('DOMContentLoaded', (event) => {
    // Check the current URL
    if (window.location.pathname.includes('/personal')) {
        // If the URL includes '/personal', show the password prompt
        if (sessionStorage.getItem('promptShown') !== 'true') {
            promptForPassword();
            sessionStorage.setItem('promptShown', 'true');
        }
        // If the user is logged in, show the content inside the 'personallists' element
        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            if (document.getElementById('personallists')) {
                document.getElementById('personallists').style.display = 'flex';
            } else if (document.getElementById('personallist')) {
                document.getElementById('personallist').style.display = 'block';
            }
        }
    } else {
        // If the URL does not include '/personal', remove the session and the promptShown flag
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('promptShown');
    }
});

function promptForPassword() {
    // When user logs in
    var userPassword;
    var checkPasswordInterval = setInterval(function () {
        userPassword = prompt('Please enter the password:');
        if (userPassword === null) {
            // User clicked "Cancel"
            // Do nothing, the prompt will show again
        } else if (btoa(userPassword) === 'cGFzc3dvcmQ=') { // 'password' encoded in Base64
            // Save logged in status
            sessionStorage.setItem('isLoggedIn', 'true');
            // Stop checking the password
            clearInterval(checkPasswordInterval);
        } else {
            alert('Incorrect password');
            // The page will not reload, but the prompt will show again
        }
    }, 100); // Check the password every 100 milliseconds
}