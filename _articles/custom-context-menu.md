---
layout: article
title: Custom Context Menu configuration
header_image: https://windows-cdn.softpedia.com/screenshots/Custom-Context-Menu_1.png
date: 2024-02-08T16:35:16.782Z
updated: 2024-02-15 13:40:21 +0100
hidden: false
---

## My personal configuration for the [Custom Context Menu](https://github.com/ikas-mc/ContextMenuForWindows11) application

| Restart Explorer |     |
| --- | --- |
| Title | Restart Explorer |
| Order | 0   |
| Exe | PowerShell |
| Param | “taskkill /f /im explorer.exe; start explorer.exe” |
| Icon | explorer.exe |
| Match Folder | ON  |
| Match File | ON  |
| Match Multi-File | OFF |

| Install Apk |     |
| --- | --- |
| Title | Install APK |
| Order | 0   |
| Exe | PowerShell |
| Param | -noexit adb install -r -t \“{path}\” |
| Icon | “C:\Users\Rick\Designs\Ícons\apk.png” |
| Match Folder | OFF |
| Match File | ON - .apk |
| Match Multi-File | OFF |

| Compress to zip |     |
| --- | --- |
| Title | Compress to zip |
| Order | 0   |
| Exe | PowerShell |
| Param | "Compress-Archive -Path {path} -DestinationPath: {name}.zip" |
| Icon | "C:\Users\Rick\Designs\Ícons\Windows 11 Icons as of 7-7-2021\imageres_174.ico" |
| Match Folder | OFF |
| Match File | ON - * |
| Match Multi-File | OFF |

| Extract File to Folder |     |
| --- | --- |
| Title | Extract File to Folder |
| Order | 0   |
| Exe | PowerShell |
| Param | "Expand-Archive -Path {path} -DestinationPath: (Get-Item {name}).BaseName" |
| Icon | “C:\Users\Rick\Designs\Ícons\apk.png” |
| Match Folder | OFF |
| Match File | ON - .zip .7zip |
| Match Multi-File | OFF |

| Restart Explorer With Pause |     |
| --- | --- |
| Title | Restart Explorer With Pause |
| Order | 1   |
| Exe | PowerShell |
| Param | "taskkill /f /im explorer.exe; pause; start explorer.exe" |
| Icon | explorer.exe |
| Match Folder | ON  |
| Match File | ON - * |
| Match Multi-File | OFF |

| Kill Not Responding Tasks |     |
| --- | --- |
| Title | Kill Not Responding Tasks |
| Order | 2   |
| Exe | PowerShell |
| Param | "taskkill.exe /f /fi "status eq not responding"" |
| Icon | "C:\Users\Rick\Designs\Ícons\Windows 11 Icons as of 7-7-2021\imageres_105.ico" |
| Match Folder | ON  |
| Match File | ON - * |
| Match Multi-File | OFF |

| Open with Code |     |
| --- | --- |
| Title | Open with Code |
| Order | 3   |
| Exe | "C:\Users\Rick\AppData\Local\Programs\Microsoft VS Code\Code.exe" |
| Param | "{path}" |
| Icon | "C:\Users\Rick\AppData\Local\Programs\Microsoft VS Code\Code.exe",0 |
| Match Folder | ON  |
| Match File | ON - * |
| Match Multi-File | OFF |

| Open with Cursor |     |
| --- | --- |
| Title | Open with Cursor |
| Order | 4   |
| Exe | "C:\Users\Rick\AppData\Local\Programs\cursor\Cursor.exe" |
| Param | "{path}" |
| Icon | "C:\Users\Rick\AppData\Local\Programs\cursor\Cursor.exe",0|
| Match Folder | ON  |
| Match File | ON - * |
| Match Multi-File | OFF |

| Open Recycle Bin |     |
| --- | --- |
| Title | Open Recycle Bin |
| Order | 5   |
| Exe | shell:RecycleBinFolder |
| Param | "{path}" |
| Icon | "C:\Users\Rick\Designs\Ícons\Windows 11 Icons as of 7-7-2021\imageres_54.ico" |
| Match Folder | ON  |
| Match File | ON  |
| Match Multi-File | OFF |
