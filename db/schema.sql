-- Create the database doggo_db and specified it for use.
CREATE DATABASE issues_db;
USE issues_db;

-- Create the table dog and park
CREATE TABLE questions
(
id int NOT NULL AUTO_INCREMENT,
issue_name varchar(150) NOT NULL,
question_1 varchar(150) NOT NULL,
question_2 varchar(150) NOT NULL,
question_3 varchar(150) NOT NULL,

PRIMARY KEY (id)
);

CREATE TABLE user
(
id int NOT NULL AUTO_INCREMENT,
user_name varchar(150) NOT NULL,
user_password varchar(150) NOT NULL,
issue_name varchar(150) NOT NULL,
answer_q1 varchar(2) DEFAULT "0"
answer_q2 varchar(2) DEFAULT "0"
answer_q3 varchar(2) DEFAULT "0"

PRIMARY KEY (id)
);

