
const SearchBar = () => {
  return (
    <div>
        <input type="text" placeholder="Search for a movie..." className="border-2" />
        <button onClick={() => console.log("clicked")}>Search</button>
    </div>
  )
}

export default SearchBar