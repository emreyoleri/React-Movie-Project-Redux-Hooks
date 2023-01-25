import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Movies from "./Movies";
import allActions from "../redux/actions";
import WishList from "./WishList";
import cartActions from "../redux/actions/cartActions";
const Input = () => {
  const [inpValue, setInpValue] = useState("");
  const [dataCheck, setDataCheck] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    setDataCheck(false);
    if (inpValue) {
      await dispatch(allActions.movieActions.getMovies(inpValue));
      setInpValue("");
      setDataCheck(true);
    }
  };

  useEffect(() => {
    dispatch(cartActions.getMyMovies());
  }, []);

  return (
    <div className="container-fluid">
      <div className="row p-3">
        <div className="col-md-8 mx-auto">
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="input-group mb-3 d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Search a movie..."
                value={inpValue}
                onChange={(e) => setInpValue(e.target.value)}
                required
              />

              <button className="btn btn-primary   me-2" type="submit">
                Ara
              </button>
            </div>
          </form>
        </div>

        <div className="row p-3">
          <div className="col-md-8 mx-auto">
            <WishList />
          </div>
        </div>
      </div>

      {dataCheck ? <Movies /> : null}
    </div>
  );
};

export default Input;
