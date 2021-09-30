import React, { useEffect, useState } from "react";
import "./MainImgSlider.css";
import axios from "../axios";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'


const baseURL = "https://image.tmdb.org/t/p/original";

function MainImgSlider({ heading, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(fetchUrl);
      setMovies(data.data.results);
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: "100%",
    playerVars: {
    },
    autoplay: 1
  }

  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then(url => {
          const urlParams = new URLSearchParams( new URL(url).search);
          setTrailerUrl(urlParams.get("v"))
        })
        .catch(err => console.log("err is-->", err))
    }
  }


  return (
    <div className="extra">
      <h3>{heading}</h3>
      <div className="mainimgslider">
        {movies &&
          movies.map((movie) => (
            <img
              key={movie.id}
              className="img"
              src={`${baseURL}${movie.poster_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
      </div>
            {
              trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>
            }
    </div>
  );
}

export default MainImgSlider;
