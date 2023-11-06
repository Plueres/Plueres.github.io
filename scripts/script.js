window.onload = function () {

    // Add a global flag for whether scrolling is allowed
    var allowScroll = true;
    var mouseX = 0;

    var home = document.getElementById('home');
    var lists = document.getElementById('lists');
    var about = document.getElementById('about');
    var blogs = document.getElementById('blogs');

    // Temporarily remove transition
    home.style.transition = 'none';
    lists.style.transition = 'none';
    about.style.transition = 'none';
    blogs.style.transition = 'none';

    switch (window.location.pathname) {
        case '/lists':
            home.style.transform = 'translateX(100vw)';
            lists.style.transform = 'translateX(0)';
            allowScroll = false;
            break;
        case '/about':
            home.style.transform = 'translateY(-100vh)';
            about.style.transform = 'translateY(0)';
            allowScroll = true;
            break;
        case '/blogs':
            home.style.transform = 'translateX(-100vw)';
            blogs.style.transform = 'translateX(0)';
            allowScroll = false;
            break;
        default:
            // No path or unrecognized path, show home page
            home.style.transform = 'translateX(0)';
            lists.style.transform = 'translateX(-100vw)';
            about.style.transform = 'translateY(100vh)';
            blogs.style.transform = 'translateX(100vw)';
            allowScroll = true;
            break;
    }

    // Re-add transition after a short delay
    setTimeout(function () {
        home.style.transition = '';
        lists.style.transition = '';
        about.style.transition = '';
        blogs.style.transition = '';
    }, 1); // Adjust delay as needed

    function updateButtonGradients() {
        var buttons = document.getElementsByTagName('button');
        var windowWidth = window.innerWidth;
        for (var i = 0; i < buttons.length; i++) {
            var rect = buttons[i].getBoundingClientRect();
            var buttonCenterX = rect.left + rect.width / 2;
            var buttonSide = buttonCenterX > windowWidth / 2 ? 'left' : 'right';
            var color = buttonSide === 'left' ? 'rgba(0, 0, 255, 0.5)' : 'rgba(255, 165, 0, 0.5)'; // 50% opacity
            var dist = buttonSide === 'left' ? windowWidth - mouseX : mouseX;
            var maxDist = windowWidth / 3; // Lowered distance
            var gradientIntensity = 1 - dist / maxDist;
            buttons[i].style.background = `linear-gradient(to ${buttonSide}, ${color}, transparent ${gradientIntensity * 100}%)`;
            buttons[i].style.opacity = gradientIntensity;
        }
        requestAnimationFrame(updateButtonGradients);
    }

    document.getElementById('lists-button').addEventListener('click', function () {
        document.getElementById('home').style.transform = 'translateX(100vw)';
        document.getElementById('lists').style.transform = 'translateX(0)';
        history.pushState(null, null, 'lists');
        allowScroll = false; // Disable scrolling
    });

    document.getElementById('blogs-button').addEventListener('click', function () {
        document.getElementById('home').style.transform = 'translateX(-100vw)';
        document.getElementById('blogs').style.transform = 'translateX(0)';
        history.pushState(null, null, 'blogs');
        allowScroll = false; // Disable scrolling
    });

    document.getElementById('lists-back-button').addEventListener('click', function () {
        document.getElementById('home').style.transform = 'translateX(0)';
        document.getElementById('lists').style.transform = 'translateX(-100vw)';
        history.pushState(null, null, '/');
        allowScroll = true; // Enable scrolling
    });

    document.getElementById('blogs-back-button').addEventListener('click', function () {
        document.getElementById('home').style.transform = 'translateX(0)';
        document.getElementById('blogs').style.transform = 'translateX(100vw)';
        history.pushState(null, null, '/');
        allowScroll = true; // Enable scrolling
    });

    document.addEventListener('mousemove', function (event) {
        mouseX = event.clientX;
    });

    updateButtonGradients();

    var homePosition = 0;
    var aboutPosition = 100;
    var scrollSpeed = 0.05;

    window.addEventListener('wheel', function (event) {
        if (!allowScroll) {
            // If scrolling is not allowed or if the user is on the 'blogs' page, do nothing
            return;
        }

        var home = document.getElementById('home');
        var about = document.getElementById('about');

        // Calculate the amount to scroll, scaled by scrollSpeed for a smoother effect
        var scrollAmount = event.deltaY * scrollSpeed;

        // Update the positions and ensure they stay within their boundaries
        homePosition = Math.min(Math.max(homePosition - scrollAmount, -100), 0);
        aboutPosition = Math.min(Math.max(aboutPosition - scrollAmount, 0), 100);

        // Update the transform for each section
        home.style.transform = `translateY(${homePosition}vh)`;
        about.style.transform = `translateY(${aboutPosition}vh)`;

        // Update the URL based on the current section
        if (homePosition <= -50) {
            history.pushState(null, null, 'about');
        } else {
            history.pushState(null, null, '/');
        }
    });
    window.addEventListener('popstate', function () {
        allowScroll = true; // Enable scrolling
    });




    var startY;

    // Listen for the touchstart event
    window.addEventListener('touchstart', function (event) {
        // Get the Y coordinate of the touch event
        startY = event.touches[0].clientY;
    }, false);

    // Listen for the touchmove event
    window.addEventListener('touchmove', function (event) {
        // Get the Y coordinate of the touch event
        var endY = event.touches[0].clientY;

        // Calculate the difference in Y coordinates
        var diffY = startY - endY;

        // If pulling up, animate the swipe to the about page
        if (diffY > 0 && homePosition === 0) {
            // Animate the swipe
            homePosition = -100;
            aboutPosition = 0;

            // Update the URL based on the current section
            history.pushState(null, null, 'about');
        }
        // If pulling down, animate the swipe to the home page
        else if (diffY < 0 && homePosition === -100) {
            // Animate the swipe
            homePosition = 0;
            aboutPosition = 100;

            // Update the URL based on the current section
            history.pushState(null, null, '/');
        }

        // Update the transform for each section
        home.style.transform = `translateY(${homePosition}vh)`;
        about.style.transform = `translateY(${aboutPosition}vh)`;

        // Update startY to the current Y position for the next move event
        startY = endY;
    }, false); // Remove the { passive: false } option
}

// var lastX, lastY;
// var mouseMoved = false;

// function createParticle(x, y) {
//     var size = Math.random() * 50 + 50;
//     var particle = document.createElement('div');
//     particle.style.position = 'absolute';
//     particle.style.width = size + 'px';
//     particle.style.height = size + 'px';
//     particle.style.background = 'radial-gradient(circle, purple, transparent)';
//     particle.style.borderRadius = '50%';
//     particle.style.pointerEvents = 'none';
//     particle.style.left = x - size / 2 + 'px';
//     particle.style.top = y - size / 2 + 'px';
//     particle.style.zIndex = '-1';
//     particle.style.filter = 'blur(10px)';

//     var animationName = 'fadeOut' + Date.now();
//     var keyframes = '@keyframes ' + animationName + ' { to { transform: scale(0); opacity: 0; } }';
//     var style = document.createElement('style');
//     style.textContent = keyframes;
//     document.head.appendChild(style);
//     particle.style.animation = animationName + ' 2s ease-out forwards';

//     document.body.appendChild(particle);

//     setTimeout(function () {
//         document.body.removeChild(particle);
//         document.head.removeChild(style);
//     }, 2000);
// }

// function updateParticles() {
//     if (mouseMoved) {
//         var dx = lastX - prevX;
//         var dy = lastY - prevY;
//         var d = Math.sqrt(dx * dx + dy * dy);
//         var steps = Math.ceil(d / 20);
//         for (var j = 0; j < steps; j++) {
//             var x = prevX + dx * j / steps;
//             var y = prevY + dy * j / steps;
//             createParticle(x, y);
//         }
//         prevX = lastX;
//         prevY = lastY;
//         mouseMoved = false;
//     }
//     requestAnimationFrame(updateParticles);
// }

// var prevX, prevY;
// document.addEventListener('mousemove', function (event) {
//     lastX = event.clientX;
//     lastY = event.clientY;
//     if (prevX === undefined) {
//         prevX = lastX;
//         prevY = lastY;
//     }
//     mouseMoved = true;
// });

// updateParticles();