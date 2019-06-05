$(document).ready(function () {
  $("#signInBtn").on("click", function (event) {
    event.preventDefault();

    $("#signInModal").modal("show");
    $("#signUpModal").modal("hide");
  });

  $("#signUpBtn").on("click", function (event) {
    event.preventDefault();

    $("#signUpModal").modal("show");
    $("#signInModal").modal("hide");
  });

  $("#signUpForm").on("submit", function (event) {
    event.preventDefault();
    var userData = $(this).serialize();

    $.post("/api/signup", userData);
  });

  $("#signInForm").on("submit", function (event) {
    event.preventDefault();
    var userData = $(this).serialize();

    $.post("/api/login", userData, function(data){
      console.log(data);
    });
  });

  $("#signUpLink").on("click", function (event) {
    event.preventDefault();

    $("#signUpModal").modal("show");
    $("#signInModal").modal("hide");
  });

  $("#signInLink").on("click", function (event) {
    event.preventDefault();

    $("#signInModal").modal("show");
    $("#signUpModal").modal("hide");
  });

  $("#postReview").on("click", function (event) {
    event.preventDefault();

    $("#postReviewModal").modal("show");
  });

  $("#postPhoto").on("click", function (event) {
    event.preventDefault();

    $("#postPhotoModal").modal("show");
  });
});
