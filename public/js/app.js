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
      console.log(data);
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

    $.post("/api/search", data).then(function (searchResults) {
      console.log(`/api/search ${JSON.stringify(searchResults, null, 2)}`);

    }).catch(function (err){

      console.log("searchForm error");
      //this is where you would show the login error message
    });
  });

  $(".reviewForm").on("submit", function(event) {
    event.preventDefault();
    let data = $(this).serialize();

    $.post("/api/reviewPlace", data).then(function (data) {
      console.log(data);
      $("#postHotelModal").modal("hide");
      $("#postVeteranarianModal").modal("hide");
      $("#postRestaurantModal").modal("hide");
      $("#postPetParkModal").modal("hide");
      window.location.replace(data);
    }).catch(function (err){
      console.log("testing review form");
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

  $(".placeModal").on("click", function(event) {
    var placeId = $(this).attr("id");
    console.log(placeId);
    $.get("/api/places/" + placeId, function(data) {
      var modalContent = getModalContent(data);
      $("#reviewModalContent").html(modalContent);
    });
  })

  $("#hotelSearch").on("click", function(event) {
    $.get("/api/hotelSearch/", function(data) {
      console.log("/api/hotelSearch/");

    });
  });

  $("#restaurantSearch").on("click", function(event) {
    $.get("/api/restaurantSearch/", function(data) {
      console.log("/api/restaurantSearch/");

    });

  });

  $("#veterinariansSearch").on("click", function(event) {
    $.get("/api/veterinariansSearch/", function(data) {
      console.log("/api/veterinariansSearch/");

    });
  });

  $("#petparksSearch").on("click", function(event) {
    $.get("/api/petparksSearch/", function(data) {
      console.log("/api/petparksSearch/");

    });
  });


  getHotels();
  getRestaurants();
  getDogParks();
  
});

// Function for retrieving authors and getting them ready to be rendered to the page
function getHotels() {
  $.get("/api/hotels", function(data) {
    // console.log(`getHotels: ${JSON.stringify(data, null, 2)}`);
  });
}

function getRestaurants() {
  $.get("/api/restaurants", function(data) {
    // console.log(`getRestaurants: ${JSON.stringify(data, null, 2)}`);
  });
}

function getDogParks() {
  $.get("/api/dogParks", function(data) {
    // console.log(`getDogParks: ${JSON.stringify(data, null, 2)}`);
  });  
}

function getModalContent(data)  {
  console.log(data);
  return `
  <div class="modal-header">
          <h5 class="modal-title text-center">${data.name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div class="modal-body text-center">
          <img src="/images/barKDogBarInside.png" class="img-fluid" alt="Pet Friend Places">
          <hr>
          <div id="modalBtns">
                  <button type="button" class="btn btn-outline-primary"><i class="fas fa-share-square"></i></button> 
                  <button type="button" class="btn btn-outline-primary"><i class="fas fa-directions"></i></button> 
                  <button type="button" class="btn btn-outline-primary"><i class="fas fa-save"></i></button>
                  <button type="button" class="btn btn-outline-primary"><i class="fas fa-paw"></i></button>
                  <button type="button" class="btn btn-outline-primary"><i class="fas fa-trash"></i></button>
          </div>
          <hr>
          <h5>Description:</h5>
  
          <p>Bar K is a unique and joyful destination featuring a modern bar, restaurant, coffeehous, and dog park, constructed out of repurposed shipping containers.</p>
  
          <p>Bar K is a unique and joyful destination featuring a modern bar, restaurant, coffeehouse, and dog park, constructed out of repurposed shipping containers.</p>
          <h5>Location:</h5>
          <p>${data.city}, ${data.state}</p>
          <h5>Hours</h5>
          <p>9AM to 10PM, Everyday</p>
          <h5>Phone Number:</h5>
          <p>(816) 4747-2275</p>
  
          <a class="btn btn-primary btn-lg" id="websiteBtn" href="${data.website ? (/^https?:\/\//).test(data.website) ? data.website : "https://"+data.website : "#"}" target="_blank">Website <i class="fas fa-paw"></i></a>
      </div>
  `;
}
