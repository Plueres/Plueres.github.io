document.querySelectorAll("posttags").forEach((tag) => {
    const tagName = tag.textContent.trim();
    var textColor;
    var brColor;

    switch (tagName.toLowerCase()) {
        case "minecraft":
            textColor = "rgb(0, 180, 70)";
            brColor = "rgba(0, 129, 50, 0.8)";
            break;
        case "no time":
            textColor = "rgb(143, 69, 6)";
            brColor = "linear-gradient(#e9720d, #eae609, #e9720d)";
            break;
        case "another-tag":
            textColor = "blue";
            brColor = "black";
            break;
        case "yet-another-tag":
            textColor = "red";
            brColor = "black";
            break;
        default:
            textColor = "white";
            brColor = "rgb(120, 120, 120, 0.8)";
            break;
    }
    tag.style.color = textColor;
    tag.style.background = brColor;
});

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
    console.log('DOMContentLoaded event fired'); // Debug statement 1

    let previews = document.querySelectorAll('.preview');
    console.log('Number of previews:', previews.length); // Debug statement 2

    let modal = document.getElementById("ImgModal");
    let modalImg = document.getElementById("img");
    let span = document.getElementsByClassName("close")[0];
    let img = document.querySelector('.modal-content');

    function openModal(image) {
        console.log('openModal called with image:', image); // Debug statement 4
        modal.style.display = "flex";
        console.log('Modal display style:', modal.style.display); // Debug statement 5
        modalImg.src = image;
    }

    for (let i = 0; i < previews.length; i++) {
        previews[i].addEventListener('click', function () {
            console.log('Preview clicked'); // Debug statement 3
            openModal(previews[i].src);
        });
    }

    img.onclick = function () {
        modal.style.display = "none";
    }
});