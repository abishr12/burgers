console.log("hello");

$(document).ready(function() {
  $(".devour-it").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).done(function() {
      console.log("burger #" + id + " has been devoured");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //   var newSleepState = {
  //     sleepy: newSleep
  //   };
  //
  //   // Send the PUT request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "PUT",
  //     data: newSleepState
  //   }).then(function() {
  //     console.log("changed sleep to", newSleep);
  //     // Reload the page to get the updated list
  //     location.reload();
  //   });
  // });
});
