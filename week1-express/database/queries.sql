-- Query 1: Display all users
SELECT * FROM users;

-- Query 2: Display all courses
SELECT * FROM courses;

-- Query 3: Display users with their enrolled courses (INNER JOIN)
SELECT
    users.full_name,
    courses.course_name,
    enrolments.enrolment_date
FROM enrolments
INNER JOIN users ON enrolments.user_id = users.user_id
INNER JOIN courses ON enrolments.course_id = courses.course_id;

-- Query 4: Display all users and their enrolments (LEFT JOIN)
SELECT
    users.full_name,
    enrolments.enrolment_id
FROM users
LEFT JOIN enrolments ON users.user_id = enrolments.user_id;

-- Query 5: Count students in each course (GROUP BY)
SELECT
    courses.course_name,
    COUNT(enrolments.user_id) AS student_count
FROM courses
LEFT JOIN enrolments ON courses.course_id = enrolments.course_id
GROUP BY courses.course_name;

-- Query 6: Calculate the average grade
SELECT AVG(grade) AS average_grade
FROM submissions;

-- Query 7: Display submissions with grades above 80
SELECT *
FROM submissions
WHERE grade > 80;

-- Query 8: Display courses with more than one enrolled student (HAVING)
SELECT
    courses.course_name,
    COUNT(enrolments.user_id) AS student_count
FROM courses
JOIN enrolments ON courses.course_id = enrolments.course_id
GROUP BY courses.course_name
HAVING COUNT(enrolments.user_id) > 1;

-- Query 9: Create an index
CREATE INDEX idx_users_email ON users(email);

-- Query 10: Explain query execution plan
EXPLAIN
SELECT *
FROM users
WHERE email = 'student@example.com';