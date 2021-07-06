import axios from "axios";

const getMovies = (keyword) => async (dispatch) => {
  await axios
    .get(`https://www.omdbapi.com/?i=tt3896198&apikey=b13dff4&s=${keyword}`)
    .then((response) => {
      let movies = response.data.Search;
      if (movies) {
        dispatch({ type: "GET_MOVİES", payload: response.data.Search });
      } else {
        dispatch({ type: "GET_MOVİES", payload: [] });
      }
    })
    .catch((err) => console.log(err));
};

export default { getMovies };
