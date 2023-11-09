window.addEventListener('DOMContentLoaded', (event) => {
    // Check the current URL
    if (window.location.pathname.includes('/personal')) {
        // If the URL includes '/personal', show the password prompt
        if (sessionStorage.getItem('promptShown') !== 'true') {
            // Initially hide the content
            if (document.getElementById('personallists')) {
                document.getElementById('personallists').style.display = 'none';
            } else if (document.getElementById('personallist')) {
                document.getElementById('personallist').style.display = 'none';
            }
            promptForPassword();
            sessionStorage.setItem('promptShown', 'true');
        }
    } else {
        // If the URL does not include '/personal', remove the session and the promptShown flag
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('promptShown');
    }
});

async function promptForPassword() {
    // When user logs in
    var userPassword;
    var checkPasswordInterval = setInterval(async function () {
        userPassword = prompt('Please enter the password:');
        if (userPassword === null) {
            // User clicked "Cancel", redirect to '/lists'
            window.location.href = '/lists';
            clearInterval(checkPasswordInterval);
        } else {
            // Hash the user's password
            const msgUint8 = new TextEncoder().encode(userPassword);
            const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashedPassword = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

            if (hashedPassword === '483029d526219f816e8e8f6a9de07b422633dba180ffc26faac22862a017519f') { // '2004' hashed with SHA-256
                // Save logged in status
                sessionStorage.setItem('isLoggedIn', 'true');
                // Stop checking the password
                clearInterval(checkPasswordInterval);
                // Show the content
                if (document.getElementById('personallists')) {
                    document.getElementById('personallists').style.display = 'flex';
                } else if (document.getElementById('personallist')) {
                    document.getElementById('personallist').style.display = 'block';
                }
            } else {
                alert('Incorrect password');
                // The page will not reload, but the prompt will show again
            }
        }
    }, 100); // Check the password every 100 milliseconds
}