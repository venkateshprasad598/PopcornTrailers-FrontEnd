import React from "react";
import { useState, useEffect } from "react";
import requests from "../request";
import "./Banner.css";

const Banner = () => {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3${requests.fetchActionMovies}`;

    const fetchData = async () => {
      const response = await fetch(url);
      const jsonresponse = await response.json();
      const num = Math.floor(Math.random() * jsonresponse.results.length - 1);
      setmovie(jsonresponse.results[num]);
      //   console.log(jsonresponse.results[num]);
    };
    fetchData();
  }, [requests]);

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_components">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">PLay</button>
          <button className="banner_button">My List</button>
        </div>

        <div className="banner_description">{movie?.overview}</div>
      </div>

      <div className="banner_fadeBottom"></div>
    </header>
  );
};

export default Banner;
