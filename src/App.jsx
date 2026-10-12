import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner";
import MovieRow from "./components/MovieRow";

import categories from './data/movies.js';

import { useState } from 'react';

function App(){
  const [myList, setMyList] = useState([]);

  function toggleMyList(movie){
    setMyList((prev) => {
      const exists = prev.some((m) => m.id === movie.id);
      if(exists){
        return prev.filter((m) => m.id !== movie.id);
      }
      return[...prev, movie];
    });
  }

  const featuredMovie = {
    title: 'Midnight Horizon',
    description:
      'When a deep-space signal reveals an ancient alien structure on the edge of the solar system, a crew of astronauts must race against time to uncover its secrets before a rival faction reaches it first.',
    backdropUrl: 'https://picsum.photos/seed/netflix-banner/1600/900',
  };

  console.log('App rendered');

  return (
    <div className="App">
      <Navbar />
      <Banner movie={featuredMovie}/>

      <div className="movie-rows">
        {myList.length > 0 && (
          <MovieRow 
            title="My List" 
            movies={myList} 
            myList={myList} 
            onToggleList={toggleMyList} 
          />
        )}
        {categories.map((category) => (
          <MovieRow 
            key={category.title} 
            title={category.title} 
            movies={category.movies} 
            myList={myList}
            onToggleList={toggleMyList}
          />
        ))}
      </div>
    </div>
  )
}

export default App;