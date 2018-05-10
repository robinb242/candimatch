-- Insert a set of records.

USE answers_db;

INSERT INTO can_ans1 (can_name, question_1, question_2, question_3)
VALUES ('Candidate X', '1', '1', '1'),
('Candidate Y', '3', '4', '3'),
('Candidate Z', '7', '7', '7');

USE answers_db;

INSERT INTO can_ans2 (can_name, question_1, question_2, question_3)
VALUES ('Candidate X', '1', '1', '1'),
('Candidate Y', '4', '3', '4'),
('Candidate Z', '7', '7', '7');

USE answers_db;

INSERT INTO can_ans3 (can_name, question_1, question_2, question_3) 
VALUES ('Candidate X', '1', '1', '1'),
('Candidate Y', '3', '4', '3'),
('Candidate Z', '7', '7', '7');

USE answers_db;

INSERT INTO user_ans1 (answer_1, answer_2, answer_3)
VALUES ('0', '0', '0');

USE answers_db;

INSERT INTO user_ans2 (answer_1, answer_2, answer_3)
VALUES ('0', '0', '0');

USE answers_db;

INSERT INTO user_ans3 (answer_1, answer_2, answer_3)
VALUES ('0', '0', '0');
-- MySQL will not take a path to upload a file, it must be handled by fs

-- Good example here:  http://www.technicalkeeda.com/nodejs-tutorials/nodejs-store-image-into-mysql-database