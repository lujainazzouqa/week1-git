-- Create Users Table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Courses Table
CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    instructor VARCHAR(100) NOT NULL
);

-- Create Enrolments Table
CREATE TABLE enrolments (
    enrolment_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    course_id INT REFERENCES courses(course_id),
    enrolment_date DATE DEFAULT CURRENT_DATE
);

-- Create Submissions Table
CREATE TABLE submissions (
    submission_id SERIAL PRIMARY KEY,
    enrolment_id INT REFERENCES enrolments(enrolment_id),
    submission_title VARCHAR(150) NOT NULL,
    grade NUMERIC(5,2),
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);