var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app) {
  // Load index page
 app.get("/", function(req, res) {
   res.render("index", { msg: "Welcome!", examples: {}});
 });

  app.get("/petVenue", function(req, res) {
    if(isAuthenticated) {
      db.Venues.findAll({}).then(function(venues) {
        res.render("petVenue", {
          venues
        });
      });
    } else (res.render("petVenue", {}))
    // console.log(req.user);
    // res.render("petVenue", {});
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
