//
// CODEBLOCKS
//
function copyToClipboard() {
    var copyText = document.querySelector("pre code");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();

    // Show the popup
    var popup = document.getElementById("popup");
    popup.style.display = "block";

    // Hide the popup after 1 second
    setTimeout(function () {
        popup.style.display = "none";
    }, 3000);
}

var isExpanded = false;

function toggleHeight() {
    var pre = document.querySelector("pre");
    var button = document.querySelector("#showall span.material-symbols-rounded");

    if (isExpanded) {
        pre.style.maxHeight = "20em";
        pre.style.overflow = "hidden";
        button.textContent = "visibility";
    } else {
        pre.style.maxHeight = "40rem";
        pre.style.overflow = "scroll";
        button.textContent = "visibility_off";
    }

    isExpanded = !isExpanded;
}
document.addEventListener('DOMContentLoaded', (event) => {
    // Move the #codebtncontainer inside the .highlighter-rouge
    document.querySelector('.highlight').appendChild(document.getElementById('codebtncontainer'));
});

// IMAGE MODAL
document.addEventListener('DOMContentLoaded', function () {

    let previews = document.querySelectorAll('.preview');

    let modal = document.getElementById("ImgModal");
    let modalImg = document.getElementById("img");

    function openModal(image) {
        modal.style.display = "flex";
        modalImg.src = image;
    }
    if (previews) {
        for (let i = 0; i < previews.length; i++) {
            previews[i].addEventListener('click', function () {
                openModal(previews[i].src);
            });
        }
    }

    modal.onclick = function () {
        modal.style.display = "none";
    }
});
