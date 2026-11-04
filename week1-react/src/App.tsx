
import { useEffect, useState } from 'react';
import './App.css';

interface Course {
  id: number;
  name: string;
  instructor: string;
}

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [studentName, setStudentName] = useState('');
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load courses');
        }
        return response.json();
      })
      .then(data => setCourses(data))
      .catch(() => setMessage('Error loading courses'))
      .finally(() => setLoading(false));
  }, []);

  async function enrol(courseId: number) {
    setMessage('');

    if (!studentName.trim()) {
      setMessage('Please enter your name!');
      return;
    }

    try {
      const response = await fetch(
        'http://localhost:3000/enrolments',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            studentName: studentName,
            courseId: courseId
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || 'Enrolment failed');
        return;
      }

      setMessage(data.message);
      setStudentName('');

    } catch {
      setMessage('Cannot connect to the server!');
    }
  }

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Available Courses</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={studentName}
        onChange={e => setStudentName(e.target.value)}
      />

      <br />

      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {message && <p>{message}</p>}

      {loading ? (
        <p>Loading courses...</p>
      ) : (
        filteredCourses.map(course => (
          <div key={course.id}>
            <h2>{course.name}</h2>
            <p>Instructor: {course.instructor}</p>

            <button onClick={() => enrol(course.id)}>
              Enrol
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
