---
layout: article
title: "No Time Quick Menu Script v1.5.1"
date: 2023-11-20 21:33:17 +0100
updated: 2023-11-26 20:49:05 +0100
tags: [No Time, Script]
comments: true
codeblock: true
github: "https://github.com/Plueres/plueres/blob/main/No_Time/quick_menu.ms"
header_image: "/assets/images/quick-menu-plc.jpg"
images: 
  - "/assets/images/quick-menu-plc.jpg" 
  - "/assets/images/quick-menu-plc-run.jpg"
  - "/assets/images/quick-menu-plc-run-new.jpg"
---

```vb
{{ site.data.quick_menu }}
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
- Shortcut to travel back to the save house
- PLC settings (not actual settings)
  - timegraph and car diagnostics
- Quickly create a HVD chip
- Cococrab mode (cheat menu)
  - Spawn items
  - Give yourself money (you can choose your own amount)
  - Teleport (coordinates or landmarks)
  - Change time of day
  - Player settings
    - Heal, clear radiation, get and set location
  - Car settings
    - Cool down, get and set location
  - Change time speed
  - Quest settings

---

### v1.5.1
- fixed the function of creating a HVD chip
- added a setting to enable monthnames or not

### v1.5

- Refractored a lot of code
- Added a tiny bit of UI
- Added arrays for most of the functions, so overall less code
- Removed unnecessary code
- Fixed some not working functions

### v1.4

- Added more back menu's
- Added an automatic option to the HVD menu that only needs a year to work and automatically renames the chip to the
entered year
- Added the functionality to not need to enter the full 2 or 4 digits of the number when entering a date
- Added the functionality to enter a Space planet code with less than 5 digits and it will automatically fill in the
blank spots
- Added more information when selecting random date and time. You'll now see the same information like the day, month,
and year
- Changed the HVD menu from not needing to be on the hvd script but now you can just use the script on the plc itself
- Changed the first menu after selecting the enter date and time menu to now go straight to day and you'll now have to
enter a "-" as the first digit when entering the year
- removed the stop function

### v1.3.1

- fixed the "Travel History File Created!" line not being on a new line

### v1.3

- Added the creation of a "Travel History" file if it doesn't exist yet
- Every time you travel with a space code, date, random space code or random date the address will be saved to the
Travel History file with it's context attached
(ex. 'Random Planet Code: JIRUO' or 'Date: 30 Jan 2004 13:34)

### v1.2

- Added: more back menu's
- Changed: added dialogue to show that you can use any key instead of just 0
- Fixed: returning from space travel wasn't working
- Fixed: Month name not showing after entering the month if you chose time travel or overridedate in hvd settings
- Fixed: When editing the hvd chip label successfully, the confirmation dialog wasn't on the next line

Planned features: Add a favorites file/A file/function to see important dates

### v1.1

- Added the quest menu options in the second page of the cococrab menu
- Added the time speed menu in the second page of the cococrab menu

### v1.05 beta

- Replaced timegraph with PLC settings
- Added timegraph, checktime and car diagnostic to PLC setttings menu

### v1.0

This script includes the following:

- Time travel by dimension gate. An option to go to a random date in time or enter your own date.
- Space travel by dimension gate. An option to go to a random planet or enter your own code
- Return from space or time travel by dimension gate. Just click this option and a return gate will open
- Show the timegraph.
- Rename a HVD disk or Create a HVD disk file that you can use to create custom time chips! Make sure to use this script
on a new file (NOT titled startup.eee but something else)
- Cococrab Mode. Every command in a list for whenever you want/need to cheat a little! This includes:
- Quick Save (Currently not functional)
- Spawn Items
- Get Money. Just enter the amount and become rich!
- Teleport. Teleport to some landmarks or well known locations
- Change the time of day. Use the presets or enter a time of day of your own
- Player settings. Heal yourself and remove radiation. Set and get location is currently not working as intended
- Car settings. Cool down the car to 0. Set and get location is currently not working as intended
- Quest settings will come in a later update.