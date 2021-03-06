var passport = require("passport");
var db = require("../models");
module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/petVenue");
  });

  app.post("/api/search", function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    let searchVal = req.body.searchVal.trim().toLowerCase();
    let results = [];
    db.Venues.findAll({
      where: {
        name: searchVal
      }
    }).then(function (searchItems) {
      searchItems.forEach(element => {
        results.push(element); 
      });

      db.Venues.findAll({
        where: {
          city: searchVal
        }
      }).then(function (searchItems) {
        searchItems.forEach(element => {
          results.push(element); 
        });
        db.Venues.findAll({
          where: {
            state: searchVal
          }
        }).then(function (searchItems) {
          searchItems.forEach(element => {
            results.push(element); 
          });
          db.Venues.findAll({
            where: {
              type: searchVal
            }
          }).then(function (searchItems) {
            searchItems.forEach(element => {
              results.push(element); 
            });

            db.Venues.findAll({
              where: {
                average_rating: searchVal
              }
            }).then(function (searchItems) {
              searchItems.forEach(element => {
                results.push(element); 
              });

              res.json({ results: JSON.stringify(results) });
            })              
          })
        })
      })  
    })
  });

  app.post("/api/reviewPlace", function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    // console.log(req.body);
    console.log(`/api/reviewPlace: ${JSON.stringify(req.body, null, 2)}`);
    db.Venues.create({
      name: req.body.name.trim().toLowerCase(),
      city: req.body.city.trim().toLowerCase(),
      state: req.body.state.trim().toLowerCase(),
      review: req.body.review.trim().toLowerCase(),
      website: req.body.website,
      type: req.body.type,
    }).then(function () {
      res.json("/petVenue");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });



  app.post("/api/photo", function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    // console.log(req.body);
    console.log(`/api/photo: ${JSON.stringify(req.body, null, 2)}`);

    res.json({});
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    }).then(function () {
      res.redirect(307, "/petVenue");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get("/api/hotelSearch", function(req, res) {
    console.log("apiRoutes hotelSearch");
    res.json({
      description: "Bar K is a unique and joyful destination featuring a modern bar, restaurant, coffeehouse, and dog park, constructed out of repurposed shipping containers.",
      Address: "501 Berkley Parkway, Kansas City, MO 64120",
      Phone: "(816) 4747-2275"
    });
  });
  app.get("/api/restaurantSearch", function(req, res) {
    console.log("apiRoutes restaurantSearch");
    res.json({
      description: "Bar K is a unique and joyful destination featuring a modern bar, restaurant, coffeehouse, and dog park, constructed out of repurposed shipping containers.",
      Address: "501 Berkley Parkway, Kansas City, MO 64120",
      Phone: "(816) 4747-2275"
    });
  });
  app.get("/api/veterinariansSearch", function(req, res) {
    console.log("apiRoutes veterinariansSearch");
    res.json({
      description: "Bar K is a unique and joyful destination featuring a modern bar, restaurant, coffeehouse, and dog park, constructed out of repurposed shipping containers.",
      Address: "501 Berkley Parkway, Kansas City, MO 64120",
      Phone: "(816) 4747-2275"
    });
  });
  app.get("/api/petparksSearch", function(req, res) {
    console.log("apiRoutes petparksSearch");
    res.json({
      description: "Bar K is a unique and joyful destination featuring a modern bar, restaurant, coffeehouse, and dog park, constructed out of repurposed shipping containers.",
      Address: "501 Berkley Parkway, Kansas City, MO 64120",
      Phone: "(816) 4747-2275"
    });
  });

  app.get("/api/places/:id", function (req, res) {
    db.Venues.findOne({ where: { id: req.params.id } }).then(function (venues) {
      res.json(venues);
    });
  });

};
