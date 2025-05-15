/*
 * lab9.js - Working with your partner, experiment with jQuery
 * Created: May 12
 * Requirements: jQuery must be loaded for this script to work.
 * Author: Devika Subramaniam
*/

// this function generate a random piece of placeholder text
function generateRandomText(){
  const text = "Hi, my name is Devika and I'm experimenting with Javascript buttons. I want to see how this will impact my final project. I'll change this if I need";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random()*(max - min + 1)) + min;

  // get a random start index to portion the above text
  const randStart = Math.floor(Math.random()*(text.length - randLen + 1));

  // return the randomly generated portion
  return text.slice(randStart, randStart + randLen);
}

// wait for the DOM to fully load before attaching an event
$(document).ready(function (){
  
  // click listener for the "say something" button
  $("#make-convo").click(function(){
    // Get another fake dialogue
    const newText = generateRandomText();

    // append a new div with a generated text inside the #output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  });
});