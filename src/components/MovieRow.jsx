import './MovieRow.css';
import MovieCard from './MovieCard';

function MovieRow({ title, movies, myList, onToggleList }){
    return (
        <div className="movie-row">
            <h2 className='movie-row-title'>{title}</h2>
            <div className='movie-row-posters'>
                {movies.map((movie) => {
                    return (
                        <MovieCard 
                            key={movie.id} 
                            movie={movie} 
                            isInList={myList.some((m) => m.id === movie.id)}
                            onToggleList={onToggleList}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MovieRow;