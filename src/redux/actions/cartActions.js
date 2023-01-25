const getMyMovies = () => async (dispatch) => {
  dispatch({ type: "GET_MY_MOVIES" });
};

const selectMovie = (movie) => async (dispatch) => {
  dispatch({ type: "SELECT_MOVIE", payload: movie });
};

const removeMovie = (id) => async (dispatch) => {
  dispatch({ type: "REMOVE_MOVIE", payload: id });
};

const resetMovieList = () => async (dispatch) => {
  dispatch({ type: "RESET_MOVIE_LIST" });
};
export default { getMyMovies, selectMovie, removeMovie, resetMovieList };
