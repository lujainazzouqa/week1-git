# Course Enrollment API Endpoints

The Course Enrollment API needs the following endpoints:

| Method | Path | Description | Status Codes |
|---|---|---|---|
| GET | /api/courses | Get all courses | 200, 500 |
| GET | /api/courses/{id} | Get a specific course | 200, 404 |
| POST | /api/enrollments | Enroll a student in a course | 201, 400, 404, 409 |
| GET | /api/students/{id}/enrollments | Get student enrollments | 200, 404 |
| DELETE | /api/enrollments/{id} | Cancel an enrollment | 204, 404 |

## HTTP Status Codes
- 200: OK
- 201: Created
- 204: No Content
- 400: Bad Request
- 404: Not Found
- 409: Conflict
- 500: Internal Server Error