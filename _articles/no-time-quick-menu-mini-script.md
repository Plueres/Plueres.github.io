---
layout: article
title: "No Time Quick Menu Mini Script v1.0"
date: 2023-11-27 09:31:15 +0100
updated: 2024-02-15 13:40:21 +0100
tags: [No Time, Script]
comments: false
codeblock: true
hidden: false
github: "https://github.com/Plueres/plueres/blob/main/No_Time/quick_menu_mini.ms"
header_image: "/assets/images/no_time/quick-menu-mini-plc-run.jpg"
images:
- "/assets/images/no_time/quick-menu-mini-plc-run.jpg"
- "/assets/images/no_time/quick-menu-mini-plc-overview.jpg"
---
```vb
{{ site.data.quick_menu_mini }}
```

<button class="collapsible">
  How to install?
  <span class="material-symbols-rounded">add</span>
</button>
<div class="how-to-install">
  <ol>
    <li>Click on the <span class="material-symbols-rounded">content_copy</span> button above to copy the code.</li>
    <li>Open No Time, load or create a save file</li>
    <li>Hit TAB to open the PLC</li>
    <li>To go "" tab and press new file</li>
    <li>In the first field, enter a name that you want to call the file (ex. `quickmenu`) <br></li>
    <ul>
      <li>Now the next part is important: at the end of the filename, enter `.eee` to tell the PLC that it is a script
        file</li>
    </ul>
    <li>In the second "big" input field, enter the code that you just copied from this page.</li>
    <li>Press SAVE, and click OK on the popup to confirm saving</li>
    <li>Now everytime you hit EXECUTE, the script will run</li>
  </ol>
</div>

## What does this include?

- Travel with the dimension gate to a date or planet
- Shortcuts to travel back to the save house from travel with the dimension gate
- Quickly create a HVD chip
- Timegraph

---

### v1.0
- Created minified version of the Quick Menu script
- Size is now just 10kb instead of the previous 27kb!
- Removed the menu items: cococrab mode and other functions
- Other functions still work the same
- Removed some wait times for quicker access
- Optimized functions
