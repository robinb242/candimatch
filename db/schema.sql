-- Create the database doggo_db and specified it for use.
CREATE DATABASE answers_db;
USE answers_db;

-- Create the table dog and park
CREATE TABLE can_ans1
(
id int NOT NULL AUTO_INCREMENT,
issue_name varchar(150) NOT NULL,
question_1 integer DEFAULT 0,
question_2 integer DEFAULT 0,
question_3 integer DEFAULT 0,

PRIMARY KEY (id)
);

CREATE TABLE can_ans2
(
id int NOT NULL AUTO_INCREMENT,
issue_name varchar(150) NOT NULL,
question_1 integer DEFAULT 0,
question_2 integer DEFAULT 0,
question_3 integer DEFAULT 0,
PRIMARY KEY (id)
);

CREATE TABLE can_ans3
(
id int NOT NULL AUTO_INCREMENT,
issue_name varchar(150) NOT NULL,
question_1 integer DEFAULT 0,
question_2 integer DEFAULT 0,
question_3 integer DEFAULT 0,

PRIMARY KEY (id)
);

CREATE TABLE user_ans1
(
id int NOT NULL AUTO_INCREMENT,
issue_name varchar(150) NOT NULL,
answer_1 integer DEFAULT 0,
answer_2 integer DEFAULT 0,
answer_3 integer DEFAULT 0,

PRIMARY KEY (id)
);

CREATE TABLE user_ans2
(
id int NOT NULL AUTO_INCREMENT,
issue_name varchar(150) NOT NULL,
answer_1 integer DEFAULT 0,
answer_2 integer DEFAULT 0,
answer_3 integer DEFAULT 0,

PRIMARY KEY (id)
);

CREATE TABLE user_ans3
(
id int NOT NULL AUTO_INCREMENT,
issue_name varchar(150) NOT NULL,
answer_1 integer DEFAULT 0,
answer_2 integer DEFAULT 0,
answer_3 integer DEFAULT 0,

PRIMARY KEY (id)
);