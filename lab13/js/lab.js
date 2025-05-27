/*
 * lab 13: Loops

* This program is intended to loop through number 1-200 and prints:

- "Fizz!" if divisible by 3
- "Buzz!" if divisible by 5
- "Boom!" if divisible by 7
* Combines them for numbers divisible by the multiple


 * Created: May 22, 2025
 * Author: Devika Subramaniam
*/

// Wait for the document to completely load
$(document).ready(function() {
  // Call the function
  fizzBuzzBoom();
});

function fizzBuzzBoom() {
  // Loop from 1-200
  for (let i = 1; i <= 200; i++) {
    let str = ""; //--> Reset string for each of the numbers

    // check for multiples and add the text according to that
    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";
    if (i % 7 === 0) str += "Boom";

    // if there is no match just return the number
    if (str === "") {
      str = i;
    } else {
      str = i + " - " + str + "!";
    }

    //debug
    console.log("i:", i, "→", str);
    
    // Append the result above to the output div
    $("#output").append("<p>" + str + "</p>");
  }
}



