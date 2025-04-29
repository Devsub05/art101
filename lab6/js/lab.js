/*
 * index.js - purpose and description here
 * Created: April 23
 * License: Public Domain
 * Author: Devika Subramaniam
*/

//Define Variables
myTransport = ["car", "bus", "walking", "carpooling", "zipcar"];

//Create and object for myMainRide
var myMainRide = {
  make: "Honda",
  model: "Acura",
  color: "dark red",
  year: 2018,
  age: function() {
    return 2025 - this.year;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
// The trick used below allows me to writen object into a document
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre");
  