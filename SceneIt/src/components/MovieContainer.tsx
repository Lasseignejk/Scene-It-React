import MovieCard from './MovieCard'

const MovieContainer = ({movies}) => {
  return (
    <div>
        {movies?.map((movie) => (
            <MovieCard movie={movie} />
        ))}
    </div>
  )
}

export default MovieContainer