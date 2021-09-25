import React from "react";
import { useAppProvider } from "./context";
import { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import "./Trailers.css";

const Trailer = () => {
  const [trailerUrl, settrailerUrl] = useState("");
  const myData = useAppProvider();
  const movie = myData.trailer;
  console.log(movie);
  useEffect(() => {
    movieTrailer(movie?.name || movie?.title)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        settrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
  }, [movie]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const base_url = "https://image.tmdb.org/t/p/original/";
  const {
    backdrop_path,
    title,
    id,
    name,
    poster_path,
    overview,
    vote_average,
  } = movie;

  return (
    <div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      <div className="details">
        <img src={`${base_url}${poster_path}`} className="img" />
        <div className="info">
          <h1 className="name">{name || title}</h1>
          <p className="desc">{overview}</p>
          <p className="rating">Rating : {vote_average}/10</p>
          <button className="button">Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
