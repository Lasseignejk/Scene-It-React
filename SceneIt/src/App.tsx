import { useState } from 'react';
import './App.css'
import MovieContainer from './components/MovieContainer';
import SearchBar from './components/SearchBar';
import {movieData} from './movies.ts'

function App() {
  const [movies, setMovies] = useState([])
  console.log(movies)

  return (	
			<div className='flex flex-col items-center'>
				<h1 className="text-[60px] text-blue-600">Scene It</h1>
        <p>Search for movies you want to watch!</p>
        <p>Save them to your list</p>
        <SearchBar movies={movies} setMovies={setMovies}/>
        <MovieContainer movies={movies} />
        
			</div>
  );
}

export default App
