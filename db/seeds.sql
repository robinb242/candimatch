-- Insert a set of records.

USE answers_db;

INSERT INTO can_ans1 (issue_name, question_1, question_2, question_3) 
VALUES ('Issue-A', 'Answer1', 'Answer2', 'Answer3'),

USE answers_db;

INSERT INTO can_ans2 (issue_name, question_1, question_2, question_3) 
VALUES ('Issue-B', 'Answer1', 'Answer2', 'Answer3'),


USE answers_db;

INSERT INTO can_ans3 (issue_name, question_1, question_2, question_3) 
VALUES ('Issue-C', 'Answer1', 'Answer2', 'Answer3'),


USE answers_db;

INSERT INTO user_ans1 (issue_name, answer_1, answer_2, answer_3),
VALUES ('Issue-A', 'Answer1', 'Answer2', 'Answer3'),

USE answers_db;

INSERT INTO user_ans2 (issue_name, answer_1, answer_2, answer_3),
VALUES ('Issue-A', 'Answer1', 'Answer2', 'Answer3'),

USE answers_db;

INSERT INTO user_ans3 (issue_name, answer_1, answer_2, answer_3),
VALUES ('Issue-A', 'Answer1', 'Answer2', 'Answer3'),
-- MySQL will not take a path to upload a file, it must be handled by fs

-- Good example here:  http://www.technicalkeeda.com/nodejs-tutorials/nodejs-store-image-into-mysql-database