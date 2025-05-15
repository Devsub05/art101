//create a webchat simulation with an input field and a button to add a

// make a box for the convo

//add the button

//user tupes somehting in the text box

//on click event listener

$("#action").click(

  function(){

    //what will happen when the button is clicked
    console.log("button is clicked");

    //make the button copy the text

      //find the box 
      //usertext=$("#userinput").val("asdf");
    

      // and it's contents

      //copy the contents
      let usertext=$("#userinput").val();
        console.log(usertext);
      //copy where? div convo
      $("#convo").append(usertext+"<br>");

})

