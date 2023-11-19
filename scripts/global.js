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