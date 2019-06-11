/*CREATE TABLE photos (
  photos_id INTEGER NOT NULL AUTO_INCREMENT ,
  venue_name VARCHAR(100) NOT NULL,
  members VARCHAR(100),
  rating INTEGER NULL DEFAULT 5,
  PRIMARY KEY (photos_id)
);*/

module.exports = function(sequelize, DataTypes) {
    var photos = sequelize.define("photos", {
      photos_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        PRIMARY: true
      },
      photoAnchor: {
        type: DataTypes.STRING(500),
        allowNull: false
      },
      venue: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    // CREATE TABLE venues (
    //     venues_id INTEGER NOT NULL AUTO_INCREMENT ,
    //     name VARCHAR(100) NOT NULL,
    //     city VARCHAR(100) NOT NULL,
    //     state VARCHAR(100) NOT NULL,
    //     type VARCHAR(100) NULL,
    //     average_rating INTEGER NULL,
    //     PRIMARY KEY (venues_id)
    //   );

    return photos;
  };