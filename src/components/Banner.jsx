import './Banner.css';

function Banner({movie}){
    return (
        <header className="banner" style={{backgroundImage: `url(${movie.backdropUrl})`}}>
            <div className='banner-overlay' />
            <div className='banner-content'>
                <h1 className='banner-title'>{movie.title}</h1>
                <p className='banner-description'>{movie.description}</p>

                <div className='banner-buttons'>
                     <button className="banner-btn banner-btn-play">
                        &#9654; Play
                    </button>
                    <button className="banner-btn banner-btn-info">
                        &#9432; More Info
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Banner;