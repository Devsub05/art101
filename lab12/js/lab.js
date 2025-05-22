/*
 * lab.js - Working with your partner, create a function that depends on conditionals.


 * Created: May 22, 2025

 * Requirements/Function: This script assigns you to a Marvel character based on the length of your name using conditionals and the modulus operator.
 * Author: Devika Subramaniam
*/

console.log("JS file is connected!");

// Sort the characters of a string in alphebetical order
function sortingHat(str) {

  //Count number of letters in the string
  let length = str.length;
  //Get remainder (0-7)
  let mod= length % 8;
  // Return Object
  let result = { text: "", class: "" };


// Determine character based on mod value
if (mod === 0){
  result.text = "🧠 Iron Man: Genius, billionaire, playboy, philanthropist.";
  result.class = "ironman";
} else if (mod === 1) {
  result.text = "🪄 Loki: God of Mischief, cunning, and unpredictable.";
  result.class = "loki";
} else if (mod === 2) {
  result.text = "🔮 Scarlet Witch: Mysterious, powerful, and emotional.";
  result.class = "scarlet";
} else if (mod === 3) {
  result.text = "🕵️‍♀️ Black Widow: Intelligent, resourceful, and lethal.";
  result.class = "blackwidow";
} else if (mod === 4) {
  result.text ="⚡ Thor: God of Thunder with a strong sense of honor.";
  result.class = "thor";
} else if (mod === 5) {
  result.text = "	🕷️ Spider-Man: Witty, youthful, and driven by responsibility.";
  result.class = "spiderman";
} else if (mod === 6) {
  result.text = "🛡️ Captain America: Brave, loyal, and a true leader.";
  result.class = "cap";
} else if (mod === 7){
  result.text = "	🚀 Captain Marvel: Strong, fearless, and fiercely independent.";
  result.class = "marvel";
}


return result;
}
// attach click handler to submit button
// wrapping text
$(document).ready(function() {
$("#button").click(function(){
    // get value from input field
  let name = $("#input").val();
   // run sortingHat function
  let house = sortingHat(name);
  // display output

  console.log("Name entered:", name); // Debug
  console.log("Assigned class:", house.class); // Debug
  
  $("#output")
  .removeClass()
  .addClass(house.class)
  .html("<p>" + house.text + "</p>")
});
});


