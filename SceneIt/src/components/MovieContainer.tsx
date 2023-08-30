import React from 'react'
import MovieCard from './MovieCard'

const MovieContainer = ({movieData}) => {
  return (
    <div>
        {movieData.map((movie) => (
            <MovieCard movie={movie} />
        ))}
    </div>
  )
}

export default MovieContainer