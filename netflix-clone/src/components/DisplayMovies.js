import React from "react";
import "./DisplayMovies.css";

function DisplayMovies({ movie }) {
  return (
    <div className="displaymovies">
      <div className="displaymovies__card">
        <img src={movie.Poster} alt="" />
        <h3>Movie Name: {movie.Title}</h3>
        <h4>Release Year: {movie.Year}</h4>
      </div>
    </div>
  );
}

export default DisplayMovies;
