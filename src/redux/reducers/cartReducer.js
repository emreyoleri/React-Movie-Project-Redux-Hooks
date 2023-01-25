const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  let lcart = localStorage.getItem("cart");
  switch (action.type) {
    case "GET_MY_MOVIES":
      if (lcart) {
        lcart = JSON.parse(lcart);

        return {
          ...state,
          cart: [...lcart],
        };
      } else {
        localStorage.setItem("cart", JSON.stringify([]));
        return { ...state };
      }

    case "SELECT_MOVIE":
      if (lcart) {
        lcart = JSON.parse(lcart);
        localStorage.setItem(
          "cart",
          JSON.stringify([...lcart, action.payload])
        );
      } else {
        localStorage.setItem("cart", JSON.stringify([action.payload]));
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "REMOVE_MOVIE":
      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...state.cart.filter((item) => item.imdbID !== action.payload),
        ])
      );
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.imdbID !== action.payload)],
      };

    case "RESET_MOVIE_LIST":
      localStorage.setItem("cart", JSON.stringify([]));
      return { ...initialState };

    default:
      return state;
  }
};

export default cartReducer;
