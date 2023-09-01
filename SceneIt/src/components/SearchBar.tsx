import { useState } from "react";

const SearchBar = ({movies, setMovies}) => {
  const [searchField, setSearchField] = useState("");
  const handleFetchMovies = async() => {
    const fetchedMovies = await fetch(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_APIKEY}&s=${searchField}`)
    const json = await fetchedMovies.json()
    console.log(json)
    setMovies(json.Search)
    
  }
  return (

    <div>
        <input type="text" placeholder="Search for a movie..." className="border-2" onChange={(e) => setSearchField(e.target.value)}/>
        <button onClick={() => handleFetchMovies()}>Search</button>
    </div>
  )
}

export default SearchBar