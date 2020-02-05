import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../routes/ProtectedRoute";
import { Switch } from "react-router-dom";
import List from "./List";
import { fetchMovies } from "../../api/movies";

const Container = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const { data } = await fetchMovies();
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <List movies={movies} />
      <Switch>
        {/* <ProtectedRoute component={AddValue} path="/movies/add-value" exact />
      <ProtectedRoute component={NewCampaign} path="/movies/new" exact />
      <ProtectedRoute component={EditCampaign} path="/movies/:id/edit" exact /> */}
      </Switch>
    </>
  );
};

export default Container;
