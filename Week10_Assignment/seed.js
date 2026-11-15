require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./models/Course');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/coursesDB';

const sampleCourses = [
{
title: 'Intro to HTML and CSS',
department: 'WEBD',
units: 3,
delivery: 'Online'
},
{
title: 'JavaScript',
department: 'WEBD',
units: 3,
delivery: 'Hybrid'
},
{
title: 'PHP',
department: 'WEBD',
units: 3,
delivery: 'In-Person'
},
{
title: 'E-Commerce',
department: 'WEBD',
units: 3,
delivery: 'Hybrid'
},
{
title: 'Modern JavaScript',
department: 'WEBD',
units: 3,
delivery: 'Hybrid'
}
];

async function seedDatabase() {
try {
await mongoose.connect(MONGO_URI);
console.log('Connected to MongoDB');

await Course.deleteMany({});
console.log('Cleared existing courses');

const inserted = await Course.insertMany(sampleCourses);
console.log(`Inserted ${inserted.length} courses`);
} catch (error) {
console.error('Error seeding database:', error);
} finally {
await mongoose.connection.close();
console.log('Database connection closed');
}
}

seedDatabase();