document.querySelectorAll("posttags").forEach((tag) => {
    const tagName = tag.textContent.trim();
    var textColor;
    var brColor;

    switch (tagName.toLowerCase()) {
        case "minecraft":
            textColor = "rgb(0, 180, 70)";
            brColor = "rgba(0, 129, 50, 0.8)";
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
    tag.style.backgroundColor = brColor;
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