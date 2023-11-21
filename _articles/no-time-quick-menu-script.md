---
layout: article
title: "No Time Quick Menu Script v1.4"
date: 2023-11-20 21:33:17 +0100
updated: 2023-11-21 21:00:41 +0100
tags: [No Time, Script]
comments: true
header_image: "https://steamuserimages-a.akamaihd.net/ugc/1842536456311331239/0CAE4C679FAB8550AC9B9FD44BFC8ADFF7F8CA73/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
images: "https://steamuserimages-a.akamaihd.net/ugc/1842536456311331239/0CAE4C679FAB8550AC9B9FD44BFC8ADFF7F8CA73/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
---

```vb
{{ site.data.quick_menu }}
```

<h2>How to install?</h2>

1. Click on the <span class="material-symbols-rounded">content_copy</span> button above to copy the code.
2. Open No Time and hit TAB to open the PLC
3. to go "" tab and press new file
4. in the first field, enter a name that you want to call the file (ex. `quickmenu`)
   - now the next part is important, at the end of the filename, enter `.eee` to tell the PLC that it is a script file
5. in the second big input field, enter the code that you just copied from this page.
6. press SAVE, and OK
7. now everytime you hit EXECUTE. the file will run and you can use the script

### v1.4

- Added more back menu's
- Added an automatic option to the HVD menu that only needs a year to work and automatically renames the chip to the entered year
- Added the functionality to not need to enter the full 2 or 4 digits of the number when entering a date
- Added the functionality to enter a Space planet code with less than 5 digits and it will automatically fill in the blank spots
- Added more information when selecting random date and time. You'll now see the same information like the day, month, and year
- Changed the HVD menu from not needing to be on the hvd script but now you can just use the script on the plc itself
- Changed the first menu after selecting the enter date and time menu to now go straight to day and you'll now have to enter a "-" as the first digit when entering the year
- removed the stop function

### v1.3.1

- fixed the "Travel History File Created!" line not being on a new line

### v1.3

- Added the creation of a "Travel History" file if it doesn't exist yet
- Every time you travel with a space code, date, random space code or random date the address will be saved to the Travel History file with it's context attached
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
- Rename a HVD disk or Create a HVD disk file that you can use to create custom time chips! Make sure to use this script on a new file (NOT titled startup.eee but something else)
- Cococrab Mode. Every command in a list for whenever you want/need to cheat a little! This includes:
  - Quick Save (Currently not functional)
  - Spawn Items
  - Get Money. Just enter the amount and become rich!
  - Teleport. Teleport to some landmarks or well known locations
  - Change the time of day. Use the presets or enter a time of day of your own
  - Player settings. Heal yourself and remove radiation. Set and get location is currently not working as intended
  - Car settings. Cool down the car to 0. Set and get location is currently not working as intended
  - Quest settings will come in a later update.
