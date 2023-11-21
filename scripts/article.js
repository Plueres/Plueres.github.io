document.addEventListener("DOMContentLoaded", function () {
    let collapsed = true;

    var button = document.querySelector(".collapsible");
    console.log(button); // This should log the button element to the console

    button.addEventListener("click", function () {
        console.log("pressed");
        var colmenu = document.querySelectorAll(".how-to-install");

        for (let i = 0; i < colmenu.length; i++) {
            if (collapsed) {
                colmenu[i].style.maxHeight = colmenu[i].scrollHeight + "px";
            } else {
                colmenu[i].style.maxHeight = "0";
            }
        }

        collapsed = !collapsed;
    });
});