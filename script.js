//your JS code here. If required.
// Get the element with id="level"
const target = document.getElementById("level");

let level = 0;
let current = target;

// Traverse up the DOM tree
while (current) {
  level++;
  current = current.parentElement;
}

// Show the result
alert("The level of the element is: " + level);
