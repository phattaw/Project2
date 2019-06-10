var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;


// Setting up the chai http plugin
chai.use(require('chai-passport-strategy'));
chai.use(chaiHttp);

describe('token strategy', function() {
    
  var strategy = new Strategy(function(token, done) {
    if (token == 'vF9dft4qmT') { 
      return done(null, { id: '1234' }, { scope: 'read' });
    }
    return done(null, false);
  });
  
  describe('handling a request with valid credential in header', function() {
    var user
      , info;
    
    before(function(done) {
      chai.passport.use(strategy)
        .success(function(u, i) {
          user = u;
          info = i;
          done();
        })
        .req(function(req) {
          req.headers.authorization = 'Bearer vF9dft4qmT';
        })
        .authenticate();
    });
    
    it('should supply user', function() {
      expect(user).to.be.an.object;
      expect(user.id).to.equal('1234');
    });
    
    it('should supply info', function() {
      expect(info).to.be.an.object;
      expect(info.scope).to.equal('read');
    });
  });
});

// var request;

// // double check passport.authenticate
// describe("GET /api/login", passport.authenticate ("local"), function(req, res) {
//   // Before each test begins, create a new request server for testing
//   // & delete all examples from the db
//   beforeEach(function() {
//     request = chai.request(server);
//     return db.sequelize.sync({ force: true });
//   });

//   it("should find all authenticated user name and password login credentials", function(done) {
//     // Add some examples to the db to test with
//     db.petVenues.bulkCreate([
//       // check if "text" should be "VARCHAR"
//       { text: "email", description: "email address" },
//       { text: "password", description: "valid password" }
//     ]).then(function() {
//       // Request the route that returns all examples
//       request.get("/api/login").end(function(err, res) {
//         var responseStatus = res.status;
//         var responseBody = res.body;

//         // Run assertions on the response

//         expect(err).to.be.null;

//         expect(responseStatus).to.equal(200);

//         expect(responseBody)
//           .to.be.an("array")
//           .that.has.lengthOf(2);

//         expect(responseBody[0])
//           .to.be.an("object")
//           .that.includes({ text: "email", description: "valid email address" });

//         expect(responseBody[1])
//           .to.be.an("object")
//           .that.includes({ text: "password", description: "valid password" });

//         // The `done` function is used to end any asynchronous tests
//         done();
//       });
//     });
//   });
// });


// var expect = require("chai").expect;

// describe("canary test", function() {
//   // A "canary" test is one we set up to always pass
//   // This can help us ensure our testing suite is set up correctly before writing real tests
//   it("should pass this canary test", function() {
//     expect(true).to.be.true;
//   });
// });
