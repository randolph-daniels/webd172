async function loadMovies() {
    try {
        const response = await fetch("/api/movies");
        const movies = await response.json();

        const container =  document.getElementById("movie-list") || document.body;

        movies.forEach(movie => {
            const p = document.createElement("p");
            p.textContent = `${movie.title} (${movie.year})`;
            container.appendChild(p);
        });
    } catch (error) {
        console.error("Error loading movies:", error);      
    }}

    loadMovies();