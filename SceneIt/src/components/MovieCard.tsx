const MovieCard = ({movie}) => {
  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt="" />
      <p>{movie.Year}</p>
      <button>Add!</button>
    </div>
  )
}

export default MovieCard