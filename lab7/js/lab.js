/*
 * index.js - To experiment with JS
 * Created: May 3
 * Lab 7
 * Author: Devika Subramaniam
*/

// ChangeMyName - asks the user's name and changes/sorts out the letter
function fixMyName() {
  var userName = window.prompt("Hi there? What is your name?");
  console.log("userName =", userName);
  //split string to array
  var nameArray= userName.split('');
  console.log("nameArray =", nameArray);
  //sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  //Note to future self: I could do the above in one line
  //   userName.toLowerCase().split("").sort().join("")
  return nameSorted;
}

// Output
document.getElementById("output").innerHTML = 
  "All right! Here is your name all fixed up: " + fixMyName();
