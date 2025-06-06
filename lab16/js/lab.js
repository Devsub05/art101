/*
* Lab 16: JSON and API's
* Author: Devika Subramaniam
* Date: 06/05/2025
*
* This script uses jQuery's $.ajax() method to retrieve data from the XKCD API.
* It displays the latest comic's title, image, and alternative text when the user pushes the button
*
*/

$(document).ready(function () {
  // When the user clicks the click me button
  $("#activate").click(function () {
    console.log("Button clicked!");

    //Testing
    $("#output").html("<p>This is a test. AJAX hasn't even started yet.</p>");

    // Live server testing
    console.log("Current origin:", window.location.origin);

    // Make the AJAX request to the XKCD API
    $.ajax({
      // The URL for the request
      url: "https://api.allorigins.win/raw?url=https://xkcd.com/info.0.json",

      // This API doesn't require any other data
      data: {},

      // Use GET to retrieve the data
      type: "GET",

      // Expect JSON in return
      dataType: "json",

      // What to do if the call is successful
      success: function (comicObj) {
        console.log("Success!");
        console.log(comicObj);

        // Construct HTML content
        let comicTitle = `<h3>${comicObj.title}</h3>`;
        let comicImage = `<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">`;

        // Add the comic to the output div
        $("#output").html(comicTitle + comicImage);
      },

      // What to do if the call fails
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
        $("#output").html("<p>Something went wrong. Check the output for the details. </p>");
      }
    });
  });
});
