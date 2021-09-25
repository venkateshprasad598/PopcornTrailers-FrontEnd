import React from "react";
import { useState, useEffect } from "react";
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { useAppProvider } from "./context";
import { Link } from "react-router-dom";

const Row = ({ titles, fetchUrl, isLargeRow }) => {
  const myData = useAppProvider();

  const [movies, setmovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  useEffect(() => {
    const url = `https://api.themoviedb.org/3${fetchUrl}`;

    const fetchData = async () => {
      const response = await fetch(url);
      const jsonArray = await response.json();
      setmovies(jsonArray.results);
    };
    fetchData();
  }, []);

  // console.log(movies);

  const handleClick = (movie) => {
    myData.setTrailer(movie);
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2 className="title">{titles}</h2>
      <div className="title__underline"></div>

      <div className="row_posters">
        {movies.map((data) => {
          const {
            backdrop_path,
            title,
            id,
            name,
            poster_path,
            overview,
            vote_average,
          } = data;
          const base_url = "https://image.tmdb.org/t/p/original/";

          return (
            <div key={id}>
              <Link to="/trailers">
                <img
                  onClick={() => handleClick(data)}
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  src={`${base_url}${isLargeRow ? poster_path : backdrop_path}`}
                />
              </Link>
            </div>
          );
        })}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};
export default Row;
