//SERVICE WORKER
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome from showing the mini-infobar
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Show the install button
    const installBox = document.getElementById('installBox');
    const cancelButton = document.getElementById('cancelButton');
    installBox.style.display = 'block';

    installButton.addEventListener('click', (e) => {
        // Hide the install button
        installBox.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                deferredPrompt = null;
            });
    });
    cancelButton.addEventListener('click', (e) => {
        // Hide the install button
        installBox.style.display = 'none';
    });
});