---
layout: article
title: All known PLC commands in No Time
header_image: https://steamuserimages-a.akamaihd.net/ugc/1842536456311331239/0CAE4C679FAB8550AC9B9FD44BFC8ADFF7F8CA73/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false
date: 2023-11-20 18:41:33 +0100
updated: 2023-12-19 08:41:27 +0100
hidden: false
tags:
  - No Time
  - Script
  - Commands
---
> For more information and documentation see the bottom of this page

# No Time exclusive commands

- `breakline` not sure if this is exclusive or name differently, but this just breaks a line so you continue on the next line
- `connectgate` Connect to a nearby dimension gate
- `dialgate` dial a location or time after connecting to a dimension gate
- `gatereadings` get info of the destination from the space core
- `gettemperature` get temperature as read from the plc temperature meter
- `reboot` Reboot the system
- `timegraph` shows the time graph and tells where you can travel to
-﻿ `openperipheral` Open the gate/door connected to a terminal
-﻿ `closeperipheral` Close the gate/door connected to a terminal
- `setlabel` Set the label of a HVD chip
- `create "name of file"` creates a new file in the current directory
- `delete "name of file"` deletes a file with the gives name in the current directory
- `countlines "filename"` Count lines in a file
- `readfile("name of file", linenumber)` Read a file. you can print it like so: `print readfile("textfile", countlines("textfile")) // prints the last line of the file`
    you will need to use a forloop to get all the lines in the file
- `writelines "name of file", linenumber, "line to write"` Write lines to a file

```vb
writelines "test.eee", 1, "testing"
```

- `readline` Creates an input field and reads that line from the console. Useful for getting user input. You can also store it in a variable `name = readline`

- `readkey` Reads the key that is pressed by the user in the console. You can also store it in a variable `name = readkey`

    for both `readkey` and `readline`, you might need to add `wait 0` before this function to not skip the input
- `find "name of file"` tries to find a file in the current directory with the gives name. if it cannot find it, it will return -1 (useful for checking in if statements).
- `copy "filename"` copies the file?
- `paste` pastes the file? The pasted file will act the same way as the original file. So i can rename the original and the copy will update too
- `rename "filename", "new filename"` i think this renames a file in the current directory
- `edit "filename"` Opens the file in the editor
- `cantravel(yearnumber)` a miniature version of timegraph, usefull for conditional commands. To know if you can travel to a certain year
- `slice("variable", characternumber)` removes a character from a variable. `slice("string", 1) // Will be tring` will remove the first character from the string
- `getyear` returns the current year
- `getmonth` returns the current month
- `getday` returns the current day
- `gethour` returns the current hour
- `getminute` returns the current minute
- `cococrab` enables cococrab mode
- `cocohelp` lists all the functions that cococrab supports
- `cocotransport X, Y, Z` teleports the player to the given coordinates. without parameters returns the current coordinates
- `cococarport X, Y, Z` teleports the car to the given coordinates. without parameters returns the current coordinates
- `cocosave` save game (not working properly)
- `cocoheal` heal the player
- `cocorads` remove radiation
- `cocogive [itemnumber]` spawns the item with given item number
- `cocoitems` prints all items with their numbers
- `cocoheataway` remove the car heat and cool it down
- `cocorepair` repair the car
- `cocodollar [amount]` give player given amount of dollars
- `cocoshilling [amount]` give player given amount of shillings
- `cocotime 1-360` set the daytime to given number
- `cocoday [amount]` set day to given number
- `cocomonth [amount]` set month to given number
- `cocoyear [amount]` set year to given number
- `cocospeed [double/float]` set the time speed to a given number. default is 4.0. NOTE: this does not change game speed, just how fast days will go
- `cocoquest [questnumber], "state"` sets the state of given quest number. state can be one of the following: accepted, finished, invisble, inactive
- `cocoqprogress [questnumber] [progress]` sets the progress of given quest number
- `cocogetq` get current quest progress
- `cocogetqname` get current quest name
- `openperipheral` open the gate doors from panels

# Miniscript commands

## Numbers

All numbers are stored in full-precision
format. Numbers also represent true (1)
and false (0). Operators:

- `+`, `-`, `*`, `/` standard math
- `%` modulus (remainder)
- `^` power
- `and`, `or`, `not` logical operators
- `==`, `!=`, `>`, `>=`, `<`, `<=` comparisons

## Strings

Text is stored in strings of Unicode
characters. Write strings by
surrounding them with quotes. If you
need to include a quotation mark in the
string, type it twice.

```vb
print "OK, ""Bob""."
```

Operators:

- `+` string concatenation
- `-` string subtraction (chop)
- `*`, `/` replication, division
- `==` equals to
- `!=` is not
- `>` is bigger than
- `>=` is bigger and equal to
- `<` is smaller than
- `<=` is smaller and equal to
- `[i]` get character i

```vb
text = "Hello"
print text[0] //prints H
```

- `[i:j]` get slice from i up to j

```vb
text = "Hello"
print text[0:2] //prints He
```

## Conditional commands

```vb
if condition then
    do something
else if othercondition then // else if
    do something else
else                        // else
    do something else
end if
```

Conditionals are checks to see if a certain condition is true or false. If the condition is true, the code inside the if statement will run. If the condition is false, the code inside the else statement will run.
example:

```vb
if 1 == 1 then
    print("1 is equal to 1")
else if 1 == 2 then
    print("1 is equal to 2")
else
    print("1 is not equal to 1 or 2")
end if
```

you can use and, or and not in if statements loops:

```vb
if i == 1 or i == 2 then
    print i     //prints 1 and 2
end if
```

***

## Function commands

```vb
functionname = function
    print "do something"
end function
functionname //will print: do something
```

Create a function with function(), including parameters with optional default values. Assign the result to a variable. Invoke by using that variable. Use @ to reference a function without invoking.

```vb
triple = function(n=1)
 return n*3
end function
print triple // 3
print triple(5) // 15
f = @triple
print f(5) // also 15
```

### Return

```vb
return
```

Return something. This is useful for functions, as it will return a value. Or nothing will be returned if nothing is specified.

```vb
test = function
    variable = 2
    return variable // returns 2
end function
```

***

## Loops

### for loop

```vb
for numbervariable in range(startnumber, end number, (optional) steps to take)
    print number
end for
```

A for loop loops through numbers in a range. The first number is the start number, the second number is the end number, and the third number is the steps to take. The steps to take is optional, and if not specified, it will default to 1.
example:

```vb
for i in range(1, 10)
    print i         //prints numbers 1 through 10
end for
```

### while loop

```vb
while condition
    print "do something"
end while
```

A while loop loops through code while a condition is true. The condition is checked before the code is run, and if the condition is false, the code will not run.
example:

```vb
canwrite = true
while canwrite
    print "writing"
    canwrite = false // set it back to false so it doesn't loop forever
end while
```

### Break
```vb
break
```
Break out of a loop.
### Continue
```vb
continue
```
Continue a loop from another point.

***

## Math commands
### Addition
```vb
print 1 + 1 //prints 2
```
### Subtraction
```vb
print 1 - 1 //prints 0
```
### Multiplication
```vb
print 2 * 2 //prints 4
```
### Division
```vb
print 4 / 2 //prints 2
```

***

## Variable commands
### Set variable
```vb
variable = value
```
### Print variable
```vb
print variable
```
### Add to variable
```vb
variable += value
```
### Subtract from variable
```vb
variable -= value
```
### Multiply variable
```vb
variable *= value
```
### Divide variable
```vb
variable /= value
```

***

## Other commands
### Print
```vb
print "text"
```
Prints text to the console.
### Wait
```vb
wait 1
```
Waits for a certain amount of seconds.
### Random
```vb
print random(1, 10)
```
Prints a random number between 1 and 10.
### Yield
```vb
yield
```
Yields the script. This is useful for scripts that take a long time to run, as it will allow other scripts to run. Not useful for scripts in No Time.
### Exit
```vb
exit
```
### Comment
```vb
//comment
```
A comment is a line of code that is not run. It is useful for explaining what a line of code does.
### Sign
```vb
sign(-98) //prints -1
```
Returns the sign of a number. If the number is positive, it will return 1. If the number is negative, it will return -1. If the number is 0, it will return 0.
### Clear
```vb
clear
```
Clears the console.

***

### List
```vb
list = [1, 2, 3, 4, 5]
```
A list is a collection of values. The values can be accessed by their index. The first value is index 0, the second value is index 1, and so on.
you can access it like this:
```vb
list[3] //prints 4 because 1 = index 0, 2 = index 1, 3 = index 2, 4 = index 3
```
### Map
```vb
map = {"key": "value", "key2": "value2"}
```
A map is a collection of key value pairs. The values can be accessed by their key.
you can access it like this:
```vb
map["key"] //prints value because key is the key for value
```

Both a list and a map are accessable with forloops:
```vb
list = [1, 2, 3, 4, 5]
for i in range(1, 5)
    print list[i] //prints values 1 through 5
end for
```
```vb
map = {"key": "value", "key2": "value2"}
for key in map
    print map[key] //prints value and value2
end for
```

you can also put functions in a list or a map by doing:
```vb
list = [@function, @function2]
for i in range(1, 2)
    list[i]() //runs the function
end for
```
working example:
```
day = function
	print getday()
end function
month = function
	print getmonth()
end function
year = function
	print getyear()
end function

functions = [@day, @month, @year]

for i in functions.indexes
	functions[i]() // prints current day, month, year
	breakline
end for
```
***
### Go to another directory
```vb
cd "Item_HoloDisk(Clone)" // the directory of the HVD chips when they are inside the PLC
```
```vb
cd "FPSController" // the directory of the PLC
```

***

### For more info check out:
- [the website](https://miniscript.org/)
- [the documentation](https://miniscript.org/files/MiniMicro-CheatSheet.pdf)
- [the editor](https://miniscript.org/tryit/) which also has some tutorials and information
