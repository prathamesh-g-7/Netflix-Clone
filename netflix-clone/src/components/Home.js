import React from "react";
import "./Home.css";
import Slider from "./Slider";
import MainImgSlider from "./MainImgSlider";
import requests from "../Request";

function Home() {
  return (
    <div className="home">
      <Slider />
      <MainImgSlider heading="Trending" fetchUrl={requests.fetchtrending} />
      <MainImgSlider
        heading="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <MainImgSlider heading="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MainImgSlider
        heading="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <MainImgSlider
        heading="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <MainImgSlider
        heading="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <MainImgSlider
        heading="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <MainImgSlider
        heading="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default Home;

// const trending = [
//   {
//     src: "/images/trending/one.jpg",
//   },
//   {
//     src: "/images/trending/two.jpg",
//   },
//   {
//     src: "/images/trending/three.jpeg",
//   },
//   {
//     src: "/images/trending/four.jpeg",
//   },
//   {
//     src: "/images/trending/five.jpg",
//   },
//   {
//     src: "/images/trending/six.jpeg",
//   },
//   {
//     src: "/images/trending/seven.jpg",
//   },
//   {
//     src: "/images/trending/eight.jpg",
//   },
// ];
// const originals = [
//   {
//     src: "/images/originals/one.jpg",
//   },
//   {
//     src: "/images/originals/two.jpeg",
//   },
//   {
//     src: "/images/originals/three.jpg",
//   },
//   {
//     src: "/images/originals/four.jpg",
//   },
//   {
//     src: "/images/originals/five.jpg",
//   },
//   {
//     src: "/images/originals/six.jpg",
//   },
//   {
//     src: "/images/originals/seven.jpeg",
//   },
//   {
//     src: "/images/originals/eight.jpg",
//   },
// ];
// const topRated = [
//   {
//     src: "/images/toprated/one.jpg",
//   },
//   {
//     src: "/images/toprated/two.jpg",
//   },
//   {
//     src: "/images/toprated/three.jpeg",
//   },
//   {
//     src: "/images/toprated/four.jpg",
//   },
//   {
//     src: "/images/toprated/five.jpg",
//   },
//   {
//     src: "/images/toprated/six.jpeg",
//   },
//   {
//     src: "/images/toprated/seven.jpg",
//   },
//   {
//     src: "/images/toprated/eight.jpg",
//   },
// ];
// const recommanded = [
//   {
//     src: "/images/trending/three.jpeg",
//   },
//   {
//     src: "/images/trending/four.jpeg",
//   },
//   {
//     src: "/images/originals/six.jpg",
//   },
//   {
//     src: "/images/originals/seven.jpeg",
//   },
//   {
//     src: "/images/originals/eight.jpg",
//   },
//   {
//     src: "/images/trending/six.jpeg",
//   },
//   {
//     src: "/images/trending/seven.jpg",
//   },
//   {
//     src: "/images/toprated/five.jpg",
//   },
// ];
