import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../redux/actions/cartActions";

const Movies = React.memo(({ history }) => {
  const [movies] = useState(useSelector((state) => state.movieReducer.movies));
  const cart = useSelector((state) => state.cartReducer.cart);
  console.log("🚀 ~ file: Movies.js:9 ~ Movies ~ cart", cart);
  const dispatch = useDispatch();
  const examineMovieCard = (id) => {
    history.push(`/${id}`);
  };

  const addMovieList = (movie) => {
    dispatch(cartActions.selectMovie(movie));
  };

  const removeFromWishList = (id) => {
    dispatch(cartActions.removeMovie(id));
  };
  if (movies.length > 0) {
    return (
      <div className="d-flex flex-wrap justify-content-between">
        {movies.map((movie, index) => {
          return (
            <div
              key={index}
              className="mb-1 me-1 p-4 mt-3"
              style={{
                background: "#F0F4F3",
                borderRadius: "10px",
                width: "15rem",
              }}
            >
              <div className="text-center">
                {movie.Title.length > 15 ? (
                  <p>{movie.Title}</p>
                ) : (
                  <h4>{movie.Title}</h4>
                )}
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  height="250"
                  width="200"
                />

                <button
                  onClick={() => addMovieList(movie)}
                  className="btn btn-success mt-3 mb-3 me-2"
                  disabled={cart.find((item) => item.imdbID === movie.imdbID)}
                >
                  {console.log(
                    cart.find((item) => item.imdbID === movie.imdbID)
                  )}
                  Select
                </button>

                <button
                  onClick={() => examineMovieCard(movie.imdbID)}
                  className="btn btn-secondary mt-3 mb-3 "
                >
                  Inspect
                </button>

                {cart.find((item) => item.imdbID === movie.imdbID) && (
                  <button
                    onClick={() => removeFromWishList(movie.imdbID)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <h2>Arattığınız film'e ulaşmadık. Lütfen farklı bir film giriniz</h2>
    );
  }
});

export default withRouter(Movies);
