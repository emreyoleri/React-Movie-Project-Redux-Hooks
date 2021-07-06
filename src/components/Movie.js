import React from "react";
import { useSelector } from "react-redux";

const Movie = (props) => {
  const movieID = props.match.url.slice(1);
  const moviesData = useSelector((state) => state.movieReducer.movies);
  const movie = moviesData.length
    ? moviesData.find((movie) => movie.imdbID === movieID)
    : null;

  const turnHomePageHandler = () => {
    props.history.push("/");
  };
  if (movie) {
    return (
      <div
        className="mx-auto text-center mt-2 rounded-3 p-3"
        style={{
          background: "#B7D7D8",
          width: "20rem",
          boxSizing: "content-box",
        }}
      >
        <h1 className="mt-2 mb-3">{movie.Title}</h1>
        <img
          src={movie.Poster}
          alt={movie.Title}
          height="350"
          className="rounded-3"
        />

        <p className="mt-2">Type : {movie.Type}</p>
        <p className="mt-2">Year : {movie.Year}</p>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <button className="btn btn-danger mt-3" onClick={turnHomePageHandler}>
          Anasayfa
        </button>
      </div>
    );
  }
};

export default Movie;
