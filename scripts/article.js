document.addEventListener("DOMContentLoaded", function () {
    let collapsed = true;

    var button = document.querySelector(".collapsible");

    button.addEventListener("click", function () {
        var colmenu = document.querySelectorAll(".how-to-install");
        var collapsibleicon = document.querySelector(".collapsible span");

        for (let i = 0; i < colmenu.length; i++) {
            if (collapsed) {
                colmenu[i].style.maxHeight = colmenu[i].scrollHeight + "px";
                collapsibleicon.textContent = "remove";
            } else {
                colmenu[i].style.maxHeight = "0";
                collapsibleicon.textContent = "add";
            }
        }

        collapsed = !collapsed;
    });
});