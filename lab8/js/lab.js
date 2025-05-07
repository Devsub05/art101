/*
 * index.js - Working with your partner, experiment with anonymous functions and callbacks
 * Created: May 7
 * Lab 8
 * Author: Devika Subramaniam
*/

// Array of numbers that go up by 4 (for chronological order)+ print on final live browser
var numbers = [2, 6, 10, 14, 18];
console.log("Original Array ", numbers)


//Create a named function and add 8 to a number
function addEight(x){
  var results = x + 8;
  return results;
}

//test out the named above function
console.log(addEight(6));  //Output: 14
console.log(addEight(14)); // Output: 22

//Use .map() in the named above function 
var plusEight = numbers.map(addEight);
console.log("Add 8 to each: ", plusEight);

//Use .map() with an anonymous function to add 4 to a number
var plusFour = numbers.map(function(x) {
  var results = x + 4;
  return results;
});
console.log("Add 4 to each from orignal array: ", plusFour)

//Formatting output text
var outputHTML = "";
outputHTML += "<p>The Original array: " + JSON.stringify(numbers) + "</p>";
outputHTML += "<p>Add 8 to each: " + JSON.stringify(plusEight) + "</p>";
outputHTML += "<p>Add 4 to each: " + JSON.stringify(plusFour) + "</p>";

//Use jQuery to select the element by its ID and set the HTML content
$("#output").html(outputHTML);

//Extra console (just in case)
console.log("Original array:", numbers);
console.log("Add 8 to each:", plusEight);
console.log("Add 4 to each:", plusFour);
