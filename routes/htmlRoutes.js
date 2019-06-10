var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/petVenue", function(req, res) {
    if(isAuthenticated) {
      db.Place.findAll({}).then(function(places) {
        res.render("petVenue", {
          places
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
