import React, { useEffect, useState } from "react";
import "./Slider.css";
import Requests from "../Request";
import axios from "../axios";


function Slider() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(Requests.fetchNetflixOriginals);
      setMovie(
        data.data.results[
          Math.floor(Math.random() * data.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner__fadeBottom"></div>
    </div>
  );
}

export default Slider;
