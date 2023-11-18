var text = document.getElementById("animated-text");
var word = text.textContent;
var counter = 0;
var direction = 1;
var isTyping = true;
var isDeleting = false;
var cursorVisible = true;
var blinkInterval;
var typeInterval;

// Add the cursor span to the HTML once
var cursor = document.createElement("span");
cursor.id = "cursor";
cursor.className = "cursor-visible";
cursor.textContent = "|";
text.appendChild(cursor);

function typeAndCursor() {
  if (counter === word.length && isTyping) {
    isTyping = false;
    setTimeout(() => {
      isDeleting = true;
    }, 2000);
  }

  if (counter === 0 && isDeleting) {
    isDeleting = false;
    setTimeout(() => {
      isTyping = true;
    }, 2000);
    direction = 1;
  }

  if (isTyping) {
    counter += direction;
  } else if (isDeleting) {
    counter -= direction;
  }

  // Use textContent to update the text without affecting the cursor
  text.textContent = word.substring(0, counter);
  text.appendChild(cursor);

  // If text is not being typed or deleted, start blinking
  if (!isTyping && !isDeleting && !blinkInterval) {
    blinkInterval = setInterval(blinkCursor, 500);
  } else if ((isTyping || isDeleting) && blinkInterval) {
    clearInterval(blinkInterval);
    blinkInterval = null;
    cursor.className = "cursor-visible";
  }
}

function blinkCursor() {
  cursorVisible = !cursorVisible;
  cursor.className = cursorVisible ? "cursor-visible" : "cursor-invisible";
}

// Animation initialization function
window.initializeAnimations = function () {
  // Reset or initialize your animation state here
  counter = 0;
  direction = 1;
  isTyping = true;
  isDeleting = false;
  cursorVisible = true;
  if (blinkInterval) {
    clearInterval(blinkInterval);
    blinkInterval = null;
  }
  if (typeInterval) {
    clearInterval(typeInterval);
  }
  typeInterval = setInterval(typeAndCursor, 200);
};

// Initialize animations when the script is loaded
window.initializeAnimations();
