import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Input from "./components/Input";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Input} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/:imdbID" component={Movie} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
