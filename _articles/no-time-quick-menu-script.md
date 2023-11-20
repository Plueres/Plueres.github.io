---
layout: article
title: "No Time  Quick Menu Script"
date: 2023-11-20 21:33:17 +0100
tags: [No Time, Script]
comments: true
header_image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsteamcdn-a.akamaihd.net%2Fsteam%2Fapps%2F1043340%2Fheader.jpg%3Ft%3D1557467037&f=1&nofb=1&ipt=d45feccdb1e0e7a62cc8cc25b2fdba715bd9d9b7427a61462633508dfcfca83a&ipo=images"
---

<div id="popup">
    Copied to clipboard!
</div>

<button id="copy" onclick="copyToClipboard()" style="position: absolute; right: 10px; top: 10px;">Copy</button>
<button id="showall" onclick="toggleHeight()" style="position: absolute; right: 10px; top: 40px;">Show All</button>
{% for item in site.data.quick_menu %}

```vb
    {{ item }}
```

{% endfor %}

<script>

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
    setTimeout(function() {
        popup.style.display = "none";
    }, 3000);
}

var isExpanded = false;

function toggleHeight() {
    var pre = document.querySelector("pre");
    var button = document.querySelector("#showall");

    if (isExpanded) {
        pre.style.maxHeight = "20em";
        pre.style.overflow = "hidden";
        button.textContent = "Show All";
    } else {
        pre.style.maxHeight = "40rem";
        pre.style.overflow = "scroll";
        button.textContent = "Show Less";
    }

    isExpanded = !isExpanded;
}
</script>
