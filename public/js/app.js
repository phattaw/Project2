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

  $("#postHotel").on("click", function (event) {
    event.preventDefault();

    $("#postHotelModal").modal("show");
  });

  $("#postRestaurant").on("click", function (event) {
    event.preventDefault();

    $("#postRestaurantModal").modal("show");
  });

  $("#postPetPark").on("click", function (event) {
    event.preventDefault();

    $("#postPetParkModal").modal("show");
  }); 

  $("#postVeterinarian").on("click", function (event) {
    event.preventDefault();

    $("#postVeterinarianModal").modal("show");
  }); 


  $("#searchForm").on("submit", function(event) {
    event.preventDefault();

    let searchVal = $("#search").val().trim();
    let data = { searchVal: searchVal };

    $.post("/api/search", data).then(function (data) {

    }).catch(function (err){

      console.log("searchForm error");
      //this is where you would show the login error message
    });
  });

  $("#reviewForm").on("submit", function(event) {
    event.preventDefault();

    let reviewPlace = $("#reviewPlace").val().trim();
    let websiteLink = $("#websiteLink").val().trim();
    let reviewText = $("#reviewText").val().trim();
    let inputCity = $("#inputCity").val().trim();
    let inputState = $("#inputState").val().trim();

    let data = {
      reviewPlace: reviewPlace,
      websiteLink: websiteLink,
      reviewText: reviewText,
      inputCity: inputCity,
      inputState: inputState
    }

    $.post("/api/reviewPlace", data).then(function (data) {

    }).catch(function (err){

      console.log("testing review form");
      //this is where you would show the login error message
    });
  });
  
  
  $("#photoForm").on("submit", function(event) {
    event.preventDefault();

    let photoTitle = $("#photoTitle").val().trim();
    let inputPhoto = $("#inputPhoto").val().trim();
    let inputPhotoDescription = $("#inputPhotoDescription").val().trim();

    let data = {
      photoTitle: photoTitle,
      inputPhoto: inputPhoto,
      inputPhotoDescription: inputPhotoDescription
    }

    $.post("/api/photo", data).then(function (data) {

    }).catch(function (err){

      console.log("photoForm error");
      //this is where you would show the login error message
    });
  });
});

