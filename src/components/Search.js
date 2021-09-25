import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppProvider } from "./context";
import "./Search.css";
import "./Row.css";
import "./Search.css";

const search =
  "https://api.themoviedb.org/3/search/movie?&api_key=9ed4baf0499fcefcba6195c671dab70d&query=";

const Search = () => {
  const theData = useAppProvider();
  const [searchTerm, setSearch] = useState("");
  const [myData, setMyData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  console.log(myData);
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(false);
    fetch(search + searchTerm)
      .then((res) => res.json())
      .then((data) => setMyData(data.results));
    setSearch("");
    if (myData.length < 1) {
      setLoading(true);
    }
  };

  return (
    <div className="search">
      <div className="search__items">
        <h1 className="searchMovies">SEARCH MOVIES</h1>
        <div>
          <form className="input" onSubmit={handleClick}>
            <input
              type="text"
              className="input__search"
              onChange={(e) => setSearch(e.target.value)}
              value={searchTerm}
            />
            <button className="input__button" onClick={(e) => handleClick(e)}>
              Search
            </button>
          </form>
        </div>
        {isLoading ? (
          <h3 style={{ marginTop: "15px", color: "white" }}>
            No Matches Found
          </h3>
        ) : (
          <div className="posters">
            {myData.map((data) => {
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
                <div key={id} className="poster__one">
                  <Link to="/trailers">
                    <img
                      onClick={() => theData.setTrailer(data)}
                      className="row_posterLarge"
                      src={`${base_url}${poster_path}`}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
