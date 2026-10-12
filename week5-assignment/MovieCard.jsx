import { useState } from "react";

function MovieCard({ title, year, description }) {
    const [isFavorite, setIsFavorite] = useState(false);
    
    return (
        <div className="movie-card">
            <h2 className="movie-title">
                {title} ({year})
                {isFavorite ? '*' : ''}
            </h2>

            <p className="movie-description">{description}</p>

            <button className="favorite-button" onClick={() => setIsFavorite(!isFavorite)}>
                {isFavorite ? 'Remove Favorite' : 'Mark as Favorite'}
            </button>
            </div>
    );
}

export default MovieCard;