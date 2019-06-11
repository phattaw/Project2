/*CREATE TABLE members (
  members_id INTEGER NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  public BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY (members_id)
);
*/

module.exports = function (sequelize, DataTypes) {
  var members = sequelize.define("members", {
    members_id: {
      type: DataTypes.INTEGER,
      allowNull: false,

      autoIncrement: true,
      PRIMARY: true
    },

    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    public: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      DEFAULT: true
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
  return members;
};