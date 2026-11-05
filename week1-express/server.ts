import express from "express";
import cors from "cors";

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// Courses data
const courses = [
  { id: 1, name: "Web Development", instructor: "Ahmad" },
  { id: 2, name: "Database Systems", instructor: "Sara" },
  { id: 3, name: "Software Engineering", instructor: "Omar" }
];

// GET /courses
app.get("/courses", (req, res) => {
  res.json(courses);
});

// POST /enrolments
app.post("/enrolments", (req, res) => {
  const { studentName, courseId } = req.body;

  // Validation
  if (!studentName || !courseId) {
    return res.status(400).json({
      error: "Student name and course ID are required"
    });
  }

  const course = courses.find(c => c.id === Number(courseId));

  if (!course) {
    return res.status(400).json({
      error: "Course not found"
    });
  }

  res.status(201).json({
    message: "Enrolment successful!",
    studentName,
    course
  });
});

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;