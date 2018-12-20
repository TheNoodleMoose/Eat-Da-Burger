$(function() {
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
      location.reload();
      console.log("changed Devoured State to", devoured);
      // Reload the page to get the updated list
    });
  });

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
