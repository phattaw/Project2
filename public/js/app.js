$(document).ready(function() {
  $("#signInBtn").on("click", function(event) {
    event.preventDefault();

    $("#signInModal").modal("show");
    $("#signUpModal").modal("hide");
  });

  $("#signUpBtn").on("click", function(event) {
    event.preventDefault();

    $("#signUpModal").modal("show");
    $("#signInModal").modal("hide");
  });

  $("#signUpLink").on("click", function(event) {
    event.preventDefault();

    $("#signUpModal").modal("show");
    $("#signInModal").modal("hide");
  });

  $("#signInLink").on("click", function(event) {
    event.preventDefault();

    $("#signInModal").modal("show");
    $("#signUpModal").modal("hide");
  });

  $("#postReview").on("click", function(event) {
    event.preventDefault();

    $("#postReviewModal").modal("show");
  });

  $("#postPhoto").on("click", function(event) {
    event.preventDefault();

    $("#postPhotoModal").modal("show");
  });
});
