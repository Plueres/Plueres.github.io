window.onload = function () {

    // Add a global flag for whether scrolling is allowed
    var allowScroll = true;
    var mouseX = 0;

    var home = document.getElementById('home');
    var lists = document.getElementById('lists');
    var about = document.getElementById('about');
    var articles = document.getElementById('articles');



    var homePosition = 0;
    var aboutPosition = 100;
    var scrollSpeed = 0.05;

    var startY, startX;
    var homePositionX = 0, homePositionY = 0, aboutPosition = 100, listsPosition = -100, articlesPosition = 100;
    var swipeInProgress = false; // Add this line

    // Temporarily remove transition
    home.style.transition = 'none';
    lists.style.transition = 'none';
    about.style.transition = 'none';
    articles.style.transition = 'none';

    // Check the current URL path
    switch (window.location.pathname) {
        case '/lists':
            homePositionX = 100;
            listsPosition = 0;
            aboutPosition = 100;
            articlesPosition = 200;
            allowScroll = false;
            break;
        case '/about':
            homePositionY = -100;
            aboutPosition = 0;
            listsPosition = -200;
            allowScroll = true;
            break;
        case '/articles':
            homePositionX = -100;
            listsPosition = -200;
            aboutPosition = 100;
            articlesPosition = 0;
            allowScroll = false;
            break;
        default:
            // No path or unrecognized path, show home page
            homePositionX = 0;
            homePositionY = 0;
            aboutPosition = 100;
            listsPosition = -100;
            articlesPosition = 100;
            allowScroll = true;
            break;
    }

    // Update the transform for each section
    home.style.transform = `translateX(${homePositionX}vw) translateY(${homePositionY}vh)`;
    about.style.transform = `translateY(${aboutPosition}vh)`;
    lists.style.transform = `translateX(${listsPosition}vw)`;
    articles.style.transform = `translateX(${articlesPosition}vw)`;

    // Existing code...

    // Re-add transition after a short delay
    setTimeout(function () {
        home.style.transition = '';
        lists.style.transition = '';
        about.style.transition = '';
        articles.style.transition = '';
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
            var maxDist = windowWidth / 6; // Lowered distance
            var gradientIntensity = 1 - dist / maxDist;
            buttons[i].style.background = `linear-gradient(to ${buttonSide}, ${color}, transparent ${gradientIntensity * 100}%)`;
            buttons[i].style.opacity = gradientIntensity;
        }
        requestAnimationFrame(updateButtonGradients);
    }

    document.getElementById('lists-button').addEventListener('click', function () {
        document.getElementById('home').style.transform = 'translateX(100vw)';
        document.getElementById('lists').style.transform = 'translateX(0)';
        document.getElementById('about').style.transform = 'translateY(100vw)';
        history.pushState(null, null, 'lists');
        allowScroll = false; // Disable scrolling
    });

    document.getElementById('articles-button').addEventListener('click', function () {
        document.getElementById('home').style.transform = 'translateX(-100vw)';
        document.getElementById('articles').style.transform = 'translateX(0)';
        document.getElementById('about').style.transform = 'translateY(100vw)';
        history.pushState(null, null, 'articles');
        allowScroll = false; // Disable scrolling
    });

    document.getElementById('lists-back-button').addEventListener('click', function () {
        document.getElementById('home').style.transform = 'translateX(0)';
        document.getElementById('lists').style.transform = 'translateX(-100vw)';
        document.getElementById('about').style.transform = 'translateY(100vw)';
        history.pushState(null, null, '/');
        allowScroll = true; // Enable scrolling
    });

    document.getElementById('articles-back-button').addEventListener('click', function () {
        document.getElementById('home').style.transform = 'translateX(0)';
        document.getElementById('articles').style.transform = 'translateX(100vw)';
        document.getElementById('about').style.transform = 'translateY(100vw)';
        history.pushState(null, null, '/');
        allowScroll = true; // Enable scrolling
    });

    document.addEventListener('mousemove', function (event) {
        mouseX = event.clientX;
    });

    updateButtonGradients();

    window.addEventListener('wheel', function (event) {
        if (!allowScroll) {
            // If scrolling is not allowed or if the user is on the 'articles' page, do nothing
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




    // Listen for the touchstart event
    window.addEventListener('touchstart', function (event) {

        event.preventDefault();
        // Get the Y and X coordinates of the touch event
        startY = event.touches[0].clientY;
        startX = event.touches[0].clientX;
        swipeInProgress = false; // Reset the swipeInProgress flag
    }, false);

    // Listen for the touchmove event
    window.addEventListener('touchmove', function (event) {

        event.preventDefault();
        // If a swipe is already in progress, do nothing
        if (swipeInProgress) {
            return;
        }

        // Set the swipeInProgress flag to true
        swipeInProgress = true;
        // Get the Y and X coordinates of the touch event
        var endY = event.touches[0].clientY;
        var endX = event.touches[0].clientX;

        // Calculate the difference in Y and X coordinates
        var diffY = startY - endY;
        var diffX = startX - endX;

        // If pulling up or down
        if (Math.abs(diffY) > Math.abs(diffX)) {
            // Only allow swiping up or down on the homepage
            if (homePositionX === 0) {
                // If pulling up, animate the swipe to the about page
                if (diffY > 0 && homePositionY === 0) {
                    // Animate the swipe
                    homePositionY = -100;
                    aboutPosition = 0;
                    listsPosition = -200;
                    history.pushState({}, '', '/about');
                }
                // If pulling down, animate the swipe to the home page
                else if (diffY < 0 && homePositionY === -100) {
                    // Animate the swipe
                    homePositionY = 0;
                    aboutPosition = 100;
                    listsPosition = -100;
                    history.pushState({}, '', '/');
                }
            }
        }
        // If swiping left or right
        else {
            // If on the about page, do not allow left or right swipes
            if (homePositionY === -100) {
                return;
            }
            // If swiping left from home, animate the swipe to the lists page
            if (diffX < 0 && homePositionX === 0) {
                homePositionX = 100;
                listsPosition = 0;
                aboutPosition = 100;
                articlesPosition = 200;
                history.pushState({}, '', '/lists');
            }
            // If swiping right from home, animate the swipe to the articles page
            else if (diffX > 0 && homePositionX === 0) {
                homePositionX = -100;
                listsPosition = -200;
                aboutPosition = 100;
                articlesPosition = 0;
                history.pushState({}, '', '/articles');
            }
            // If swiping right from lists, animate the swipe to the home page
            if (diffX > 0 && homePositionX === 100) {
                homePositionX = 0;
                listsPosition = -100;
                aboutPosition = 100;
                articlesPosition = 100;
                history.pushState({}, '', '/');
            }
            // Else if swiping left from articles, animate the swipe to the home page
            else if (diffX < 0 && homePositionX === -100) {
                homePositionX = 0;
                listsPosition = -100;
                aboutPosition = 100;
                articlesPosition = 100;
                history.pushState({}, '', '/');
            }
        }

        // Update the transform for each section
        home.style.transform = `translateX(${homePositionX}vw) translateY(${homePositionY}vh)`;
        about.style.transform = `translateY(${aboutPosition}vh)`;
        lists.style.transform = `translateX(${listsPosition}vw)`;
        articles.style.transform = `translateX(${articlesPosition}vw)`;

        // Update startY and startX to the current Y and X positions for the next move event
        startY = endY;
        startX = endX;
    }, false);
}


// Show the buttons when the mouse is moved
var buttons = document.querySelectorAll('#lists-button, #articles-button, #lists-personal-button, #lists-back-button, #articles-back-button');
window.addEventListener('mousemove', function () {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'inline-block';
    }
});

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