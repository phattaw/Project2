DROP DATABASE IF EXISTS petVenues_db;
CREATE DATABASE petVenues_db;

USE petVenues_db;

CREATE TABLE members (
  members_id AUTO_INCREMENT INTEGER NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  rating INTEGER NULL DEFAULT 5,
  comments VARCHAR(1024) NULL, 
  public BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY (members_id)
);

CREATE TABLE venues (
  venues_id AUTO_INCREMENT INTEGER NOT NULL,
  name VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  type VARCHAR(100) NULL,
  average_rating INTEGER NULL,
  PRIMARY KEY (venues_id)
);

SELECT * FROM members;
select * from venues;



