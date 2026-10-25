import MovieCard from "./MovieCard";    

function MovieList ({ movieData }) {
    return (
        <div className="movie-list-container">
            {movieData.map((movie) => (
                <MovieCard
                key={movie.id}
                title={movie.title}
                year={movie.year}
                description={movie.description}
                />
            ))}
        </div>
    );
}

export default MovieList