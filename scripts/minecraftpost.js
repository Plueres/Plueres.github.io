document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelector('#carousel .slides');
    let previews = document.querySelectorAll('#carousel .preview');
    let modal = document.getElementById("ImgModal");
    let modalImg = document.getElementById("img");
    let span = document.getElementsByClassName("close")[0];
    let img = document.querySelector('.modal-content');

    function openModal(image) {
        modal.style.display = "flex";
        modalImg.src = image;
    }

    for (let i = 0; i < previews.length; i++) {
        previews[i].addEventListener('click', function () {
            slides.style.transform = 'translateX(' + (-i * 100) + '%)';
            openModal(previews[i].src);  // Open the modal with the corresponding image
        });
    }

    // When the user clicks on <span> (x), close the modal
    img.onclick = function () {
        modal.style.display = "none";
    }
});