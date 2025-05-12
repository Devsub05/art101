/*
 * lab9.js - Working with your partner, experiment with jQuery
 * Created: May 12
 * Lab 9
 * Author: Devika Subramaniam
*/
$(document).ready(function() {

//Add to script output
$("#output").html("<p>Just wanted to keep this section interesting!</p>");
// Add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// Add button to problems section
$("#problems").append("<button id='button-problems'>Make Special</button>");

// Add button to results section
$("#results").append("<button id='button-results'>Make Special</button>");

//add a click listener to the challenge button
$("#button-challenge").click(function() {
   // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
});

//add a click listener to the problems button
$("#button-problems").click(function() {
  // now add (or subtract) the "special" class to the section
 $("#problems").toggleClass("special");
});

//add a click listener to the results button
$("#button-results").click(function() {
  // now add (or subtract) the "special" class to the section
 $("#results").toggleClass("special");
});
});

