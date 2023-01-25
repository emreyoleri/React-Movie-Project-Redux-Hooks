import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../redux/actions/cartActions";

const WishList = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  const clearWishList = () => {
    dispatch(cartActions.resetMovieList());
  };

  const removeFromWishList = (id) => {
    dispatch(cartActions.removeMovie(id));
  };

  return (
    <div>
      {!!cart.length && (
        <div>
          <h2 className="text-center p-2  border-bottom border-primary d-flex justify-content-around">
            MY LIST ({cart.length})
            <button className="btn-info btn" onClick={clearWishList}>
              Clear
            </button>
          </h2>
        </div>
      )}
      <ul className="mt-3">
        {!!cart.length &&
          cart.map((item) => {
            return (
              <li className="d-flex justify-content-between mb-2 align-items-center">
                {item?.Title}{" "}
                <button
                  onClick={() => removeFromWishList(item.imdbID)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default WishList;
