import React from 'react';

export default function CourseCard({ title, department, units }) {
return (
<div className="course-card">
<h2 className="course-title">{title}</h2>
<p className="course-detail"><strong>Department:</strong> {department}</p>
<p className="course-detail"><strong>Units:</strong> {units}</p>
</div>
);
}