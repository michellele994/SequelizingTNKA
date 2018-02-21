DROP DATABASE IF EXISTS asses_db;
CREATE DATABASE asses_db;
USE asses_db;

CREATE TABLE asses (
	id INT NOT NULL AUTO_INCREMENT,
    ass_name VARCHAR(45) NOT NULL,
    ass_picture INT NOT NULL,
    ass_kicked BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

SET FOREIGN_KEY_CHECKS=0;
SELECT * FROM asses;

DROP TABLE IF EXISTS assesTables;
DROP TABLE IF EXISTS kickers;
SELECT * FROM kickers;
SELECT * FROM assesTables;
INSERT INTO kickers (name) VALUES ("jill");
INSERT INTO kickers (name) VALUES ("jones");