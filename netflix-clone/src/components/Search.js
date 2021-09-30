import React, { useState } from "react";
import "./Search.css";
import DisplayMovies from "./DisplayMovies";

function Search() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async () => {
    await fetch(`https://www.omdbapi.com/?s=${input}&apikey=7e1d6f70`)
      .then((res) => res.json())
      .then((result) => setMovies(result.Search));
  };

  console.log(movies);
  return (
    <div className="seacrch">
      <div className="search__box">
        <input
          type="text"
          placeholder="Search here for a Movie"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={searchMovie}>Search</button>
      </div>

      <div className="search__displayMovies">
        {movies !== "" ? (
          movies.map((movie) => <DisplayMovies movie={movie} />)
        ) : (
          <div className="backgroundImg">
            <h3>No Movies To Display</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
