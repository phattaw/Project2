module.exports = function(sequelize, DataTypes) {
    var Venues = sequelize.define("Venues", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "hotel"
      },
      average_rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
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

    return Venues;
  };