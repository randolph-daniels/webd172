const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const courses = [
{ id: 1, title: "WEBD 164", department: "Web Development", units: 3 },
{ id: 2, title: "WEBD 166", department: "Web Development", units: 3 },
{ id: 3, title: "WEBD 172", department: "Web Development", units: 3 },
{ id: 4, title: "WEBD 173", department: "Web Development", units: 3 }
];

app.get('/api/courses', (req, res) => {
res.json(courses);
});

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});