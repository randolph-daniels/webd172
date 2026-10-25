import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import './App.css';

function App() {
const [courses, setCourses] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
fetch('http://localhost:3000/api/courses')
.then((response) => {
if (!response.ok) {
throw new Error('Could not fetch data from the server');
}
return response.json();
})
.then((data) => setCourses(data))
.catch((err) => setError(err.message));
}, []);

return (
<div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
<h1>Course Directory</h1>

{error && <p style={{ color: 'red' }}>Error: {error}</p>}

{courses.length > 0 ? (
courses.map((course) => (
<CourseCard
key={course.id}
title={course.title}
department={course.department}
units={course.units}
/>
))
) : (
<p>Loading your courses...</p>
)}
</div>
);
}

export default App;
