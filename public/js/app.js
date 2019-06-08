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

    $.post("/api/login", userData).then(function (data) {
      window.location.replace(data);
      // console.log(data);
    }).catch(function (err){
      console.log(err);
      console.log("testing");
      //this is where you would show the login error message
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

  $("#searchForm").on("submit", function(event) {
    event.preventDefault();

    let searchVal = $("#search").val().trim();

    $.post("/api/search", { searchVal: searchVal}).then(function (data) {
      // console.log(data);
    }).catch(function (err){
      // console.log(err);
      console.log("testing");
      //this is where you would show the login error message
    });


    // console.log(JSON.stringify(event, null, 2));
  });
  $("#reviewForm").on("submit", function(event) {
    event.preventDefault();

    let reviewPlace = $("#reviewPlace").val().trim();
    let reviewTitle = $("#reviewTitle").val().trim();
    let reviewText = $("#reviewText").val().trim();

    let data = {
      reviewPlace: reviewPlace,
      reviewTitle: reviewTitle,
      reviewText: reviewText
    }

    $.post("/api/reviewPlace", data).then(function (data) {
      // console.log(data);
    }).catch(function (err){
      // console.log(err);
      console.log("testing review form");
      //this is where you would show the login error message
    });


    // console.log(JSON.stringify(event, null, 2));
  });
  
});
