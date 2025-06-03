/*
 * lab 14: AJAX

* This uses jquery to fetch data from the yes/no API
* When the user clicks the activate button it sends a GET request to the app
* The program should receive a JSON response, then adds the output to the page


 * Created: June 2, 2025
 * Author: Devika Subramaniam
*/

// Using the core $.ajax() method
$(document).ready(function () { 
$("#activate").click(function () {
  console.log("Button Clicked!");

  $.ajax({
    // The URL for the request (from the API docs)
    url: "https://yesno.wtf/api",

    // The data to send (none needed for this API)
    data: {
      // this API doesn't need any extra parameters here
      // if I wanted to force a result we could add: force: "yes"
    },

    // Whether this is a POST or a GET request
    type: "GET",

    // the type of data I expect back
    dataType : "json",

    // What we do when the API call is successful
    success: function(data) {
      console.log(data); // Logs the entire JSON object

      // Option 1: Parse the JSON and output selected part
      let html = `<p><strong>Answer:</strong> ${data.answer}</p>`;
      html += `<img src="${data.image}" alt="${data.answer} GIF">`;

      // Output to the page
      $("#output").html(html);
    },

    // What I would do if the API call fails
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
      $("#output").html("<p>Something went wrong. Try again later.</p>");
    }
  });
  });
});
