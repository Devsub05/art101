/*
 * lab.js - Working with your partner, experiment with JS events.
This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

 * Created: May 19, 2025

 * Requirements: jQuery must be loaded for this script to work
 * Author: Devika Subramaniam
*/

// Sort the characters of a string in alphebetical order
function sortString(inputString) {
  // Convert string to array, arrange it, then join it back into the string
  return inputString.split('').sort().join('');
}

// Click listener for the button
$('#submit').click(function(){
  // Get value from input field
  const userName= $("#user-name").val();

  //Debug
  console.log("User input:", userName);

  // Sort the String
  const userNameSorted = sortString(userName);

  //Debug
   console.log("Sorted name:", userNameSorted);

  //Display it in #output
  $("#output").append(`
    <div class="text" style="display:none;">
      <p>${userNameSorted}</p>
    </div>
  `);
  $(".text:last").fadeIn(500);  
});
 
