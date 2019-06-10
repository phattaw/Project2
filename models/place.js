module.exports = function (sequelize, DataTypes) {
  var Place = sequelize.define("Place", {
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
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
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
  return Place;
};