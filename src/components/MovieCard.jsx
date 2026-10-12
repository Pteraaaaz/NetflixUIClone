import './MovieCard.css';

function MovieCard({ movie, isInList, onToggleList }){
    return (
        <div className="movie-card">
            <img
                className="movie-card-image"
                src={movie.posterUrl}
                alt={movie.title}
            />
            <button
                className={`movie-card-add-btn ${isInList ? 'movie-card-add-btn-active' : ''}`}
                onClick={() => onToggleList(movie)}
                title={isInList ? 'Remove from My List' : 'Add to My List'}
            >
                {isInList ? '\u2713' : '+'}
            </button>
            <div className="movie-card-overlay">
                <span className='movie-card-play-icon'>&#9654;</span>
                <span className='movie-card-title'>{movie.title}</span>
            </div>
        </div>
    )
}

export default MovieCard;