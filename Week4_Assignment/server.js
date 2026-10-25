const express = require('express');
const app = express();
const port = 3000;


const movies = [
    {id: 1, title: "Toy Story", year: 1995},
    {id: 2, title: "Toy Story 2", year: 1999},
    {id: 3, title: "Toy Story 3", year: 2010},
    {id: 4, title: "Toy Story 4", year: 2019},
    {id: 5, title: "Toy Story 5", year: 2026}
];

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get("/api/movies", (req, res) => {
    res.json(movies);
});

app.get("/api/movies/:id", (req, res) => {
    const id = Number(req.params.id);
    const movie = movies.find(m => m.id === id);
    res.json(movie);
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


