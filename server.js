require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Course = require('./models/Course');

const app = express();
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/coursesDB';
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// GET all courses
app.get('/api/courses', async (req, res) => {
try {
const courses = await Course.find();
res.status(200).json(courses);
} catch (err) {
res.status(500).json({ error: 'Server error retrieving courses', details: err.message });
}
});

// GET a single course by ID
app.get('/api/courses/:id', async (req, res) => {
try {
const course = await Course.findById(req.params.id);
if (!course) {
return res.status(404).json({ error: 'Course not found' });
}
res.status(200).json(course);
} catch (err) {
res.status(400).json({ error: 'Invalid course ID', details: err.message });
}
});

// POST create a new course
app.post('/api/courses', async (req, res) => {
try {
const newCourse = new Course(req.body);
const savedCourse = await newCourse.save();
res.status(201).json(savedCourse);
} catch (err) {
res.status(400).json({ error: 'Failed to create course', details: err.message });
}
});

// PUT update an existing course by ID
app.put('/api/courses/:id', async (req, res) => {
try {
const updatedCourse = await Course.findByIdAndUpdate(
req.params.id,
req.body,
{ new: true, runValidators: true }
);
if (!updatedCourse) {
return res.status(404).json({ error: 'Course not found' });
}
res.status(200).json(updatedCourse);
} catch (err) {
res.status(400).json({ error: 'Failed to update course', details: err.message });
}
});

// DELETE a course by ID
app.delete('/api/courses/:id', async (req, res) => {
try {
const deletedCourse = await Course.findByIdAndDelete(req.params.id);
if (!deletedCourse) {
return res.status(404).json({ error: 'Course not found' });
}
res.status(200).json({ message: 'Course deleted', course: deletedCourse });
} catch (err) {
res.status(400).json({ error: 'Failed to delete course', details: err.message });
}
});

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});