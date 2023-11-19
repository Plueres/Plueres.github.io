window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
        window.location.reload();
    }
});
window.addEventListener('popstate', function (event) {
    fetch(document.location)
        .then((response) => response.text())
        .then((html) => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, "text/html");
            var newContent = doc.querySelector("main");

            if (newContent) {
                var mainElement = document.querySelector("main");
                mainElement.innerHTML = newContent.innerHTML;

                // Execute scripts
                var scripts = mainElement.querySelectorAll("script");
                for (var i = 0; i < scripts.length; i++) {
                    var oldScript = scripts[i];
                    var newScript = document.createElement("script");
                    newScript.text = oldScript.text;
                    if (oldScript.src) {
                        newScript.src = oldScript.src;
                    }
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                    mainElement.appendChild(newScript);
                }
            }
        });
});
// Preload pages
var pages = {};
var links = document.querySelectorAll("#headernav a");
links.forEach((a, index) => {
    setTimeout(() => {
        var path = new URL(a.href).pathname;
        fetch(a.href)
            .then((response) => response.text())
            .then((html) => {
                var parser = new DOMParser();
                var doc = parser.parseFromString(html, "text/html");
                var newContent = doc.querySelector("main");
                pages[path] = newContent;
            });
    }, index * 2000); // Delay each preload by 2 seconds
});

// Create an intersection observer
var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            var img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
        }
    });
}, {});

// Handle click events
document.querySelectorAll("#headernav a").forEach((a) => {
    a.addEventListener("click", function (e) {
        e.preventDefault();
        setActiveLink(a);
        moveBackgroundTo(a.parentNode);
        var path = new URL(a.href).pathname;

        // Check if the new page has been preloaded
        if (pages[path]) {
            var mainElement = document.querySelector("main");

            // Replace the content
            mainElement.innerHTML = pages[path].innerHTML;

            history.pushState(null, "", a.href);

            // Execute scripts
            var scripts = mainElement.querySelectorAll("script");
            for (var i = 0; i < scripts.length; i++) {
                var oldScript = scripts[i];
                var newScript = document.createElement("script");
                newScript.text = oldScript.text;
                if (oldScript.src) {
                    newScript.src = oldScript.src + '?_=' + new Date().getTime();
                }
                oldScript.parentNode.replaceChild(newScript, oldScript);
                mainElement.appendChild(newScript);
            }

            // Observe images
            var images = mainElement.querySelectorAll("img[data-src]");
            images.forEach((img) => {
                observer.observe(img);
            });
        } else {
            // If the new page hasn't been preloaded, navigate to the page normally
            window.location.href = a.href;
        }
    });
});

function setActiveLink(link) {
    var activeLink = document.querySelector("#headernav a.active");
    if (activeLink) {
        activeLink.classList.remove("active");
    }
    link.classList.add("active");
}

// move the background of the header
function moveBackgroundTo(element) {
    var background = document.querySelector("#active-background");
    background.style.width = element.offsetWidth + "px";
    background.style.left = element.offsetLeft + "px";
}

window.addEventListener("load", function () {
    var linkUrl = window.location.href;
    var links = Array.from(document.querySelectorAll("#headernav a"));
    links.sort((a, b) => b.href.length - a.href.length);
    var matchingLink = links.find((a) => {
        return linkUrl.startsWith(a.href);
    });
    if (matchingLink) {
        setActiveLink(matchingLink);
        moveBackgroundTo(matchingLink.parentNode);
    }
});