
USE seinfeld_db;

CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points INTEGER,
  attitude VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO actors (name, coolness_points, attitude) VALUES ("Kramer", 99, "mean");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Elaine", 77, "amazing");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Frank", 8, "happy");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Jerry", 4, "excited");

select * from actors;