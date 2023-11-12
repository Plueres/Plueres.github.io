let slides = document.querySelectorAll('#carousel .slide');
let dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");
let modalContent = document.querySelector('.modal-content');

function openModal(image) {
    modal.style.display = "flex";
    modalImg.src = image;
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

modal.addEventListener('click', function (event) {
    if (event.target !== modalContent && !modalContent.contains(event.target)) {
        modal.style.display = "none";
    }
});

function setCurrentSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // hide all slides
        dots[i].className = dots[i].className.replace(" active", "");  // remove active class from all dots
    }
    slides[n].style.display = "block";  // show current slide
    dots[n].className += " active";  // add active class to current dot
}

// Call showSlide to set the initial state
showSlide(currentSlide);

// Automatically transition the carousel every 3 seconds
setInterval(setCurrentSlide, 3000);