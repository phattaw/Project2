/*CREATE TABLE reviews (
  reviews_id INTEGER NOT NULL AUTO_INCREMENT ,
  venue_name VARCHAR(100) NOT NULL,
  rating INTEGER NULL DEFAULT 5,
  PRIMARY KEY (reviews_id)
);
*/
module.exports = function (sequelize, DataTypes) {
    var reviews = sequelize.define("reviews", {
      reviews_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        PRIMARY: true
      },
  
      venue_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      comment: {
        type: DataTypes.STRING(500),
        allowNull: false
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    // CREATE TABLE venues (
    //   venues_id INTEGER NOT NULL AUTO_INCREMENT ,
    //   name VARCHAR(100) NOT NULL,
    //   city VARCHAR(100) NOT NULL,
    //   state VARCHAR(100) NOT NULL,
    //   type VARCHAR(100) NULL,
    //   average_rating INTEGER NULL,
    //   PRIMARY KEY (venues_id)
    // );
    return reviews;
  };