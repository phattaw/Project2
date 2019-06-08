DROP DATABASE IF EXISTS petVenues_db;
CREATE DATABASE petVenues_db;

USE petVenues_db;

CREATE TABLE members (
  members_id INTEGER NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  public BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY (members_id)
);

CREATE TABLE venues (
  venues_id INTEGER NOT NULL AUTO_INCREMENT ,
  name VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  type VARCHAR(100) NULL,
  average_rating INTEGER NULL,
  PRIMARY KEY (venues_id)
);

CREATE TABLE reviews (
  reviews_id INTEGER NOT NULL AUTO_INCREMENT ,
  venue_name VARCHAR(100) NOT NULL,
  rating INTEGER NULL DEFAULT 5,
  PRIMARY KEY (reviews_id)
);

CREATE TABLE photos (
  photos_id INTEGER NOT NULL AUTO_INCREMENT ,
  venue_name VARCHAR(100) NOT NULL,
  members VARCHAR(100),
  rating INTEGER NULL DEFAULT 5,
  PRIMARY KEY (photos_id)
);

SELECT * FROM members;
select * from venues;



