$(function() {
  //On click of the devour button it grabs the id of the element and sets the state of devour to true
  //A ajax call "PUT" method is ran and thats what triggers the database change.
  //The window then reloads to visually update the changes
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var nowDevoured = true;

    var newDevouredState = {
      devoured: nowDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
      console.log("changed Devoured State to", devoured);
    });
  });

  //When the user clicks the add burger button it grabs the values from the input field
  //And creates a new object call newBurger. This object holds the burger_name of the new burger
  // A ajax "POST" method runs and takes the data of newBurger and the page then reload to
  //display the new burger
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger")
        .val()
        .trim()
    };
    console.log(newBurger.burger_name);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new Burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
